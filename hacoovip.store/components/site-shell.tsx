import Link from "next/link";
import { type ReactNode } from "react";
import { hrefFor, languageNames, locales, navRouteNames, trustRouteNames, type Locale } from "@/lib/site-data";
import { localizedCopy, translate } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

export function SiteShell({ locale = "en", children }: { locale?: Locale; children: ReactNode }) {
  const activeLocale = locale;
  const c = localizedCopy(activeLocale);
  const tx = (value: string) => translate(activeLocale, value);

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
          {navRouteNames.map((route) => <Link key={route} href={hrefFor(activeLocale, route)}>{c[route]}</Link>)}
        </nav>
        <div className="header-tools">
          <form className="mini-search" action="https://cnfanssp.com/search.html" method="get" target="_blank">
            <label className="sr-only" htmlFor="header-search">{c.search}</label>
            <input type="hidden" name="channelid" value="2" />
            <input id="header-search" name="keywords" placeholder={c.searchPlaceholder} />
            <button aria-label={c.search} type="submit">↗</button>
          </form>
          <LanguageSwitcher locale={activeLocale} label={tx("Language")} options={locales.map((lang) => ({ value: lang, label: languageNames[lang] }))} />
        </div>
      </header>
      {children}
      <footer>
        <div className="footer-brand">
          <img className="footer-logo" src="/hacoo-logo.png" alt="Hacoo" width="200" height="64" loading="lazy" />
          <div><strong>{tx("Independent product discovery guide")}</strong><p>{c.note}</p></div>
        </div>
        <div className="footer-links">
          {navRouteNames.map((route) => <Link key={route} href={hrefFor(activeLocale, route)}>{c[route]}</Link>)}
        </div>
        <div className="footer-trust" aria-label={tx("Publisher information")}>
          {trustRouteNames.map((route) => <Link key={route} href={hrefFor(activeLocale, route)}>{tx({
            about: "About",
            "editorial-policy": "Editorial Policy",
            sources: "Sources & Fact-Checking",
            corrections: "Corrections",
            contact: "Contact",
            privacy: "Privacy",
            terms: "Terms",
          }[route])}</Link>)}
        </div>
        <p className="copyright">© 2026 HacooVIP · {tx("Independent product discovery guide")}</p>
      </footer>
    </div>
  );
}
