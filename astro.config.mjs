// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  }
});