import type { Article } from "@/lib/articles";
import type { Lang } from "@/lib/site-data";
import en from "@/lib/content/october/en.json";
import de from "@/lib/content/october/de.json";
import es from "@/lib/content/october/es.json";
import fr from "@/lib/content/october/fr.json";
import it from "@/lib/content/october/it.json";
import examples from "@/lib/content/october/examples.json";

export const octoberArticleSlugs = ["hacoo-links-not-working", "hacoo-shoe-size-guide", "hacoo-refund-status"] as const;
export type OctoberArticleSlug = (typeof octoberArticleSlugs)[number];
export const octoberArticles: Record<Lang, Record<OctoberArticleSlug, Article>> = { en, de, es, fr, it };

for (const lang of ["en", "de", "es", "fr", "it"] as const) {
  for (const slug of octoberArticleSlugs) {
    const article = octoberArticles[lang][slug];
    article.sections.splice(article.sections.length - 1, 0, examples[lang][slug]);
  }
}

export const updatedArticleSlugs = [
  "hacoo-spreadsheet-live-source", "hacoo-shipping-time-cost", "how-does-hacoo-work",
  "hacoo-returns-refunds", "hacoo-sizing-guide",
] as const;

export function articleDates(slug: string, lang: Lang = "en") {
  const isNew = octoberArticleSlugs.some((item) => item === slug);
  const isLegacy = ["hacoo-spreadsheet-live-source", "hacoo-reviews-2026", "hacoo-shipping-time-cost"].includes(slug);
  const published = isNew ? "2026-10-12" : isLegacy ? "2026-08-29" : "2026-09-19";
  const translationRewritten = (lang !== "en" && ["hacoo-qc-guide", "hacoo-product-links-codes"].includes(slug))
    || (lang === "it" && ["hacoo-website-vs-app", "hacoo-order-tracking", "hacoo-app-region-access"].includes(slug));
  const modified = isNew || translationRewritten || updatedArticleSlugs.some((item) => item === slug) ? "2026-10-12" : published;
  return { published, modified };
}
