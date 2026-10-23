import english from "../content/articles/en.json";

export const articleSlugs = [
  "hacoo-links-not-working",
  "hacoo-tracking-not-updating",
  "hacoo-delivered-but-not-received",
  "hacoo-spreadsheet-guide",
  "hacoo-qc-photo-checklist",
  "hacoo-shipping-returns-guide",
  "hacoo-product-specification-checklist",
  "hacoo-tracking-order-guide",
  "hacoo-shipping-time-by-country",
  "hacoo-website-vs-app",
  "find-products-on-hacoo",
  "hacoo-size-guide",
  "hacoo-returns-refund-timeline",
  "hacoo-shoe-qc-guide",
  "hacoo-clothing-qc-guide",
] as const;
export type ArticleSlug = (typeof articleSlugs)[number];

export type ArticleRecord = {
  slug: ArticleSlug;
  title: string;
  description: string;
  readTime: string;
  updated: string;
  publishedISO?: string;
  updatedISO?: string;
  keywords?: string[];
  sourceNote?: string;
  sources?: { label: string; url: string }[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles = english as Record<ArticleSlug, ArticleRecord>;
