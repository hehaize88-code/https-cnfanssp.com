import translatedData from "./full-content-translations.generated.json";
import type { ArticleSlug } from "./article-data";
import type { Locale, Section } from "./site-data";

type TranslatedBlock = {
  number: string;
  title: string;
  text: string;
  bullets?: string[];
};

type TranslatedPage = {
  kicker: string;
  title: string;
  intro: string;
  blocks: TranslatedBlock[];
};

type TranslatedArticle = {
  title: string;
  description: string;
  updated: string;
  read: string;
  sections: [string, string][];
  sources: { title: string; href: string }[];
};

type CompleteTranslation = {
  articles: Record<ArticleSlug, TranslatedArticle>;
  pageContent: Record<Section, TranslatedPage>;
};

export const completeTranslations = translatedData as unknown as Record<Locale, CompleteTranslation>;
