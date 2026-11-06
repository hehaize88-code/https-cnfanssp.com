import type { Article } from "@/lib/articles";
import type { Lang } from "@/lib/site-data";
import en from "@/lib/content/november/en.json";
import de from "@/lib/content/november/de.json";
import es from "@/lib/content/november/es.json";
import fr from "@/lib/content/november/fr.json";
import it from "@/lib/content/november/it.json";
import refresh from "@/lib/content/november/refresh.json";

export const novemberArticleSlugs = ["hacoo-shipping-fees-checkout", "hacoo-football-shirt-size-guide"] as const;
export type NovemberArticleSlug = (typeof novemberArticleSlugs)[number];
export const novemberArticles: Record<Lang, Record<NovemberArticleSlug, Article>> = { en, de, es, fr, it };
export const novemberRefresh = refresh;
export const novemberUpdatedSlugs = [
  ...novemberArticleSlugs, "hacoo-shoe-size-guide", "hacoo-sizing-guide",
  "hacoo-spreadsheet-live-source", "hacoo-order-tracking", "hacoo-product-links-codes", "hacoo-shipping-time-cost",
] as const;

for (const lang of ["en", "de", "es", "fr", "it"] as const) {
  const t = refresh[lang].tableLabels;
  novemberArticles[lang]["hacoo-shipping-fees-checkout"].sections[4].table = {
    caption: t[0], headers: t.slice(1, 6),
    rows: [[t[6], "£36", "£6", "−£4", "£38"], [t[7], "£44", "£9", "−£4", "£49"]],
    note: t[13],
  };
  novemberArticles[lang]["hacoo-football-shirt-size-guide"].sections[4].table = {
    caption: t[8], headers: t.slice(9, 12),
    rows: [[t[12], "54 cm", "72 cm"], ["M", "52 cm", "70 cm"], ["L", "55 cm", "73 cm"]],
    note: t[13],
  };
}
