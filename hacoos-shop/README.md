# Hacoos Shop

Independent multilingual product-research and Hacoo guides at https://hacoos.shop/.

## Production

- Repository: `hehaize88-code/https-cnfanssp.com`
- Existing production branch: `codex/hacoos-shop`
- Project directory: `hacoos-shop`
- Build: `npm run build` (Next static export, then initial HTML language correction)
- Publish directory: `out`
- GitHub's existing Pages integration publishes pushes to the production branch. Confirm the `Cloudflare Pages: hacoos-shop` check and live site before reporting success. No manual hosting-account operation is needed.

## Content

`content/articles/{en,es,fr,de,it}.json` contain the same 15 independent articles in all five languages. `app/article-data.ts` is the explicit route registry. Add a complete translated record in every language before adding a new slug. A missing translation is a build/validation error, never an English fallback.

Keep canonical paths stable. Translated routes use the same slug under the language directory. Every article has self-referencing canonical metadata, reciprocal language alternates, x-default, Article/Breadcrumb JSON-LD and a same-article language selector. Sitemap entries use actual content dates.

The three new topics are broken product links, tracking that stops updating, and parcels marked delivered but not received. Each has a distinct task and links to the relevant broader guides.

Official source facts reviewed 10 October 2026:

- https://web.hacoo.app/en-US/pages/shipping-info
- https://act.hacoo.app/returnrefundpolicy
- https://www.hacoo.app/en-US/

Receiving-time estimates already include processing. General shipping and dedicated return policy pages differ about physical returns: follow the actual order instructions. Review time and payment settlement are separate. Never guarantee delivery, refunds, product authenticity, indexing or search growth.

Product cards open a separate independent catalogue at `https://cnfanshp.com`. Hacoo policies do not automatically apply to that catalogue. Six detail-page IDs and matching main images were individually verified on 10 October 2026. Fixed price snapshots are omitted; visitors check the live price. Reverify identity and image when replacing a link, rather than changing only the hostname.

## Validation

```sh
npm ci
npm test
```

This builds and checks all 75 article pages, five article indexes, content/translation parity, duplicate paragraphs, local links, initial HTML languages, canonical/hreflang metadata, structured data and 115 sitemap URLs. Event tests verify correct catalog attribution and prevent duplicate binding or transmitting typed search text.

`public/analytics-events.js` sends `product_click`, `catalogue_click`, `search_submit`, `article_click` and `language_change` to the existing GA4 tag. Product IDs and page language are attached; raw search text and query strings are not sent. These intent events are not purchases and are not automatically marked as key events.
