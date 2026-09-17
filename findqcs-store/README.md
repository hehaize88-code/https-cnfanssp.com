# FindQC Store

Production Cloudflare Worker for `https://findqcs.store`.

The current concept uses a warm editorial / buyer's-catalog visual system with
an image-led hero, exact-source product cards, research guides and five
language-prefixed routes.

The navigation and homepage expose ten independent research guides plus a
dedicated QC comparison-spreadsheet workflow. Four intent-led guides cover QC
finder product-link search, exact QC-photo matching, finder/checker/spreadsheet
selection and Weidian link verification. EN, DE, ES, FR and IT keep the same
article routes, evidence rules, decision criteria and CTAs.
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
