import type { MetadataRoute } from "next";
import { sectionOrder } from "./site-data";
import { articlePublishedDates, articles, isArticleAvailableInLanguage, type ArticleSlug } from "./article-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://joyagoos.store"; const locales=["zh","de","pl","es","it","fr","pt","ro","sv"];
  const articlePaths=Object.keys(articles).map(slug=>`articles/${slug}`);
  const localizedArticlePaths=locales.flatMap(locale=>articlePaths.filter(path=>isArticleAvailableInLanguage(path.split("/")[1] as ArticleSlug,locale as Parameters<typeof isArticleAvailableInLanguage>[1])).map(path=>`${locale}/${path}`));
  const paths=["",...sectionOrder,...articlePaths,...locales,...locales.flatMap(locale=>sectionOrder.map(section=>`${locale}/${section}`)),...localizedArticlePaths];
  return paths.map((path,index)=>{const slug=path.split("/").at(-1) as ArticleSlug;const articleDate=slug in articlePublishedDates?articlePublishedDates[slug]:"2026-09-21";return {url:`${base}/${path}`,lastModified:new Date(articleDate),changeFrequency:index<5?"weekly":"monthly",priority:path===""?1:path.split("/").length===1?.8:.65};});
}
