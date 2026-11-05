import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export const metadata: Metadata = { title: { absolute: "AllChinaBuy Finds | Shoes, Hoodies and T-Shirts" }, description: "Compare AllChinaBuy shoes, hoodies and T-shirts by listing, size and price. Open a product record to check the source link and the measurements to request.", alternates: { canonical: "/finds" } };

export default function FindsPage() {
  return <PageShell><main><header className="page-hero"><div className="section-shell"><div className="breadcrumbs"><Link href="/">Home</Link> / Finds</div><p className="eyebrow">Product directory</p><h1>AllChinaBuy Finds | Shoes, Hoodies and T-Shirts</h1><p className="lede">Every record below opens its matching main-catalog page. “Source checked” means the destination was reviewed when the index was prepared—not that a seller, batch or future warehouse item is guaranteed.</p></div></header><div className="section-shell finds-toolbar"><div className="filter-pills"><Link href="/finds">All</Link>{categories.filter(category => products.some(product => product.categorySlug === category.slug)).map((category) => <Link key={category.slug} href={`/categories/${category.slug}`}>{category.name}</Link>)}</div><span className="results-note">{products.length} review-ready records</span></div><section className="section-shell find-method"><div><span>01</span><h2>Open the exact option</h2><p>Check image, style code, color, size, quantity and current price on the live record.</p></div><div><span>02</span><h2>Save the evidence</h2><p>Keep the option and size chart so the warehouse item can be compared with what was ordered.</p></div><div><span>03</span><h2>Inspect before shipping</h2><p>Use official inspection and photography as decision evidence before parcel submission.</p></div></section><section className="section-shell section-block products-section"><div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section></main></PageShell>;
}
