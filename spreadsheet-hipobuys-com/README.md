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

## Languages and editorial updates

English retains the original URLs. German, Spanish, French and Italian use
`/de`, `/es`, `/fr` and `/it`. Each of the 14 articles has complete server-rendered
copy in all five languages; there is no browser translation dependency.
`app/content/articles.json` stores parallel translations in EN/DE/ES/FR/IT order.
Keep every field and section present in all five entries when editing. Dates
describe the actual editorial publication or review, not product availability.

The catch-all route validates supported pages and keeps unknown URLs as 404s.
Every page declares a self canonical and reciprocal language alternatives.
The sitemap includes all 105 canonical pages. The homepage displays the first
four article records, currently Germany, France, ordering and sizing guides.

The shipping worksheet accepts user-supplied quotes in USD. Blank amounts stay
unknown; the tool never fetches live rates or computes import taxes. Existing
GA4 events are retained, with localized article clicks and `shipping_estimate`
added. No analytics-account configuration is changed by this release.

`npm test` builds the production Pages worker and verifies all 105 page responses,
70 complete article versions, language links, structured data, sitemap, 404s,
canonical redirects, caching isolation and weight-calculation boundaries.
Publish through the existing GitHub integration; no separate account connection
or hosting reconfiguration is needed.
