# Content needed to replace the live site

Everything below drops into the existing structure — no code changes needed.
Each case study is one Markdown file in `src/content/work/` (copy `suitor-brothers.md`).

## Must have before launch

- [x] **The Cottonmount** — published and featured on the homepage. Still wanted: a one-line
      result for `outcome:` in `src/content/work/cottonmount.md`, and a client quote if there is one.
- [ ] **Portrait(s) of Karl** — documentary, on location. Used on the homepage and /studio.
      Idea (Karl): short clip of the drone coming into view, Karl glancing sideways at it, drone leaving.
- [x] **Privacy and cookie pages** — `/privacy/` and `/cookies/`, adapted from 360school. Karl to read through.
      They stay true only while the site sets no cookies and loads nothing third-party before a click.
- [x] **Quotes** — Hillsborough Tile (James), Signature Works, Ballyclare, Antrim Grammar now on /clients.
- [x] **Separate Formspree form for updates sign-ups** — `mkjjyebb` (to me@karlmcclelland.com).
- [ ] **Contact form destination** — `myzknydd` is believed to deliver to karl@360spaces.co.uk. Karl to decide
      whether enquiries should go to me@karlmcclelland.com (change in the Formspree dashboard, not code).
- **Image source:** the edited masters for every /MDS pano are in
  `D:\VIRTUAL TOUR ROOM\CURRENT TOURS\MDS_Portfolio_P2VR\panos\<category>\`. Cut card and hero stills from
  these, not older copies. Original stills for each project are in that project's own folder.
- [ ] **Lyric Theatre poster still** (colour) — entry drafted in `src/content/work/lyric-theatre.md`.
      Karl has the original walkthrough photos for Lyric and most projects (B&Q, Apperley's, King's Coronation
      Gardens, Airbnbs, schools, Toyota): one strong still per case study is enough to start.
- [ ] **A poster still for every walkthrough** (`heroImage`) — without one the embed shows a plain dark panel.
- [ ] **3–4 more case studies across different sectors**, prioritised by who you're emailing:
      Forge Female Fitness, Limavady High School, Silverstream PS, plus at least one
      hospitality and one office/industrial example.
- [ ] **Review the drafted copy** — /studio, homepage "Why it matters", and the three
      next-step lines (`src/data/next-steps.ts`).

## Candidates from your list (sector in brackets)

- Restaurants, Bars & Hotels: Deanes, EDO, Indian restaurant, Seatons of Sailortown, Bullitt Hotel, Fitzwilliam penthouse
- Retail & Showrooms: Butchers, Mode German Kitchens, Hilti showroom, Starplan
- Automotive: John Mulholland, Toyota, Aston Martin
- Offices, Industry & Trade: Glandore, B&Q (photography, no live tour), Titanic Studios, ALMAC
- Venues, Leisure & Sport: Lyric Theatre, SSE Arena, W5, Forge Female Fitness, FJR, Drumbo dog track, Crusaders FC
- Education & Public Sector: Limavady High School, Silverstream PS, courtroom (narration hotspots)
- Gardens, Estates & Weddings: Drenagh, King's Coronation Gardens, Botanic Gardens
- Residential & Property: Colliers

Sectors with no published case study are hidden automatically, so add what's ready and launch.

## Single panoramas (self-hosted)

Edited panos are hosted on our own server instead of walkinto.in:

1. `node scripts/make-pano.mjs "<edited pano.jpg>" <slug> "<Title>" [startYaw] [startPitch]`
   (cut from `MDS_Portfolio_P2VR\panos\<category>\`).
2. In Plesk, upload the contents of `pano-uploads/360/` into `httpdocs/360/` (creates `/360/_viewer/`
   once and `/360/<slug>/` per pano). `/360/` was free on the server (checked 2026-11-05).
3. Set `walkthroughUrl: https://karlmcclelland.com/360/<slug>/` in the work entry.

- [ ] **Upload `/360/wine-retailer/` and `/360/_viewer/`** — the wine retailer entry already points there,
      so its viewer shows "not found" until this is uploaded.

## Walkthrough URLs

`walkthroughUrl` accepts any embeddable link: walkinto.in `easyembedview` links, a Pano2VR export
(upload the folder to the server, e.g. `/tours/cottonmount/`), or a Google Maps embed URL.

## Launch checklist (Plesk)

**Not before every item in `LIVE_SITE_AUDIT.md` is resolved.**

The old site is self-contained. Checked 2026-10-01: it uses only the files below, and none of
the tour folders (`/MDS`, `/hospitality`, `/cottonmount`, `/lyric`, `/victimsupportni`, `/gym`)
load anything from them.

**Old site files (the only things to remove/replace):**
- `index.html`
- `vite.svg`
- `robots.txt`
- `assets/index-BWmQ6EnJ.js`, `assets/index-DITT6cn1.css`
- `assets/ea-logo-KPFL1us2.svg`, `assets/goh-logo-BfCcUmXE.svg`, `assets/ni-screen-logo-U4R2VEOm.png`, `assets/sse-logo-h618ETHY.svg`
- `logos/googlelogos/streetview-logo.svg` (harmless to leave)

**Steps:**
1. In Plesk File Manager, check `httpdocs/assets/` holds **only** the files listed above. If it holds anything else, stop and check what it is.
2. **Back up** the old files: select them, download as a zip, and keep it. Rolling back means uploading these again.
3. `npm run build` here.
4. Upload the **contents** of `dist/` into `httpdocs`: `index.html`, `404.html`, `favicon.svg`, `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml`, and **every folder in `dist/`**: `_astro/`, `logos/`, `work/`, `clients/`, `studio/`, `contact/`, plus the old-WordPress redirect folders (`online-blindness/`, `connect/`, `portfolio/`, `portfolio_group/`, `about_old/` etc.; see `LIVE_SITE_AUDIT.md`). Checked 2026-11-05: none clash with existing folders on the server.
5. Delete the old `assets/` folder and `vite.svg`.
6. **Don't touch any other folder**, and don't upload or overwrite any `.htaccess`.
7. Check: homepage, a case study, the Cottonmount tour, `/MDS/`, and the contact form (send a test).
8. Submit `https://karlmcclelland.com/sitemap-index.xml` in Google Search Console.
