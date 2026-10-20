# Keywords and implementation decisions — 2026-10-20

## Research basis

Reviewed public LoloBuy homepage, cnfanssp catalogue/detail/search and kakobuypicklist.com homepage, Dutch locale, spreadsheet and image-search pages. Astro current npm release was checked at https://registry.npmjs.org/astro/latest (7.4.1).

No verified keyword search-volume dataset is available. The following are intent-based targets, not measured traffic estimates:

| Page | Primary intent | Supporting terms |
| --- | --- | --- |
| Homepage | lolobuy spreadsheet | lolobuy finds, lolobuy links |
| Spreadsheet | lolobuy spreadsheet | lolobuy sneakers, lolobuy clothing, lolobuy accessories |
| Buying guide | how to use lolobuy | lolobuy buying guide, how to order on lolobuy |
| QC guide | lolobuy qc | lolobuy qc photos, quality check photos |
| Cost guide | lolobuy shipping | lolobuy shipping costs, order costs |
| Image search | lolobuy image search | search products by photo |

Do not claim rankings, search volume, discounts, free QC, shipping duration or storage limits without current primary evidence. The provided registration URL has no referral parameter; preserve it exactly.

## Architecture

- Astro SSG for the visual preview; static HTML is suitable for future SEO landing pages.
- Source data comes exclusively from cnfanssp.com, provisionally following the repeated user instruction. cnfansge was mentioned once; do not silently switch.
- Direct public source reads work with a normal User-Agent. No secret token or database was introduced.
- 48 source records selected across six categories and fetched 2026-10-20. Catalog snapshot is bounded and labeled accordingly.
- Text/category/price/view sorting in this preview uses those source values, not a live source API. Full source search remains an outbound link. Live dynamic integrations remain a production blocker.
- Images are direct source URLs. Official logo and favicon are unchanged files from lolobuy.com/usfile.lolobuy.com.
- QC images and visual search endpoints were not verified. No fake upload controls or mislabeled product galleries.
- English root and Dutch /nl/ have equivalent page inventory and product IDs; retain further 22-language expansion as a planned production decision.
- Preview uses noindex and robots disallow. It is for visual review, not the production SEO launch.
