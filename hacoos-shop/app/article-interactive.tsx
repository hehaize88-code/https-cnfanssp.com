"use client";

import { articles, type ArticleSlug } from "./article-data";
import { Footer, Header, MAIN, localizedSections, type Locale } from "./site-data";
import type { SiteLanguage } from "./i18n";
import { commonUi } from "./full-translations";
import { useLanguage } from "./use-language";
import { articleTranslations } from "./article-translations";
import { completeTranslations } from "./generated-translations";

const slugIndex: Record<ArticleSlug, number> = { "joyagoo-how-to-buy-guide":0, "joyagoo-qc-photo-checklist":1, "joyagoo-actual-vs-volumetric-weight":2, "joyagoo-link-verification-guide":3 };
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

export function ArticleInteractive({ slug, language = "en" }: { slug: ArticleSlug; language?: SiteLanguage }) {
  const { language:activeLanguage, setLanguage } = useLanguage(language);
  const article = articles[slug];
  const active = activeLanguage === "en" ? undefined : activeLanguage as Locale;
  const local = active ? localizedSections[active].articles : null;
  const translatedArticle = active ? completeTranslations[active].articles[slug] : null;
  const curatedChinese = active === "zh" ? articleTranslations.zh?.[slug] : null;
  const prefix = "";
  const ui = articleUi[activeLanguage];
  const title = local?.blocks[slugIndex[slug]] || article.title;
  const sections = translatedArticle ? translatedArticle.sections.map(([sectionTitle,text],index) => [curatedChinese?.sections[index]?.[0] || sectionTitle,text] as const) : article.sections;
  const description = translatedArticle?.description || local?.intro || article.description;
  const readTime = active ? `${article.read.match(/\d+/)?.[0]} ${commonUi[active].minutes}` : article.read;
  return <main><Header prefix={prefix} locale={active} language={activeLanguage} onLanguageChange={setLanguage} section="articles"/><article className="article-page"><header><p className="eyebrow">{ui.kicker}</p><h1>{title}</h1><div><span>{ui.updated} {active ? "2026-08-29" : article.updated}</span><span>{readTime}</span></div><p>{description}</p></header><div className="article-body"><aside><strong>{ui.guide}</strong>{sections.map(([sectionTitle],i)=><a href={`#section-${i+1}`} key={sectionTitle}>0{i+1} {sectionTitle}</a>)}</aside><div>{sections.map(([sectionTitle,text],i)=><section id={`section-${i+1}`} key={sectionTitle}><span>0{i+1}</span><h2>{sectionTitle}</h2><p>{text}</p></section>)}</div></div><div className="article-sources"><p className="eyebrow">{ui.sources}</p>{article.sources.map((source,index)=><a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{curatedChinese?.sources[index] || translatedArticle?.sources[index]?.title || source.title} ↗</a>)}</div><div className="article-end"><h2>{ui.end}</h2><a href={MAIN+"/AllProducts/"} target="_blank" rel="noreferrer">{ui.browse}</a></div></article><Footer prefix={prefix} language={activeLanguage} onLanguageChange={setLanguage} section="articles"/></main>;
}
