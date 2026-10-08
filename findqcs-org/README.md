# FindQCS.org

Production source for `findqcs.org`.

## Cloudflare build

- Root directory: `findqcs-org`
- Build command: `npm run build`
- Output directory: `dist/client`
- Production branch: `main`

The generated site includes five language editions, self-referencing canonicals, hreflang alternates, a sitemap, and a real 404 page.

## Content and release checks

`npm run build` runs the content checks, exports all five editions and validates the generated HTML. `npm run check:content` can also run without a build.

- All 19 article topics must exist in EN, PL, ES, DE and RO; missing translations fail the build rather than silently falling back to English.
- Measurement and shipping guides keep their existing URLs. Product signals and the agent workflow use their own equivalent routes in every language.
- Validation covers the 95 article pages, 250 sitemap URLs, self-canonicals, reciprocal language alternatives, localized internal links, assets, CTAs and article discovery.
- `catalog_outbound_click` consistently records catalog navigation with page path, site language and placement. Existing product/category/search events remain available. GA4 key-event designation is a separate property setting.
- Keep deployment changes within `findqcs-org/`; automatic article generation remains disabled.
