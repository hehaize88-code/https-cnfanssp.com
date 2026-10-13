import { categories, copy, facts, languageNames, languages, nav, pageIntro, products, uiText, type Lang, type PageKey } from "./site-data";
import { locale, officialFacts, type OfficialFactKey, type StepKey } from "./locale-data";
import { seoArticleSlugs, type SeoArticle } from "./seo-articles";
import { articleUi, getLocalizedSeoArticle, getLocalizedSeoArticles } from "./seo-article-locales";
import { trustNav, trustPageKeys, trustPages } from "./trust-data";
import { guideGroups, hubCopy, refreshUi, articleGroup } from "./seo-refresh";
import { articleDates, formatArticleDate } from "./article-dates";
import WeightCalculator from "./weight-calculator";

const basePages=["spreadsheet","finds","guide","qc","shipping","faq","articles"] as const;
function JsonLd({data}:{data:object}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}}/>;}
function pathFor(lang:Lang,page:PageKey){if(page==="home")return `/${lang}/`;if(seoArticleSlugs.includes(page)){return `/${lang}/articles/${page}/`;}return `/${lang}/${page}/`;}
function Logo({lang}:{lang:Lang}){return <a className="wordmark" href={pathFor(lang,"home")} aria-label={uiText[lang].home}><img src="/joyagoo-logo.png" width="768" height="235" alt="Joyagoo"/></a>;}
function Search({lang}:{lang:Lang}){const t=copy[lang];return <form className="search-panel" role="search" action="https://cnfanssp.com/search.html" method="get"><label htmlFor={`product-search-${lang}`}>{t.search as string}</label><div className="search-row"><input id={`product-search-${lang}`} type="search" name="keywords" placeholder={t.placeholder as string} enterKeyHint="search" required/><input type="hidden" name="channelid" value="2"/><button type="submit">{t.searchButton as string} <span>→</span></button></div></form>;}
function Header({lang,page}:{lang:Lang;page:PageKey}){const article=seoArticleSlugs.includes(page),ui=uiText[lang];return <><header className="site-header"><Logo lang={lang}/><nav className="desktop-nav" aria-label={ui.primaryNav}>{basePages.map(key=><a className={page===key||(key==="articles"&&article)?"active":""} href={pathFor(lang,key)} key={key}>{nav[lang][key]}</a>)}</nav><details className="language-menu"><summary>{lang.toUpperCase()}</summary><div>{languages.map(code=><a href={pathFor(code,page)} lang={code} key={code}>{languageNames[code]}</a>)}</div></details></header><nav className="mobile-nav" aria-label={ui.mobileNav}>{basePages.map(key=><a className={page===key||(key==="articles"&&article)?"active":""} href={pathFor(lang,key)} key={key}>{nav[lang][key]}</a>)}</nav></>;}
function Footer({lang}:{lang:Lang}){return <footer className="site-footer"><Logo lang={lang}/><p>{copy[lang].disclaimer as string}</p><div><a href={pathFor(lang,"articles")}>{nav[lang].articles}</a><a href={pathFor(lang,"faq")}>{nav[lang].faq}</a>{trustPageKeys.map(key=><a href={pathFor(lang,key)} key={key}>{trustNav[lang][key]}</a>)}<span>© 2026</span></div></footer>;}
function productCategory(lang:Lang,type:string){const index=categories.findIndex(([name])=>name===type);return locale[lang].categories[index]??type;}
function productName(lang:Lang,name:string,type:string){return `${productCategory(lang,type)}-${name.split("-").at(-1)}`;}
function ProductGrid({lang}:{lang:Lang}){const l=locale[lang],ui=uiText[lang];return <div className="product-grid">{products.map((product,index)=>{const category=productCategory(lang,product.type),name=productName(lang,product.name,product.type);return <article className="product-card" key={product.href}><a href={product.href}><div className="product-image"><img src={product.image} width="640" height="640" loading="lazy" alt={`${category} ${ui.listingSample}`}/><span>0{index+1}</span></div><div className="product-meta"><small>{category}</small><h3>{name}</h3><p>{l.exact}</p><b>{l.details} ↗</b></div></a></article>;})}</div>;}
function CategoryGrid({lang}:{lang:Lang}){const l=locale[lang];return <div className="category-grid">{categories.map(([,href,number],index)=><a href={href} key={href}><span>{number}</span><strong>{l.categories[index]}</strong><b>↗</b></a>)}</div>;}
const pageFactKeys:Record<StepKey,OfficialFactKey[]>={spreadsheet:["serviceFee","orderFlow","qcPhotos","restrictions"],guide:["serviceFee","orderFlow","returnCost","coupon","customs"],qc:["qcPhotos","returnWindow","returnCost","damageEvidence"],shipping:["storage","rehearsal","chargeableWeight","routeRules","insurance","customs","tracking"]};
function ResearchGrid({lang,page}:{lang:Lang;page:StepKey}){const heading={en:"What the official guidance actually says",de:"Was die offizielle Anleitung wirklich sagt",es:"Lo que realmente dice la guía oficial",fr:"Ce que dit réellement le guide officiel",it:"Cosa dice davvero la guida ufficiale"}[lang];const kicker={en:"OFFICIAL RESEARCH / 2026",de:"OFFIZIELLE RECHERCHE / 2026",es:"INVESTIGACIÓN OFICIAL / 2026",fr:"RECHERCHE OFFICIELLE / 2026",it:"RICERCA UFFICIALE / 2026"}[lang];return <section className="research-section"><div className="section-kicker"><span>{kicker}</span><h2>{heading}</h2></div><div className="research-grid">{pageFactKeys[page].map((key,index)=>{const fact=officialFacts[lang][key];return <article key={key}><span>0{index+1}</span><h3>{fact.title}</h3><p>{fact.body}</p><small>{fact.source}</small></article>;})}</div></section>;}

