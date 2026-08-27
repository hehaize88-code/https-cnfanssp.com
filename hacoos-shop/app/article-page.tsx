import type { Metadata } from "next";
import { articleSlugs, type ArticleSlug } from "./article-data";
import { getArticle } from "./article-locales";
import { articleRoutePath, languages, routePath, type Lang } from "./site";

export function isArticleSlug(value:string):value is ArticleSlug{return articleSlugs.includes(value as ArticleSlug)}

const ui:Record<Lang,{all:string;guide:string;updated:string;sections:string;contents:string;continue:string;browse:string;source:string;note:string;independent:string}>={
 en:{all:"All articles",guide:"HACOO FIELD GUIDE",updated:"Updated",sections:"practical sections",contents:"IN THIS GUIDE",continue:"CONTINUE RESEARCH",browse:"Browse all independent Hacoo guides.",source:"Research note",note:"Official platform facts in this article were checked against Hacoo’s website on 27 August 2026. Shipping ranges and after-sale wording may change; confirm the current official information and live destination before acting.",independent:"Independent Hacoo research desk — not the official Hacoo website."},
 es:{all:"Todos los artículos",guide:"GUÍA DE CAMPO HACOO",updated:"Actualizado",sections:"secciones prácticas",contents:"EN ESTA GUÍA",continue:"CONTINUAR LA INVESTIGACIÓN",browse:"Explora todas las guías independientes de Hacoo.",source:"Nota de investigación",note:"Los datos oficiales de la plataforma se verificaron en la web de Hacoo el 27 de agosto de 2026. Los plazos de envío y las condiciones posventa pueden cambiar; confirma siempre la información oficial vigente y el destino activo.",independent:"Mesa independiente de investigación sobre Hacoo; no es el sitio oficial."},
 fr:{all:"Tous les articles",guide:"GUIDE PRATIQUE HACOO",updated:"Mis à jour",sections:"sections pratiques",contents:"DANS CE GUIDE",continue:"POURSUIVRE LA RECHERCHE",browse:"Consultez tous les guides Hacoo indépendants.",source:"Note de recherche",note:"Les informations officielles ont été vérifiées sur le site de Hacoo le 27 août 2026. Les délais de livraison et les conditions après-vente peuvent changer; vérifiez les informations officielles actuelles et la destination active.",independent:"Bureau de recherche Hacoo indépendant — ce site n’est pas le site officiel."},
 de:{all:"Alle Artikel",guide:"HACOO-PRAXISLEITFADEN",updated:"Aktualisiert",sections:"praktische Abschnitte",contents:"IN DIESEM LEITFADEN",continue:"WEITER RECHERCHIEREN",browse:"Alle unabhängigen Hacoo-Leitfäden ansehen.",source:"Recherchehinweis",note:"Offizielle Plattformangaben wurden am 27. August 2026 auf der Hacoo-Website geprüft. Versandspannen und After-Sales-Bedingungen können sich ändern; aktuelle offizielle Angaben und das aktive Ziel immer erneut prüfen.",independent:"Unabhängiger Hacoo-Recherchebereich — keine offizielle Hacoo-Website."},
 it:{all:"Tutti gli articoli",guide:"GUIDA PRATICA HACOO",updated:"Aggiornato",sections:"sezioni pratiche",contents:"IN QUESTA GUIDA",continue:"CONTINUA LA RICERCA",browse:"Consulta tutte le guide Hacoo indipendenti.",source:"Nota di ricerca",note:"I dati ufficiali della piattaforma sono stati verificati sul sito Hacoo il 27 agosto 2026. Tempi di spedizione e condizioni post-vendita possono cambiare; verifica sempre le informazioni ufficiali attuali e la destinazione attiva.",independent:"Desk di ricerca Hacoo indipendente — non è il sito ufficiale Hacoo."}
};

export function articleMetadata(lang:Lang,slug:ArticleSlug):Metadata{
 const article=getArticle(lang,slug);
 const languageAlternates=Object.fromEntries(languages.map(code=>[code,articleRoutePath(code,slug)]));
 return {title:article.title,description:article.description,alternates:{canonical:articleRoutePath(lang,slug),languages:{...languageAlternates,"x-default":articleRoutePath("en",slug)}},robots:{index:true,follow:true},openGraph:{type:"article",title:article.title,description:article.description}};
}

export function ArticlePage({lang,slug}:{lang:Lang;slug:ArticleSlug}){
 const article=getArticle(lang,slug);
 const t=ui[lang];
 const schema={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.description,dateModified:"2026-08-27",inLanguage:lang,mainEntityOfPage:`https://hacoos.shop${articleRoutePath(lang,slug)}`,author:{"@type":"Organization",name:"Hacoos Shop Independent Research Desk"}};
 return <main id="top">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <div className="statusbar"><span>{t.independent}</span><span>Research checked 27 Aug 2026</span></div>
  <header><a href={routePath(lang,"home")} aria-label="Hacoos Shop home"><span className="brand"><b>HACOO</b><i>independent edits</i></span></a><div className="article-head-actions"><a className="back-index" href={routePath(lang,"articles")}>{t.all} →</a><details className="language"><summary>{lang.toUpperCase()} <span>⌄</span></summary><div>{languages.map(code=><a className={code===lang?"active":""} href={articleRoutePath(code,slug)} hrefLang={code} key={code}>{code.toUpperCase()}</a>)}</div></details></div></header>
  <nav className="function-bar" aria-label="Primary pages">{(["spreadsheet","categories","faq","shipping","qc","guide","articles"] as const).map((key,i)=><a className={key==="articles"?"active":""} href={routePath(lang,key)} key={key}><span>0{i+1}</span>{key.charAt(0).toUpperCase()+key.slice(1)}</a>)}</nav>
  <article className="long-article">
   <header className="article-hero"><p>{t.guide} · {article.readTime}</p><h1>{article.title}</h1><div><span>{t.updated} {article.updated}</span><span>{article.sections.length} {t.sections}</span></div></header>
   <div className="article-layout"><aside><p>{t.contents}</p><ol>{article.sections.map((section,i)=><li key={section.heading}><a href={`#section-${i+1}`}>{String(i+1).padStart(2,"0")} {section.heading}</a></li>)}</ol></aside><div className="article-body">{article.sections.map((section,i)=><section id={`section-${i+1}`} key={section.heading}><span>{String(i+1).padStart(2,"0")}</span><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}<div className="source-note"><b>{t.source}</b><p>{t.note}</p></div></div></div>
  </article>
  <section className="article-next"><p>{t.continue}</p><h2>{t.browse}</h2><a href={routePath(lang,"articles")}>{t.all} →</a></section>
  <footer><span className="brand"><b>HACOO</b><i>independent edits</i></span><p>{t.independent}</p><div>{languages.map(code=><a href={articleRoutePath(code,slug)} key={code}>{code.toUpperCase()}</a>)}</div><small>© 2026 HACOOS.SHOP / INDEPENDENT FIELD GUIDE</small></footer>
 </main>;
}
