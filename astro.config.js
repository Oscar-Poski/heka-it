import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://d1exhn3bk6gq22.cloudfront.net',
  base: '/',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ]
});