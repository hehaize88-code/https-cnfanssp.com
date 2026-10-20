# lolobuysheet.nl — Project Memory

Updated: 2026-10-20 (Asia/Shanghai)
Stage: requirements, reference review and repository setup. No application or production deployment has been completed.

## Confirmed project identity

- Platform: LoloBuy.
- Domain supplied by owner: https://lolobuysheet.nl
- Repository: https://github.com/hehaize88-code/https-cnfanssp.com
- Project root: `lolobuysheet-nl/`.
- One domain per independent project directory. Do not alter neighboring sites or reuse their canonical URLs.
- Framework requirement: current stable Astro, with SSG or SSR chosen around the actual upstream capabilities.
- Registration URL: https://www.lolobuy.com/index
- Weidian purchase URL: `https://www.lolobuy.com/productDetail/{productId}?url=` plus the URL-encoded `https://weidian.com/item.html?itemID={productId}`.
- A CMS record ID is not a Weidian product ID.
- Use official LoloBuy logo and favicon. Observed official logo URL: https://usfile.lolobuy.com/lolobuyWeb/index/iconLolobuyLogo.svg . Original favicon remains to be verified.

## Source boundary — clarification required before integration

The initial brief specifies cnfanssp.com. The latest instruction repeats cnfanssp.com twice and names a repository containing cnfanssp, but its final sentence says cnfansge. Provisional planning follows cnfanssp.com; the authoritative source must be clarified before live integration. Do not combine the two sources or silently substitute either one.

No independent product database, D1, SQL, product CRUD system or admin dashboard. No mock products, generated product photographs, stock-image catalog or copied reference-site product inventory. All actual catalog records, prices, main images, galleries, QC references, search results and sorting must originate from the confirmed upstream service. Interface translations and original editorial content are site files, not a second product database.

## Reference review

Reference: https://kakobuypicklist.com/ (reviewed 2026-10-20).

Observed structure:
- Light background, compact navigation with brand, language picker and search.
- SEO headline and primary search, category links, real product listings and supporting explanation.
- Dedicated spreadsheet page with category and sorting controls.
- Dedicated image-search page.
- 24 language choices with independent URL prefixes; English at the root and Dutch at /nl/.
- Product details distinguish seller images from QC references where present.

Use this as a layout and interaction reference. Do not copy Kakobuy branding, product records or unsupported claims.

## Multilingual plan

Proposed full language set matching the reference:
en, de, es, fr, it, pl, pt, ro, sv, nl, da, fi, el, cs, hu, bg, sk, hr, sl, lt, lv, et, ga, mt.

- English at `/`; Dutch at `/nl/`; other languages at their corresponding prefixes.
- Put English and Dutch prominently in the selector. Do not force language changes based on IP.
- Language switching stays on the equivalent page and retains product ID, category, valid sorting and pagination state.
- Translate navigation, controls, homepage prose, guide/FAQ/article content, titles and descriptions.
- Use one upstream product data set for every language. Preserve source identifiers, product images, factual specifications and currency.
- Do not publish partial translations as if complete; translation coverage is a release check.
- Correct HTML lang, self-canonical URLs, reciprocal hreflang and x-default.
- Indexable localized pages are generated as HTML, not only translated by a client-side widget.
- Preserve the same article inventory and essential meaning across locales.

## Page and mobile plan

Routes: /, /spreadsheet/, /categories/, /finds/, /guide/, /qc/, /shipping/, /faq/, /articles/, and individual articles. Implement product details only against verified source records.
Homepage focus: "lolobuy spreadsheet"; supporting intents: finds, links, buying guide, QC and shipping.
Mobile: compact top section, two-column products, 16 products per catalog page, no horizontal overflow, latest 4–6 article cards on homepage.
Use actual source images only; keep missing-data states explicit.

## Upstream findings from preliminary cnfanssp checks

- Browser reads work, but direct network reads previously returned HTTP 403. CI/server access is not yet verified.
- Public directory: /AllProducts/
- Public search was exercised at /search.html?keywords=Jersey-60&channelid=2.
- Sample record 6667 initially displayed Weidian item 7632511460 and USD 13.64; search displayed $99. Currency interpretation must be verified.
- Price sorting after a keyword search displayed unrelated items despite retaining the keyword in the URL. Do not blindly copy this behavior.
- The inspected directory had no image-upload control; this does not prove that no upstream visual-search service exists.
- No explicit QC feed has been verified; seller gallery images must not be labeled as QC.
- No backend/admin operations are requested.

## Deployment constraints

GitHub is confirmed as the code destination. GitHub Pages supports SSG, not an Astro SSR runtime.
Use an isolated project build root `lolobuysheet-nl/`; the repository contains multiple domains, so do not replace the repository-wide Pages deployment with this site.
After source verification choose:
1. SSG pages plus the confirmed upstream browser-accessible dynamic services; or
2. Pre-rendered SEO pages plus an Astro server adapter where a server proxy is needed.
A production runtime/domain binding has not yet been chosen or created in this task.
No public claim of a completed deployment until the build and real URL have been verified.

## Next actions

1. Resolve cnfanssp.com vs cnfansge.com.
2. Verify source data, search/sorting/pagination, image search, QC, currency and image paths without creating a new database.
3. Implement the Astro frontend and complete localization.
4. Build, check links and mobile layout, then provide a preview.
5. Deploy from this domain directory to the agreed runtime, verify the custom domain, sitemap and robots.
6. Update this file after every material decision or implementation change.
