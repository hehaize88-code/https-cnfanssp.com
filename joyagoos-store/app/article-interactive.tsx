"use client";

import { articles, type ArticleSlug } from "./article-data";
import { Footer, Header, MAIN, localizedSections, type Locale } from "./site-data";
import type { SiteLanguage } from "./i18n";
import { commonUi } from "./full-translations";
import { useLanguage } from "./use-language";
import { articleTranslations } from "./article-translations";
import { completeTranslations } from "./generated-translations";
import { buyerFacingText, getArticleCopy } from "./article-content";
import { localizedPath, SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "./seo";

const articleUi: Record<SiteLanguage, { kicker:string; updated:string; guide:string; sources:string; end:string; browse:string }> = {
  en:{kicker:"JOYAGOO EDITORIAL / VERIFIED GUIDE",updated:"Updated",guide:"In this guide",sources:"Primary sources",end:"Continue with a matched product route.",browse:"Browse products ↗"},
  zh:{kicker:"JOYAGOO 编辑中心 / 核验指南",updated:"更新于",guide:"本指南内容",sources:"主要官方来源",end:"继续查看对应的商品路径。",browse:"浏览商品 ↗"},
  de:{kicker:"JOYAGOO REDAKTION / GEPRÜFTER GUIDE",updated:"Aktualisiert",guide:"In diesem Guide",sources:"Offizielle Hauptquellen",end:"Mit einer passenden Produktroute fortfahren.",browse:"Produkte ansehen ↗"},
  pl:{kicker:"JOYAGOO REDAKCJA / SPRAWDZONY PORADNIK",updated:"Aktualizacja",guide:"W tym poradniku",sources:"Główne źródła oficjalne",end:"Przejdź do pasującej strony produktu.",browse:"Przeglądaj produkty ↗"},
  es:{kicker:"JOYAGOO EDITORIAL / GUÍA VERIFICADA",updated:"Actualizado",guide:"En esta guía",sources:"Fuentes oficiales principales",end:"Continúa con una ruta de producto coincidente.",browse:"Ver productos ↗"},
  it:{kicker:"JOYAGOO EDITORIALE / GUIDA VERIFICATA",updated:"Aggiornato",guide:"In questa guida",sources:"Fonti ufficiali principali",end:"Continua con un prodotto corrispondente.",browse:"Vedi prodotti ↗"},
  fr:{kicker:"JOYAGOO ÉDITORIAL / GUIDE VÉRIFIÉ",updated:"Mis à jour",guide:"Dans ce guide",sources:"Sources officielles principales",end:"Continuez avec une page produit correspondante.",browse:"Voir les produits ↗"},
  pt:{kicker:"JOYAGOO EDITORIAL / GUIA VERIFICADO",updated:"Atualizado",guide:"Neste guia",sources:"Principais fontes oficiais",end:"Continue com uma rota de produto correspondente.",browse:"Ver produtos ↗"},
  ro:{kicker:"JOYAGOO EDITORIAL / GHID VERIFICAT",updated:"Actualizat",guide:"În acest ghid",sources:"Surse oficiale principale",end:"Continuă cu o pagină de produs corespunzătoare.",browse:"Vezi produsele ↗"},
  sv:{kicker:"JOYAGOO REDAKTION / VERIFIERAD GUIDE",updated:"Uppdaterad",guide:"I den här guiden",sources:"Viktigaste officiella källor",end:"Fortsätt med en matchande produktsida.",browse:"Visa produkter ↗"},
};

export function ArticleInteractive({ slug, language = "en", prefix = "" }: { slug: ArticleSlug; language?: SiteLanguage; prefix?: string }) {
  const { language:activeLanguage, setLanguage } = useLanguage(language);
  const article = articles[slug];
  const active = activeLanguage === "en" ? undefined : activeLanguage as Locale;
  const translatedArticle = active ? completeTranslations[active].articles[slug] : null;
  const curatedChinese = active === "zh" ? articleTranslations.zh?.[slug] : null;
  const ui = articleUi[activeLanguage];
  const activeCopy = getArticleCopy(slug, activeLanguage);
  const initialCopy = getArticleCopy(slug, language);
  const title = activeCopy.title;
  const sections = translatedArticle
    ? translatedArticle.sections.map(([sectionTitle,text],index) => [buyerFacingText(curatedChinese?.sections[index]?.[0] || sectionTitle, activeLanguage), buyerFacingText(text, activeLanguage)] as const)
    : article.sections;
  const description = activeCopy.description;
  const readTime = active ? `${article.read.match(/\d+/)?.[0]} ${commonUi[active].minutes}` : article.read;
  const canonical = `${SITE_URL}${localizedPath(`/articles/${slug}`, language)}`;
  const schema = {
    "@context":"https://schema.org",
    "@type":"Article",
    headline:initialCopy.title,
    description:initialCopy.description,
    inLanguage:language,
    datePublished:"2026-08-29",
    dateModified:"2026-08-29",
    image:`${SITE_URL}${SOCIAL_IMAGE}`,
    author:{"@type":"Organization",name:SITE_NAME,url:SITE_URL},
    publisher:{"@type":"Organization",name:SITE_NAME,logo:{"@type":"ImageObject",url:`${SITE_URL}${SOCIAL_IMAGE}`}},
    mainEntityOfPage:{"@type":"WebPage","@id":canonical},
    citation:article.sources.map((source)=>source.href),
  };
  const breadcrumb = {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:`${SITE_URL}${localizedPath("/",language)}`},
      {"@type":"ListItem",position:2,name:language === "en" ? "Articles" : localizedSections[language as Locale].articles.title,item:`${SITE_URL}${localizedPath("/articles",language)}`},
      {"@type":"ListItem",position:3,name:initialCopy.title,item:canonical},
    ],
  };
  return <main><Header prefix={prefix} locale={active} language={activeLanguage} onLanguageChange={setLanguage} section="articles"/><article className="article-page"><header><p className="eyebrow">{ui.kicker}</p><h1>{title}</h1><div><span>{ui.updated} {active ? "2026-08-29" : article.updated}</span><span>{readTime}</span></div><p>{description}</p></header><div className="article-body"><aside><strong>{ui.guide}</strong>{sections.map(([sectionTitle],i)=><a href={`#section-${i+1}`} key={sectionTitle}>0{i+1} {sectionTitle}</a>)}</aside><div>{sections.map(([sectionTitle,text],i)=><section id={`section-${i+1}`} key={sectionTitle}><span>0{i+1}</span><h2>{sectionTitle}</h2><p>{text}</p></section>)}</div></div><div className="article-sources"><p className="eyebrow">{ui.sources}</p>{article.sources.map((source,index)=><div className="source-reference" key={source.href}><strong>{curatedChinese?.sources[index] || translatedArticle?.sources[index]?.title || source.title}</strong><span>{source.href}</span></div>)}</div><div className="article-end"><h2>{ui.end}</h2><a href={MAIN+"/AllProducts/"} target="_blank" rel="noreferrer">{ui.browse}</a></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb).replace(/</g,"\\u003c")}}/></article><Footer prefix={prefix} language={activeLanguage} onLanguageChange={setLanguage} section="articles"/></main>;
}
