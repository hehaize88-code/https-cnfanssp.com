import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, products } from "@/lib/data";

export function generateStaticParams() { return categories.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const category = getCategory(slug); return category ? { title: `${category.name} — AllChinaBuy Spreadsheet`, description: `${category.description} Browse source records and inspection notes before opening the live catalog.` } : {}; }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const category = getCategory(slug); if (!category) notFound(); const matches = products.filter((product) => product.categorySlug === slug);
  return <PageShell><main><header className="page-hero"><div className="section-shell"><div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/spreadsheet">Spreadsheet</Link> / {category.name}</div><p className="eyebrow">Category {category.mark}</p><h1>{category.name}</h1><p className="lede">{category.description} The records shown here include a direct live source and a short checklist so the page adds decision value instead of repeating a product name.</p></div></header><section className="section-shell section-block"><div className="section-heading align-end"><div><p className="eyebrow">Review records</p><h2>{matches.length ? `${matches.length} products in this preview.` : "Live category ready to browse."}</h2></div><a className="button button-dark" href={category.destination} target="_blank" rel="noopener noreferrer">Open live {category.name}</a></div>{matches.length ? <div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="article-callout"><strong>This review build does not invent placeholder products.</strong><p>Use the live category button to browse current records. Product pages can be added here once their title, image and destination are verified.</p></div>}</section></main></PageShell>;
}
