import {getArticles} from "../article-data";
import {localPath,t,type Lang} from "../i18n";
export default function RelatedGuides({lang,slugs}:{lang:Lang;slugs:string[]}) {
  const articles=getArticles(lang).filter(a=>slugs.includes(a.slug));
  return <section className="landing-related"><h2>{t("Next useful guides",lang)}</h2><div>{articles.map(a=><a key={a.slug} href={localPath(`/articles/${a.slug}`,lang)}><strong>{a.title} →</strong><span>{a.description}</span></a>)}</div></section>;
}
