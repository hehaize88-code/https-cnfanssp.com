import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://lolobuy-nl-preview.hehaize88.chatgpt.site',
  output: 'static',
  server: { host: true, port: 4173 },
  trailingSlash: 'always',
  vite: {server: {allowedHosts: ['terminal.local']}}
});
