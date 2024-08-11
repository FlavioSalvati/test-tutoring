import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  site: 'https://test.beyond-tutors.com',
  base: '/', // Ensure base is set to the root
  build: {
    outDir: './docs', // Output directory for the built site
    assetsDir: 'assets/astro', // Move assets to the assets directory
  },
  integrations: [
    mdx(), // Enables MDX support
  ],
  vite: {
    plugins: [
      {
        name: 'create-files',
        writeBundle() {
          // Derive __dirname in ES module syntax
          const __dirname = dirname(fileURLToPath(import.meta.url));
          const outDir = resolve(__dirname, './docs');
          
          // Create CNAME file
          const cnamePath = resolve(outDir, 'CNAME');
          const cnameContent = 'test.beyond-tutors.com';
          writeFileSync(cnamePath, cnameContent);

          // Create .nojekyll file
          const nojekyllPath = resolve(outDir, '.nojekyll');
          writeFileSync(nojekyllPath, '');
        }
      },
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/**/*', // Copy assets as before
            dest: 'assets/astro' // Move assets to 'assets/astro' directory
          }
        ]
      })
    ]
  },
});