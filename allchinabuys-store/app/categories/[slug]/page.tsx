import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, products } from "@/lib/data";

const siteUrl = "https://allchinabuys.store";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const hasProducts = products.some((product) => product.categorySlug === slug);
  return {
    title: `${category.name} Product Records`,
    description: `${category.description} Browse source records and inspection notes before opening the live catalog.`,
    alternates: { canonical: `/categories/${slug}` },
    robots: { index: hasProducts, follow: true },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const matches = products.filter((product) => product.categorySlug === slug);
  const canonicalUrl = `${siteUrl}/categories/${slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Spreadsheet", item: `${siteUrl}/spreadsheet` },
        { "@type": "ListItem", position: 3, name: category.name, item: canonicalUrl },
      ],
    },
    ...(matches.length
      ? [{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${category.name} product records`,
          url: canonicalUrl,
          numberOfItems: matches.length,
          itemListElement: matches.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: `${siteUrl}/products/${product.slug}`,
          })),
        }]
      : []),
  ];

  return (
    <PageShell>
      <main>
        {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}
        <header className="page-hero"><div className="section-shell"><div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/spreadsheet">Spreadsheet</Link> / {category.name}</div><p className="eyebrow">Category {category.mark}</p><h1>{category.name}</h1><p className="lede">{category.description} The records shown here include a direct live source and a short checklist so the page adds decision value instead of repeating a product name.</p></div></header>
        <section className="section-shell section-block"><div className="section-heading align-end"><div><p className="eyebrow">Review records</p><h2>{matches.length ? `${matches.length} products in this preview.` : "Live category ready to browse."}</h2></div><a className="button button-dark" href={category.destination} target="_blank" rel="noopener noreferrer">Open live {category.name}</a></div>{matches.length ? <div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="article-callout"><strong>This review build does not invent placeholder products.</strong><p>Use the live category button to browse current records. Product pages can be added here once their title, image and destination are verified.</p></div>}</section>
      </main>
    </PageShell>
  );
}
