import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Icons";
import StructuredData from "@/components/StructuredData";
import ResponsiveImage from "@/components/ResponsiveImage";
import { CATALOG_REVIEW, categories, DESTINATION, products, SITE_URL } from "@/app/data";
import { createPageMetadata } from "@/app/seo";
import { languageAlternates } from "@/app/i18n";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  const description = `${product.name} visual reference, category-specific checks, a verified live catalog detail route and a live-search fallback.`;
  return createPageMetadata({
    title: `${product.name} Reference & Live Search`,
    description,
    path: `/products/${product.slug}`,
    alternates: languageAlternates(`/products/${product.slug}`, "en"),
    image: {
      url: `${SITE_URL}${product.image}`,
      width: product.imageWidth,
      height: product.imageHeight,
      alt: `${product.name} visual reference`,
    },
  });
}

export default async function ProductReferencePage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const category = categories.find((item) => item.slug === product.categorySlug);
  const verifiedListing = `${DESTINATION}${product.listingPath}`;
  const liveSearch = `${DESTINATION}/search.html?keywords=${encodeURIComponent(product.query)}&channelid=2&method=1`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${product.name} research reference`,
    url: `${SITE_URL}/products/${product.slug}/`,
    description: product.focus,
    dateModified: CATALOG_REVIEW.iso,
    primaryImageOfPage: { "@type": "ImageObject", contentUrl: `${SITE_URL}${product.image}`, width: product.imageWidth, height: product.imageHeight, caption: product.name },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return <>
    <StructuredData data={schema}/>
    <section className="product-reference-hero">
      <div className="product-reference-image"><ResponsiveImage src={product.image} small={product.imageSmall} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 720px) 100vw, 50vw" alt={`${product.name} visual reference`}/></div>
      <div className="product-reference-copy">
        <span className="section-label">{product.category} / visual reference</span>
        <h1>{product.name}</h1>
        <p>{product.focus}</p>
        <div className="hero-actions">
          <a className="button primary" href={verifiedListing} target="_blank" rel="noopener noreferrer">Open verified listing <Arrow/></a>
          <a className="button quiet" href={liveSearch} target="_blank" rel="noopener noreferrer">Search fallback</a>
          <Link className="button quiet" href={`/categories/${product.categorySlug}`}>Open {product.category} guide</Link>
        </div>
        <span className="product-reference-note">Listing #{product.listingId} · source product {product.sourceProductId} · title and first image checked {CATALOG_REVIEW.label}</span>
      </div>
    </section>
    <section className="section wrap">
      <div className="reference-grid">
        <div><span className="section-label">Verified + fallback</span><h2>Keep the match. Avoid a dead end.</h2></div>
        <div className="reference-copy">
          <p className="large-copy">This page keeps the image, current detail route and research context together while the external catalog changes.</p>
          <p>The observed live catalog label was “{product.catalogLabel}”. The detail route returned successfully on {CATALOG_REVIEW.label}; the search and category routes remain available if that address later changes.</p>
          <div className="reference-checks">
            {category.checklist.map((check, index) => <div key={check}><span>0{index + 1}</span><p>{check}</p></div>)}
          </div>
          <div className="reference-disclosure">The image is a discovery reference, not proof of current stock, specification, authenticity or quality. Match the current search result, selected option and live details before making a decision.</div>
          <div className="inline-links"><a href={verifiedListing} target="_blank" rel="noopener noreferrer">Open listing #{product.listingId} <Arrow size={16}/></a><a href={liveSearch} target="_blank" rel="noopener noreferrer">Search live catalog <Arrow size={16}/></a><a href={`${DESTINATION}${category.destination}`} target="_blank" rel="noopener noreferrer">Browse live {product.category.toLowerCase()} <Arrow size={16}/></a></div>
        </div>
      </div>
    </section>
    <section className="soft-section"><div className="wrap"><div className="section-heading"><div><span className="section-label">Listing match record</span><h2>What was actually verified.</h2></div><p>These fields describe this product reference only. They do not fill missing material, size or option data with assumptions.</p></div><div className="research-table-wrap"><table className="research-table"><thead><tr><th>Field</th><th>Observed value</th><th>How to use it</th></tr></thead><tbody>
      <tr><th>Exact destination title</th><td>{product.catalogLabel}</td><td>Match this title with the current detail page before using saved notes.</td></tr>
      <tr><th>Catalog route</th><td>{product.listingPath}</td><td>The route returned 200 and displayed the matched first image on {CATALOG_REVIEW.label}.</td></tr>
      <tr><th>Source identifiers</th><td>Listing #{product.listingId} · product {product.sourceProductId}</td><td>Use both identifiers when reporting a link or image mismatch.</td></tr>
      <tr><th>First-image observation</th><td>{product.imageObservation}</td><td>Use the description as a quick mismatch check, then rely on the live image.</td></tr>
      <tr><th>Current category</th><td>{product.category}</td><td>Open the category guide for the measurements and construction checks relevant to this item type.</td></tr>
    </tbody></table></div><p className="table-note">Fields not shown here were not treated as verified. Current options, prices, stock, materials and policies must be checked on the live destination.</p></div></section>
    <section className="update-section"><div className="wrap update-layout"><div><span className="section-label">Link history</span><h2>A dated match record.</h2></div><ol className="update-log"><li><time dateTime={CATALOG_REVIEW.iso}>{CATALOG_REVIEW.label}</time><div><h3>Title, first image and destination matched</h3><p>Assigned listing #{product.listingId} and source product {product.sourceProductId} to this reference after checking the exact destination title and first image together.{product.replacedListingId ? ` The previous mismatched listing #${product.replacedListingId} was removed from this page.` : " The existing matched destination was rechecked."}</p></div></li></ol></div></section>
  </>;
}
