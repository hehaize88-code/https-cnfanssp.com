import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getProduct } from "@/lib/data";
import { getSeoArticle, seoArticles } from "@/lib/seo-articles";

const siteUrl = "https://allchinabuys.store";

const relatedSlugs: Record<string, string[]> = {
  "allchinabuy-order-status-during-maintenance": ["allchinabuy-parcel-tracking-status-delays", "allchinabuy-warehouse-storage-consolidation-qc", "allchinabuy-returns-refunds-before-shipping"],
  "amiri-ma-1-nine-styles-variant-qc": ["acbuy-shoes-spreadsheet-sizing-qc-photos", "acbuy-w2c-links-taobao-weidian-product-id", "allchinabuy-qc-photo-requests-measurements"],
  "acbuy-w2c-links-taobao-weidian-product-id": ["amiri-ma-1-nine-styles-variant-qc", "compare-acbuy-spreadsheet-listings-seller-variant-qc", "search-acbuy-spreadsheet-name-image-product-id"],
  "acbuy-shoes-spreadsheet-sizing-qc-photos": ["amiri-ma-1-nine-styles-variant-qc","allchinabuy-qc-photo-requests-measurements", "allchinabuy-shoe-box-removal-volumetric-weight-example", "allchinabuy-shipping-expert-request-quote-checklist"],
  "acbuy-hoodie-spreadsheet-measurements-qc": ["allchinabuy-qc-photo-requests-measurements", "allchinabuy-shipping-expert-request-quote-checklist", "cheapest-acbuy-shipping-consolidation-packaging"],
  "allchinabuy-shipping-expert-request-quote-checklist": ["allchinabuy-shoe-box-removal-volumetric-weight-example", "allchinabuy-warehouse-storage-consolidation-qc", "allchinabuy-fees-payment-currency-shipping-charges"],
  "allchinabuy-qc-photo-requests-measurements": ["acbuy-shoes-spreadsheet-sizing-qc-photos", "acbuy-hoodie-spreadsheet-measurements-qc", "allchinabuy-returns-refunds-before-shipping"],
  "allchinabuy-shoe-box-removal-volumetric-weight-example": ["allchinabuy-shipping-expert-request-quote-checklist", "cheapest-acbuy-shipping-consolidation-packaging", "acbuy-shoes-spreadsheet-sizing-qc-photos"],
  "allchinabuy-shipping-to-usa-customs-delivery-planning": ["acbuy-shipping-time-order-warehouse-delivery", "cheapest-acbuy-shipping-consolidation-packaging", "allchinabuy-parcel-tracking-status-delays"],
  "allchinabuy-shipping-to-uk-vat-parcel-planning": ["allchinabuy-fees-payment-currency-shipping-charges", "allchinabuy-parcel-tracking-status-delays", "cheapest-acbuy-shipping-consolidation-packaging"],
  "allchinabuy-shipping-to-canada-duties-delivery": ["allchinabuy-parcel-tracking-status-delays", "allchinabuy-fees-payment-currency-shipping-charges", "cheapest-acbuy-shipping-consolidation-packaging"],
  "acbuy-shipping-time-order-warehouse-delivery": ["allchinabuy-parcel-tracking-status-delays", "allchinabuy-warehouse-storage-consolidation-qc", "cheapest-acbuy-shipping-consolidation-packaging"],
  "cheapest-acbuy-shipping-consolidation-packaging": ["allchinabuy-fees-payment-currency-shipping-charges", "allchinabuy-warehouse-storage-consolidation-qc", "acbuy-shipping-time-order-warehouse-delivery"],
  "allchinabuy-parcel-tracking-status-delays": ["allchinabuy-order-status-during-maintenance", "allchinabuy-shipping-to-usa-customs-delivery-planning", "allchinabuy-shipping-to-uk-vat-parcel-planning"],
  "allchinabuy-fees-payment-currency-shipping-charges": ["cheapest-acbuy-shipping-consolidation-packaging", "allchinabuy-warehouse-storage-consolidation-qc", "allchinabuy-returns-refunds-before-shipping"],
  "allchinabuy-warehouse-storage-consolidation-qc": ["allchinabuy-returns-refunds-before-shipping", "cheapest-acbuy-shipping-consolidation-packaging", "what-is-acbuy-allchinabuy-shopping-workflow"],
  "allchinabuy-returns-refunds-before-shipping": ["allchinabuy-warehouse-storage-consolidation-qc", "allchinabuy-fees-payment-currency-shipping-charges", "what-is-acbuy-allchinabuy-shopping-workflow"],
  "what-is-acbuy-allchinabuy-shopping-workflow": ["allchinabuy-warehouse-storage-consolidation-qc", "allchinabuy-fees-payment-currency-shipping-charges", "allchinabuy-parcel-tracking-status-delays"],
};

