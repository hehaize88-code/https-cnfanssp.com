# sheet-superbuy.net

Production is a complete multilingual static export from the React page sources. The GitHub-connected hosting project uses this directory. Deploy by pushing this project to the existing repository; no hosting-account changes are required.

## Build and checks

- Install the pinned dependencies with `npm ci`.
- Build with `npm run build`.
- Publish `dist/client` (an identical `out` directory is also generated for existing static-export configurations).
- Run `npm test` to check language/content parity, internal links and interactive behavior.
- `npm run content:extract` refreshes the complete English translation key inventory in the ignored `.sites-runtime` directory.

The production build does not run a Worker, call a translation service or hydrate English React over translated HTML. It renders all nine editions before deployment. The legacy Vinext development files are retained, but they are not the production publishing path.

## Content maintenance

English article bodies live in `app/articles/[slug]/page.tsx`, `app/growth-articles.ts`, and the four new `content/new/*.md` files. `scripts/prepare-content.mjs` prepares metadata and bodies for the new articles. Existing guides have topic-specific reading summaries and related links in `content/reading-guides.json`.

All translated visible text and metadata is committed in `content/locales/*.json`. The builder fails if a source string lacks a translation; there is no English fallback. Changes must update all eight translation catalogs. Reviewed Chinese bodies for the four new guides are retained under `content/zh-reviewed` and applied with `scripts/apply-zh-review.py`. Editorial scripts capture the title, terminology and interface review for this release; catalogs are the authoritative production text.

The nine editions are EN at `/`, and ZH, DE, FR, ES, IT, PT, PL, NL at their language prefixes. Language links preserve the corresponding page and an active section fragment. Every page emits self-canonical, reciprocal hreflang and x-default. The sitemap includes 234 canonical pages, with 19 full articles per edition. Article pages contain no FAQ sections.

## Interaction and measurement

`public/site.js` implements product-category filtering, show-more, the route-divisor weight calculator, language-section continuity and existing GA4 integration (`G-H4PY5G9L1M`). It records `product_click`, `main_site_click`, `search_submit`, `article_click`, `guide_to_catalog_click`, `category_select` and `shipping_calculator_use`. Search and product destinations remain the site's configured main catalog. The calculator is a weight-planning tool, not a freight quote.

## Research and translation notes

The 13 October 2026 update uses the GSC/GA4 audit and public Superbuy Service & Fees, User Guidance and Help Center. Monetary illustrations are marked as examples. Existing review scores were removed because the numeric snapshots were stale. Publication does not guarantee search-engine indexing.

Initial translation drafts were generated offline using Argos Translate language models, then supplemented with editorial terminology, titles, numerical checks and reviewed content. The Polish draft uses an Apache-2.0 OPUS-MT model (`gsarti/opus-mt-tc-en-pl`, CT2 conversion by rohanksaxena). Translation runtimes and model weights are not part of the website or repository. Source models: Argos Open Technologies / OPUS-MT; Jörg Tiedemann and Santhosh Thottingal. No live translation API is required for build or delivery.
