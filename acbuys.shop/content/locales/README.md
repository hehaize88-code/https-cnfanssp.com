# Static language editions

Production exports 22 routes in each of English, German, French, Spanish, Italian and Polish. English keeps the existing root URLs. Other editions use `/de/`, `/fr/`, `/es/`, `/it/` and `/pl/`. Every edition includes all 16 articles. The English renderer is the layout source; production HTML is translated before publishing and is not overwritten by client hydration.

The JSON dictionaries contain complete text, not abbreviated article summaries. Initial translation drafts were produced with local machine translation. Route titles, new-article descriptions, section headings, research notes and key terminology received editorial corrections. Further native-speaker stylistic review may improve the long-form prose.

Translation model attribution: the German, French, Spanish and Italian drafts used the MIT-licensed models published in `uav4geo/LibreTranslate-Models`. Polish drafts used `etenszyn/argos-opus-mt-en-pl-ct2` (CC BY 4.0), based on OPUS-MT by Jörg Tiedemann and Santhosh Thottingal, “OPUS-MT — Building open translation services for the World”, EAMT 2020. These model files are not distributed in this repository. Editorial corrections are stored in the JSON files.

## Updating content

1. Install the existing Node dependencies and Python dependencies from `scripts/requirements-pages.txt`.
2. Build and export English with public indexing enabled.
3. Use `python3 scripts/localize-pages.py --collect` after English text changes, then provide complete translations for new dictionary keys in every language.
4. `npm run build:pages` builds, exports, localizes and validates the complete production directory. Missing translations fail the command.
5. Preview `cloudflare-pages` locally. Check interactions after changing `public/site.js`.
6. Commit source, translations and the generated `cloudflare-pages` directory to the existing deployment branch. Cloudflare Pages serves this directory without a build step.

Article status labels such as Purchased and Stored are intentionally retained where they help readers match the official account interface. Brand and model names can also remain unchanged.
