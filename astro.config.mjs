import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Tailwind 3 runs via PostCSS (postcss.config.cjs); the @astrojs/tailwind
// integration is deprecated and doesn't support Astro 6+.
export default defineConfig({
  site: 'https://karlmcclelland.com',
  output: 'static',
  // Pages from the old WordPress site (live until ~2025). Some are still in
  // Google and may be in old emails or listings, so send them somewhere useful.
  // Static output writes a small instant-redirect page at each address, so
  // this works on Plesk with no server config. Theme demo pages are left to 404.
  redirects: {
    '/online-blindness': '/clients/',
    '/connect': '/contact/',
    '/belfast-business-offer': '/contact/',
    '/about_old': '/studio/',
    '/author/me': '/studio/',
    '/main-areas-of-expertise': '/studio/',
    '/portfolio/edo-restaurant': '/work/',
    '/portfolio/lyric-theatre': '/work/',
    '/portfolio_group/custom-tours': '/work/',
    '/portfolio_group/google-street-view': '/work/',
    '/portfolio_group/photography-aerial': '/work/',
    '/privacy-policy': '/privacy/',
    '/cookie-policy-eu': '/cookies/',
    '/terms-conditions': '/privacy/',
    '/ideas': '/',
    '/all-too-real': '/',
    '/social-media': '/',
    '/boost-your-business-discover-the-jaw-dropping-advantages-of-virtual-tours': '/',
  },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
