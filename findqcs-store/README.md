# FindQC Store

Production Cloudflare Worker for `https://findqcs.store`.

Production content release: 2026-10-08.
October release: four new guides, four revised search guides, complete article translations.

The current concept uses a warm editorial / buyer's-catalog visual system with
an image-led hero, exact-source product cards, research guides and five
language-prefixed routes.

The navigation and homepage expose eighteen independent research guides plus a
dedicated QC comparison-spreadsheet workflow. Eight priority guides cover QC
finder link search, exact photo matching, finder/checker/spreadsheet selection,
Weidian, Taobao, 1688, shoe QC and clothing QC. EN, DE, ES, FR and IT keep the
same article routes, evidence rules, decision criteria and CTAs.
The supplied FindQC logo is embedded directly in the Worker bundle.

Language parity is validated at the route, section, evidence-rule and CTA
levels. Independent pages retain the same research modules when switching on
the current route. Localized depth is distributed through matching article
sections and evidence cards rather than being appended as one oversized block.

On mobile, the homepage keeps all eight content sections while using a dense,
non-horizontal layout. At a 390 × 844 viewport, all five languages render in
approximately 4.2–4.5 screens without removing cards, text, images or links.

Six product categories have their own internal pages and verified outbound
links to the matching source categories. Page templates keep identical module,
card, FAQ and article-section counts across EN, DE, ES, FR and IT.

Research copy distinguishes exact-source matches, likely same-item groups,
visually similar candidates and historical QC records. Production pages are
indexable and publish canonical, hreflang, robots.txt and XML Sitemap signals.
Outbound catalog searches and main-site clicks are recorded as GA4 events so
CTR improvements can be evaluated after release.

## Commands

- `npm install`
- `npm run check`
- `npm run deploy`

All outbound product, category, and search actions point to the approved source catalog.

## October 2026 recovery release

The homepage retains exactly four recent article previews. The full index has
18 articles in each of EN, DE, ES, FR and IT (90 article pages). Full localized
bodies replace the shortened versions; topic and section parity is checked.
Article collections expose ItemList data and topic-specific related links.
The /en alias redirects to unprefixed English canonical URLs. Both favicon
paths serve the existing site logo. The sitemap contains 160 indexable URLs.

New topics: missing QC photos, image-match verification, Standard/Premium
evidence, and clothing measurements. The four new English articles contain
1208–1230 words including headings and summaries, with matching localized
sections and numerical examples. Examples are editorial, not customer reviews.

Research references checked 2026-10-08: FindQC official pages
/how-findqc-works, /what-is-qc, /verified-guides, /size-assistant, and
/authenticity-guide. Feature descriptions are separated from our inspection
methods; we make no claims about current premium fees or universal availability.
No third-party destination links are added to site pages.

The prior GSC review found near-zero exposure and many discovered-but-not-indexed
URLs. This release improves discovery and substance; it does not promise indexing
or traffic gains. Bing and GA4 traffic reports were unavailable in that review.

Run `npm test` for regression and release checks, then `npm run check` for a
Worker bundle dry run. Deployment uses the existing GitHub integration.
