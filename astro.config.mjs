import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// This repo is `cancerbits.github.io`, a GitHub *user/org* Pages site, so it
// is served from the domain root (no `base` path needed, unlike project
// pages such as `<user>.github.io/<repo>`).
export default defineConfig({
  site: 'https://cancerbits.github.io',
  outDir: './dist',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
