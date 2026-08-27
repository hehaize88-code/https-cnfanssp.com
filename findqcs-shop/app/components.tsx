import Link from "next/link";
import { articles, MAIN_SITE, products } from "./data";
import { LanguageSwitcher } from "./language";

export function Logo() {
  return (
    <Link href="/" className="logo notranslate" translate="no" aria-label="FindQC home">
      <img className="logo-image" src="/findQC.png" alt="" width="52" height="52" />
      <span>findqc</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/finds">Finds</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/qc">QC Guide</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/guide">How It Works</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <LanguageSwitcher />
        <a className="header-action" href={`${MAIN_SITE}/AllProducts/`} target="_blank" rel="noopener noreferrer">
          Browse finds <span aria-hidden="true">↗</span>
        </a>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <Link href="/finds">Finds</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/qc">QC</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/guide">Guide</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p className="footer-copy">Independent product discovery and QC research. Find the listing, inspect the evidence, decide with context.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <Link href="/finds">Finds and search</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/qc">QC checklist</Link>
            <Link href="/shipping">Real Hauls data</Link>
            <Link href="/articles">Research articles</Link>
          </div>
          <div>
            <strong>Help</strong>
            <Link href="/guide">How it works</Link>
            <Link href="/faq">FAQ</Link>
            <a href={`${MAIN_SITE}/AllProducts/`} target="_blank" rel="noopener noreferrer">Product catalog ↗</a>
          </div>
        </div>
      </div>
      <div className="shell legal-line">
        <span>© 2026 FindQC Research Desk</span>
        <span>Independent guide · No products are sold here</span>
      </div>
    </footer>
  );
}

export function SearchDesk({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`search-desk ${compact ? "search-compact" : ""}`} action={`${MAIN_SITE}/search.html`} method="get" target="_blank">
      <label htmlFor={compact ? "product-search-compact" : "product-search"}>Search the live catalog</label>
      <div className="search-row">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input id={compact ? "product-search-compact" : "product-search"} name="keywords" type="search" placeholder="Product name, style or keyword…" autoComplete="off" required />
        <button type="submit">Search finds <span aria-hidden="true">→</span></button>
      </div>
      {!compact && <p>Search opens the current destination catalog so names, images and availability can be checked at the source.</p>}
    </form>
  );
}

export function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="product-card">
      <a className="product-image" href={product.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${product.name} listing`}>
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="checked-pill">Listing matched</span>
      </a>
      <div className="product-body">
        <div className="product-meta"><span>{product.category}</span><span>ID {product.id}</span></div>
        <h3>{product.name}</h3>
        <div className="price-line"><strong>{product.price}</strong><span>approx. · {product.sourcePrice}</span></div>
        <div className="product-foot"><span>{product.weight} listed</span><a href={product.href} target="_blank" rel="noopener noreferrer">Open listing ↗</a></div>
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="article-card">
      <div className="article-card-top"><span>Field guide</span><span>{article.readTime}</span></div>
      <h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.description}</p>
      <Link className="text-link" href={`/articles/${article.slug}`}>Read the guide <span aria-hidden="true">→</span></Link>
    </article>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro shell">
      <div className="eyebrow"><span />{eyebrow}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs shell" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => <span key={item.label}><i>/</i>{item.href ? <Link href={item.href}>{item.label}</Link> : <b>{item.label}</b>}</span>)}
    </nav>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
