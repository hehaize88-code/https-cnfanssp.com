import { updateExistingArticles } from "./article-updates";
import { editorialContent } from "./release-content";
import { articles } from "./article-content";
import type { ArticleSource } from "./article-content";
import type { ArticleSlug, Lang } from "./site-data";
import { deArticleText } from "./translations/articles-de";
import { esArticleText } from "./translations/articles-es";
import { frArticleText } from "./translations/articles-fr";
import { itArticleText } from "./translations/articles-it";
import { hvArticleTexts, hvSlug } from "./hv-decision-matrix";
import { hvUseCaseSlug, hvUseCaseTexts } from "./hv-use-case-criteria";
import { priorityArticleTexts, prioritySlugs } from "./hv-priority-articles";

export type ArticleText = {
  title: string;
  excerpt: string;
  keyword: string;
  sourceNote: string;
  imageAlt: string;
  imageCaption: string;
  sections: readonly (readonly [string, string])[];
};
export type LocalizedArticle = ArticleText & { image: string; sources: readonly ArticleSource[]; published?: string; modified?: string };

function merge(text: Partial<Record<ArticleSlug, ArticleText>>, lang: Lang) {
  return Object.fromEntries(Object.entries(articles).map(([slug, value]) => [slug, { ...value, ...(text[slug as ArticleSlug] || {}), ...(slug === hvSlug ? hvArticleTexts[lang] : {}), ...(slug === hvUseCaseSlug ? hvUseCaseTexts[lang] : {}), ...(prioritySlugs.includes(slug as never) ? priorityArticleTexts[lang][slug as (typeof prioritySlugs)[number]] : {}), ...editorialContent(lang, slug) }])) as unknown as Record<ArticleSlug, LocalizedArticle>;
}

export const localizedArticles: Record<Lang, Record<ArticleSlug, LocalizedArticle>> = {
  en: merge({}, "en"),
  de: merge(deArticleText, "de"),
  es: merge(esArticleText, "es"),
  fr: merge(frArticleText, "fr"),
  it: merge(itArticleText, "it"),
};

updateExistingArticles(localizedArticles);
