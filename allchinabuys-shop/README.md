# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`
- Linux with `flock`, `curl`, and GNU `timeout`

## Sites Lifecycle

The Sites lifecycle CLI runs the locked dependency install before returning this checkout. Edit the source under `app/`, then checkpoint when a coherent milestone is ready to inspect or share. The remote Sites builder runs `npm run build` against the pushed commit. Do not repeat install or build as a normal pre-checkpoint step.

This starter does not use `wrangler.jsonc`.

`install:ci` is intentionally a single, non-retrying `npm ci`. It refuses a concurrent install for the same project, consumes a matching image-seeded npm cache with `--prefer-offline` while retaining registry fallback for a missing cache object, otherwise downloads and verifies the complete vinext tarball recorded in `package-lock.json`, limits npm to one socket, and terminates a stalled install. `build` applies a short timeout. These helpers target Linux and use GNU `timeout`; they are not native macOS scripts.

Scripts that need writable project-scoped home, npm, XDG, and temporary paths use `scripts/sites-env.sh`. The `dev` and `start` scripts honor the caller's runtime environment and keep Wrangler logs inside the checkout. The generated `.sites-runtime/` directory is disposable and ignored by Git.

## Included Shape

- edit site code under `app/`
- `app/chatgpt-auth.ts` provides optional dispatch-owned ChatGPT sign-in helpers
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/index.ts` reads the D1 binding from the Cloudflare Worker environment
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Diagnostic Commands

- `npm run install:ci`: perform the one bounded lockfile install
- `npm run dev`: start the Vite/Vinext development server
- `npm run build`: build the deployable Sites artifact
- `npm run start`: start the built Vinext application
- `npm test`: build and verify the static homepage, independent pages, robots.txt and sitemap.xml
- `npm run db:generate`: generate Drizzle migrations after schema changes

Use build commands for targeted diagnosis after a remote failure, not as part of the normal checkpoint path.

## Cloudflare Pages

For the monorepo deployment, use `allchinabuys-shop` as the root directory,
`npm run build` as the build command, and `dist/client` as the output directory.
The build fails when the homepage, 404 page, robots.txt or sitemap.xml is missing.

The timeout defaults can be overridden for a controlled canary with `SITES_INSTALL_TIMEOUT`, `SITES_INSTALL_KILL_AFTER`, `SITES_BUILD_TIMEOUT`, and `SITES_BUILD_KILL_AFTER`. A timeout fails the command; the helpers never retry an unchanged install or build.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)

## Multilingual static publication — October 2026

The production target remains Cloudflare Pages, rooted at `allchinabuys-shop`,
with build command `npm run build` and output `dist/client`. Python 3 is required
in addition to the existing Node toolchain; the exporter uses only the standard library.
The project pins Node 22.16.0 and Python 3.13.3 using the standard Pages version
files. The publication build preserves the host environment so runtime managers
can locate their installed interpreters.

English retains its existing root URLs. German, French, Spanish, Polish and
Japanese have complete static copies under `/de/`, `/fr/`, `/es/`, `/pl/` and `/ja/`.
There are 22 routes per language: the homepage, six topic pages, the article
index and 14 articles. All 132 URLs receive self canonicals, reciprocal hreflang
and sitemap entries. Language links keep the current page.

`content/october-articles.json` holds the four new English articles. Existing
articles retain their source content and gain dated context and practical tables.
`content/locales/*.json` contains offline translation dictionaries and editorial
overrides. No translation API runs during builds or page visits.

After Vinext prerenders English, `scripts/localize-site.py` produces each locale,
translates metadata and structured data, and fails if a string is missing.
If source copy changes, use `python3 scripts/localize-site.py --extract` after
prerendering, then supply every new key in all five dictionaries or overrides.
Do not publish an English fallback inside a locale.

The static export removes React hydration so the English route cannot replace
translated content. `public/site.js` supplies the actual interactive behavior:
normal locale links, outbound click tracking and product search tracking.
Native HTML details elements handle the FAQ. Search and commercial links retain
the existing `www.cnfanssp.com` destination. GA4 ID remains `G-1DRVB6BDCK`.

Verification: `npm run build` checks all localized page bodies, metadata,
language links, internal routes, article count, sitemap and commercial targets.
Run `node --test tests/rendered-html.test.mjs` for the existing export checks.
Browser QA should also cover mobile overflow, same-article language switching,
search submission and GA4 event payloads.

This release uses public site and competitor research. No GSC, Bing or GA4
performance-report values or keyword volumes were available for the analysis.
