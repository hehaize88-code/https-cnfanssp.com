import { LanguageSwitcher } from "./LanguageProvider";
import { localizeNode } from "../localize-node";
import { languages, languageNames, localPath, t, type Lang } from "../i18n";
export default function GuideLayout({ kicker, title, intro, accent = "blue", children, lang="en", path="/" }: { kicker: string; title: string; intro: string; accent?: "blue" | "lime" | "orange"; children: React.ReactNode; lang?:Lang; path?:string }) {
  return localizeNode(<main>
    <header className="site-header">
      <a className="brand logo-brand" href="/" aria-label="Hipobuy guide home"><img src="/hipobuy-logo.png" alt="Hipobuy" width="220" height="52" /></a>
      <nav className="desktop-nav"><a href="/spreadsheet">Spreadsheet</a><a href="/qc">QC Guide</a><a href="/shipping">Shipping</a><a href="/guides">Guides</a><a href="/articles">Articles</a><a href="/faq">FAQ</a></nav>
      <div className="header-actions"><LanguageSwitcher lang={lang} path={path}/><a className="header-cta" href="https://cnfanssp.com/AllProducts/">Open catalog <span>↗</span></a></div>
    </header>
    <section className={`sub-hero ${accent}`}><div><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{intro}</p></div><span className="sub-hero-mark" aria-hidden="true">HI / 26</span></section>
    <div className="subpage-body">{children}</div>
    <footer><div className="footer-brand"><img src="/hipobuy-logo.png" alt="Hipobuy" width="180" height="43"/><p>Independent Hipobuy spreadsheet directory.</p></div><div className="footer-links"><a href="/">Home</a><a href="/spreadsheet">Spreadsheet</a><a href="/qc">QC</a><a href="/shipping">Shipping</a><a href="/guides">Guides</a><a href="/articles">Articles</a><a href="/faq">FAQ</a></div><nav className="language-links" aria-label={t("Language",lang)}>{languages.map(code=><a key={code} href={localPath(path,code)} hrefLang={code} lang={code} aria-current={code===lang?"page":undefined}>{languageNames[code]}</a>)}</nav><p className="footer-note">Independent information resource. Not affiliated with Hipobuy, Taobao, 1688 or any product brand. Check current information before purchase. © 2026 Hipo Index.</p></footer>
  </main>,lang);
}
