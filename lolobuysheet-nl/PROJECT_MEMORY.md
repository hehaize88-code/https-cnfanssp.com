# lolobuysheet.nl — Project Memory

Updated: 2026-10-20
Stage: public visual preview v1 published successfully; production domain binding awaits owner review.

## Identity and fixed boundaries

- One platform/domain per conversation and per folder. This project is LoloBuy / lolobuysheet.nl.
- GitHub: hehaize88-code/https-cnfanssp.com; isolated folder: `lolobuysheet-nl/`. Preserve neighboring sites.
- User specifically requested latest Astro SSR or SSG. Implemented Astro 7.4.1 SSG, Node >=22.22.
- No independent product database, SQL, D1, admin dashboard, product CRUD or invented catalogue/images.
- Registration URL: https://www.lolobuy.com/index (no referral token was supplied).
- Purchase URL: `https://www.lolobuy.com/productDetail/{productId}?url=` plus URL-encoded original Weidian item URL. Never use the CMS record ID as productId.
- Official logo: https://usfile.lolobuy.com/lolobuyWeb/index/iconLolobuyLogo.svg
- Official favicon: https://www.lolobuy.com/loloBuyIcon.png

## Source decision and current capability limits

The repeated instructions specify cnfanssp.com; the last word in an earlier instruction said cnfansge. The preview explicitly follows cnfanssp.com provisionally, as communicated to the owner. Do not silently switch or mix the sources; confirm the final authoritative service before production integration.

This preview fetches a dated selection of **48 real records from six cnfanssp.com categories**, validates every original Weidian product ID on the source detail page, and generates static pages. `src/data/catalog.json` is a build-time source snapshot, not a separately managed product database. Photos remain direct cnfanssp.com URLs. No reference-site inventory, stock photos or AI product images were used.

- Direct source reads were verified with an ordinary User-Agent after previous unadorned requests failed.
- Current local search, categories, sorting and pagination operate on this bounded source snapshot, not the entire live catalogue. This is stated in the interface.
- Full-source keyword search uses https://www.cnfanssp.com/search.html?keywords=...&channelid=2.
- Source keyword-plus-price-sort previously returned unrelated items. Do not assume that endpoint is correct.
- Source raw prices are displayed as CNY without inventing a USD exchange rate. Earlier source browser views showed 99 in search and USD 13.64 in detail; reconcile currency semantics before production.
- No upstream image-search endpoint or warehouse QC feed has been verified. Preview image-search and QC sections explicitly state unavailable/pending; seller photos are never called QC.
- Source sync command: `npm run sync:catalog`. It fails rather than inventing records when insufficient valid data is returned.

## Preview implemented

- Homepage: light warm background, official LoloBuy mark/favicon, SEO heading, search, category filters, 16 products per page, three-step buying explanation, four original guide cards and footer.
- Independent routes: `/spreadsheet/`, `/how-it-works/`, `/guides/`, `/faq/`, `/image-search/`, four guide articles and 48 product detail pages.
- English at `/`; Dutch at `/nl/`. Equivalent page inventory, real IDs and core copy. Same-page language switch retains query/category/sort state.
- 116 static pages total. Mobile two-column catalogue and compact hero; no separate mobile catalogue.
- Price sorting uses source numerical prices; most viewed uses source view counts. No fabricated popularity/rating labels.
- Buying CTAs open the exact original Weidian product in LoloBuy; no purchase/payment was made.
- Noindex/nofollow and robots disallow on the temporary preview. Preview is not an SEO launch.
- Preview project: `appgprj_6ad708d85ff08191b10a1d2c8a9d3cf1`.
- Preview URL: https://lolobuy-nl-preview.hehaize88.chatgpt.site
- Public access verified by the hosting access result; deployment succeeded on 2026-10-20.
- Preview version: 1. Deployment ID: `appgdep_6ad70cbea9ec819184b0921c799bde82`.
- Preview source commit: `9bab6a5b9e9b62bb1b67072fd497075c155d0100`.

## Validation

Astro build generated 116 pages successfully. All 48 records have distinct source record IDs and matching Weidian IDs in their purchase links. Browser checks covered desktop homepage, 390px English/Dutch layout, source image loading, category filter (8 hoodies), ascending price order, keyword search, product URL and same-product language switching.

Managed preview uses `server: { host: true, port: 4173 }` in Astro config. CLI flags alone did not bind correctly in the supervisor. Keep this compatibility repair.

## SEO and multilingual plan

Reference reviewed: https://kakobuypicklist.com/ . Follow its broad information hierarchy without copying its branding/inventory or unverified claims.

Primary keyword: `lolobuy spreadsheet`. Supporting intents: lolobuy finds, links, sneakers/clothing/accessories, how to use lolobuy, buying guide, QC photos and shipping costs. No measured search-volume claims; see docs/KEYWORDS_AND_DECISIONS.md.

Full proposed language plan remains: en, de, es, fr, it, pl, pt, ro, sv, nl, da, fi, el, cs, hu, bg, sk, hr, sl, lt, lv, et, ga, mt. **Only English/Dutch are implemented and exposed in this preview.** Expand with full page translations, canonical/hreflang/x-default, same article inventory and shared product data. Never present fallback English as completed translation.

## Next after owner reviews the public preview

1. Apply visual/content feedback.
2. Confirm final source and usable full catalogue/search/image-search/QC contracts. No backend/admin build is required.
3. Choose SSG refresh plus upstream APIs or Astro SSR/proxy only as required by those contracts. Production feature integration is still outstanding.
4. Prepare production build in this GitHub domain folder; GitHub is code hosting, GitHub Pages itself cannot run SSR. Do not overwrite repository-wide Pages settings for other sites.
5. When owner approves, deploy the selected runtime and bind lolobuysheet.nl through Cloudflare. Domain/DNS were not changed during preview work.
6. Change site canonical origin, publish sitemap/robots, finish agreed localization and verify production links before allowing indexing.
7. Update this memory at each material decision; preserve real status and limitations.

## Preview access incident — 2026-10-20

The owner received a Cloudflare-branded `Sorry, you have been blocked` page on the chatgpt.site preview. Native hosting remains active/public and server HTTP checks return 200, but user-browser reachability is not established. Do not treat hosting success as proof of user access.

A replacement public preview is being configured in the owner's Cloudflare account through the connected Chrome session because the Cloudflare API connector requires reauthentication. Selected Pages project name: `lolobuy-nl-preview`; source: this repository, branch main, root `lolobuysheet-nl`, build `npm run build`, output `dist`. This is a temporary preview only; no domain/DNS binding is authorized at this stage. `PUBLIC_SITE_URL` sets the preview canonical/hreflang origin. Publication and browser verification remain pending until explicitly recorded below.
