import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { CategoryCard, ProductCard } from "@/components/Cards";
import HeroSearch from "@/components/HeroSearch";
import StructuredData from "@/components/StructuredData";
import { categories, products, guides, faqs } from "./data";
import { languageAlternates } from "./i18n";

export const metadata = { alternates: languageAlternates("/", "en") };

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 4).map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="home-page club-home">
      <StructuredData data={faqSchema}/>

      <section className="club-hero">
        <div className="wrap club-hero-grid">
          <div className="club-hero-copy">
            <div className="club-kicker"><span>Hacoo spreadsheet 2026</span><b>Independent edit</b></div>
            <h1>Finds with<br/><em>better context.</em></h1>
            <p>Explore category routes, real product references and practical checks in one bright, independent Hacoo discovery guide.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/spreadsheet">Open the spreadsheet <Arrow/></Link>
              <Link className="button quiet" href="/categories">See all finds</Link>
            </div>
            <div className="club-mini-proof"><span>08 focused categories</span><span>Live routes checked</span><span>6 languages</span></div>
          </div>

          <div className="club-collage" aria-label="Hacoo finds collage">
            <figure className="club-photo club-photo-main">
              <img src="/products/shoe-performance.webp" alt="Grey footwear find"/>
              <figcaption>Footwear edit / 01</figcaption>
            </figure>
            <figure className="club-photo club-photo-small">
              <img src="/products/live-6427.jpg" alt="Brown checkered mini bag"/>
              <figcaption>Accessories / 07</figcaption>
            </figure>
            <div className="club-burst"><strong>08</strong><span>curated routes</span></div>
            <div className="club-note"><span>Today’s rule</span><b>Check the live option, not only the cover image.</b></div>
          </div>
        </div>

        <div className="wrap club-search-dock">
          <HeroSearch/>
          <div className="club-search-meta"><span>Search destination catalog</span><b>Opens current results ↗</b></div>
        </div>

        <nav className="wrap club-shortcuts" aria-label="Popular Hacoo guides">
          <Link href="/categories"><span>01</span>Product finds <Arrow size={16}/></Link>
          <Link href="/guides/qc-photo-checklist"><span>02</span>QC checklist <Arrow size={16}/></Link>
          <Link href="/guides/size-guide"><span>03</span>Size guide <Arrow size={16}/></Link>
          <Link href="/guides/shipping-planning"><span>04</span>Shipping facts <Arrow size={16}/></Link>
        </nav>
      </section>

      <section className="club-proof wrap" aria-labelledby="platform-check-title">
        <div className="club-proof-heading">
          <span className="section-label">Platform notes</span>
          <h2 id="platform-check-title">Know what is current.<br/><em>Know what can change.</em></h2>
          <p>Facts checked against Hacoo’s public website on August 26, 2026. Hacoos is an independent guide.</p>
        </div>
        <div className="club-proof-cards">
          <article><span>01</span><h3>Community first</h3><p>Hacoo presents itself as a creator-led discovery and content-sharing platform.</p></article>
          <article><span>02</span><h3>Timelines vary</h3><p>Processing and delivery windows depend on the destination and current conditions.</p></article>
          <article><span>03</span><h3>Listings move</h3><p>Options and availability can change, so every route ends with a live check.</p></article>
        </div>
      </section>

      <section className="club-directory">
        <div className="wrap">
          <div className="section-heading">
            <div><span className="section-label">Find your lane</span><h2>Shop the edit,<br/><em>category by category.</em></h2></div>
            <p>Start with the closest product type to keep the right measurements, materials and construction checks in view.</p>
          </div>
          <div className="category-grid">{categories.slice(0, 6).map((category, index) => <CategoryCard category={category} index={index} key={category.slug}/>)}</div>
          <div className="center-action"><Link className="button outline" href="/categories">Browse all categories <Arrow/></Link></div>
        </div>
      </section>

      <section className="club-method">
        <div className="wrap club-method-grid">
          <div className="club-method-copy">
            <span className="section-label inverse">The three-step check</span>
            <h2>Less tab chaos.<br/>More useful detail.</h2>
            <p>A strong product index makes the next check obvious before you open a current listing.</p>
            <Link className="button light" href="/guides/how-to-use-hacoo-spreadsheet">Read the workflow <Arrow/></Link>
          </div>
          <ol className="club-method-list">
            <li><span>1</span><div><h3>Choose a category</h3><p>Start narrow so the relevant fit and construction notes stay visible.</p></div></li>
            <li><span>2</span><div><h3>Compare the details</h3><p>Review measurements, material notes, options and the exact product image.</p></div></li>
            <li><span>3</span><div><h3>Open the live route</h3><p>Use the current destination page as the final source for listing information.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section wrap club-products">
        <div className="section-heading compact">
          <div><span className="section-label">Current reference shelf</span><h2>Eight finds,<br/><em>ready to inspect.</em></h2></div>
          <a className="text-link large" href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer">Open live catalog <Arrow/></a>
        </div>
        <div className="product-grid">{products.map((product) => <ProductCard product={product} key={product.slug}/>)}</div>
        <p className="data-note">Each card opens an independent product reference. Images and availability can change; Hacoos does not sell, authenticate or process products.</p>
      </section>

      <section className="club-journal">
        <div className="wrap">
          <div className="section-heading">
            <div><span className="section-label">The field journal</span><h2>Read before<br/><em>you click out.</em></h2></div>
            <p>Practical reading about spreadsheets, sizing, QC photos and shipping planning—written to support a real decision.</p>
          </div>
          <div className="guide-grid">{guides.slice(0, 4).map((guide, index) => <Link href={"/guides/" + guide.slug} className="guide-card" key={guide.slug}><span className="guide-number">0{index + 1}</span><div><small>{guide.read} read</small><h3>{guide.title}</h3><p>{guide.short}</p><span className="text-link">Read the story <Arrow size={16}/></span></div></Link>)}</div>
        </div>
      </section>

      <section className="section wrap club-faq">
        <div className="club-faq-intro"><span className="section-label">Good to know</span><h2>Clear answers.<br/><em>No fine print.</em></h2><p>Hacoos is an independent discovery guide. We do not process orders, promise delivery dates or control external listings.</p><Link className="button outline" href="/faq">Read every answer <Arrow/></Link></div>
        <div className="faq-list">{faqs.slice(0, 4).map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </div>
  );
}