function articleImage(slug:string) {
  if(/qc|size|return/.test(slug))return "tshirt.webp";
  if(/shipping|tracking|storage|rehearsal/.test(slug))return "jacket.webp";
  if(/weight|categories/.test(slug))return "shoes.webp";
  return "accessories.webp";
}
function readingMinutes(article:SeoArticle) {
  const words=article.sections.flatMap(section=>section.paragraphs).join(" ").trim().split(/\s+/).length;
  return Math.max(1,Math.ceil(words/200));
}
function ArticleCards({lang,group,slugs,exclude,limit=4,title}:{lang:Lang;group?:string;slugs?:string[];exclude?:string;limit?:number;title?:string}) {
  const ui=refreshUi[lang];
  const items=(slugs??guideGroups[group??"home"]??[]).filter(slug=>slug!==exclude).slice(0,limit).map(slug=>getLocalizedSeoArticle(slug,lang)).filter((item):item is SeoArticle=>Boolean(item));
  return <section className="guide-section">
    <div className="guide-section-heading"><h2>{title??(group==="home"?ui.latest:ui.related)}</h2><a href={pathFor(lang,"articles")}>{ui.all} →</a></div>
    <div className="guide-cards">{items.map(item=><a className="guide-card" href={pathFor(lang,item.slug as PageKey)} key={item.slug}>
      <img src={`/products/${articleImage(item.slug)}`} width="480" height="480" loading="lazy" alt=""/>
      <div className="guide-card-copy"><small>{readingMinutes(item)} {ui.minutes}</small><h3>{item.title}</h3><p>{item.description}</p><b>{ui.read} →</b></div>
    </a>)}</div>
  </section>;
}

