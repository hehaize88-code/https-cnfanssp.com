import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export const metadata: Metadata = { title: "AllChinaBuy Product Finds", description: "Review selected AllChinaBuy spreadsheet product records with category, price, source links and QC check prompts." };

export default function FindsPage() {
  return <PageShell><main><header className="page-hero"><div className="section-shell"><div className="breadcrumbs"><Link href="/">Home</Link> / Finds</div><p className="eyebrow">Product directory</p><h1>Finds worth checking twice.</h1><p className="lede">This review build starts with a small set of real source records. Every category and product entry below opens its matching page on the main catalog.</p></div></header><div className="section-shell finds-toolbar"><div className="filter-pills"><Link href="/finds">All</Link>{categories.slice(0,6).map((category) => <a key={category.slug} href={category.destination} target="_blank" rel="noopener noreferrer">{category.name}</a>)}</div><span className="results-note">{products.length} review-ready records</span></div><section className="section-shell section-block products-section"><div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section></main></PageShell>;
}
