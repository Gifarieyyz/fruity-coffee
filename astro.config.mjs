// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fruity-coffee.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [react(), keystatic(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});