function Home({lang}:{lang:Lang}){const t=copy[lang],l=locale[lang],ui=uiText[lang],hero=["Joyagoo", "Spreadsheet", {en:"Finds & guides",de:"Finds & Ratgeber",es:"Finds y guías",fr:"Finds et guides",it:"Finds e guide"}[lang]];return <>
  <JsonLd data={{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://joyagoos.org/#website",url:"https://joyagoos.org/",name:"Joyagoos",description:hubCopy[lang].home[1],inLanguage:lang,publisher:{"@id":"https://joyagoos.org/#organization"}},{"@type":"Organization","@id":"https://joyagoos.org/#organization",name:"Joyagoos Editorial",url:"https://joyagoos.org/en/about/",logo:{"@type":"ImageObject",url:"https://joyagoos.org/joyagoo-logo.png"},description:"Independent Joyagoo buyer-policy and risk research guide; not affiliated with or operated by Joyagoo."}]}}/>
  <section className="hero"><div className="hero-copy"><div className="eyebrow"><span>{t.eyebrow as string}</span><b>{ui.indexLabel} / 2026</b></div><h1><span>{hero[0]}</span><em>{hero[1]}</em><span>{hero[2]}</span></h1><p className="hero-lede">{hubCopy[lang].home[1]}</p><Search lang={lang}/><div className="hero-notes">{l.route.slice(0,3).map((item,index)=><span key={item}>0{index+1} · {item}</span>)}</div></div>
  <aside className="hero-board" aria-label={l.live}><div className="hero-board-heading"><span>{l.live}</span><b>03 / {l.checked}</b></div><div className="hero-lookbook">{products.slice(0,3).map((product,index)=>{const category=productCategory(lang,product.type),name=productName(lang,product.name,product.type);return <a href={product.href} className={`snapshot-image card-${index+1}`} key={product.href}><img src={product.image} alt={`${category} ${ui.listingSample}`} width="560" height="560"/><span><small>0{index+1} / {category}</small><b>{name}</b><i>↗</i></span></a>;})}</div><div className="product-snapshot"><span>{l.live}</span><b>{l.checked}</b></div></aside></section>
  <section className="route-strip route-strip--wide">{l.route.map((item,index)=><span key={item}><b>0{index+1}</b>{item}{index<l.route.length-1&&<i>→</i>}</span>)}</section>
  <section className="category-rack"><div className="section-kicker"><span>01 / {t.productRoutes as string}</span><h2>{t.productHeading as string}</h2></div><CategoryGrid lang={lang}/></section>
  <section className="home-products"><div className="section-kicker"><span>{l.productsKicker}</span><h2>{l.productsTitle}</h2></div><ProductGrid lang={lang}/></section>
  <section className="manual-section"><div className="manual-heading"><span>04 / {t.verified as string}</span><h2>{t.verifiedHeading as string}</h2><p>{t.verifiedText as string}</p></div><div className="fact-grid">{facts.map(([value],index)=><article key={value}><strong>{value}</strong><p>{l.facts[index]}</p></article>)}</div></section>
  <ArticleCards lang={lang} group="home"/>
  </>;}

function PageHero({lang,page}:{lang:Lang;page:typeof basePages[number]}){const [kicker,originalTitle,originalDescription]=pageIntro[lang][page];const [title,description]=hubCopy[lang][page]??[originalTitle,originalDescription];return <section className="page-hero"><span>{kicker}</span><h1>{title}</h1><p>{description}</p></section>;}
function StepPage({lang,page}:{lang:Lang;page:StepKey}){const l=locale[lang];return <><PageHero lang={lang} page={page}/><section className="step-layout"><div className="steps">{l.steps[page].map((item,index)=><article key={item}><span>0{index+1}</span><h2>{item}</h2><p>{l.stepNote}</p></article>)}</div><aside className="desk-note"><span>{l.deskRule}</span><h2>{l.deskTitles[page]}</h2><p>{copy[lang].verifiedText as string}</p><a href={page==="shipping"?pathFor(lang,"volumetric-weight-guide"):"https://cnfanssp.com/AllProducts/"}>{page==="shipping"?l.readWeight:l.openIndex} ↗</a></aside></section><ResearchGrid lang={lang} page={page}/>{page==="spreadsheet"&&<section className="category-rack"><div className="section-kicker"><span>{copy[lang].productRoutes as string}</span><h2>{copy[lang].productHeading as string}</h2></div><CategoryGrid lang={lang}/></section>}{(page==="guide"||page==="spreadsheet")&&<section className="search-section"><div><span>{l.searchDesk}</span><h2>{l.searchTitle}</h2></div><Search lang={lang}/></section>}{page==="shipping"&&<WeightCalculator lang={lang}/>}<ArticleCards lang={lang} group={page}/></>;}
function Finds({lang}:{lang:Lang}){const l=locale[lang];return <><PageHero lang={lang} page="finds"/><ProductGrid lang={lang}/><section className="search-section"><div><span>{l.searchDesk}</span><h2>{l.moreProducts}</h2></div><Search lang={lang}/></section><ArticleCards lang={lang} group="finds"/></>;}
function FAQ({lang}:{lang:Lang}){const items=locale[lang].faq;return <><JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}}/><PageHero lang={lang} page="faq"/><section className="faq-list">{items.map(([q,a],index)=><details key={q} open={index===0}><summary><span>0{index+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section></>;}
function Articles({lang}:{lang:Lang}) {
  return <><PageHero lang={lang} page="articles"/><ArticleCards lang={lang} slugs={getLocalizedSeoArticles(lang).map(item=>item.slug)} limit={100} title={refreshUi[lang].all}/></>;
}
function SeoArticlePage({lang,slug}:{lang:Lang;slug:string}) {
  const article=getLocalizedSeoArticle(slug,lang),ui=articleUi[lang],labels=refreshUi[lang];
  if(!article)return null;
  const url=`https://joyagoos.org/${lang}/articles/${slug}/`,image=`https://joyagoos.org/products/${articleImage(slug)}`;
  const dates=articleDates(slug,lang),group=articleGroup(slug);
  return <article className="long-article seo-article" lang={lang}>
    <JsonLd data={{"@context":"https://schema.org","@graph":[{"@type":"Article",headline:article.title,description:article.description,datePublished:dates.published,dateModified:dates.modified,inLanguage:lang,url,mainEntityOfPage:{"@type":"WebPage","@id":url},image,author:{"@type":"Organization",name:"Joyagoos Editorial",url:`https://joyagoos.org/${lang}/about/`},publisher:{"@type":"Organization",name:"Joyagoos Editorial",url:`https://joyagoos.org/${lang}/about/`,logo:{"@type":"ImageObject",url:"https://joyagoos.org/joyagoo-logo.png"}}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Joyagoos",item:`https://joyagoos.org/${lang}/`},{"@type":"ListItem",position:2,name:nav[lang].articles,item:`https://joyagoos.org/${lang}/articles/`},{"@type":"ListItem",position:3,name:article.title,item:url}]}]}}/>
    <header><span>{labels.updated} <time dateTime={dates.modified}>{formatArticleDate(dates.modified,lang)}</time> · {readingMinutes(article)} {labels.minutes}</span><h1>{article.title}</h1><p className="standfirst">{article.description}</p><small className="source-note">{article.sourceNote}</small></header>
    <div className="article-body"><aside><b>{ui.quick}</b><ol>{article.quickFacts.map(item=><li key={item}>{item}</li>)}</ol>
      <details className="article-toc"><summary>{labels.contents}</summary><nav aria-label={labels.contents}><ol>{article.sections.map((section,index)=><li key={section.heading}><a href={`#section-${index+1}`}>{section.heading}</a></li>)}</ol></nav></details>
      <a href={pathFor(lang,group as PageKey)}>{nav[lang][group]} →</a>
    </aside><div>{article.sections.map((section,index)=><section id={`section-${index+1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div></div>
    {slug==="volumetric-weight-guide"&&<WeightCalculator lang={lang}/>}
    <ArticleCards lang={lang} group={group} exclude={slug} limit={3}/>
    <footer><a href={pathFor(lang,"articles")}>← {ui.back}</a><a href="https://cnfanssp.com/AllProducts/">{ui.products} ↗</a></footer>
  </article>;
}

function TrustPageView({lang,page}:{lang:Lang;page:typeof trustPageKeys[number]}){const content=trustPages[lang][page],url=`https://joyagoos.org/${lang}/${page}/`;return <><JsonLd data={{"@context":"https://schema.org","@type":"WebPage",url,name:content.title,description:content.description,inLanguage:lang,isPartOf:{"@id":"https://joyagoos.org/#website"},publisher:{"@id":"https://joyagoos.org/#organization"}}}/><section className="page-hero trust-hero"><span>{content.kicker}</span><h1>{content.title}</h1><p>{content.description}</p></section><article className="trust-content">{content.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</article></>;}

export function SitePage({lang,page}:{lang:Lang;page:PageKey}){let content;if(page==="home")content=<Home lang={lang}/>;else if(page==="finds")content=<Finds lang={lang}/>;else if(page==="faq")content=<FAQ lang={lang}/>;else if(page==="articles")content=<Articles lang={lang}/>;else if(trustPageKeys.includes(page as typeof trustPageKeys[number]))content=<TrustPageView lang={lang} page={page as typeof trustPageKeys[number]}/>;else if(seoArticleSlugs.includes(page))content=<SeoArticlePage lang={lang} slug={page}/>;else content=<StepPage lang={lang} page={page as StepKey}/>;return <main lang={lang}><Header lang={lang} page={page}/>{content}<Footer lang={lang}/></main>;}
