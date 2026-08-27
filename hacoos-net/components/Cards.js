import Link from "next/link";
import { Arrow } from "./Icons";
import { localizePath } from "@/app/i18n";
import ResponsiveImage from "./ResponsiveImage";

export function CategoryCard({ category, index, locale = "en" }) {
  const preview = { en:"category preview", es:"vista previa de categoría", fr:"aperçu de la catégorie", de:"Kategorievorschau", it:"anteprima della categoria", pt:"pré-visualização da categoria" }[locale];
  return (
    <Link className="category-card" href={localizePath(`/categories/${category.slug}`, locale)}>
      <div className="category-image"><ResponsiveImage src={category.image} small={category.imageSmall} width={category.imageWidth} height={category.imageHeight} sizes="(max-width: 720px) 46vw, 360px" alt={`${category.name} ${preview}`} loading="lazy"/><span>{String(index + 1).padStart(2, "0")}</span></div>
      <div className="category-copy"><small>{category.eyebrow}</small><h3>{category.name}</h3><p>{category.description}</p><span className="text-link">{category.name} <Arrow size={16}/></span></div>
    </Link>
  );
}

export function ProductCard({ product, locale = "en" }) {
  const view = { en:"View product reference", es:"Ver referencia del producto", fr:"Voir la référence produit", de:"Produktreferenz ansehen", it:"Vedi il riferimento del prodotto", pt:"Ver referência do produto" }[locale];
  return (
    <Link className="product-card" href={localizePath(`/products/${product.slug}`, locale)}>
      <div className="product-image"><ResponsiveImage src={product.image} small={product.imageSmall} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 720px) 46vw, 300px" alt={product.name} loading="lazy"/><span>{product.tag}</span></div>
      <div className="product-copy"><small>{product.category}</small><h3>{product.name}</h3><span className="text-link">{view} <Arrow size={16}/></span></div>
    </Link>
  );
}
