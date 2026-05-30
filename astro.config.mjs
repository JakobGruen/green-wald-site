// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// EN is the default locale and lives at the apex (/), DE lives under /de/.
// Legal pages (Impressum, Datenschutz) are German-authoritative but mirrored in both trees.
export default defineConfig({
  site: 'https://green-wald.de',
  trailingSlash: 'ignore',
  // format:'directory' for clean URLs; inlineStylesheets:'never' so all CSS is
  // emitted as external /_astro/*.css — lets the CSP drop 'unsafe-inline' from
  // style-src for a fully strict policy (no inline <style> blocks in the HTML).
  build: { format: 'directory', inlineStylesheets: 'never' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de' },
      },
    }),
  ],
});
