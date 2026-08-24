import Link from "next/link";
import { CategoryExplorer } from "./components/CategoryExplorer";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { articles, SHOP_URL } from "./data";

const faqs = [
  ["What is a Superbuy spreadsheet?", "It is an independent product-research index that organizes listings by category and adds reference prices, option notes and QC reminders."],
  ["Are the displayed prices final?", "No. USD amounts are references. Marketplace prices, domestic delivery, currency conversion and international shipping can change."],
  ["What should I verify before ordering?", "Open the current listing, confirm the exact color, size and quantity, then review the warehouse photos before submitting a parcel."],
];

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebSite", name: "Superbuy Spreadsheet 2026", url: "https://sheet-superbuy.net/", description: "Independent Superbuy spreadsheet, finds and buying guides." },
    { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  ] };

  return <>
    <SiteHeader />
    <main>
      <section className="hero clean-hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent product index · Updated 24 Aug 2026</p>
          <h1>Superbuy<br />Spreadsheet 2026</h1>
          <p className="hero-lead">A cleaner way to browse product links, compare USD reference prices and keep QC checks attached to the decision.</p>
          <div className="hero-actions"><a className="button button-primary" href="#finds">Browse the sheet</a><Link className="button button-outline" href="/spreadsheet/">How to use it</Link></div>
        </div>
        <div className="hero-summary" aria-label="Spreadsheet summary">
          <div><span>Categories</span><b>12</b></div><div><span>Price view</span><b>USD</b></div><div><span>Method</span><b>Link → QC → Ship</b></div>
          <p>Prices are references. Open the current listing before ordering.</p>
        </div>
      </section>

      <section className="editorial-preview" aria-label="Product research overview">
        <img src="/research-overview.svg" alt="Superbuy spreadsheet research overview" width="1440" height="520" loading="eager" />
      </section>

      <CategoryExplorer />

      <section className="simple-process">
        <div className="simple-title"><p className="eyebrow">The useful workflow</p><h2>Four checks.<br />No guesswork.</h2></div>
        <div className="process-list">
          {[["01", "Discover", "Use a category or keyword to create a short, comparable list."], ["02", "Verify", "Open the current listing and confirm color, size, quantity and price."], ["03", "Inspect", "Review warehouse photos and measurements for the item in your order."], ["04", "Ship", "Choose consolidation, packing and an eligible route after the parcel is known."]].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="articles-section clean-section">
        <div className="clean-section-head"><div><p className="eyebrow">Buying guides</p><h2>Read only what you need next.</h2></div><Link href="/articles/">All articles →</Link></div>
        <div className="clean-article-list">{articles.map((article, index) => <Link href={`/articles/${article.slug}/`} key={article.slug}><span>0{index + 1}</span><div><small>{article.eyebrow} · {article.read}</small><h3>{article.title}</h3></div><b>↗</b></Link>)}</div>
      </section>

      <section className="faq-section clean-section">
        <div className="faq-intro"><p className="eyebrow">Quick answers</p><h2>Before you use the sheet.</h2><p>Discovery is not verification. Keep the product row, current listing and warehouse evidence separate.</p><Link href="/faq/">Full FAQ →</Link></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="final-cta clean-cta"><div><p className="eyebrow">Current product source</p><h2>Open the listing.<br />Check the option.</h2></div><a className="button button-primary" href={SHOP_URL} target="_blank" rel="nofollow sponsored noopener">Browse current products ↗</a></section>
    </main>
    <SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
