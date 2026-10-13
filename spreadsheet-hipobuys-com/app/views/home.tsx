"use client";


import { useMemo, useState } from "react";
import { categories, products } from "../data";
import { LanguageSwitcher } from "../components/LanguageProvider";
import { localizeNode } from "../localize-node";
import { languages, languageNames, localPath, t, type Lang } from "../i18n";
import type { Article } from "../article-data";

const mainSite = "https://cnfanssp.com";

export default function Home({lang, articles}:{lang:Lang; articles:Article[]}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const queryMatch = !term || product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term) || t(product.category,lang).toLowerCase().includes(term) || product.tags.some((tag) => tag.includes(term));
      return categoryMatch && queryMatch;
    });
  }, [category, query, lang]);

  const visible = filtered;

  function searchMainSite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = query.trim();
    window.location.href = term ? `${mainSite}/search.html?channelid=2&keywords=${encodeURIComponent(term)}` : `${mainSite}/AllProducts/`;
  }

  return localizeNode(<main>
    <header className="site-header">
      <a className="brand logo-brand" href="/" aria-label="Hipobuy guide home"><img src="/hipobuy-logo.png" alt="Hipobuy" width="220" height="52" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="/spreadsheet">Spreadsheet</a><a href="/qc">QC</a><a href="/shipping">Shipping</a><a href="/guides">Guides</a><a href="/articles">Articles</a><a href="/faq">FAQ</a></nav>
      <div className="header-actions"><LanguageSwitcher lang={lang} path="/"/><a className="header-cta" href={`${mainSite}/AllProducts/`}>Browse products <span>↗</span></a></div>
    </header>

    <section className="clean-hero">
      <div className="clean-hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Guides updated October 2026</p>
        <h1>Hipobuy spreadsheet,<br/><em>made easier.</em></h1>
        <p>Search current product links, open the exact source page, and check listing freshness before you decide.</p>
      </div>
      <div className="clean-search-card">
        <p className="search-label">Search the spreadsheet</p>
        <form onSubmit={searchMainSite} className="clean-search"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try shoes, hoodies or jerseys" aria-label="Search product finds"/><button type="submit" aria-label="Search">→</button></form>
        <div className="search-meta"><span><b>9</b> categories</span><span><b>12</b> preview rows</span><span><b>90 days</b> storage stated by app</span></div>
      </div>
    </section>

    <section className="clean-catalog">
      <div className="clean-section-title"><div><p className="eyebrow">Product index</p><h2>Browse current finds</h2></div><p>These cards are source-page snapshots. Confirm the live listing, price and available options before ordering.</p></div>
      <div className="clean-tabs" role="group" aria-label="Filter product category">{["All", ...categories].map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={item === category ? "active" : ""}>{item}</button>)}</div>

      {visible.length ? <div className="clean-product-grid">{visible.map((product) => <article className="clean-product-card" key={product.id}>
        <a href={product.url} className="clean-product-image"><img src={product.image} alt={`${t(product.category,lang)} · ${product.id}`} width="600" height="600" loading="lazy"/><span>Checked 25 Aug</span></a>
        <div className="clean-product-copy"><p>{t(product.category,lang)} · #{product.id}</p><h3><a href={product.url}>{t(product.category,lang)} · {product.id}</a></h3><a href={product.url} className="clean-product-link">Open listing <span>↗</span></a></div>
      </article>)}</div> : <div className="empty-state"><h3>{t("No preview rows match",lang)} “{query}”.</h3><p>Try another term or search the complete catalog.</p><a href={`${mainSite}/search.html?channelid=2&keywords=${encodeURIComponent(query)}`}>Search full catalog ↗</a></div>}

      <div className="catalog-footer"><span>Showing {visible.length} curated preview rows</span><a href={`${mainSite}/AllProducts/`}>View complete catalog <span>↗</span></a></div>
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
      <div className="clean-section-title"><div><p className="eyebrow">Research library</p><h2>Read before you ship.</h2></div><p>Germany and France shipping, ordering and sizing: practical guides for your next decision.</p></div>
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
