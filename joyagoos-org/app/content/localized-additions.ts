import type { Lang } from "../site-data";
import type { SeoArticle } from "../seo-articles";
import { newGermanArticles } from "./new-de";
import { newSpanishArticles } from "./new-es";
import { newFrenchArticles } from "./new-fr";
import { newItalianArticles } from "./new-it";
import { usageTranslations } from "./spreadsheet-usage";
import { sourceTranslations } from "./spreadsheet-sources";
import { categoryTranslations } from "./spreadsheet-categories";
import { brokenLinkTranslations } from "./spreadsheet-broken-links";
import { qcTranslations } from "./spreadsheet-qc";
import { listingTranslations } from "./spreadsheet-listing";
import { sizingTranslations } from "./spreadsheet-sizing";
import { updateLogTranslations } from "./spreadsheet-update-log";

const spreadsheetTranslations = [usageTranslations, sourceTranslations, categoryTranslations, brokenLinkTranslations, qcTranslations, listingTranslations, sizingTranslations, updateLogTranslations];
const newTranslations = { de: newGermanArticles, es: newSpanishArticles, fr: newFrenchArticles, it: newItalianArticles };
export function getAddedTranslation(slug: string, lang: Lang): SeoArticle | undefined {
  if (lang === "en") return undefined;
  return newTranslations[lang].find(item => item.slug === slug) ?? spreadsheetTranslations.map(item => item[lang]).find(item => item.slug === slug);
}
