# Hacoos.org

Production source for [hacoos.org](https://hacoos.org), an independent multilingual Hacoo product research and quality-check library.

## What is included

- English, German, French, Spanish, Italian, and Portuguese editions
- Product index, finds, guides, QC, shipping, FAQ, and long-form SEO articles
- Self-referencing canonicals and reciprocal `hreflang` alternates
- Dynamic `/robots.txt` and `/sitemap.xml` endpoints
- Responsive desktop and compact three-to-five-screen mobile layouts
- Product links that open the verified product detail pages on the current destination catalogue

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm test
npm run lint
npm run check:cloudflare
```

## Cloudflare deployment

The application builds to a Cloudflare Worker plus static assets.

```bash
npm ci
npm run release:cloudflare
```

For Cloudflare Builds in this monorepo:

- Root directory: `hacoos-org`
- Build command: `npm run build`
- Deploy command: `npm run deploy:cloudflare`
- Production branch: `main`

The checked-in `wrangler.jsonc` deploys the Worker as `hacoos-org` and attaches the `hacoos.org` and `www.hacoos.org` custom domains.

## 2026-10-09 SEO release

- 15 articles in each of six languages (90 article URLs; 138 sitemap URLs total).
- Three new complete guides: link access, order tracking, returns/refunds.
- Existing spreadsheet, sizing and shipping guides retain their URLs and text, with practical comparisons added in all six languages.
- Product cards were checked against current destination pages; obsolete IDs and mismatched images were replaced. Links use the destination's www host because its bare-host client redirect loses the path.
- Server HTML language follows the request path; client navigation also updates the language.
- HTML edge caching excludes framework payloads, query variants and authenticated requests.
- GA4 stream: `G-FNVB24S4VG`. Custom events: `product_click`, `category_click`, `catalog_search`. Search text is not copied into custom events. Page views use the Google tag and the property's history-change enhanced measurement setting; do not add duplicate manual page-view events.
- GA4 event delivery and key-event configuration require access to the property. The available account could see the home overview but lacked access to detailed reports during the audit.

Release through the existing GitHub `main` build integration. Validation: `vinext build`, then `node --test tests/*.test.mjs`. The SEO release test renders every sitemap route and checks language, canonical, alternates, internal links, articles and cache separation. Historical Search Console 4XX examples require post-release monitoring; this change does not establish their original cause or guarantee indexing.
