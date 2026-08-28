# joyagoos.org

Independent, multilingual Joyagoo spreadsheet and buyer-guide site for `joyagoos.org`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run deploy
```

The production build targets Cloudflare Workers through vinext. The root URL redirects to `/en/`; English, German, Spanish, French and Italian routes each have their own canonical and hreflang metadata.
