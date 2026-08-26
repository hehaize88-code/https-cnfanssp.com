import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const MAIN = "https://www.cnfanssp.com";

const categories = [
  ["SH", "Shoes", "Sneakers, runners and everyday pairs", "/shoes/"],
  ["HD", "Hoodies", "Pullovers, zip-ups and matching sets", "/hoodies-sweaters/"],
  ["TS", "T-Shirts", "Graphic, basic and seasonal tees", "/t-shirts/"],
  ["JK", "Jackets", "Outerwear, puffers and windbreakers", "/jackets/"],
  ["JR", "Jerseys", "Football and basketball selections", "/jersey/"],
  ["AC", "Accessories", "Bags, hats, belts and small finds", "/accessories/"],
];

const products = [
  { name: "Nike Dunk Low × Off-White", type: "Shoes", note: "Statement sneaker find", href: "/AllProducts/2597.html", image: "/products/nike-dunk.webp", width: 750, height: 750 },
  { name: "Autry Shoes", type: "Shoes", note: "Low-profile everyday pair", href: "/AllProducts/4276.html", image: "/products/autry-shoes.webp", width: 500, height: 338 },
  { name: "6PM Hoodie Set", type: "Hoodies", note: "Coordinated two-piece set", href: "/AllProducts/24.html", image: "/products/6pm-hoodie.webp", width: 600, height: 600 },
  { name: "Godspeed Hoodie", type: "Hoodies", note: "Graphic pullover selection", href: "/AllProducts/717.html", image: "/products/godspeed-hoodie.webp", width: 750, height: 750 },
  { name: "Celine Hoodie", type: "Hoodies", note: "Minimal wardrobe layer", href: "/AllProducts/2822.html", image: "/products/celine-hoodie.webp", width: 750, height: 750 },
  { name: "Jersey 46", type: "Jerseys", note: "Match-day category pick", href: "/AllProducts/6653.html", image: "/products/jersey-46.webp", width: 1280, height: 720 },
];

const guides = [
  ["01", "Paste a product link", "AllChinaBuy supports product links or keywords from Taobao, Tmall, 1688 and JD."],
  ["02", "Review warehouse QC", "Check the inspection photos after the seller's parcel reaches the warehouse."],
  ["03", "Estimate delivery", "Use the shipping calculator before submitting a parcel and compare available routes."],
];

