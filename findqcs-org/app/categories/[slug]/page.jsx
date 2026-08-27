import Link from "../../../components/LocalizedLink";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PageHero from "../../../components/PageHero";
import ProductCard from "../../../components/ProductCard";
import { ArrowIcon, CheckIcon, ExternalIcon } from "../../../components/Icons";
import T from "../../../components/LocalizedText";
import { categories, products } from "../../../lib/data";
import { localizedMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};
  return localizedMetadata({
    title: `${category.name} Finds & QC Checklist`,
    description: `Browse ${category.name.toLowerCase()} finds and use a practical QC checklist for sizing, visible condition, measurements, details and packing before shipment.`,
  }, `/categories/${category.slug}`);
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const matches = products.filter((product) => product.category === category.slug);
  const categoryKey = `category.${category.slug}.name`;

  return (
    <div className="shell inner-page">
      <Breadcrumbs items={[{ labelKey: "nav.categories", href: "/categories" }, { labelKey: `category.${category.slug}.name` }]} />
      <PageHero eyebrow={<>{category.code} / <T id={`category.${category.slug}.short`} /></>} title={<><T id={`category.${category.slug}.name`} /><br /><em><T id="categoryDetail.title2" /></em></>} intro={<T id={`category.${category.slug}.description`} />}>
        <a className="hero-source-link" href={category.href} target="_blank" rel="noopener noreferrer"><T id="categoryDetail.browse" /> <ExternalIcon /></a>
      </PageHero>

      <section className="category-detail-grid">
        <div>
          <div className="section-heading compact-heading"><div><span className="eyebrow"><T id="categoryDetail.matchingEyebrow" /></span><h2><T id="categoryDetail.matchingTitle" /></h2></div></div>
          <div className="product-grid category-products">
            {matches.length ? matches.map((product) => <ProductCard product={product} priority key={product.id} />) : <p><T id="categoryDetail.none" /></p>}
          </div>
        </div>
        <aside className="check-card">
          <span className="eyebrow light"><T id="categoryDetail.quickEyebrow" /></span>
          <h2><T id="categoryDetail.quickTitle" /></h2>
          <ol>{[1, 2, 3].map((number, index) => <li key={number}><span>0{index + 1}</span><p><T id={`category.${category.slug}.prompts.${number}`} /></p><CheckIcon /></li>)}</ol>
          <Link href="/guides/qc-photo-checklist"><T id="categoryDetail.complete" /> <ArrowIcon /></Link>
        </aside>
      </section>

      <article className="category-depth">
        <header className="depth-heading">
          <span className="eyebrow"><T id="categoryDepth.eyebrow" /></span>
          <h2><T id="categoryDepth.title" values={{ category: { id: categoryKey } }} /></h2>
          <p><T id="categoryDepth.intro" /></p>
        </header>

        <div className="category-overview">
          <p><T id={`category.${category.slug}.description`} /></p>
          <p><T id="categoryDepth.overview2" /></p>
        </div>

        <section className="buying-advice" aria-labelledby="buying-advice-title">
          <div className="depth-section-label">
            <span>01</span>
            <div><small><T id="categoryDepth.adviceLabel" /></small><h2 id="buying-advice-title"><T id="categoryDepth.adviceTitle" /></h2></div>
          </div>
          <div className="advice-grid">
            {[1, 2, 3].map((number, index) => (
              <article key={number}>
                <span>0{index + 1}</span>
                <h3><T id={`categoryDepth.advice${number}Title`} /></h3>
                <p><T id={`categoryDepth.advice${number}Text`} /></p>
              </article>
            ))}
          </div>
        </section>

        <section className="category-review-grid" aria-labelledby="category-checklist-title">
          <div className="expanded-checklist">
            <span className="eyebrow"><T id="categoryDepth.checksEyebrow" /></span>
            <h2 id="category-checklist-title"><T id="categoryDepth.checksTitle" values={{ category: { id: categoryKey } }} /></h2>
            <ul>
              {[1, 2, 3].map((number) => <li key={`prompt-${number}`}><CheckIcon size={17} /><span><T id={`category.${category.slug}.prompts.${number}`} /></span></li>)}
              {[4, 5, 6].map((number) => <li key={`check-${number}`}><CheckIcon size={17} /><span><T id={`categoryDepth.check${number}`} /></span></li>)}
            </ul>
          </div>
          <aside className="decision-note">
            <span><T id="categoryDepth.ruleLabel" /></span>
            <h2><T id="categoryDepth.ruleTitle" /></h2>
            <p><T id="categoryDepth.ruleText" /></p>
            <Link href="/guides/qc-photo-checklist"><T id="categoryDepth.ruleLink" /> <ArrowIcon size={16} /></Link>
          </aside>
        </section>

        <section className="category-faq" aria-labelledby="category-faq-title">
          <div className="depth-section-label">
            <span>03</span>
            <div><small><T id="categoryDepth.faqLabel" /></small><h2 id="category-faq-title"><T id="categoryDepth.faqTitle" /></h2></div>
          </div>
          <div>
            {[1, 2, 3].map((number, index) => (
              <details key={number} open={index === 0}>
                <summary><T id={`categoryDepth.faq${number}Q`} /><span>+</span></summary>
                <p><T id={`categoryDepth.faq${number}A`} /></p>
              </details>
            ))}
          </div>
        </section>

        <nav className="category-resource-links" aria-label="Related QC resources">
          <Link href="/guides/how-to-buy"><small><T id="categoryDepth.resource1Small" /></small><strong><T id="categoryDepth.resource1Strong" /></strong><ArrowIcon /></Link>
          <Link href="/articles/before-you-buy-qc-guide"><small><T id="categoryDepth.resource2Small" /></small><strong><T id="categoryDepth.resource2Strong" /></strong><ArrowIcon /></Link>
          <Link href="/products"><small><T id="categoryDepth.resource3Small" /></small><strong><T id="categoryDepth.resource3Strong" /></strong><ArrowIcon /></Link>
        </nav>
      </article>

      <section className="related-categories" aria-labelledby="related-category-title">
        <div className="section-heading compact-heading">
          <div>
            <span className="eyebrow"><T id="home.browseType" /></span>
            <h2 id="related-category-title"><T id="home.startCategory" /></h2>
          </div>
          <Link href="/categories" className="text-link"><T id="home.allCategories" /> <ArrowIcon /></Link>
        </div>
        <div className="related-category-links">
          {categories.filter((item) => item.slug !== category.slug).map((item) => (
            <Link href={`/categories/${item.slug}`} key={item.slug}>
              <span>{item.code}</span>
              <strong><T id={`category.${item.slug}.name`} /></strong>
              <ArrowIcon size={15} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