export function generateStaticParams() {
  return seoArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getSeoArticle(slug);
  if (!article) return {};
  return {
    title: { absolute: article.metaTitle },
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.description,
      url: `/articles/${article.slug}`,
      publishedTime: `${article.published ?? "2026-09-09"}T00:00:00Z`,
      modifiedTime: `${article.updated ?? "2026-09-09"}T00:00:00Z`,
    },
  };
}

export default async function SeoArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getSeoArticle(slug);
  if (!article) notFound();
  const relatedArticles = (relatedSlugs[slug] ?? [
    "what-is-acbuy-allchinabuy-shopping-workflow",
    "allchinabuy-warehouse-storage-consolidation-qc",
    "acbuy-shipping-time-order-warehouse-delivery",
  ]).map(getSeoArticle).filter((item) => item !== undefined);

  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.published ?? "2026-09-09",
      dateModified: article.updated ?? "2026-09-09",
      mainEntityOfPage: articleUrl,
      keywords: [article.primaryKeyword, ...article.supportingKeywords].join(", "),
      author: { "@type": "Organization", name: "AllChinaBuy Product Index Editorial Desk" },
      publisher: { "@type": "Organization", name: "AllChinaBuy Product Index" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Articles", item: `${siteUrl}/articles` },
        { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
      ],
    },
  ];

  return (
    <PageShell>
      <main>
        {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}
        <header className="page-hero">
          <div className="section-shell">
            <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/articles">Articles</Link> / {article.primaryKeyword}</div>
            <p className="eyebrow">{article.kicker} · <time dateTime={article.published ?? "2026-09-09"}>{article.published ?? "2026-09-09"}</time> · {article.read}</p>
            <h1>{article.title}</h1>
            <p className="lede">{article.description}</p>
          </div>
        </header>
        <div className="section-shell content-grid">
          <article className="article-body" data-article-body>
            {article.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="research-note"><b>Editorial standard</b><span>This independent guide separates observable listing and warehouse evidence from seller claims. Prices, variants and route options must be checked on the live record.</span></div>
            <div className="research-note"><b>Platform status checked November 5, 2026</b><span>The official AllChinaBuy homepage displayed maintenance. Earlier platform descriptions are historical context; confirm current availability, fees and route terms before ordering. <a className="text-link" href="https://www.allchinabuy.com/" rel="external">Official maintenance notice</a></span></div>
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.table ? <table className="comparison-table"><thead><tr>{section.table.headers.map((cell) => <th key={cell}>{cell}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody></table> : null}
                {section.productSlugs && <ul className="example-products">
                  {section.productSlugs.map(getProduct).filter(product => product !== undefined).map(product => (
                    <li key={product.slug}><Link className="text-link" href={`/products/${product.slug}`}>{product.name}</Link></li>
                  ))}
                </ul>}
                {section.checklist ? <div className="article-callout"><strong>Working checklist</strong><ul>{section.checklist.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
              </section>
            ))}
            <h2>Put the record to work</h2>
            <p>{article.conclusion}</p>
          </article>
          <aside>
            {slug !== "allchinabuy-order-status-during-maintenance" && <div className="side-card">
              <p className="eyebrow">Next useful step</p>
              <h3>Compare the guide with a current record.</h3>
              <p>Use the local index to understand the options, then open the live catalog only when you are ready to verify price and availability.</p>
              {article.categorySlug ? <Link className="button button-dark" href={`/categories/${article.categorySlug}`}>Browse related records</Link> : <Link className="button button-dark" href="/spreadsheet">Open AllChinaBuy spreadsheet</Link>}
              <Link className="button button-outline" href="/guides/qc-checks">Use the QC checklist</Link>
              <a className="button button-outline" href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer">Open live catalog</a>
            </div>}
            <nav className="side-card" aria-label="Related articles">
              <p className="eyebrow">Related reading</p>
              <h3>Continue this workflow.</h3>
              {relatedArticles.map((related) => (
                <Link className="button button-outline" href={`/articles/${related.slug}`} key={related.slug}>{related.title}</Link>
              ))}
            </nav>
          </aside>
        </div>
      </main>
    </PageShell>
  );
}
