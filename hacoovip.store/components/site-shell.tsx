"use client";

import Link from "next/link";
import { type FormEvent, type ReactNode } from "react";
import { hrefFor, languageNames, liveSearch, locales, routeNames, type Locale } from "@/lib/site-data";
import { localizedCopy, translate } from "@/lib/i18n";
import { useSiteLocale } from "@/lib/use-site-locale";

export function SiteShell({ locale = "en", children }: { locale?: Locale; children: ReactNode }) {
  const { locale: activeLocale, changeLocale } = useSiteLocale(locale);
  const c = localizedCopy(activeLocale);
  const tx = (value: string) => translate(activeLocale, value);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const query = String(data.get("q") || "").trim();
    window.open(liveSearch(query), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="site-frame">
      <div className="top-note">
        <span>{c.eyebrow}</span>
        <span className="top-status"><i /> {c.verified}</span>
      </div>
      <header className="site-header">
        <Link className="brand" href={hrefFor(activeLocale)} aria-label={tx("Hacoo home")}>
          <img className="brand-logo" src="/hacoo-logo.png" alt="Hacoo" width="200" height="64" />
        </Link>
        <nav aria-label={tx("Primary navigation")}>
          {routeNames.map((route) => <Link key={route} href={hrefFor(activeLocale, route)}>{c[route]}</Link>)}
        </nav>
        <div className="header-tools">
          <form className="mini-search" onSubmit={submitSearch}>
            <label className="sr-only" htmlFor="header-search">{c.search}</label>
            <input id="header-search" name="q" placeholder={c.searchPlaceholder} />
            <button aria-label={c.search} type="submit">↗</button>
          </form>
          <div className="language-switcher">
            <label className="sr-only" htmlFor="language">{tx("Language")}</label>
            <select id="language" value={activeLocale} onChange={(event) => changeLocale(event.target.value as Locale)}>
              {locales.map((lang) => <option key={lang} value={lang}>{languageNames[lang]}</option>)}
            </select>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <div className="footer-brand">
          <img className="footer-logo" src="/hacoo-logo.png" alt="Hacoo" width="200" height="64" loading="lazy" />
          <div><strong>{tx("Independent product discovery guide")}</strong><p>{c.note}</p></div>
        </div>
        <div className="footer-links">
          {routeNames.map((route) => <Link key={route} href={hrefFor(activeLocale, route)}>{c[route]}</Link>)}
        </div>
        <p className="copyright">© 2026 HacooVIP · {tx("Independent product discovery guide")}</p>
      </footer>
    </div>
  );
}
