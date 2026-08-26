import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getProduct, products } from "@/lib/data";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = getProduct(slug); return product ? { title: product.name, description: product.summary, openGraph: { title: product.name, description: product.summary, images: [{ url: product.image }] }, twitter: { card: "summary_large_image", title: product.name, description: product.summary, images: [product.image] } } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  return <PageShell><main className="section-shell"><div className="product-detail"><div className="detail-image"><img src={product.image} alt={product.name} /></div><div className="detail-copy"><div className="breadcrumbs"><Link href="/">Home</Link> / <Link href={`/categories/${product.categorySlug}`}>{product.category}</Link> / Product</div><p className="eyebrow">Source checked · {product.updated}</p><h1>{product.name}</h1><div className="detail-price">{product.price}</div><p>{product.summary}</p><div className="check-list"><strong>What to check on your own record</strong>{product.checks.map((check, index) => <div key={check}><span>{index + 1}</span>{check}</div>)}</div><div className="detail-actions"><a className="button button-dark" href={product.destination} target="_blank" rel="noopener noreferrer">Open corresponding product</a><Link className="button button-outline" href="/guides/qc-checks">Use QC checklist</Link></div><div className="source-note"><strong>Source ID:</strong> {product.sourceId}<br />This independent page does not claim that a listing is certified or guaranteed. Confirm current price, available variants, seller information and the product images on the live record before ordering.</div></div></div></main></PageShell>;
}
