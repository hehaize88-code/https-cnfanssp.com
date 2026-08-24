import Link from "next/link";
import { navItems, SHOP_URL } from "../data";
import { LanguageMenu } from "./LanguageMenu";

export function SiteHeader({ locale = "en" }: { locale?: string }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Superbuy Spreadsheet home">
          <img className="brand-logo" src="/superbuy-logo.png" alt="Superbuy" width="180" height="35" />
          <small>Independent index</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <LanguageMenu locale={locale} />
          <a className="button button-dark button-small" href={SHOP_URL} target="_blank" rel="nofollow sponsored noopener">Browse products <span>↗</span></a>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
    </header>
  );
}
