"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Arrow, MenuIcon } from "./Icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { getCopy, localeFromPath, localizePath, stripLocale } from "@/app/i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const cleanPath = stripLocale(pathname);
  const copy = getCopy(locale);
  const translated = {
    en: { index: ["Independent", "Index"], shipping: "Shipping", home: "Hacoos home", menu: "Toggle navigation", primary: "Primary navigation" },
    es: { index: ["Índice", "independiente"], shipping: "Envío", home: "Inicio de Hacoos", menu: "Alternar navegación", primary: "Navegación principal" },
    fr: { index: ["Index", "indépendant"], shipping: "Livraison", home: "Accueil de Hacoos", menu: "Afficher ou masquer la navigation", primary: "Navigation principale" },
    de: { index: ["Unabhängiger", "Index"], shipping: "Versand", home: "Hacoos-Startseite", menu: "Navigation ein- oder ausblenden", primary: "Hauptnavigation" },
    it: { index: ["Indice", "indipendente"], shipping: "Spedizione", home: "Home page di Hacoos", menu: "Mostra o nascondi la navigazione", primary: "Navigazione principale" },
    pt: { index: ["Índice", "independente"], shipping: "Envio", home: "Página inicial do Hacoos", menu: "Mostrar ou ocultar a navegação", primary: "Navegação principal" },
  }[locale];
  const links = [
    ["/spreadsheet", copy.nav.spreadsheet],
    ["/categories", copy.nav.categories],
    ["/guides", copy.nav.guides],
    ["/guides/qc-photo-checklist", "QC"],
    ["/guides/shipping-planning", translated.shipping],
    ["/faq", copy.nav.faq],
  ];
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href={localizePath("/", locale)} className="brand hacoo-brand" onClick={() => setOpen(false)} aria-label={translated.home}>
          <img src="/hacoo.png" width="200" height="64" alt="Hacoo"/>
          <span>{translated.index[0]}<br/>{translated.index[1]}</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav" aria-label={translated.menu}><MenuIcon open={open}/></button>
        <nav id="primary-nav" className={open ? "nav-links open" : "nav-links"} aria-label={translated.primary}>
          {links.map(([href, label]) => <Link key={href} href={localizePath(href, locale)} className={cleanPath === href || cleanPath.startsWith(href + "/") ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
          <LanguageSwitcher onNavigate={() => setOpen(false)}/>
          <a className="nav-cta" href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer"><span>{copy.nav.live}</span> <Arrow size={16}/></a>
        </nav>
      </div>
    </header>
  );
}
