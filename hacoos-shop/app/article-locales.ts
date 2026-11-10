import { articles, articleSlugs, type ArticleRecord, type ArticleSlug } from "./article-data";
import es from "../content/articles/es.json";
import fr from "../content/articles/fr.json";
import de from "../content/articles/de.json";
import it from "../content/articles/it.json";

export type ArticleLanguage = "en" | "es" | "fr" | "de" | "it";
const localized: Record<ArticleLanguage, Record<ArticleSlug, ArticleRecord>> = {
  en: articles, es: es as Record<ArticleSlug, ArticleRecord>,
  fr: fr as Record<ArticleSlug, ArticleRecord>, de: de as Record<ArticleSlug, ArticleRecord>,
  it: it as Record<ArticleSlug, ArticleRecord>,
};
export const localizedArticleSlugs: ArticleSlug[] = [...articleSlugs];
export function hasLocalizedArticle(slug: ArticleSlug) { return localizedArticleSlugs.includes(slug); }
export function getArticle(lang: ArticleLanguage, slug: ArticleSlug): ArticleRecord {
  const article = localized[lang][slug];
  if (!article) throw new Error(`Missing ${lang} article: ${slug}`);
  return article;
}
export function getArticleList(lang: ArticleLanguage) {
  return articleSlugs.map(slug => getArticle(lang, slug));
}
