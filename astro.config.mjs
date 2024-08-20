import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
//test
export default defineConfig({
  site: 'https://test.beyond-tutors.com',
  build: {
    assetsDir: 'assets', // Move assets to the assets directory
  },
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