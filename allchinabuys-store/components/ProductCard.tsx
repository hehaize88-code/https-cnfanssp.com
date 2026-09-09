import Link from "next/link";
import type { Product } from "@/lib/data";

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  return (
    <article className={featured ? "product-card featured" : "product-card"}>
      <a href={product.destination} target="_blank" rel="noopener noreferrer" className="product-image-wrap" aria-label={`View ${product.name} on the main catalog`}><img src={product.image} alt={product.name} className="product-image" loading="lazy" width="640" height="640" /><span className="verified-pill">Source checked</span></a>
      <div className="product-body"><div className="product-meta"><span>{product.category}</span><span>{product.price}</span></div><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p>{product.summary}</p><div className="product-actions"><Link className="text-link" href={`/products/${product.slug}`}>View details <span>→</span></Link><a href={product.destination} target="_blank" rel="noopener noreferrer" className="source-link"><span>Live source</span> ↗</a></div></div>
    </article>
  );
}
