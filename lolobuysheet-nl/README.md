# lolobuysheet.nl — Astro preview

LoloBuy-only frontend. Astro 7.4.1 / static generation. No database or administration application.

## Run

Requires Node >=22.22 and Python 3 (only for refreshing public source records).

```sh
npm ci
npm run dev
npm run build
```

`npm run sync:catalog` refreshes a bounded preview selection from six cnfanssp.com categories, then validates original Weidian IDs against each detail page. It refuses to synthesize sample products. The resulting JSON is a build artifact source snapshot, not an independently maintained product database. Product image URLs remain on cnfanssp.com.

The preview contains 48 source records, 16 per page, six categories, English/Dutch routes, four guides, FAQs and real LoloBuy product redirects. Text search and sorting currently operate on this source snapshot. The full-source search link opens cnfanssp.com. Image search and warehouse QC are explicitly unavailable until the upstream services are verified.

Prices preserve source CNY values. No unverified USD exchange rate is used. A CMS `recordId` is deliberately distinct from a Weidian `productId`.

## Deploy later

Production target: https://lolobuysheet.nl . GitHub folder: `lolobuysheet-nl/`. Build command: `npm ci && npm run build`; output directory: `dist`. Keep this folder isolated from other repository sites.

The preview has `noindex,nofollow` and disallows crawling. Before production: confirm authoritative upstream, connect full dynamic search/QC/image search, decide refresh vs SSR, set production `site`, add sitemap, review indexability and translations, and then bind Cloudflare. Do not reuse the temporary preview Site identity for a new domain deployment without an explicit hosting decision.

See PROJECT_MEMORY.md and docs/KEYWORDS_AND_DECISIONS.md for continuity.
