import LanguageSwitcher from "./LanguageSwitcher";

const MAIN = "https://www.cnfanssp.com";

export default function SiteHeader() {
  return <header className="site-header">
    <a className="brand brand-logo" href="/" aria-label="AllChinaBuy Finds home"><img src="/allchinabuy-logo.png" alt="AllChinaBuy" width="1718" height="253" decoding="async" /></a>
    <nav aria-label="Primary navigation"><a href="/spreadsheet/">Spreadsheet</a><a href="/finds/">Finds</a><a href="/articles/">Articles</a><a href="/guide/">Guide</a><a href="/qc/">QC</a><a href="/shipping/">Shipping</a><a href="/faq/">FAQ</a></nav>
    <div className="header-actions"><LanguageSwitcher/><a className="header-cta" href={`${MAIN}/AllProducts/`} target="_blank" rel="noopener noreferrer">Browse all <span>↗</span></a></div>
  </header>;
}
