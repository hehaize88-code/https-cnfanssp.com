import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SearchBox } from "@/components/SearchBox";
import { categories, guides, products } from "@/lib/data";

const featured = products[0];

export default function Home() {
  return (
    <PageShell>
      <main className="index-home">
        <section className="index-intro section-shell">
          <div className="index-masthead">
            <p><span>Independent product index</span><b>Edition 08 / 2026</b></p>
            <div>
              <h1>Find the listing.<br /><em>Check the evidence.</em></h1>
              <p className="index-deck">A source-first workspace for comparing product records, reviewing QC priorities and opening the right catalog page.</p>
            </div>
          </div>

          <div className="index-workspace">
            <aside className="index-sidebar" aria-label="Category shortcuts">
              <div className="rail-heading"><span>01</span><b>Browse</b></div>
              <nav>
                {categories.map((category) => (
                  <a href={category.destination} target="_blank" rel="noopener noreferrer" key={category.slug}>
                    <span>{category.mark}</span><b>{category.name}</b><i>↗</i>
                  </a>
                ))}
              </nav>
              <div className="rail-status"><span className="status-pulse" /><div><b>Sources online</b><small>Records checked against live destination pages</small></div></div>
            </aside>

            <div className="directory-panel">
              <div className="directory-tools">
                <div><span className="panel-kicker">Product directory</span><strong>8 records / 8 categories</strong></div>
                <Link href="/spreadsheet">Open full index <span>↗</span></Link>
              </div>
              <SearchBox />
              <div className="record-head"><span>ID</span><span>Listing</span><span>Group</span><span>Price</span><span>Open</span></div>
              <div className="record-list">
                {products.slice(0, 6).map((product, index) => (
                  <a href={product.destination} target="_blank" rel="noopener noreferrer" className="record-row" key={product.slug}>
                    <span className="record-id">{String(index + 1).padStart(2, "0")}</span>
                    <span className="record-product"><img src={product.image} alt="" /><span><b>{product.name}</b><small>Source checked · {product.updated}</small></span></span>
                    <span className="record-category">{product.category}</span>
                    <strong className="record-price">{product.price}</strong>
                    <i className="record-open">↗</i>
                  </a>
                ))}
              </div>
              <div className="directory-footer"><span>Showing 6 recent records</span><Link href="/finds">Browse every find →</Link></div>
            </div>

            <aside className="inspector-card">
              <div className="inspector-top"><span>Featured record</span><b>ACB–001</b></div>
              <a href={featured.destination} target="_blank" rel="noopener noreferrer" className="inspector-image"><img src={featured.image} alt={featured.name} /><span>Source checked</span></a>
              <div className="inspector-copy">
                <p>{featured.category} / {featured.price}</p>
                <h2>{featured.name}</h2>
                <small>{featured.summary}</small>
                <div className="micro-checks">{featured.checks.map((check) => <span key={check}>✓ {check}</span>)}</div>
                <a href={featured.destination} target="_blank" rel="noopener noreferrer">Open live source <span>↗</span></a>
              </div>
            </aside>
          </div>
        </section>

        <section className="method-strip">
          <div className="section-shell">
            <div><span>01</span><b>Find</b><small>Start from an organized product record.</small></div>
            <div><span>02</span><b>Compare</b><small>Confirm variant, measurements and photos.</small></div>
            <div><span>03</span><b>Inspect</b><small>Use a repeatable QC checklist.</small></div>
            <div><span>04</span><b>Decide</b><small>Open the live destination when ready.</small></div>
          </div>
        </section>

        <section className="category-index section-shell">
          <div className="index-section-title">
            <div><span>02 / Category map</span><h2>Eight clear ways<br />into the catalog.</h2></div>
            <p>Each category opens a dedicated index with real product records and decision notes—not an endless undifferentiated spreadsheet.</p>
          </div>
          <div className="category-ledger">
            {categories.map((category) => (
              <a href={category.destination} target="_blank" rel="noopener noreferrer" key={category.slug}>
                <span>{category.mark}</span><h3>{category.name}</h3><p>{category.description}</p><b>Browse group ↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="decision-lab">
          <div className="section-shell">
            <div className="lab-heading"><span>03 / Decision guides</span><h2>Three checks before<br />a product joins your parcel.</h2></div>
            <div className="guide-ledger">
              {guides.map((guide, index) => (
                <Link href={guide.href} key={guide.href}>
                  <span>0{index + 1}</span><div><small>{guide.kicker} · {guide.read}</small><h3>{guide.title}</h3><p>{guide.description}</p></div><b>Read ↗</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="answer-desk section-shell">
          <div className="answer-label"><span>04 / Quick answers</span><h2>No vague promises.</h2><Link href="/faq">See complete FAQ ↗</Link></div>
          <div className="answer-list">
            <details open><summary>Is this an official AllChinaBuy website?<span>+</span></summary><p>No. It is an independent product discovery resource. Purchasing and account services happen on the linked destination.</p></details>
            <details><summary>Does “source checked” mean QC approved?<span>+</span></summary><p>No. It means the destination record was checked. Inspect the warehouse photos for your own item before shipping.</p></details>
            <details><summary>Why can the final shipping price change?<span>+</span></summary><p>Routes can charge by actual or volumetric weight. Packaging, destination and carrier rules also affect the final amount.</p></details>
          </div>
        </section>

        <section className="index-cta">
          <div className="section-shell"><span>Ready when you are</span><h2>Use the index.<br />Open the source.</h2><div><a href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer">Browse live catalog ↗</a><Link href="/guides/how-to-use">Read the 8-minute guide</Link></div></div>
        </section>
      </main>
    </PageShell>
  );
}
