import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, products } from "@/lib/data";

const siteUrl = "https://allchinabuys.store";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? {
    title: `${product.name} Source Record`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: product.name, description: product.summary, url: `/products/${product.slug}`, images: [{ url: product.image }] },
    twitter: { card: "summary_large_image", title: product.name, description: product.summary, images: [product.image] },
  } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const currentIndex = products.findIndex((entry) => entry.slug === product.slug);
  const previous = products[(currentIndex - 1 + products.length) % products.length];
  const next = products[(currentIndex + 1) % products.length];
  const related = products.filter((entry) => entry.categorySlug === product.categorySlug && entry.slug !== product.slug).slice(0, 3);
  const canonicalUrl = `${siteUrl}/products/${product.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: product.category, item: `${siteUrl}/categories/${product.categorySlug}` },
        { "@type": "ListItem", position: 3, name: product.name, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: [product.image],
      description: product.summary,
      category: product.category,
      productID: product.sourceId,
      url: canonicalUrl,
      additionalProperty: [
        { "@type": "PropertyValue", name: "Source checked", value: product.updated },
        { "@type": "PropertyValue", name: "Price note", value: "Reference price only; confirm the current live record before ordering." },
      ],
    },
  ];

  return (
    <PageShell>
      <main className="section-shell">
        {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}
        <div className="product-detail">
          <div className="detail-image"><img src={product.image} alt={product.name} width="900" height="900" /></div>
          <div className="detail-copy">
            <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href={`/categories/${product.categorySlug}`}>{product.category}</Link> / Product</div>
            <p className="eyebrow">Source checked · {product.updated}</p>
            <h1>{product.name}</h1>
            <div className="detail-price">{product.price}</div>
            <p>{product.summary}</p>
            <dl className="record-facts">
              <div><dt>Source checked</dt><dd>{product.updated}</dd></div>
              <div><dt>Category</dt><dd><Link href={`/categories/${product.categorySlug}`}>{product.category}</Link></dd></div>
              <div><dt>Price status</dt><dd>Reference only—confirm on the live record</dd></div>
            </dl>
            <div className="check-list"><strong>What to check on your own record</strong>{product.checks.map((check, index) => <div key={check}><span>{index + 1}</span>{check}</div>)}</div>
            <div className="detail-actions"><a className="button button-dark" href={product.destination} target="_blank" rel="noopener noreferrer">Open corresponding product</a><Link className="button button-outline" href="/guides/qc-checks">Use QC checklist</Link></div>
            <div className="source-note"><strong>Source ID:</strong> {product.sourceId}<br />This independent page does not claim that a listing is certified or guaranteed. Confirm current price, available variants, seller information and the product images on the live record before ordering.</div>
          </div>
        </div>

        {related.length > 0 && <section className="related-records"><div className="section-heading align-end"><div><p className="eyebrow">Related records</p><h2>Compare within {product.category}.</h2></div><Link className="button button-outline" href={`/categories/${product.categorySlug}`}>View category</Link></div><div className="product-grid">{related.map((entry) => <ProductCard key={entry.slug} product={entry} />)}</div></section>}
        <nav className="record-pagination" aria-label="Product record navigation"><Link href={`/products/${previous.slug}`}><span>Previous record</span><b>{previous.name}</b></Link><Link href={`/products/${next.slug}`}><span>Next record</span><b>{next.name}</b></Link></nav>
      </main>
    </PageShell>
  );
}
