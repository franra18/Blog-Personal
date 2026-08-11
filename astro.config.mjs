// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import rehypeExternalLinks from 'rehype-external-links';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  site: "https://my-astro-site.com", // TODO: Add your site URL in the quotes
  integrations: [preact()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },

});
