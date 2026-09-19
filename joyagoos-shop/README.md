# joyagoos.shop

Independent, multilingual Joyagoo spreadsheet and buyer-guide site for `joyagoos.shop`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run deploy
```

Production is deployed from the `joyagoos-shop` directory to the Cloudflare Pages project `joyagoos-shop`. The root URL redirects to `/en/`; English, German, Spanish, French and Italian routes each have their own canonical and hreflang metadata.

The five legacy policy/QC/shipping articles duplicated on `joyagoos.org` remain `noindex, follow`, canonicalize to their `.org` counterparts, and stay out of this site's sitemap. All `.shop`-owned pages must remain `index, follow`, self-canonical, and present in the sitemap. `npm test` builds the site and enforces this policy across all five languages.
