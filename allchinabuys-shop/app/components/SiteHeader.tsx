import LanguageSwitcher from "./LanguageSwitcher";

const MAIN = "https://www.cnfanssp.com";

export default function SiteHeader() {
  return <><header className="site-header">
    <a className="brand brand-logo" href="/" aria-label="AllChinaBuy Finds home"><img src="/allchinabuy-logo.png" alt="AllChinaBuy" /></a>
    <nav aria-label="Primary navigation"><a href="/spreadsheet/">Spreadsheet</a><a href="/finds/">Finds</a><a href="/articles/">Articles</a><a href="/guide/">Guide</a><a href="/qc/">QC</a><a href="/shipping/">Shipping</a><a href="/faq/">FAQ</a></nav>
    <div className="header-actions"><LanguageSwitcher/><a className="header-cta" href={`${MAIN}/AllProducts/`} target="_blank" rel="noopener noreferrer">Browse all <span>↗</span></a></div>
  </header><aside className="platform-notice" aria-label="Platform status"><b>Platform status · 7 October 2026</b><p>The official AllChinaBuy homepage displayed a maintenance notice when checked. Older guides describe historical workflows; current order and service availability must be confirmed separately.</p><a href="/articles/allchinabuy-website-maintenance-order-checks/">Read the dated status guide</a></aside></>;
}
