import { articles, articleSlugs, type ArticleRecord, type ArticleSlug } from "./article-data";
import { fullArticleTranslations } from "./article-translations.generated";

export type ArticleLanguage = "en" | "es" | "fr" | "de" | "it";

export function getArticle(lang: ArticleLanguage, slug: ArticleSlug): ArticleRecord {
  return lang === "en" ? articles[slug] : fullArticleTranslations[lang][slug];
}

export function getArticleList(lang: ArticleLanguage) {
  return articleSlugs.map(slug => getArticle(lang, slug));
}
