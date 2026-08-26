import type { Product } from "@/lib/data";

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  return (
    <article className={featured ? "product-card featured" : "product-card"}>
      <a href={product.destination} target="_blank" rel="noopener noreferrer" className="product-image-wrap" aria-label={`View ${product.name} on the main catalog`}><img src={product.image} alt={product.name} className="product-image" loading="lazy" /><span className="verified-pill">Source checked</span></a>
      <div className="product-body"><div className="product-meta"><span>{product.category}</span><span>{product.price}</span></div><h3><a href={product.destination} target="_blank" rel="noopener noreferrer">{product.name}</a></h3><p>{product.summary}</p><div className="product-actions"><a className="text-link" href={product.destination} target="_blank" rel="noopener noreferrer">View details <span>↗</span></a><a href={product.destination} target="_blank" rel="noopener noreferrer" className="source-link">Live source</a></div></div>
    </article>
  );
}