export default function Home() {
  const schema = {
    "@context":"https://schema.org","@type":"WebSite","name":"AllChinaBuy Spreadsheet & Finds","url":"https://allchinabuys.shop/",
    "description":"Independent product discovery, listing verification and category research.",
    "potentialAction":{"@type":"SearchAction","target":"https://www.cnfanssp.com/search.html?keywords={search_term_string}&channelid=2","query-input":"required name=search_term_string"}
  };
  return (
    <main className="home-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>Updated weekly</span> Independent product index</p>
          <h1>Find it faster.<br/><em>Check it smarter.</em></h1>
          <p className="hero-lede">A cleaner AllChinaBuy spreadsheet experience for discovering products, checking live links and comparing listing details—without digging through endless rows.</p>
          <form className="search" action={`${MAIN}/search.html`} method="get" target="_blank">
            <label className="sr-only" htmlFor="product-search">Search products</label><span aria-hidden="true">⌕</span>
            <input id="product-search" name="keywords" data-search-input placeholder="Search shoes, hoodies, jerseys…" />
            <input type="hidden" name="channelid" value="2" />
            <button type="submit">Search finds</button>
          </form>
          <div className="quick-links"><span>Popular:</span><a href={`${MAIN}/search.html?keywords=shoes&channelid=2`} target="_blank">Shoes</a><a href={`${MAIN}/search.html?keywords=hoodie&channelid=2`} target="_blank">Hoodies</a><a href={`${MAIN}/search.html?keywords=jersey&channelid=2`} target="_blank">Jerseys</a></div>
        </div>
        <div className="hero-board" aria-label="Product discovery preview">
          <div className="board-head"><span>PRODUCT DETAILS</span><strong>Live destination links</strong></div>
          <div className="board-grid">
            {[products[0],products[2],products[4]].map((product,index)=><a className="board-card board-product" href={`${MAIN}${product.href}`} target="_blank" rel="noopener noreferrer" key={product.name}><img src={product.image} alt={product.name} width={product.width} height={product.height} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async"/><span className="board-product-overlay"><small>{product.type}</small><b>{product.name}</b><i>View product ↗</i></span><span className="board-index">0{index+1}</span></a>)}
            <div className="board-note"><span>✓</span><p><b>Link-first browsing</b><br/>Open the current destination listing before ordering.</p></div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Site highlights"><span>CURATED FINDS</span><i>✦</i><span>QC CHECKLISTS</span><i>✦</i><span>SHIPPING NOTES</span><i>✦</i><span>BEGINNER GUIDES</span></section>

      <section className="section" id="spreadsheet">
        <div className="section-heading"><div><p className="section-kicker">01 / Browse by category</p><h2>Less scrolling.<br/>Better starting points.</h2></div><p>Every category leads to the current product index. Availability, variants and prices can change, so the destination listing remains the source of truth.</p></div>
        <div className="category-grid">
          {categories.map(([code, title, desc, path], i) => (
            <a className={`category-card cat-${i + 1}`} key={title} href={`${MAIN}${path}`} target="_blank" rel="noopener noreferrer">
              <span className="category-code">{code}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section finds-section" id="finds">
        <div className="section-heading compact"><div><p className="section-kicker">02 / Selected finds</p><h2>A useful shortlist,<br/>not a wall of links.</h2></div><a className="text-link" href={`${MAIN}/AllProducts/`} target="_blank" rel="noopener noreferrer">Explore complete index ↗</a></div>
        <div className="product-grid">
          {products.map((p, i) => (
            <a className="product-card" key={p.name} href={`${MAIN}${p.href}`} target="_blank" rel="noopener noreferrer">
              <div className="product-visual"><img src={p.image} alt={p.name} width={p.width} height={p.height} loading="lazy" decoding="async"/><span className="product-number">{String(i + 1).padStart(2, "0")}</span><span className="view-pill">View listing ↗</span></div>
              <div className="product-info"><span>{p.type}</span><h3>{p.name}</h3><p>{p.note}</p><small>Check current price & availability</small></div>
            </a>
          ))}
        </div>
      </section>

      <section className="section guide-section" id="guide">
        <div className="guide-intro"><p className="section-kicker">03 / How it works</p><h2>From a product link<br/>to your doorstep.</h2><p>The official workflow separates the item purchase from international delivery: order first, review warehouse information, then submit a parcel.</p><a className="button-dark" href="/guide/">Read the full beginner guide <span>→</span></a></div>
        <div className="guide-steps">{guides.map(([n, title, desc]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div>
      </section>

      <section className="section editorial-section">
        <div className="editorial-image"><img src="/og.png" alt="AllChinaBuy Spreadsheet editorial collage with parcel boxes, a hoodie, a sneaker, QC photos and a product grid" width="1200" height="630" loading="lazy" decoding="async" /></div>
        <div className="editorial-copy"><p className="section-kicker">Research desk</p><h2>Useful answers<br/>beyond the links.</h2><p>Product discovery is only the first step. These guides explain what to verify before ordering, what warehouse photos can show and why a shipping quote must be checked for the parcel you actually create.</p>
          <div className="article-links"><a href="/articles/how-to-use-allchinabuy-spreadsheet/"><span>LISTING CHECK</span><b>Verify Listings &amp; Recover Dead Links</b><i>11 min →</i></a><a href="/articles/warehouse-qc-photo-checklist/"><span>CATEGORY QC</span><b>QC Photos for Shoes, Clothing &amp; Accessories</b><i>11 min →</i></a><a href="/articles/plan-allchinabuy-shipping/"><span>PARCEL DECISION</span><b>Volumetric Weight: Split or Consolidate?</b><i>12 min →</i></a></div>
        </div>
      </section>

      <section className="split-section" id="qc">
        <article className="qc-panel"><p className="section-kicker">QC desk</p><h2>Inspect before you ship.</h2><p>Use warehouse photos to review the received item. Look at the selected variant, visible condition, measurements and any detail you asked the agent to photograph.</p><div className="check-grid"><span>✓ Correct color</span><span>✓ Size label</span><span>✓ Visible condition</span><span>✓ Requested details</span></div><a href="/qc/">Open the QC checklist →</a></article>
        <article className="shipping-panel" id="shipping"><p className="section-kicker">Shipping planner</p><h2>Estimate before submitting.</h2><p>International options depend on destination, parcel weight, dimensions and restrictions. Compare routes in the official calculator instead of relying on a fixed promise.</p><div className="parcel-line"><span>ITEMS</span><b>3</b><span>DESTINATION</span><b>Your country</b><span>QUOTE</span><b>Live</b></div><a href="/shipping/">Plan a parcel →</a></article>
      </section>

      <section className="section faq-section" id="faq">
        <div><p className="section-kicker">04 / Quick answers</p><h2>Before you start.</h2><p>Clear answers based on the current shopping-agent workflow, without guaranteed delivery times or invented QC claims.</p></div>
        <div className="faq-list">
          <details open><summary>Is this the official AllChinaBuy website?<span>+</span></summary><p>No. This is an independent product-discovery and educational resource. Purchases and account services happen on the destination platform.</p></details>
          <details><summary>Does a spreadsheet product come QC-approved?<span>+</span></summary><p>No. A link is only a starting point. Review the current listing and inspect the warehouse photos for your own item before international shipment.</p></details>
          <details><summary>Are prices and shipping costs fixed?<span>+</span></summary><p>No. Product availability, domestic delivery and international routes can change. Check the current listing and shipping calculator.</p></details>
          <details><summary>How long can items stay in the warehouse?<span>+</span></summary><p>The official site currently advertises 90-day free storage. Confirm the current policy in your account before relying on it.</p></details>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
