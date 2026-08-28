import { articles } from "./article-content";
import type { ArticleSlug, Lang } from "./site-data";
import { deArticleText } from "./translations/articles-de";
import { esArticleText } from "./translations/articles-es";
import { frArticleText } from "./translations/articles-fr";
import { itArticleText } from "./translations/articles-it";

export type ArticleText = {
  title: string;
  excerpt: string;
  keyword: string;
  sourceNote: string;
  imageAlt: string;
  imageCaption: string;
  sections: readonly (readonly [string, string])[];
};

function merge(text: Record<ArticleSlug, ArticleText>) {
  return Object.fromEntries(Object.entries(text).map(([slug, value]) => [slug, { ...articles[slug as ArticleSlug], ...value }])) as Record<ArticleSlug, (typeof articles)[ArticleSlug] & ArticleText>;
}

export const localizedArticles: Record<Lang, Record<ArticleSlug, (typeof articles)[ArticleSlug] & ArticleText>> = {
  en: articles,
  de: merge(deArticleText),
  es: merge(esArticleText),
  fr: merge(frArticleText),
  it: merge(itArticleText),
};
