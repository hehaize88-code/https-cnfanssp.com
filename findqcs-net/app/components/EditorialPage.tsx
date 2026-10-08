"use client";
import Link from "next/link";
import LanguageLinks from "./LanguageLinks";
import type { ReactNode } from "react";
import { LocalizedContent } from "./LocalizedContent";
import { changeLanguage, type Lang, useLanguage } from "./language";

type Breadcrumb = readonly [name: string, path: string];
const ui = {
  en:{search:"Search",categories:"Categories",articles:"QC Articles",guide:"QC Guide",faq:"FAQ",home:"Home",footer:"Independent QC research and product discovery.",privacy:"Privacy",disclaimer:"Disclaimer",lang:"Language",menu:"Menu"},
  de:{search:"Suche",categories:"Kategorien",articles:"QC-Artikel",guide:"QC-Ratgeber",faq:"FAQ",home:"Startseite",footer:"Unabhängige QC-Recherche und Produktsuche.",privacy:"Datenschutz",disclaimer:"Hinweise",lang:"Sprache",menu:"Menü"},
  fr:{search:"Recherche",categories:"Catégories",articles:"Articles QC",guide:"Guide QC",faq:"FAQ",home:"Accueil",footer:"Recherche QC et découverte produit indépendantes.",privacy:"Confidentialité",disclaimer:"Avertissement",lang:"Langue",menu:"Menu"},
  es:{search:"Buscar",categories:"Categorías",articles:"Artículos QC",guide:"Guía QC",faq:"FAQ",home:"Inicio",footer:"Investigación QC y descubrimiento independientes.",privacy:"Privacidad",disclaimer:"Aviso",lang:"Idioma",menu:"Menú"},
  it:{search:"Cerca",categories:"Categorie",articles:"Articoli QC",guide:"Guida QC",faq:"FAQ",home:"Home",footer:"Ricerca QC indipendente e scoperta prodotti.",privacy:"Privacy",disclaimer:"Avvertenze",lang:"Lingua",menu:"Menu"},
} as const;

export function EditorialPage({ eyebrow, title, intro, breadcrumbs = [], children }: { eyebrow: string; title: string; intro: string; breadcrumbs?: readonly Breadcrumb[]; children: ReactNode }) {
  const lang=useLanguage();
  function change(next:Lang){changeLanguage(next);}
  const t=ui[lang];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"] as const, ...breadcrumbs].map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `https://findqcs.net${path}`,
    })),
  };
  return <LocalizedContent><main className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
    <header className="site-header">
      <Link className="brand brand-icon-only" href="/"><img src="/findqc-logo.png" alt="FindQCs" width="128" height="128"/></Link>
      <nav aria-label="Primary navigation"><Link href="/">{t.search}</Link><Link href="/categories/">{t.categories}</Link><Link href="/articles/">{t.articles}</Link><Link href="/guides/qc-photo-checklist/">{t.guide}</Link><Link href="/faq/">{t.faq}</Link></nav>
      <label className="subpage-language"><span>{t.lang}</span><select value={lang} onChange={e=>change(e.target.value as Lang)}><option value="en">English</option><option value="de">Deutsch</option><option value="fr">Français</option><option value="es">Español</option><option value="it">Italiano</option></select></label>
      <Link className="back-home" href="/">← {t.home}</Link>
      <details className="mobile-menu"><summary aria-label="Open navigation">{t.menu}</summary><div><Link href="/">{t.search}</Link><Link href="/categories/">{t.categories}</Link><Link href="/articles/">{t.articles}</Link><Link href="/guides/qc-photo-checklist/">{t.guide}</Link><Link href="/faq/">{t.faq}</Link></div></details>
    </header>
    <section className="editorial-hero shell"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section>
    <article className="editorial-content shell">{children}</article>
    <footer><div className="brand inverse"><img src="/findqc-logo.png" alt="FindQCs" width="128" height="128"/><b>FindQCs</b></div><p>{t.footer}</p><div><Link href="/articles/">{t.articles}</Link><Link href="/privacy/">{t.privacy}</Link><Link href="/disclaimer/">{t.disclaimer}</Link></div><LanguageLinks/></footer>
  </main></LocalizedContent>;
}
