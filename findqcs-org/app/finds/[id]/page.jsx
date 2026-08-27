import { notFound } from "next/navigation";
import Link from "../../../components/LocalizedLink";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductCard from "../../../components/ProductCard";
import T from "../../../components/LocalizedText";
import { ArrowIcon, CheckIcon, ExternalIcon } from "../../../components/Icons";
import { CATALOG_REVIEWED, categories, products } from "../../../lib/data";
import { BUILD_LANGUAGE, languageUrl } from "../../../lib/routing";
import { translate } from "../../../lib/i18n";
import { localizedMetadata } from "../../../lib/seo";
import { INDEXABLE_PRODUCT_IDS } from "../../sitemap";

export function generateStaticParams() {
  return products.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) return {};
  const category = categories.find((item) => item.slug === product.category);
  const productKey = `product.name.${product.id}`;
  const translatedProduct = translate(BUILD_LANGUAGE, productKey);
  const productName = translatedProduct === productKey ? product.name : translatedProduct;
  const categoryName = translate(BUILD_LANGUAGE, `category.${category.slug}.name`);
  const categoryDescription = translate(BUILD_LANGUAGE, `category.${category.slug}.description`);
  return localizedMetadata({
    title: `${productName} — FindQCS`,
    description: categoryDescription,
    openGraph: { title: `${productName} | FindQCS`, description: categoryDescription, images: [{ url: product.image }] },
    robots: { index: INDEXABLE_PRODUCT_IDS.has(product.id), follow: true },
  }, `/finds/${product.id}`);
}

export default async function FindDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) notFound();
  const category = categories.find((item) => item.slug === product.category);
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
  const usdPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(product.price) / 7.2);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: translate(BUILD_LANGUAGE, `product.name.${product.id}`) === `product.name.${product.id}` ? product.name : translate(BUILD_LANGUAGE, `product.name.${product.id}`),
    image: [`https://findqcs.org${product.image}`],
    description: translate(BUILD_LANGUAGE, `category.${category.slug}.description`),
    category: translate(BUILD_LANGUAGE, `category.${category.slug}.name`),
    url: languageUrl(`/finds/${product.id}`),
    sku: product.id,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Source item ID", value: product.sourceId },
      { "@type": "PropertyValue", name: "Catalog route reviewed", value: CATALOG_REVIEWED },
    ],
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "FindQCS", item: languageUrl("/") },
      { "@type": "ListItem", position: 2, name: translate(BUILD_LANGUAGE, "finds.crumb"), item: languageUrl("/products") },
      { "@type": "ListItem", position: 3, name: product.name, item: languageUrl(`/finds/${product.id}`) },
    ],
  };

  return (
    <article className="shell inner-page find-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Breadcrumbs items={[{ labelKey: "finds.crumb", href: "/products" }, { labelKey: `product.name.${product.id}`, label: product.name }]} />
      <div className="find-detail-hero">
        <figure><img src={product.image} alt={product.name} fetchPriority="high" /><figcaption><T id="finds.caption" values={{ date: CATALOG_REVIEWED }} /></figcaption></figure>
        <div>
          <span className="eyebrow">{category.code} / <T id={`category.${category.slug}.name`} /> / #{product.id}</span>
          <h1><T id={`product.name.${product.id}`} fallback={product.name} /></h1>
          <p><T id={`category.${category.slug}.description`} /></p>
          <div className="find-price"><small><T id="finds.priceLabel" /></small><strong>{usdPrice}</strong><span><T id="finds.priceNote" /></span></div>
          <a className="find-source-cta" href={product.href} target="_blank" rel="noopener noreferrer"><T id="finds.openExact" /> <ExternalIcon /></a>
          <Link className="find-category-link" href={`/categories/${category.slug}`}><T id="finds.openGuide" values={{ category: { id: `category.${category.slug}.name` } }} /> <ArrowIcon /></Link>
        </div>
      </div>

      <section className="find-checks" aria-labelledby="find-checks-title">
        <header><span className="eyebrow"><T id="finds.evidenceEyebrow" /></span><h2 id="find-checks-title"><T id="finds.checksTitle" /></h2><p><T id="finds.checksIntro" /></p></header>
        <ol>
          {[1, 2, 3].map((number, index) => <li key={`prompt-${number}`}><span>0{index + 1}</span><p><T id={`category.${category.slug}.prompts.${number}`} /></p><CheckIcon /></li>)}
          {[4, 5, 6].map((number, index) => <li key={`check-${number}`}><span>0{index + 4}</span><p><T id={`categoryDepth.check${number}`} /></p><CheckIcon /></li>)}
        </ol>
      </section>

      <section className="find-decision-note">
        <div><span><T id="finds.decisionLabel" /></span><h2><T id="finds.decisionTitle" /></h2></div>
        <p><T id="finds.decisionText" /></p>
        <Link href="/guides/qc-photo-checklist"><T id="finds.checklist" /> <ArrowIcon /></Link>
      </section>

      <section className="related-finds">
        <div className="section-heading compact-heading"><div><span className="eyebrow"><T id="finds.sameCategory" /></span><h2><T id="finds.related" /></h2></div><Link href={`/categories/${category.slug}`}><T id="finds.viewAll" /> <ArrowIcon /></Link></div>
        <div className="product-grid all-products">{related.map((item) => <ProductCard product={item} key={item.id} />)}</div>
      </section>
    </article>
  );
}
