# lolobuysheet.nl

LoloBuy discovery site. Astro 7.4.1 static pages plus small Cloudflare Pages Functions that read the existing public source. No database or administration system.

## Existing deployment

- GitHub: `hehaize88-code/https-cnfanssp.com`, directory `lolobuysheet-nl/`
- Cloudflare Pages project: `lolobuy-nl-preview`
- Production: https://lolobuysheet.nl/
- Historical preview: https://lolobuy-nl-preview.pages.dev/
- Build: `npm run build`; output `dist`; Node 24.19.0
- `PUBLIC_SITE_URL=https://lolobuysheet.nl`
- Owner authorized production launch on2026-10-20. Canonical/hreflang/sitemap use lolobuysheet.nl. Pages preview hosts retain an X-Robots-Tag noindex header.
- Sitemap: /sitemap.xml contains384canonical editorial/catalogue URLs across24languages. Product shells, unavailable image search and duplicate legacy guides are excluded; product/image-search pages remain noindex.

## Development

```sh
npm ci
npm run sync:catalog
npm run build
npm run dev
```

`npm run dev` previews the Astro pages. Product and live catalogue Functions run on Cloudflare Pages; for a complete local runtime use `npx wrangler pages dev dist` after building. Managed ChatGPT QA uses its preview supervisor.

## Source contract

Only https://www.cnfanssp.com supplies product records and image URLs. `scripts/sync-full-catalog.mjs` follows every actual pagination link in all 11 categories AND All Products, deduplicates CMS record IDs, and writes a complete dated build cache under `public/data/`. This is a generated source cache, not a manually maintained database. Never substitute sample products or another data domain.

The client initially loads that complete cache, then requests the 11 source categories through `/api/catalog`. A failed category refresh leaves the complete cache visible; partial data must not erase products. Cloudflare edge caching lasts 15 minutes. The current audited catalogue is 6,572 unique records. Category pages and All Products differ slightly; their union preserves the source's own listings.

`/api/product?id={CMS record ID}` reads the current source detail page, extracts the original Weidian item ID, and constructs the exact LoloBuy link. CMS IDs must never be used as seller item IDs. Seller photos are not QC photos. No public image-search/QC feed has been verified; the interface states that limitation.

All filters/search/price sorting run against the complete source-derived data already loaded by the browser. Spreadsheet pagination is 20 items; homepage pagination is 8. The raw source item price is labeled CNY and excludes shipping and service fees.

## Content and languages

24 full locales under `src/data/locales/`: en/de/es/fr/it/pl/pt/ro/sv/nl/da/fi/el/cs/hu/bg/sk/hr/sl/lt/lv/et/ga/mt. Each has 24 sourced FAQ answers and 10 full original articles. English is `/`, all other locales have their code prefix. Language switches preserve path, query and hash. Native product titles are preserved from the source.

`/articles/` is a separate top-navigation entry. Existing guide and product URLs continue to work. Mobile article chapters collapse without dropping their full HTML text. Article, FAQ and language parity checks block incomplete builds. `docs/` holds the official evidence, keyword research and catalogue audit.

## Verification

```sh
node scripts/check-source.mjs
node scripts/validate-content.mjs
npm run build
npx wrangler pages functions build functions --outdir=/tmp/lolo-functions-build
```

`public/_routes.json` invokes Functions only on `/api/*`; editorial HTML and other assets remain static. Do not edit other domain folders or recreate the existing Pages project.
