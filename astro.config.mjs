import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.beyond-tutors.com',
  base: "",
  integrations: [
    sitemap(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    })
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  content: {
    collections: '/src/content/config.ts', // Point to your collection schema config
  },
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