"use client";


import Catalog, { HomeSearch } from "../components/Catalog";
import { CurrencySwitcher } from "../components/Currency";
import { LanguageSwitcher } from "../components/LanguageProvider";
import { localizeNode } from "../localize-node";
import { languages, languageNames, localPath, t, type Lang } from "../i18n";
import type { Article } from "../article-data";



export default function Home({lang, articles}:{lang:Lang; articles:Pick<Article,"slug"|"title"|"kicker"|"readTime">[]}) {
  return localizeNode(<main>
    <header className="site-header">
      <a className="brand logo-brand" href="/" aria-label="Home"><img src="/hipobuy-logo.png" alt="Hipobuy" width="220" height="52" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="/spreadsheet">Spreadsheet</a><a href="/qc">QC</a><a href="/shipping">Shipping</a><a href="/guides">Guides</a><a href="/articles">Articles</a><a href="/faq">FAQ</a></nav>
      <div className="header-actions"><LanguageSwitcher lang={lang} path="/"/><CurrencySwitcher lang={lang}/><a className="header-cta" href="https://hipobuy.com/register">Register on Hipobuy <span aria-hidden="true">↗</span></a></div>
    </header>

    <section className="clean-hero">
      <div className="clean-hero-copy">
        <h1>Hipobuy spreadsheet</h1>
        <p>Find a product by name, item ID or photo. Compare prices and available QC photos, then open the matching listing on Hipobuy.</p>
        <div className="hero-links"><a href="/qc">QC photos →</a><a href="/shipping#shipping-calculator">Calculate shipping →</a><a href="/articles/how-to-buy-on-hipobuy">Read the buying guide →</a></div>
      </div>
      <HomeSearch lang={lang}/>
    </section>
    <section className="clean-catalog">
      <div className="clean-section-title"><div><h2>Latest Hipobuy finds</h2></div></div>
      <Catalog lang={lang} mode="home"/>
    </section>

    <section className="clean-guides">
      <div className="clean-section-title"><div><p className="eyebrow">Useful next steps</p><h2>Find it. Check it. Ship it.</h2></div><p>The product link is only the beginning. Use the short guides below to make the important decisions in order.</p></div>
      <div className="clean-guide-grid">
        <a href="/spreadsheet"><span>01</span><div><p>Product discovery</p><h3>Verify the source listing</h3><small>Check variants, seller photos, current terms and domestic delivery.</small></div><b>↗</b></a>
        <a href="/qc"><span>02</span><div><p>Warehouse review</p><h3>Read the QC photo set</h3><small>Compare the order, shape, stitching, labels and measurements.</small></div><b>↗</b></a>
        <a href="/shipping"><span>03</span><div><p>Parcel planning</p><h3>Estimate landed cost</h3><small>Review chargeable weight, line rules, insurance, tax and customs.</small></div><b>↗</b></a>
      </div>
    </section>

    <section className="clean-note">
      <div><p className="eyebrow">Independent by design</p><h2>No invented promises.</h2></div>
      <div><p>Hipo Index does not sell products, process orders or claim that every seller has been tested. Official platform features are identified as such; product availability and shipping estimates must be checked again before payment.</p><div className="note-links"><a href="/guides">How we fact-check →</a><a href="/faq">Read the FAQ →</a></div></div>
    </section>

    <section className="clean-articles">
      <div className="clean-section-title"><div><p className="eyebrow">Research library</p><h2>Read before you ship.</h2></div><p>Weight, shipping costs and rehearsal packing: choose the guide that answers your next question.</p></div>
      <div className="home-article-grid">{articles.slice(0, 4).map((article, index) => <article key={article.slug}><div><span>{String(index + 1).padStart(2, "0")}</span><small>{article.readTime}</small></div><p>{article.kicker}</p><h3><a href={`/articles/${article.slug}`}>{article.title}</a></h3><a href={`/articles/${article.slug}`}>Read full article <b>↗</b></a></article>)}</div>
      <a className="all-articles-link" href="/articles">View the article library →</a>
    </section>

    <section className="clean-faq">
      <div><p className="eyebrow">Quick answers</p><h2>Before you browse</h2></div>
      <div className="faq-list"><details open><summary>Is this the official Hipobuy website?</summary><p>No. This is an independent product-discovery and education site. Hipobuy’s official domain is hipobuy.com.</p></details><details><summary>Are prices and availability guaranteed?</summary><p>No. Every card is a snapshot. Open the exact listing and confirm current price, variants and availability before paying.</p></details><details><summary>Can QC photos guarantee quality?</summary><p>No. They can show visible condition and measurements, but cannot prove comfort, material composition or long-term durability.</p></details><a className="faq-more" href="/faq">View all questions →</a></div>
    </section>

    <footer><div className="footer-brand"><img src="/hipobuy-logo.png" alt="Hipobuy" width="180" height="43"/><p>Independent Hipobuy spreadsheet guide.</p></div><div className="footer-links"><a href="/spreadsheet">Spreadsheet</a><a href="/qc">QC</a><a href="/shipping">Shipping</a><a href="/guides">Guides</a><a href="/articles">Articles</a><a href="/faq">FAQ</a></div><nav className="language-links" aria-label={t("Language",lang)}>{languages.map(code=><a key={code} href={localPath("/",code)} hrefLang={code} lang={code}>{languageNames[code]}</a>)}</nav><p className="footer-note">Not affiliated with Hipobuy, Taobao, 1688 or any product brand. Purchases are completed on third-party platforms. © 2026 Hipo Index.</p></footer>
  </main>,lang);
}
