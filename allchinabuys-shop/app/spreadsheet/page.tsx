import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/SearchBox";
import { categories, products } from "@/lib/data";

export const metadata: Metadata = { title: "AllChinaBuy Spreadsheet", description: "Browse an organized AllChinaBuy spreadsheet by product category, with real source records and practical inspection notes." };

export default function SpreadsheetPage() {
  return <PageShell><main><header className="page-hero"><div className="section-shell"><div className="breadcrumbs"><Link href="/">Home</Link> / Spreadsheet</div><p className="eyebrow">The organized index</p><h1>AllChinaBuy Spreadsheet</h1><p className="lede">Start with a category, search the live product database or open one of the source-checked records below. Prices and availability can change, so every product entry opens the matching main-catalog page directly.</p><SearchBox compact /></div></header><section className="section-shell section-block"><div className="category-grid">{categories.map((category) => <a href={category.destination} target="_blank" rel="noopener noreferrer" className="category-card" key={category.slug}><span className="category-number">{category.mark}</span><div><h3>{category.name}</h3><p>{category.description}</p></div><span className="category-arrow">↗</span></a>)}</div></section><section className="section-shell section-block products-section"><div className="section-heading align-end"><div><p className="eyebrow">Checked records</p><h2>Open the matching product pages.</h2></div><Link href="/finds" className="button button-outline">All finds</Link></div><div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section></main></PageShell>;
}
