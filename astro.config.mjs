import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Tailwind 3 runs via PostCSS (postcss.config.cjs); the @astrojs/tailwind
// integration is deprecated and doesn't support Astro 6+.
export default defineConfig({
  site: 'https://karlmcclelland.com',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
