// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Eigen domein via GitHub Pages. Het CNAME-bestand staat in public/CNAME.
  // base blijft '/' omdat de site op de root van het domein draait (geen repo-subpad).
  site: 'https://ow.curaict.nl',
});
