# joyagoos.shop

Independent product-link research and buyer guides for `joyagoos.shop`, with complete English, German, Spanish, French and Italian routes.

## Build and verify

```bash
npm ci
npm test
```

`npm test` builds the static export in `out/`, fixes document language attributes, and checks canonical/indexing policy, all new localized article bodies, reciprocal language links, article schema, navigation and local links.

Production changes are published through `main` in `hehaize88-code/https-cnfanssp.com`, scoped to `joyagoos-shop/`, using the existing connected deployment. Do not change the hosting connection or other sites for this project. Confirm the live domain after a GitHub publication; a successful commit alone is not proof that a deployment is live.

## Editorial and indexing policy

The `.shop` site focuses on product discovery, spreadsheets, source links and variant decisions. Five older policy/QC/shipping articles duplicated on `joyagoos.org` remain available as reference, with `noindex, follow`, canonical URLs pointing to `.org`, and exclusion from this sitemap. All `.shop`-owned pages remain indexable and self-canonical. The production export currently contains 175 indexable localized pages and 25 archive pages.

The October 2026 release adds four distinct product-research guides in all five languages:

- `joyagoo-product-link-not-working`
- `joyagoo-size-chart-measurements-guide`
- `joyagoo-qc-photos-listing-comparison-guide`
- `joyagoo-spreadsheet-shipping-budget-checklist`

Localized bodies live in `app/content/research-{lang}.json`. Maintain section and route parity when editing them. The shipping worksheet compares weights under a supplied divisor; it does not quote shipping rates. Its defaults and article arithmetic are illustrative.

Ten existing article search titles have concise, localized wording that describes the actual content. Article discovery now uses topic groups, four homepage article cards, per-article contents and contextual links. The existing live-price and variant guides have additional practical checks in every language. Buying, spreadsheet, QC and shipping hub steps have individual descriptions.

## Analytics

Preserve the existing GA4 measurement ID and `cnfanssp.com` destination links. Article and outbound click events include `page_language`, `source_page` and `placement`; actual article clicks also include `article_slug` and `destination_language`. Article-index navigation has its own `article_index_click` event, and in-page TOC clicks are excluded from article-entry counts. The optional weight tool emits `shipping_weight_calculate` after a valid explicit calculation. Reporting on these parameters may require corresponding custom dimensions in GA4.
