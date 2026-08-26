import { articles as englishArticles } from "./articles.js";

const ENGLISH_UI = {
  journalMetadataTitle: "Product Search, QC Photo & Shipping Guides",
  journalMetadataDescription: "Evidence-led guides to product search, warehouse QC photo review, measurements and international shipping estimates.",
  journalSchemaName: "FindQCS field notes",
  journalCount: "05 in-depth guides",
  journalNote: "Five original, practical guides connect product discovery with warehouse evidence and parcel planning. Images are editorial examples, not inspection records for a buyer's order.",
  editorialDesk: "FindQCS Evidence Desk",
  factChecked: "Reviewed 26 Aug 2026",
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
  return ENGLISH_UI;
}

function localizeArticle(article, language) {
  return article;
}

export function getLocalizedArticles(language = "en") {
  return englishArticles.map((article) => localizeArticle(article, language));
}

export function getLocalizedArticle(slug, language = "en") {
  return localizeArticle(englishArticles.find((article) => article.slug === slug), language);
}
