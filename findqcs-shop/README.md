# FindQCS Shop

Independent FindQC research, QC education and product-discovery site for
`findqcs.shop`.

## Cloudflare Pages

- Root directory: `findqcs-shop`
- Build command: `npm run build:pages`
- Build output directory: `out`
- Node.js: `22.13.0` or newer

The regular `npm run build` command remains available for the original Vinext
worker build. Cloudflare Pages uses the fully static `build:pages` output.

## Multilingual content checks

The production branch is `codex/findqcs-shop-cloudflare`. Only this directory is
part of the FindQCS Shop change scope. Publishing follows its existing GitHub-triggered
Cloudflare Pages integration; no hosting credentials are needed in the repository.

`npm run build:pages` exports EN, NL, DE, IT and ES pages and verifies route
coverage, article sections, canonical and reciprocal hreflang tags, internal
links, language selectors and localized analytics. Visible text without a
translation fails the build instead of publishing an English fallback.

Add reviewed translations to `app/translations.complete.json` when changing
reader-facing copy. Translation data is checked in; production builds do not
contact a translation service. Keep one search intent per article and update
`article-improvements.ts` with relevant next-step reading links.
