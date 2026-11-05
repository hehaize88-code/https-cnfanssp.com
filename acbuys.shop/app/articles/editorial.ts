import type { ArticleRecord, ArticleSection } from "./article-data";
import copy from "../../content/editorial/en/ui.json";
import guides from "../../content/editorial/en/guides.json";
import revisions from "../../content/editorial/en/revisions.json";
import sources from "../../content/editorial/sources.json";

const reviewed = "2026-11-05";
const linkTitles: Record<string, string> = {
  "acbuy-service-status": copy.shortStatus,
  "acbuy-payment-methods": copy.shortPay,
  "acbuy-product-links-not-working": copy.shortLink,
};
export const newGuides: ArticleRecord[] = Object.entries(guides).map(([slug, guide]) => {
  const words = guide.sections.flatMap(section => section.paragraphs).join(" ").split(/\s+/).length;
  return {
    slug, shortTitle: linkTitles[slug], title: guide.title, seoTitle: guide.title,
    description: guide.description, category: copy.overview, primaryKeyword: linkTitles[slug],
    secondaryKeywords: [], dek: guide.intro, published: reviewed, updated: reviewed,
    updatedLabel: copy.asOf, readingTime: Math.ceil(words / 210), researchNote: copy.researchNote,
    sections: guide.sections, sources: (sources as Record<string, { label: string; url: string }[]>)[slug], faq: [],
  };
});

export function updateGuide(article: ArticleRecord): ArticleRecord {
  const section = (revisions as Record<string, ArticleSection>)[article.slug];
  if (!section) return article;
  const revised = { ...article, updated: reviewed, updatedLabel: copy.asOf, sections: [...article.sections, section] };
  if (article.slug === "acbuy-spreadsheet-guide") {
    return { ...revised, shortTitle: copy.guideShort, title: copy.guideTitle, seoTitle: copy.guideTitle, description: copy.guideDesc, dek: copy.guideDesc };
  }
  return revised;
}
