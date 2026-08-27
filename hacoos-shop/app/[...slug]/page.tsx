import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage, buildMetadata, parseRoute, validRouteParams } from "../site";
import { ArticlePage, articleMetadata, isArticleSlug } from "../article-page";
import { articleSlugs } from "../article-data";
import { languages, type Lang } from "../site";

type Props = { params: Promise<{ slug: string[] }> };
export function generateStaticParams() { return [...validRouteParams(),...languages.flatMap(lang=>articleSlugs.map(slug=>({slug:lang==="en"?["articles",slug]:[lang,"articles",slug]})))]; }
function parseArticle(values:string[]):{lang:Lang;slug:(typeof articleSlugs)[number]}|null{
 if(values.length===2&&values[0]==="articles"&&isArticleSlug(values[1]))return{lang:"en",slug:values[1]};
 const lang=values[0] as Lang;
 if(values.length===3&&languages.includes(lang)&&lang!=="en"&&values[1]==="articles"&&isArticleSlug(values[2]))return{lang,slug:values[2]};
 return null;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const values=(await params).slug;
  const article=parseArticle(values);if(article)return articleMetadata(article.lang,article.slug);
  const route = parseRoute(values);
  return route ? buildMetadata(route.lang, route.page) : {};
}
export default async function RoutedPage({ params }: Props) {
  const values=(await params).slug;
  const article=parseArticle(values);if(article)return <ArticlePage lang={article.lang} slug={article.slug}/>;
  const route = parseRoute(values);
  if (!route) notFound();
  return <SitePage lang={route.lang} page={route.page} />;
}
