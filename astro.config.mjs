// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import rehypeExternalLinks from 'rehype-external-links';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  site: 'https://franra18.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Blog-Personal/' : '/',
  integrations: [preact()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },

});
