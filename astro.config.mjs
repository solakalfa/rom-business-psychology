// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: '8h33lrqb',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2025-02-03',
      studioBasePath: '/studio',
    }),
    react(),
  ],

  output: 'server',
  adapter: vercel(),
});