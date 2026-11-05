// Turn an edited equirectangular panorama into a self-contained viewer
// folder, ready to upload to the server (like the Pano2VR tours).
//
//   node scripts/make-pano.mjs <pano.jpg> <slug> "<Title>" [startYaw] [startPitch]
//
// Output: pano-uploads/360/<slug>/  (index.html + six cube faces)
//         pano-uploads/360/_viewer/ (shared Pannellum viewer, MIT)
// Upload the contents of pano-uploads/360/ into httpdocs/360/ in Plesk, then set
//   walkthroughUrl: https://karlmcclelland.com/360/<slug>/
// in the work entry.
//
// Six 2048px cube faces rather than one big image: sharp on desktop, and
// works on phones whose graphics chips can't take an 8192px texture.
// Nothing loads from third parties (privacy page relies on this).
import sharp from 'sharp';
import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const [src, slug, title = 'Panorama', yawArg = '0', pitchArg = '0'] = process.argv.slice(2);
if (!src || !slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node scripts/make-pano.mjs <pano.jpg> <slug> "<Title>" [startYaw] [startPitch]\n(slug: lowercase letters, numbers and hyphens)');
  process.exit(1);
}

const FACE = 2048;
const root = path.dirname(fileURLToPath(import.meta.url));
const outRoot = path.join(root, '..', 'pano-uploads', '360');
const outDir = path.join(outRoot, slug);
const viewerDir = path.join(outRoot, '_viewer');

const escapeHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// Render one 90° rectilinear view (a cube face) from the equirectangular image.
function renderFace(data, sw, sh, yawDeg, pitchDeg, size) {
  const out = Buffer.alloc(size * size * 3);
  const yaw = (yawDeg * Math.PI) / 180, pitch = (pitchDeg * Math.PI) / 180;
  const f = size / 2; // tan(45°) = 1
  const cp = Math.cos(pitch), sp = Math.sin(pitch), cy = Math.cos(yaw), sy = Math.sin(yaw);
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      const x = i - size / 2 + 0.5, y = -(j - size / 2 + 0.5), z = f;
      const y1 = y * cp + z * sp, z1 = -y * sp + z * cp;
      const x2 = x * cy + z1 * sy, z2 = -x * sy + z1 * cy;
      const lon = Math.atan2(x2, z2), lat = Math.atan2(y1, Math.hypot(x2, z2));
      const u = (lon / (2 * Math.PI) + 0.5) * sw - 0.5;
      const v = (0.5 - lat / Math.PI) * sh - 0.5;
      const u0 = Math.floor(u), fu = u - u0;
      const v0 = Math.max(0, Math.min(sh - 2, Math.floor(v))), fv = Math.min(1, Math.max(0, v - v0));
      const ua = ((u0 % sw) + sw) % sw, ub = (ua + 1) % sw;
      for (let c = 0; c < 3; c++) {
        const p = (r, q) => data[(r * sw + q) * 3 + c];
        out[(j * size + i) * 3 + c] =
          (p(v0, ua) * (1 - fu) + p(v0, ub) * fu) * (1 - fv) + (p(v0 + 1, ua) * (1 - fu) + p(v0 + 1, ub) * fu) * fv;
      }
    }
  }
  return out;
}

const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
if (Math.abs(info.width / info.height - 2) > 0.02) {
  console.error(`Not a 2:1 equirectangular panorama (${info.width}x${info.height}).`);
  process.exit(1);
}
await mkdir(outDir, { recursive: true });
await mkdir(viewerDir, { recursive: true });

// Pannellum cube order: front, right, back, left, up, down.
const faces = [['f', 0, 0], ['r', 90, 0], ['b', 180, 0], ['l', -90, 0], ['u', 0, 90], ['d', 0, -90]];
for (const [name, yaw, pitch] of faces) {
  const buf = renderFace(data, info.width, info.height, yaw, pitch, FACE);
  await sharp(buf, { raw: { width: FACE, height: FACE, channels: 3 } })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, `${name}.jpg`));
  process.stdout.write(`${name} `);
}

for (const file of ['pannellum.js', 'pannellum.css', 'LICENSE']) {
  await copyFile(path.join(root, 'vendor', 'pannellum', file), path.join(viewerDir, file));
}

const config = {
  type: 'cubemap',
  cubeMap: faces.map(([name]) => `${name}.jpg`),
  autoLoad: true,
  showFullscreenCtrl: true,
  showZoomCtrl: true,
  compass: false,
  yaw: Number(yawArg),
  pitch: Number(pitchArg),
  hfov: 100,
  minHfov: 40,
  maxHfov: 110,
  autoRotate: -1.5,
  autoRotateInactivityDelay: 4000,
};

const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${escapeHtml(title)} | 360° panorama</title>
<link rel="stylesheet" href="../_viewer/pannellum.css">
<style>
  html, body, #pano { margin: 0; width: 100%; height: 100%; background: #25241F; }
  .pnlm-load-box { background: rgba(37,36,31,.85); border-radius: 0; }
</style>
</head>
<body>
<div id="pano" role="img" aria-label="${escapeHtml(title)}: interactive 360° panorama. Drag to look around."></div>
<script src="../_viewer/pannellum.js"></script>
<script>window.viewer = pannellum.viewer('pano', ${JSON.stringify(config)});</script>
</body>
</html>
`;
await writeFile(path.join(outDir, 'index.html'), html);

console.log(`\nDone: ${path.relative(process.cwd(), outDir)}`);
console.log(`Upload pano-uploads/360/ to httpdocs/360/, then use: https://karlmcclelland.com/360/${slug}/`);
