import metadata from "./content/article-meta.json";

export const latestGuides = [
  "articles/canary-islands-shipping",
  "articles/wrong-size-returns",
  "articles/delivered-not-received",
] as const;
export const octoberGuides = [
  "articles/shoes-spreadsheet",
  "articles/clothing-spreadsheet",
  "articles/links-not-working",
  "articles/tracking-not-updating",
] as const;
export const newArticleKeys = [...latestGuides, ...octoberGuides] as const;
export type NewArticleKey = typeof newArticleKeys[number];
export const newArticleMeta = metadata;

export function publishedOn(key: string) {
  if (latestGuides.some(page => page === key)) return "2026-11-05";
  if (octoberGuides.some(page => page === key)) return "2026-10-09";
  return "2026-08-27";
}

const revisedPages = new Set<string>([
  "home", "spreadsheet", "categories", "articles", "shipping",
  "articles/find-product-links", "articles/size-before-you-buy", "articles/read-qc-photos",
  ...newArticleKeys,
]);

export function revisedOn(key: string) {
  return revisedPages.has(key) ? "2026-11-05" : "2026-10-09";
}
