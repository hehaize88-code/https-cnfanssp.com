# Hacoos.org

Production source for [hacoos.org](https://hacoos.org), an independent multilingual Hacoo product research and quality-check library.

## What is included

- English, German, French, Spanish, Italian, and Portuguese editions
- Product index, finds, guides, QC, shipping, FAQ, and long-form SEO articles
- Self-referencing canonicals and reciprocal `hreflang` alternates
- Dynamic `/robots.txt` and `/sitemap.xml` endpoints
- Responsive desktop and compact three-to-five-screen mobile layouts
- Product links that open the matching CNFans product detail pages

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm test
npm run lint
npm run check:cloudflare
```

## Cloudflare deployment

The application builds to a Cloudflare Worker plus static assets.

```bash
npm ci
npm run release:cloudflare
```

For Cloudflare Builds in this monorepo:

- Root directory: `hacoos-org`
- Build command: `npm run build`
- Deploy command: `npm run deploy:cloudflare`
- Production branch: `main`

The checked-in `wrangler.jsonc` deploys the Worker as `hacoos-org` and attaches the `hacoos.org` and `www.hacoos.org` custom domains.
