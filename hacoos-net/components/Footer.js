"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./Icons";
import { getCopy, localeFromPath, localizePath } from "@/app/i18n";

export default function Footer() {
  const locale = localeFromPath(usePathname());
  const copy = getCopy(locale);
  const translated = {
    en: { index: ["Independent", "Index"], open: "Open live catalog" },
    es: { index: ["Índice", "independiente"], open: "Abrir el catálogo actual" },
    fr: { index: ["Index", "indépendant"], open: "Ouvrir le catalogue actuel" },
    de: { index: ["Unabhängiger", "Index"], open: "Aktuellen Katalog öffnen" },
    it: { index: ["Indice", "indipendente"], open: "Apri il catalogo attuale" },
    pt: { index: ["Índice", "independente"], open: "Abrir o catálogo atual" },
  }[locale];
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <span className="section-label inverse">{copy.footer.eyebrow}</span>
          <h2>{copy.footer.title[0]}<br/>{copy.footer.title[1]}</h2>
        </div>
        <a className="round-link" href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer" aria-label={translated.open}><Arrow size={28}/></a>
      </div>
      <div className="footer-grid">
        <div className="footer-brand"><div className="brand brand-inverse hacoo-brand"><img src="/hacoo.png" width="200" height="64" alt="Hacoo"/><span>{translated.index[0]}<br/>{translated.index[1]}</span></div><p>{copy.footer.description}</p></div>
        <div><h3>{copy.footer.explore}</h3><Link href={localizePath("/spreadsheet", locale)}>{copy.nav.spreadsheet}</Link><Link href={localizePath("/categories", locale)}>{copy.nav.categories}</Link><Link href={localizePath("/guides", locale)}>{copy.nav.guides}</Link><Link href={localizePath("/faq", locale)}>{copy.nav.faq}</Link></div>
        <div><h3>{copy.footer.site}</h3><Link href={localizePath("/about", locale)}>{copy.nav.about}</Link><Link href={localizePath("/contact", locale)}>{copy.footer.contact}</Link><Link href={localizePath("/privacy", locale)}>{copy.footer.privacy}</Link><Link href={localizePath("/terms", locale)}>{copy.footer.terms}</Link></div>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} Hacoos</p><p>{copy.footer.disclaimer}</p></div>
    </footer>
  );
}
