// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pogrebnomitrovic.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // keep the Webflow markup byte-for-byte (inline spacing matters)
  compressHTML: false,
  devToolbar: { enabled: false },
});
