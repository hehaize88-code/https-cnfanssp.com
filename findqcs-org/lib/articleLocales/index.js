import { plArticles, plArticleSources, plArticleUi } from "./pl.js";
import { esArticles, esArticleSources, esArticleUi } from "./es.js";
import { deArticles, deArticleSources, deArticleUi } from "./de.js";
import { roArticles, roArticleSources, roArticleUi } from "./ro.js";
import { mappedIndexLocales } from "./seo60MappedIndex.js";

export const ARTICLE_LOCALES = {
  pl: { ...plArticles, "mapped-findqc-product-index-without-recommendation": mappedIndexLocales.pl },
  es: { ...esArticles, "mapped-findqc-product-index-without-recommendation": mappedIndexLocales.es },
  de: { ...deArticles, "mapped-findqc-product-index-without-recommendation": mappedIndexLocales.de },
  ro: { ...roArticles, "mapped-findqc-product-index-without-recommendation": mappedIndexLocales.ro },
};

export const ARTICLE_SOURCE_LOCALES = {
  pl: plArticleSources,
  es: esArticleSources,
  de: deArticleSources,
  ro: roArticleSources,
};

export const ARTICLE_UI_LOCALES = {
  pl: plArticleUi,
  es: esArticleUi,
  de: deArticleUi,
  ro: roArticleUi,
};
