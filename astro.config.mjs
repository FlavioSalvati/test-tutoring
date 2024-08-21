import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { viteStaticCopy } from 'vite-plugin-static-copy';
//test
export default defineConfig({
  site: 'https://test.beyond-tutors.com',
  base: "/",
  integrations: [
    mdx(), // Enables MDX support
  ],
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/*', // Copy assets as before
            dest: 'src/assets' // Move assets to 'assets/astro' directory
          }
        ]
      })
    ]
  },
});