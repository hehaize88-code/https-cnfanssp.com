import Link from "next/link";
import { ArticleCard, Footer, Header, JsonLd, ProductCard, SearchDesk } from "./components";
import { articles, categories, faqs, MAIN_SITE, PLANNED_ORIGIN, products } from "./data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span />Independent product &amp; QC search</div>
              <h1>Find better.<br /><em>Check smarter.</em></h1>
              <p>One clear starting point for exact product destinations, matched listing references and practical QC decisions.</p>
              <SearchDesk />
              <div className="hero-trust"><span>✓ Exact destination links</span><span>✓ USD reference prices</span><span>✓ No dead “View QC” buttons</span></div>
            </div>
            <aside className="finder-visual" aria-label="Matched finds and QC workflow">
              <div className="visual-orbit"><span>QC</span><small>search · match · inspect</small></div>
              <a className="visual-card visual-card-main" href={products[0].href} target="_blank" rel="noopener noreferrer">
                <img src={products[0].image} alt={products[0].alt} />
                <div><small>Matched listing</small><b>{products[0].name}</b><strong>{products[0].price}</strong></div>
              </a>
              <a className="visual-card visual-card-side" href={products[1].href} target="_blank" rel="noopener noreferrer">
                <img src={products[1].image} alt={products[1].alt} />
                <span>Open exact item ↗</span>
              </a>
              <Link href="/qc" className="visual-check"><span>12</span><div><b>Point QC check</b><small>Shape · size · seams · details</small></div><i>→</i></Link>
            </aside>
          </div>
        </section>

        <section className="category-band">
          <div className="shell section-heading inline-heading">
            <div><span className="section-index">01</span><h2>Browse by category</h2></div>
            <Link href="/categories">All 10 categories →</Link>
          </div>
          <div className="shell category-grid compact-category-grid">
            {categories.slice(0, 5).map((category) => (
              <a key={category.name} href={category.href} target="_blank" rel="noopener noreferrer" className="category-tile">
                <span>{category.mark}</span><div><b>{category.name}</b><small>{category.note}</small></div><i>↗</i>
              </a>
            ))}
          </div>
        </section>

        <section className="section-block shell">
          <div className="section-heading inline-heading">
            <div><span className="section-index">02</span><h2>Matched product references</h2><p>Each first image and button points to its corresponding destination product.</p></div>
            <a href={`${MAIN_SITE}/AllProducts/`} target="_blank" rel="noopener noreferrer">View full catalog ↗</a>
          </div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          <p className="price-note">USD values are approximate reference conversions. Confirm the live price, selected variation, stock and current terms at the destination.</p>
        </section>

        <section className="qc-section">
          <div className="shell qc-grid">
            <div className="qc-intro">
              <span className="section-index light">03</span>
              <h2>A QC routine built for decisions—not decoration.</h2>
              <p>Older reference photos can help you learn what to inspect. Your approve, exchange or return decision should use the exact unit received at the warehouse.</p>
              <Link href="/qc" className="button-light">Use the full QC guide <span>→</span></Link>
            </div>
            <ol className="qc-steps">
              <li><span>01</span><div><b>Match identity</b><p>Product, variation, size and included pieces.</p></div></li>
              <li><span>02</span><div><b>Check geometry</b><p>Shape, symmetry, panel and print alignment.</p></div></li>
              <li><span>03</span><div><b>Read measurements</b><p>Tape position, reference item and tolerance.</p></div></li>
              <li><span>04</span><div><b>Inspect construction</b><p>Surfaces, seams, edges and stress points.</p></div></li>
              <li><span>05</span><div><b>Request missing evidence</b><p>One focused photo is better than a guess.</p></div></li>
              <li><span>06</span><div><b>Record the decision</b><p>Separate visible facts from assumptions.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section-block shell">
          <div className="section-heading"><span className="section-index">04</span><h2>Research that supports the tool</h2><p>Long-form field guides explain the process without pretending a photo or a successful link is a quality guarantee.</p></div>
          <div className="research-entry-grid">
            <Link href="/finds"><small>SEARCH METHODS</small><strong>Link, ID, name or image?</strong><span>Choose the input with the strongest product identity →</span></Link>
            <Link href="/shipping"><small>REAL HAULS</small><strong>Countries, routes and cost context</strong><span>Read public logistics aggregates without turning them into a quote →</span></Link>
          </div>
          <div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
        </section>

        <section className="faq-preview shell">
          <div className="faq-label"><span className="section-index">05</span><h2>Clear answers,<br />before the click.</h2><Link href="/faq">Read every answer →</Link></div>
          <div className="faq-list">{faqs.slice(0, 3).map((faq, index) => <details key={faq.q} open={index === 0}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}</div>
        </section>
      </main>
      <Footer />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", "@id": `${PLANNED_ORIGIN}/#website`, name: "FindQC", url: PLANNED_ORIGIN, potentialAction: { "@type": "SearchAction", target: `${MAIN_SITE}/search.html?keywords={search_term_string}`, "query-input": "required name=search_term_string" } },
          { "@type": "Organization", "@id": `${PLANNED_ORIGIN}/#organization`, name: "FindQC Research Desk", url: PLANNED_ORIGIN, description: "Independent product-discovery and QC research resource." },
        ],
      }} />
    </>
  );
}
