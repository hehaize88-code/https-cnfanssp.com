import { articles, articleSlugs, type ArticleRecord, type ArticleSlug } from "./article-data";
import { fullArticleTranslations } from "./article-translations.generated";
import { hqArticleTranslations } from "./hq-article-translations";

export type ArticleLanguage = "en" | "es" | "fr" | "de" | "it";

export function getArticle(lang: ArticleLanguage, slug: ArticleSlug): ArticleRecord {
  if(lang === "en") return articles[slug];
  if(slug === "hacoo-product-specification-checklist") return hqArticleTranslations[lang];
  return fullArticleTranslations[lang][slug];
}

export function getArticleList(lang: ArticleLanguage) {
  return articleSlugs.map(slug => getArticle(lang, slug));
}
