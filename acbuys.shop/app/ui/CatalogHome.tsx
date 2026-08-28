"use client";

import { FormEvent, useMemo, useState } from "react";
import { LanguageSwitcher } from "./LanguageProvider";

type Product = { name: string; category: string; price: number; qc: number | null; href: string; image: string; imageWidth: number; imageHeight: number };

const products: Product[] = [
  { name: "Autry Shoes", category: "Shoes", price: 68.87, qc: 6, href: "https://www.cnfanssp.com/AllProducts/4276.html", image: "/products/4276.gif", imageWidth: 500, imageHeight: 338 },
  { name: "AMIRI MA-1 Sneakers · 9 styles", category: "Shoes", price: 53.44, qc: null, href: "https://www.cnfanssp.com/AllProducts/3842.html", image: "/products/3842.webp", imageWidth: 750, imageHeight: 750 },
  { name: "Balenciaga Alien Loose Hoodie · 15 styles", category: "Hoodies", price: 35.95, qc: null, href: "https://www.cnfanssp.com/AllProducts/5133.html", image: "/products/5133.webp", imageWidth: 640, imageHeight: 853 },
  { name: "6PM Hoodie Set", category: "Hoodies", price: 27.41, qc: 5, href: "https://www.cnfanssp.com/AllProducts/24.html", image: "/products/24.jpg", imageWidth: 800, imageHeight: 800 },
  { name: "Gucci Tee", category: "T-Shirts", price: 19.97, qc: null, href: "https://www.cnfanssp.com/AllProducts/59.html", image: "/products/59.webp", imageWidth: 750, imageHeight: 750 },
  { name: "T-Shirts 54", category: "T-Shirts", price: 13.64, qc: null, href: "https://www.cnfanssp.com/AllProducts/6181.html", image: "/products/6181.jpg", imageWidth: 800, imageHeight: 800 },
  { name: "Louis Vuitton Neverfull Tote · 39 styles", category: "Bags", price: 39.26, qc: null, href: "https://www.cnfanssp.com/AllProducts/5030.html", image: "/products/5030.webp", imageWidth: 750, imageHeight: 750 },
  { name: "Jersey 46", category: "Jerseys", price: 9.50, qc: null, href: "https://www.cnfanssp.com/AllProducts/6653.html", image: "/products/6653.jpg", imageWidth: 1280, imageHeight: 720 },
];

const categories = ["All", "Shoes", "Hoodies", "T-Shirts", "Bags", "Jerseys"];
const categoryLinks = [
  { name: "Shoes", href: "https://www.cnfanssp.com/shoes/" },
  { name: "Hoodies", href: "https://www.cnfanssp.com/hoodies-sweaters/" },
  { name: "T-Shirts", href: "https://www.cnfanssp.com/t-shirts/" },
  { name: "Bags", href: "https://www.cnfanssp.com/accessories/" },
  { name: "Jerseys", href: "https://www.cnfanssp.com/jersey/" },
  { name: "Accessories", href: "https://www.cnfanssp.com/accessories/" },
];

