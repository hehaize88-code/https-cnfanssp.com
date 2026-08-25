# Spreadsheet Hipobuys

Independent Hipobuy spreadsheet, QC and shipping guide.

## Project structure

- `app/` — pages, articles, translations and site data
- `public/` — brand and social-preview assets
- `worker/` — production worker entry point
- `tests/` — rendered HTML checks

## Commands

- `npm install`
- `npm run build`
- `npm test`

For Cloudflare Pages Git deployments, use `npm run build` with `dist/client`
as the output directory. The build prepares an advanced-mode `_worker.js`
inside that directory so the existing server-rendered routes keep working.

The public site keeps all product, category and search actions pointed only at the owner's main catalog. Research sources are shown as non-clickable notes so the guide does not send visitors to third-party websites.
