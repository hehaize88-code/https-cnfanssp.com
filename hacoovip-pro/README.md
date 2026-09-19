# HacooVIP Pro

Independent multilingual Hacoo research, spreadsheet, product-find, QC and
shipping guide for `hacoovip.pro`.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm test
npm run lint
npm run deploy:dry-run
```

## Cloudflare deployment

The project builds with Vinext and deploys as a Cloudflare Worker with static
assets from `dist/client`.

```bash
npm run deploy
```

The production hostname and canonical URL are `https://hacoovip.pro`.
