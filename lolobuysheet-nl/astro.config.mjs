import { defineConfig } from 'astro/config';
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://lolobuysheet.nl',
  output: 'static',
  server: { host: true, port: 4173 },
  trailingSlash: 'always',
  vite: {server: {allowedHosts: ['terminal.local']}}
});
