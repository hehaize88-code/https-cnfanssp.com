# FindQC Store

Production Cloudflare Worker for `https://findqcs.store`.

The current concept uses a warm editorial / buyer's-catalog visual system with
an image-led hero, exact-source product cards, research guides and five
language-prefixed routes.

The navigation and homepage expose three independent SEO article pages. Every
language edition now contains approximately 1,600–1,750 words per article. The
first two guides have 23 sections and the shipping guide has 24 sections in
EN, DE, ES, FR and IT. All translations retain worked examples, evidence rules,
decision criteria, visuals and CTAs rather than using abbreviated summaries.
The supplied FindQC logo is embedded directly in the Worker bundle.

Language parity is validated against the full article body: DE, ES, FR and IT
are not shorter than the corresponding English source article. Independent
pages retain the same research modules when switching on the current route.
Localized depth is distributed through matching article sections and evidence
cards rather than being appended as one oversized block at the page end.

On mobile, the homepage keeps all eight content sections while using a dense,
non-horizontal layout. At a 390 × 844 viewport, all five languages render in
approximately 4.2–4.5 screens without removing cards, text, images or links.

Six product categories have their own internal pages and verified outbound
links to the matching source categories. Page templates keep identical module,
card, FAQ and article-section counts across EN, DE, ES, FR and IT.

Research copy distinguishes exact-source matches, likely same-item groups,
visually similar candidates and historical QC records. Production pages are
indexable and publish canonical, hreflang, robots.txt and XML Sitemap signals.

## Commands

- `npm install`
- `npm run check`
- `npm run deploy`

All outbound product, category, and search actions point to the approved source catalog.
