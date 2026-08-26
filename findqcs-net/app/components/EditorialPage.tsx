"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type Lang = "en" | "de" | "fr" | "es" | "it";
const ui = {
  en:{search:"Search",categories:"Categories",articles:"SEO Articles",guide:"QC Guide",faq:"FAQ",home:"Home",footer:"Independent QC research and product discovery.",privacy:"Privacy",disclaimer:"Disclaimer",lang:"Language"},
  de:{search:"Suche",categories:"Kategorien",articles:"SEO-Artikel",guide:"QC-Ratgeber",faq:"FAQ",home:"Startseite",footer:"Unabhängige QC-Recherche und Produktsuche.",privacy:"Datenschutz",disclaimer:"Hinweise",lang:"Sprache"},
  fr:{search:"Recherche",categories:"Catégories",articles:"Articles SEO",guide:"Guide QC",faq:"FAQ",home:"Accueil",footer:"Recherche QC et découverte produit indépendantes.",privacy:"Confidentialité",disclaimer:"Avertissement",lang:"Langue"},
  es:{search:"Buscar",categories:"Categorías",articles:"Artículos SEO",guide:"Guía QC",faq:"FAQ",home:"Inicio",footer:"Investigación QC y descubrimiento independientes.",privacy:"Privacidad",disclaimer:"Aviso",lang:"Idioma"},
  it:{search:"Cerca",categories:"Categorie",articles:"Articoli SEO",guide:"Guida QC",faq:"FAQ",home:"Home",footer:"Ricerca QC indipendente e scoperta prodotti.",privacy:"Privacy",disclaimer:"Avvertenze",lang:"Lingua"},
} as const;

export function EditorialPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  const [lang,setLang]=useState<Lang>("en");
  const [translating,setTranslating]=useState(false);
  const pageRef=useRef<HTMLElement>(null);
  const originals=useRef(new Map<HTMLElement,string>());
  useEffect(()=>{const saved=localStorage.getItem("findqcs-lang") as Lang|null;if(saved&&ui[saved]){setLang(saved);document.documentElement.lang=saved}},[]);
  function change(next:Lang){setLang(next);localStorage.setItem("findqcs-lang",next);document.documentElement.lang=next;}
  const t=ui[lang];
  useEffect(()=>{
    const root=pageRef.current;if(!root)return;
    const nodes=Array.from(root.querySelectorAll<HTMLElement>(".editorial-hero h1,.editorial-hero>p,.editorial-content h2,.editorial-content h3,.editorial-content p,.editorial-content li,.editorial-content strong,.editorial-content a:not(.article-cta),.article-cta"));
    nodes.forEach(el=>{if(!originals.current.has(el))originals.current.set(el,el.textContent||"")});
    if(lang==="en"){originals.current.forEach((value,el)=>{el.textContent=value});setTranslating(false);return;}
    const controller=new AbortController();let cancelled=false;setTranslating(true);
    originals.current.forEach((value,el)=>{el.textContent=value});
    async function translate(el:HTMLElement,source:string){
      const key=`findqcs-tr-${lang}-${source}`;const saved=sessionStorage.getItem(key);if(saved){el.textContent=saved;return}
      try{const url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(source)}`;const response=await fetch(url,{signal:controller.signal});if(!response.ok)throw new Error();const data=await response.json();const value=(data[0] as Array<[string]>).map(part=>part[0]).join("");if(!cancelled&&value){el.textContent=value;try{sessionStorage.setItem(key,value)}catch{}}}catch{if(!cancelled)el.textContent=source}
    }
    (async()=>{const queue=Array.from(originals.current.entries());async function worker(){while(!cancelled){const entry=queue.shift();if(!entry)return;await translate(entry[0],entry[1])}}await Promise.all(Array.from({length:Math.min(12,queue.length)},worker));if(!cancelled)setTranslating(false)})();
    return()=>{cancelled=true;controller.abort()};
  },[lang]);
  return <main className="editorial-page" ref={pageRef} aria-busy={translating}>
    <header className="site-header">
      <Link className="brand brand-icon-only" href="/"><img src="/findqc-logo.png" alt="FindQCs"/></Link>
      <nav aria-label="Primary navigation"><Link href="/">{t.search}</Link><Link href="/categories">{t.categories}</Link><Link href="/articles">{t.articles}</Link><Link href="/guides/qc-photo-checklist">{t.guide}</Link><Link href="/faq">{t.faq}</Link></nav>
      <label className="subpage-language"><span>{translating?"…":t.lang}</span><select value={lang} onChange={e=>change(e.target.value as Lang)}><option value="en">English</option><option value="de">Deutsch</option><option value="fr">Français</option><option value="es">Español</option><option value="it">Italiano</option></select></label>
      <Link className="back-home" href="/">← {t.home}</Link>
    </header>
    <section className="editorial-hero shell"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section>
    <article className="editorial-content shell">{children}</article>
    <footer><div className="brand inverse"><img src="/findqc-logo.png" alt=""/><b>FindQCs</b></div><p>{t.footer}</p><div><Link href="/articles">{t.articles}</Link><Link href="/privacy">{t.privacy}</Link><Link href="/disclaimer">{t.disclaimer}</Link></div></footer>
  </main>;
}
