import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { staticPages } from "../../i18n/registry";
import { languages, localizedPath, languageAlternates, translateText, type Lang } from "../../i18n/paths";
import { messages } from "../../i18n/messages";
import pageKeys from "../../i18n/page-keys.json";
import { LanguageProvider } from "../../components/language";
import PriorityArticlePage, {generateMetadata as articleMetadata} from "../../articles/[slug]/page";
import { priorityArticles } from "../../articles/priorityArticles";

type RouteParams = {lang: string; path?: string[]};
type Props = {params: Promise<RouteParams>};
const paths = [...Object.keys(staticPages), ...priorityArticles.map(a => `/articles/${a.slug}/`)];
export function generateStaticParams() {
  return languages.filter(lang => lang !== "en").flatMap(lang => paths.map(path => ({lang, path: path.split("/").filter(Boolean)})));
}
function route(params: RouteParams) {
  const lang = params.lang as Lang;
  const path = "/" + (params.path?.length ? params.path.join("/") + "/" : "");
  if (lang === "en" || !languages.includes(lang) || !paths.includes(path)) notFound();
  return {lang,path};
}
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {lang,path} = route(await params);
  const source = staticPages[path]?.metadata || await articleMetadata({params:Promise.resolve({slug:path.split("/")[2]})});
  const title = translateText(String(source.title || "FindQCs"), messages[lang]);
  const description = translateText(String(source.description || ""), messages[lang]);
  const canonical = localizedPath(path,lang);
  return { ...source, title, description, keywords: undefined,
    alternates:{canonical,languages:languageAlternates(path)},
    openGraph:{type:path.includes("/articles/")&&path!=="/articles/"||path.split("/").filter(Boolean).length>1?"article":"website",title,description,url:canonical,locale:lang,images:["/og.png"]},
    twitter:{card:"summary_large_image",title,description,images:["/og.png"]},
  };
}
export default async function LocalizedPage({params}: Props) {
  const {lang,path} = route(await params);
  const Page = staticPages[path]?.Page;
  const keys = (pageKeys as Record<string,string[]>)[path] || [];
  const pageMessages = Object.fromEntries(keys.filter(key => messages[lang][key]).map(key => [key,messages[lang][key]]));
  return <LanguageProvider lang={lang} messages={pageMessages}>
    {Page ? <Page/> : <PriorityArticlePage params={Promise.resolve({slug:path.split("/")[2]})}/>}
  </LanguageProvider>;
}
