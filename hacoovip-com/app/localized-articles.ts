import { articles } from "./article-content";
import type { ArticleSlug, Lang } from "./site-data";
import { deArticleText } from "./translations/articles-de";
import { esArticleText } from "./translations/articles-es";
import { frArticleText } from "./translations/articles-fr";
import { itArticleText } from "./translations/articles-it";
import { hvArticleTexts, hvSlug } from "./hv-decision-matrix";

export type ArticleText = {
  title: string;
  excerpt: string;
  keyword: string;
  sourceNote: string;
  imageAlt: string;
  imageCaption: string;
  sections: readonly (readonly [string, string])[];
};

function merge(text: Partial<Record<ArticleSlug, ArticleText>>, lang: Lang) {
  return Object.fromEntries(Object.entries(articles).map(([slug, value]) => [slug, { ...value, ...(text[slug as ArticleSlug] || {}), ...(slug === hvSlug ? hvArticleTexts[lang] : {}) }])) as Record<ArticleSlug, (typeof articles)[ArticleSlug] & ArticleText>;
}

export const localizedArticles: Record<Lang, Record<ArticleSlug, (typeof articles)[ArticleSlug] & ArticleText>> = {
  en: articles,
  de: merge(deArticleText, "de"),
  es: merge(esArticleText, "es"),
  fr: merge(frArticleText, "fr"),
  it: merge(itArticleText, "it"),
};
