import Link from "../../components/LocalizedLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageHero from "../../components/PageHero";
import SearchBox from "../../components/SearchBox";
import ProductCard from "../../components/ProductCard";
import { ArrowIcon, CheckIcon } from "../../components/Icons";
import T from "../../components/LocalizedText";
import { CATALOG_REVIEWED, categories, products } from "../../lib/data";
import { localizedMetadata } from "../../lib/seo";

export const metadata = localizedMetadata({
  title: "Product Finds with Exact Source Links",
  description: "Browse a curated product shortlist, open exact source pages and use practical listing and QC checks before ordering or approving international shipment.",
}, "/products");

export default function ProductsPage() {
  const productGroups = categories.map((category) => ({
    category,
    items: products.filter((product) => product.category === category.slug),
  }));

  return (
    <div className="shell inner-page products-depth-page">
      <Breadcrumbs items={[{ labelKey: "nav.finds" }]} />
      <PageHero eyebrow={<T id="products.eyebrow" />} title={<><T id="products.title1" /><br /><em><T id="products.title2" /></em></>} intro={<T id="products.intro" />}><SearchBox compact /></PageHero>

      <section className="shortlist-method" aria-labelledby="shortlist-method-title">
        <div>
          <span className="eyebrow light"><T id="products.methodEyebrow" /></span>
          <h2 id="shortlist-method-title"><T id="products.methodTitle" values={{ count: products.length }} /></h2>
        </div>
        <p><T id="products.methodIntro" values={{ date: CATALOG_REVIEWED }} /></p>
        <ul>
          <li><CheckIcon size={17} /><span><strong><T id="products.bullet1Title" /></strong><T id="products.bullet1Text" /></span></li>
          <li><CheckIcon size={17} /><span><strong><T id="products.bullet2Title" /></strong><T id="products.bullet2Text" /></span></li>
          <li><CheckIcon size={17} /><span><strong><T id="products.bullet3Title" /></strong><T id="products.bullet3Text" /></span></li>
        </ul>
      </section>

      <nav className="product-category-index" aria-label="Jump to a product category">
        {productGroups.map(({ category, items }) => (
          <a href={`#products-${category.slug}`} key={category.slug}>
            <span>{category.code}</span>
            <strong><T id={`category.${category.slug}.name`} /></strong>
            <small><T id="products.productCount" values={{ count: items.length }} /></small>
            <ArrowIcon size={15} />
          </a>
        ))}
      </nav>

      <div className="product-catalog">
        {productGroups.map(({ category, items }, groupIndex) => (
          <section className="product-catalog-section" id={`products-${category.slug}`} aria-labelledby={`products-${category.slug}-title`} key={category.slug}>
            <header className="product-group-heading">
              <div><span>{category.code} / <T id="products.sourceLinkedCount" values={{ count: items.length }} /></span><h2 id={`products-${category.slug}-title`}><T id={`category.${category.slug}.name`} /></h2></div>
              <a href={category.href} target="_blank" rel="noopener noreferrer"><T id="products.openCategoryGuide" /> <ArrowIcon size={16} /></a>
            </header>
            <div className="product-grid all-products">
              {items.map((product, index) => <ProductCard product={product} priority={groupIndex === 0 && index < 4} key={product.id} />)}
            </div>
          </section>
        ))}
      </div>
      <p className="price-note"><T id="products.priceNote" /></p>

      <section className="product-use-grid" aria-labelledby="product-use-title">
        <article>
          <span className="depth-number">01</span>
          <small><T id="products.use1Eyebrow" /></small>
          <h2 id="product-use-title"><T id="products.use1Title" /></h2>
          <p><T id="products.use1p1" /></p>
          <p><T id="products.use1p2" /></p>
        </article>
        <article>
          <span className="depth-number">02</span>
          <small><T id="products.use2Eyebrow" /></small>
          <h2><T id="products.use2Title" /></h2>
          <p><T id="products.use2p1" /></p>
          <p><T id="products.use2p2" /></p>
        </article>
        <article>
          <span className="depth-number">03</span>
          <small><T id="products.use3Eyebrow" /></small>
          <h2><T id="products.use3Title" /></h2>
          <p><T id="products.use3p1" /></p>
          <p><T id="products.use3p2" /></p>
        </article>
      </section>

      <section className="product-preflight" aria-labelledby="preflight-title">
        <div>
          <span className="eyebrow"><T id="products.preflightEyebrow" /></span>
          <h2 id="preflight-title"><T id="products.preflightTitle" /></h2>
          <p><T id="products.preflightIntro" /></p>
        </div>
        <ol>
          {[1, 2, 3, 4, 5, 6].map((number) => <li key={number}><span>0{number}</span><p><T id={`products.preflight${number}`} /></p></li>)}
        </ol>
      </section>

      <section className="product-category-paths" aria-labelledby="product-category-title">
        <div className="section-heading compact-heading">
          <div><span className="eyebrow"><T id="products.categoryChecks" /></span><h2 id="product-category-title"><T id="products.categoryChecksTitle" /></h2></div>
          <Link href="/categories" className="text-link"><T id="products.allCategories" /> <ArrowIcon /></Link>
        </div>
        <div>
          {categories.map((category) => (
            <a href={category.href} target="_blank" rel="noopener noreferrer" key={category.slug}>
              <span>{category.code}</span><strong><T id={`category.${category.slug}.name`} /></strong><small><T id={`category.${category.slug}.short`} /></small><ArrowIcon size={15} />
            </a>
          ))}
        </div>
      </section>

      <aside className="product-boundary-note">
        <div><span><T id="products.boundaryEyebrow" /></span><h2><T id="products.boundaryTitle" /></h2></div>
        <p><T id="products.boundaryText" /></p>
        <Link href="/guides/qc-photo-checklist"><T id="products.boundaryLink" /> <ArrowIcon /></Link>
      </aside>
    </div>
  );
}
