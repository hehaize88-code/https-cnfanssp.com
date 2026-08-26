import type { ReactNode } from "react";
import { LanguageSwitcher } from "./LanguageProvider";

type Section = { kicker: string; title: string; body: ReactNode };

export default function InfoPage({ eyebrow, title, intro, sections, accent = "blue" }: { eyebrow: string; title: string; intro: string; sections: Section[]; accent?: "blue" | "lime" | "coral" }) {
  const notice = process.env.SITE_PUBLIC_INDEXING === "true" ? "Facts checked before publication" : "Preview pages are not indexed";
  return (
    <main className={`info-page ${accent}`}>
      <div className="notice"><span>Independent product discovery guide</span><i /><span>{notice}</span></div>
      <header>
        <a className="brand" href="/"><span className="brand-logo"><img src="/acbuy-logo.png" alt="ACBuy" /></span></a>
        <nav><a href="/#finds">Finds</a><a href="/guide">Guide</a><a href="/qc-guide">QC</a><a href="/shipping">Shipping</a><a href="/faq">FAQ</a><a href="/articles">SEO Articles</a></nav>
        <div className="header-actions"><LanguageSwitcher /><a className="mobile-articles" href="/articles">SEO Articles</a><a className="open-catalog" href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noreferrer">Open full catalog ↗</a></div>
      </header>
      <section className="info-hero">
        <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div>
        <aside><b>Quick path</b><a href="/#finds">01 · Find a product</a><a href="/qc-guide">02 · Check warehouse photos</a><a href="/shipping">03 · Plan the parcel</a></aside>
      </section>
      <section className="info-content">
        <div className="info-nav"><span>On this page</span>{sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, "0")} · {section.title}</a>)}</div>
        <div className="info-sections"><div className="verification-band"><b>Facts checked August 26, 2026</b><p>Platform-specific statements were reviewed against ACBuy’s current official homepage, shopping flow and product-order interface. Live account terms take priority when prices, routes, storage, QC or after-sales options change.</p></div>{sections.map((section, index) => <article id={`section-${index + 1}`} key={section.title}><span>{section.kicker}</span><h2>{section.title}</h2><div>{section.body}</div></article>)}</div>
      </section>
      <section className="cta info-cta"><div><span className="eyebrow light">Continue shopping</span><h2>Put the guide into practice.</h2></div><a href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noreferrer">Browse product records ↗</a></section>
      <footer className="site-footer"><a className="brand" href="/"><span className="brand-logo"><img src="/acbuy-logo.png" alt="ACBuy" /></span></a><p>Independent educational guide. Verify current product, storage, and shipping details on the destination platform before ordering.</p><div><a href="/guide">Guide</a><a href="/qc-guide">QC</a><a href="/shipping">Shipping</a><a href="/faq">FAQ</a><a href="/articles">SEO Articles</a></div><small>© 2026 ACBuy Finds. Not affiliated with ACBuy or displayed brands.</small></footer>
    </main>
  );
}
