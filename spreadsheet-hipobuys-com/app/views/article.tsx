import GuideLayout from "../components/GuideLayout";
import ShippingCalculator from "../components/ShippingCalculator";
import { getArticles, type Article } from "../article-data";
import { baseUrl,localPath,t,type Lang } from "../i18n";
export default function ArticlePage({article,lang}:{article:Article;lang:Lang}) {
  const path=`/articles/${article.slug}`;
  const url=baseUrl+localPath(path,lang);
  const related=getArticles(lang).filter(a=>article.related.includes(a.slug));
  const schema={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.description,inLanguage:lang,datePublished:article.published,dateModified:article.updated,author:{"@type":"Organization",name:"Hipo Index"},publisher:{"@type":"Organization",name:"Hipo Index",logo:{"@type":"ImageObject",url:baseUrl+"/hipobuy-logo.png"}},mainEntityOfPage:url,image:[baseUrl+"/og.png"]};
  const breadcrumbs={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{name:t("Home",lang),item:baseUrl+localPath("/",lang)},{name:t("Articles",lang),item:baseUrl+localPath("/articles",lang)},{name:article.title,item:url}].map((x,i)=>({"@type":"ListItem",position:i+1,...x}))};
  return <GuideLayout lang={lang} path={path} kicker={article.kicker} title={article.title} intro={article.summary}>
    <article className="long-article">
      <nav className="breadcrumbs"><a href={localPath("/",lang)}>{t("Home",lang)}</a><span>/</span><a href={localPath("/articles",lang)}>{t("Articles",lang)}</a></nav>
      <div className="article-meta"><span>{t("Published",lang)} <time dateTime={article.published}>{article.published}</time></span><span>{t("Updated",lang)} <time dateTime={article.updated}>{article.updated}</time></span><span>{article.readTime}</span><span>{t("Independent guide",lang)}</span></div>
      <div className="article-layout"><aside className="article-toc"><p>{t("On this page",lang)}</p><ol>{article.sections.map((s,i)=><li key={i}><a href={`#section-${i+1}`}><span>{String(i+1).padStart(2,"0")}</span>{s.heading}</a></li>)}{article.slug==="hipobuy-shipping-cost-guide"?<li><a href="#shipping-calculator">{t("Shipping cost worksheet",lang)}</a></li>:null}</ol></aside>
        <div className="article-prose">{article.sections.map((section,i)=><section id={`section-${i+1}`} key={i}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,j)=><p key={j}>{paragraph}</p>)}</section>)}
          {article.slug==="hipobuy-shipping-cost-guide"?<ShippingCalculator lang={lang}/>:null}
          <section className="article-sources"><p className="section-kicker">{t("Reviewed",lang)} · <time dateTime={article.updated}>{article.updated}</time></p><h2>{t("Research notes",lang)}</h2><ul>{article.sources.map(source=><li key={source.label}><strong>{source.label}</strong><span>{source.note}{source.url?<small className="source-address">{source.url}</small>:null}</span></li>)}</ul></section>
          <section className="related-articles"><h2>{t("Next useful guides",lang)}</h2><ul>{related.map(a=><li key={a.slug}><a href={localPath(`/articles/${a.slug}`,lang)}>{a.title} →</a></li>)}</ul></section>
          <div className="article-next"><div><p className="section-kicker">{t("Continue checking",lang)}</p><h2>{t("Use the guide, then verify the live listing.",lang)}</h2></div><div><a href={localPath("/articles",lang)}>{t("All articles",lang)}</a><a href="https://cnfanssp.com/AllProducts/">{t("Browse current catalog ↗",lang)}</a></div></div>
        </div></div>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbs).replace(/</g,"\\u003c")}}/>
  </GuideLayout>;
}