export default function CatalogHome() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [saved, setSaved] = useState<string[]>([]);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    const list = products.filter((p) => (category === "All" || p.category === category) && (!term || `${p.name} ${p.category}`.toLowerCase().includes(term)));
    if (sort === "low") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, query, sort]);

  function searchMain(event: FormEvent) {
    event.preventDefault();
    const term = query.trim();
    const base = term ? `https://www.cnfanssp.com/index.php?m=home&c=Search&a=lists&keywords=${encodeURIComponent(term)}` : "https://www.cnfanssp.com/AllProducts/";
    window.open(base, "_blank", "noopener");
  }

  return (
    <main className="catalog-home">
      <div className="notice"><span>Independent product discovery guide</span><i /><span>Links checked before listing</span></div>
      <header>
        <a className="brand" href="#top"><span className="brand-logo"><img src="/acbuy-logo.png" alt="ACBuy" width="785" height="262" /></span></a>
        <nav><a href="#finds">Finds</a><a href="/guide/">Guide</a><a href="/qc-guide/">QC</a><a href="/shipping/">Shipping</a><a href="/faq/">FAQ</a><a href="/articles/">Research &amp; Guides</a></nav>
        <div className="header-actions"><LanguageSwitcher /><a className="mobile-articles" href="/articles/">Research &amp; Guides</a><a className="open-catalog" href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener">Open full catalog ↗</a></div>
      </header>

      <section className="hero" id="top">
        <div>
          <span className="eyebrow">The cleaner way to browse ACBuy finds</span>
          <h1>Find it. <em>Check it.</em><br />Shop smarter.</h1>
          <p>A focused product index with clear USD prices, QC counts, categories, and direct detail links—without spreadsheet clutter.</p>
          <form className="search" onSubmit={searchMain}>
            <span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search products" placeholder="Search sneakers, hoodies, bags…" /><button type="submit">Search full catalog</button>
          </form>
          <div className="proof"><span><b>Live</b> public records</span><span><b>USD</b> price view</span><span><b>QC</b> review workflow</span></div>
        </div>
        <div className="hero-image">
          <img src="/catalog-visual.png" alt="Unbranded sneakers, hoodie, tote and jersey arranged for a product catalog" width="1199" height="750" />
          <span className="checked"><i /> Links checked August 26, 2026</span>
          <span className="qc-count"><b>6</b> QC views</span>
        </div>
      </section>

      <section className="catalog" id="finds">
        <div className="section-title"><div><span className="eyebrow">Freshly checked</span><h2>Popular finds, minus the guesswork.</h2></div><p>Preview listings use public product records and the current first image from each linked product page. Verify the exact item details on the destination page.</p></div>
        <div className="toolbar">
          <div className="filters">{categories.map((c) => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div>
          <label>Sort <select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label>
        </div>
        {visible.length ? <div className="product-grid">{visible.map((p, index) => (
          <article className="product" key={p.name}>
            <div className="product-image"><img src={p.image} alt={`${p.name} product image`} width={p.imageWidth} height={p.imageHeight} loading="lazy" decoding="async" /><span className={`tag t${index % 3}`}>{p.category}</span><button className={saved.includes(p.name) ? "saved" : ""} aria-label={`Save ${p.name}`} onClick={() => setSaved((current) => current.includes(p.name) ? current.filter((n) => n !== p.name) : [...current, p.name])}>{saved.includes(p.name) ? "♥" : "♡"}</button></div>
            <div className="product-copy"><div className="meta"><span><i /> Checked Aug 26, 2026</span><span>{p.qc ? `${p.qc} gallery photos` : "Detail gallery"}</span></div><h3>{p.name}</h3><footer><div><small>Approx. USD</small><b>${p.price.toFixed(2)}</b></div><a href={p.href} target="_blank" rel="noopener">View details ↗</a></footer></div>
          </article>
        ))}</div> : <div className="empty"><b>No matching preview finds.</b><span>Try another category or open the complete catalog.</span><a href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener">Open full catalog ↗</a></div>}
      </section>

      <section className="categories" id="categories">
        <div className="section-title"><div><span className="eyebrow">Browse by category</span><h2>Start broad. Get specific fast.</h2></div></div>
        <div className="category-grid">{categoryLinks.map((item, i) => <a key={item.name} href={item.href} target="_blank" rel="noopener"><span className={`num n${i}`}>{String(i+1).padStart(2,"0")}</span><span><b>{item.name}</b><small>Open category on main site</small></span><i>↗</i></a>)}</div>
      </section>

      <section className="qc" id="qc">
        <div><span className="eyebrow light">Built for better decisions</span><h2>QC first.<br />Checkout second.</h2><p>Inspect color, shape, stitching, labels, and obvious defects before international shipping.</p></div>
        <div className="qc-list">{[["01","Shape","Compare proportions and symmetry."],["02","Color","Check lighting before judging tone."],["03","Details","Zoom in on stitching and hardware."],["04","Size","Confirm measurements, not just tags."],["05","Defects","Flag stains, scratches, or damage."]].map(([n,t,c]) => <div key={n}><span>{n}</span><b>{t}</b><p>{c}</p><i>✓</i></div>)}</div>
      </section>

      <section className="guide" id="guide">
        <div className="section-title"><div><span className="eyebrow">Simple workflow</span><h2>From find to warehouse in four steps.</h2></div><p>Based on ACBuy’s current official shopping flow: paste a product link, order, inspect warehouse QC, store items, then submit an international parcel.</p></div>
        <div className="steps">{[["01","Choose a find","Search by name or browse a category."],["02","Open the record","Review the price and source details."],["03","Inspect QC","Check the warehouse photos carefully."],["04","Build your parcel","Combine items and compare shipping lines."]].map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
      </section>

      <section className="cta"><div><span className="eyebrow light">Ready to explore?</span><h2>Your next find is a search away.</h2></div><a href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener">Open the full catalog ↗</a></section>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-logo"><img src="/acbuy-logo.png" alt="ACBuy" width="785" height="262" /></span></a><p>Independent product discovery and educational guide. Availability, prices, and shipping options can change; verify details on the destination page.</p><div><a href="/guide/">Guide</a><a href="/qc-guide/">QC</a><a href="/shipping/">Shipping</a><a href="/faq/">FAQ</a><a href="/articles/">Research &amp; Guides</a></div><small>© 2026 ACBuy Finds. Not affiliated with ACBuy or displayed brands.</small></footer>
    </main>
  );
}
