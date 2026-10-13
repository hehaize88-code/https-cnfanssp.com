"use client";

import { categories, products } from "../data";

const copy: Record<string, Record<string, string>> = {
  en: { sheet: "Product spreadsheet", browse: "Browse the current index", matching: "matching products", search: "Search", placeholder: "Search the full catalog", submit: "Search main site ↗", product: "Product", category: "Category", status: "Status", reference: "Reference", view: "View ↗", show: "Show all" },
  zh: { sheet: "产品表格", browse: "浏览当前产品索引", matching: "个匹配产品", search: "搜索", placeholder: "搜索主站全部产品", submit: "前往主站搜索 ↗", product: "产品", category: "分类", status: "状态", reference: "参考价", view: "查看 ↗", show: "显示全部" },
  de: { sheet: "Produktliste", browse: "Aktuellen Index durchsuchen", matching: "passende Produkte", search: "Suche", placeholder: "Gesamten Katalog durchsuchen", submit: "Hauptseite durchsuchen ↗", product: "Produkt", category: "Kategorie", status: "Status", reference: "Richtpreis", view: "Ansehen ↗", show: "Alle anzeigen" },
  fr: { sheet: "Tableau produits", browse: "Parcourir l’index actuel", matching: "produits correspondants", search: "Recherche", placeholder: "Rechercher dans tout le catalogue", submit: "Rechercher sur le site principal ↗", product: "Produit", category: "Catégorie", status: "Statut", reference: "Prix indicatif", view: "Voir ↗", show: "Tout afficher" },
  es: { sheet: "Lista de productos", browse: "Explora el índice actual", matching: "productos coincidentes", search: "Buscar", placeholder: "Buscar en todo el catálogo", submit: "Buscar en el sitio principal ↗", product: "Producto", category: "Categoría", status: "Estado", reference: "Referencia", view: "Ver ↗", show: "Mostrar todo" },
  it: { sheet: "Elenco prodotti", browse: "Sfoglia l’indice attuale", matching: "prodotti trovati", search: "Cerca", placeholder: "Cerca in tutto il catalogo", submit: "Cerca sul sito principale ↗", product: "Prodotto", category: "Categoria", status: "Stato", reference: "Riferimento", view: "Vedi ↗", show: "Mostra tutti" },
  pt: { sheet: "Lista de produtos", browse: "Explorar o índice atual", matching: "produtos encontrados", search: "Pesquisar", placeholder: "Pesquisar em todo o catálogo", submit: "Pesquisar no site principal ↗", product: "Produto", category: "Categoria", status: "Estado", reference: "Referência", view: "Ver ↗", show: "Mostrar tudo" },
  pl: { sheet: "Lista produktów", browse: "Przeglądaj aktualny indeks", matching: "pasujących produktów", search: "Szukaj", placeholder: "Przeszukaj cały katalog", submit: "Szukaj w witrynie głównej ↗", product: "Produkt", category: "Kategoria", status: "Status", reference: "Cena orientacyjna", view: "Zobacz ↗", show: "Pokaż wszystkie" },
  nl: { sheet: "Productlijst", browse: "Bekijk de actuele index", matching: "overeenkomende producten", search: "Zoeken", placeholder: "Zoek in de volledige catalogus", submit: "Zoek op de hoofdsite ↗", product: "Product", category: "Categorie", status: "Status", reference: "Referentie", view: "Bekijken ↗", show: "Alles tonen" },
};

export function CategoryExplorer({ locale = "en" }: { locale?: string }) {
  const t = copy[locale] || copy.en;
  const filtered = products;

  return <section className="explorer clean-explorer" id="finds">
    <div className="clean-section-head"><div><p className="eyebrow">{t.sheet}</p><h2>{t.browse}</h2></div><p><span data-product-count>{filtered.length}</span> {t.matching}</p></div>
    <div className="clean-controls">
      <form className="main-site-search" action="https://www.cnfanssp.com/search.html" method="get" target="_blank">
        <input type="hidden" name="channelid" value="2" />
        <input type="hidden" name="method" value="1" />
        <label><span>{t.search}</span><input aria-label={t.placeholder} name="keywords" required placeholder={t.placeholder} /></label>
        <button type="submit">{t.submit}</button>
      </form>
      <div className="category-tabs" aria-label="Product categories">{categories.map((item) => <button data-category-filter={item} className={item === "All" ? "active" : ""} key={item} type="button">{item}</button>)}</div>
    </div>
    <div className="product-table" id="product-grid">
      <div className="product-table-head"><span>{t.product}</span><span>{t.category}</span><span>{t.status}</span><span>{t.reference}</span><span /></div>
      {filtered.map((product, index) => <article className="product-row" data-product-row data-category={product.category} hidden={index >= 8} key={product.code}>
        <div className="product-name"><img src={product.image} alt={`${product.name} product photo`} loading="lazy" /><div><h3>{product.name}</h3><p>{product.note}</p></div></div>
        <span className="cell-category">{product.category}</span><span className="cell-status">{product.status}</span><b>{product.price}</b>
        <a href={product.href} target="_blank" rel="nofollow sponsored noopener" aria-label={`Check current listing for ${product.name}`}>{t.view}</a>
      </article>)}
    </div>
    {filtered.length === 0 && <div className="empty-state"><b>No exact match.</b><p>Try a shorter keyword or select All.</p></div>}
    <button className="load-more" data-show-products type="button">{t.show} {filtered.length}</button>
  </section>;
}
