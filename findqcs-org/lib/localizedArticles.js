import { articles as englishArticles } from "./articles.js";
import { ARTICLE_LOCALES, ARTICLE_SOURCE_LOCALES, ARTICLE_UI_LOCALES } from "./articleLocales/index.js";
import { NEW_ENGLISH_ONLY_ARTICLE_SLUGS } from "./englishOnlyArticles.js";

const ENGLISH_UI = {
  journalMetadataTitle: "FindQC Guides & QC Finder Articles 2026 | FindQCS",
  journalMetadataDescription: "Independent FindQC and QC finder guides for exact link checks, image search, warehouse photos, measurements and mapped product research.",
  journalSchemaName: "FindQCS field notes",
  journalCount: "14 in-depth guides",
  journalNote: "Fourteen original guides connect exact-link research, mapped-index navigation, visual search, category checks, warehouse evidence and parcel planning. Images are editorial examples, not inspection records for a buyer's order.",
  editorialDesk: "FindQCS Evidence Desk",
  factChecked: "Reviewed 15 Sep 2026",
  heroCaption: "Editorial product image used to illustrate the inspection subject. It is not warehouse evidence for a specific order.",
  contents: "In this article",
  researchNotes: "Research notes",
  officialSources: "Reference checked",
  sourceIntro: "The catalog structure was checked against the live destination. Product details and policies can change, so verify current information before making a decision.",
  independentNote: "FindQCS is an independent discovery and education site. It does not sell products or perform warehouse inspections.",
  continueResearch: "Continue the research",
  relatedNotes: "Related field notes",
  allArticles: "All journal articles",
  readArticle: "Read article",
  home: "Home",
  journal: "Journal",
};

export function getArticleUi(language = "en") {
  return language === "en"
    ? ENGLISH_UI
    : { ...ENGLISH_UI, ...(ARTICLE_UI_LOCALES[language] || {}) };
}

function localizeArticle(article, language) {
  if (!article || language === "en") return article;

  // The first public edition used descriptive slugs while the completed
  // translations used shorter editorial keys. Keep the public URLs stable and
  // map them to the matching translated article instead of falling back to English.
  const localeKey = {
    "product-search-link-id-keyword": "findqc-search-methods",
    "warehouse-measurement-guide": "findqc-product-signals",
    "shipping-cost-checklist": "findqc-shopping-agent-workflow",
  }[article.slug] || article.slug;
  const localized = ARTICLE_LOCALES[language]?.[localeKey];
  if (!localized) return article;

  const sourceLocales = ARTICLE_SOURCE_LOCALES[language] || {};
  const sources = (localized.sources || article.sources || []).map((source) => {
    const translated = sourceLocales[source.href];
    return translated ? { ...source, ...translated } : source;
  });

  return {
    ...article,
    ...localized,
    slug: article.slug,
    heroImage: localized.heroImage || article.heroImage,
    sources,
    related: localized.related || article.related,
    cta: localized.cta || article.cta,
  };
}

export function getLocalizedArticles(language = "en") {
  const available = language === "en"
    ? englishArticles
    : englishArticles.filter((article) => !NEW_ENGLISH_ONLY_ARTICLE_SLUGS.includes(article.slug));
  return available.map((article) => localizeArticle(article, language));
}

export function getLocalizedArticle(slug, language = "en") {
  if (language !== "en" && NEW_ENGLISH_ONLY_ARTICLE_SLUGS.includes(slug)) return undefined;
  return localizeArticle(englishArticles.find((article) => article.slug === slug), language);
}
