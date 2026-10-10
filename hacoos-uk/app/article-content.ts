import en from "./content/en.json";
import de from "./content/de.json";
import fr from "./content/fr.json";
import es from "./content/es.json";
import it from "./content/it.json";
import type { Locale } from "./site-data";

export type ArticleKey = keyof typeof en;
export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Article = {
  title: string;
  intro: string;
  minutes: number;
  published?: string;
  reviewed?: string;
  sections: ArticleSection[];
  takeaways: string[];
  sources: Array<{ label: string; href: string }>;
};
export const articleKeys = Object.keys(en) as ArticleKey[];
export const articles: Record<Locale, Record<ArticleKey, Article>> = { en, de, fr, es, it };
