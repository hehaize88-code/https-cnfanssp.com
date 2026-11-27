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

## Catalog and image search

The product search, categories, price and popularity sorts and galleries use a searchable snapshot of the public cnfanssp.com product pages. The image index uses the bytes of each source photo. A browser upload is processed locally. Search sends a visual fingerprint and file digest to the site's own API. Product links use the Weidian item ID supplied by the source. The header logo links to the official HipoBuy registration page.

To regenerate the index, run `python scripts/sync_catalog.py --cache /tmp/hipobuy-catalog --out public/catalog-data` with Python 3 and Pillow. Use a fresh cache directory for a fresh source crawl, or reuse the directory to resume an interrupted crawl. Validate with `npm test` before publishing. Official buying links depend on the source publishing a marketplace ID. Only photos marked as QC by the source are identified as QC.

## Languages and prices

English uses unprefixed URLs. The language selector follows the 24 locales in `app/languages.ts`. Each page has its own canonical URL and reciprocal language alternatives. Product prices use source CNY amounts and the exchange table served by `/api/exchange-rates`. When the live exchange service is unavailable the page uses the dated build-time table. The separate shipping worksheet accepts user-entered quotes.

## November 6, 2026 release

Added the weight estimator, shipping-cost comparison and rehearsal-parcel guides
in all five locales. Expanded the shipping-cost, Germany, France, QC and
spreadsheet-use guides without changing their URLs. Home, spreadsheet and shipping
entry points now connect these topics. The weight tool uses user-entered grams,
quantities and explicit packaging; references are never sent to analytics.
`weight_estimate` joins the existing catalog, article and shipping events.
No GA4 account settings, catalog data source, scheduled publishing, other site
folders or hosting configuration are changed. Product preview labels do not claim
a fresh availability check. New English guides contain 1,200–1,800 words with
complete parallel translations.
