import { notFound } from "next/navigation";
import Link from "../../../components/LocalizedLink";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductCard from "../../../components/ProductCard";
import { ArrowIcon, CheckIcon, ExternalIcon } from "../../../components/Icons";
import { categoryGuides } from "../../../lib/categoryGuides";
import { CATALOG_REVIEWED, categories, products } from "../../../lib/data";
import { languageUrl } from "../../../lib/routing";
import { localizedMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return products.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) return {};
  const category = categories.find((item) => item.slug === product.category);
  return localizedMetadata({
    title: `${product.name} — Source Link & QC Notes`,
    description: `Open the exact ${product.name} catalog route and review a practical ${category.name.toLowerCase()} QC checklist before shipping.`,
    openGraph: { title: `${product.name} | FindQCS`, description: category.description, images: [{ url: product.image }] },
  }, `/finds/${product.id}`);
}

export default async function FindDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) notFound();
  const category = categories.find((item) => item.slug === product.category);
  const guide = categoryGuides[product.category];
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
  const usdPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(product.price) / 7.2);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`https://findqcs.org${product.image}`],
    description: category.description,
    category: category.name,
    url: languageUrl(`/finds/${product.id}`),
    sku: product.id,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Source item ID", value: product.sourceId },
      { "@type": "PropertyValue", name: "Catalog route reviewed", value: CATALOG_REVIEWED },
    ],
  };

  return (
    <article className="shell inner-page find-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <Breadcrumbs items={[{ label: "Finds", href: "/products" }, { label: product.name }]} />
      <div className="find-detail-hero">
        <figure><img src={product.image} alt={product.name} fetchPriority="high" /><figcaption>Mapped listing image · route checked {CATALOG_REVIEWED}</figcaption></figure>
        <div>
          <span className="eyebrow">{category.code} / {category.name} / #{product.id}</span>
          <h1>{product.name}</h1>
          <p>{category.description}</p>
          <div className="find-price"><small>Approximate USD reference</small><strong>{usdPrice}</strong><span>Converted from the captured source CNY amount at ¥7.20 = $1. Confirm the live price.</span></div>
          <a className="find-source-cta" href={product.href} target="_blank" rel="noopener noreferrer">Open exact catalog page <ExternalIcon /></a>
          <Link className="find-category-link" href={`/categories/${category.slug}`}>Open the full {category.name.toLowerCase()} guide <ArrowIcon /></Link>
        </div>
      </div>

      <section className="find-checks" aria-labelledby="find-checks-title">
        <header><span className="eyebrow">Category-specific evidence</span><h2 id="find-checks-title">Six checks before you approve this type of item</h2><p>These prompts organize a visual review. They are not a certification or guarantee for the linked product.</p></header>
        <ol>{guide.checks.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p><CheckIcon /></li>)}</ol>
      </section>

      <section className="find-decision-note">
        <div><span>Decision boundary</span><h2>Ask for one image that can change the decision.</h2></div>
        <p>{guide.decision}</p>
        <Link href="/guides/qc-photo-checklist">Use the complete QC photo checklist <ArrowIcon /></Link>
      </section>

      <section className="related-finds">
        <div className="section-heading compact-heading"><div><span className="eyebrow">Same category</span><h2>Related mapped finds</h2></div><Link href={`/categories/${category.slug}`}>View all <ArrowIcon /></Link></div>
        <div className="product-grid all-products">{related.map((item) => <ProductCard product={item} key={item.id} />)}</div>
      </section>
    </article>
  );
}
