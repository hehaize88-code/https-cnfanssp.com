import type { Metadata } from "next";
import { Breadcrumbs, Footer, Header, JsonLd, PageIntro, SearchDesk } from "../components";
import { PLANNED_ORIGIN, products } from "../data";

export const metadata: Metadata = {
  title: "FindQC Spreadsheet: Product Finds with Direct Listing Links",
  description: "Browse a compact FindQC spreadsheet of product finds with category, reference price, listed weight, item ID and direct destination links.",
  alternates: { canonical: `${PLANNED_ORIGIN}/spreadsheet` },
};

const fields = [
  ["Product identity", "Keep the item name and source ID together so an image is never separated from its listing."],
  ["Variation", "Confirm color, size, style and bundle at the live destination before ordering."],
  ["Price context", "Treat USD values as approximate and recheck the selected option at the destination."],
  ["Weight context", "Listed item weight is a planning clue, not a final parcel or volumetric quote."],
];

export default function SpreadsheetPage() {
  return <><Header /><main><Breadcrumbs items={[{ label: "Spreadsheet" }]} />
    <PageIntro eyebrow="FindQC product spreadsheet" title="A smaller product sheet with every link kept auditable." description="Use the sheet to build a shortlist, then open the exact destination, preserve the item ID and inspect current details before relying on any QC reference." />
    <section className="shell page-content">
      <SearchDesk compact />
      <div className="sheet-list" aria-label="Product spreadsheet">
        <div className="sheet-row sheet-head"><span>Product</span><span>Category</span><span>Reference</span><span>Listed weight</span><span>Item ID</span><span>Destination</span></div>
        {products.map((product) => <article className="sheet-row" key={product.id}>
          <strong>{product.name}</strong>
          <span data-label="Category">{product.category}</span>
          <span data-label="Reference">{product.price} <small>{product.sourcePrice}</small></span>
          <span data-label="Listed weight">{product.weight}</span>
          <span data-label="Item ID">{product.id}</span>
          <a href={product.href} target="_blank" rel="noopener noreferrer" data-track="product_click">Open exact listing ↗</a>
        </article>)}
      </div>
      <div className="sheet-method-grid">{fields.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{copy}</p></article>)}</div>
      <div className="editorial-note"><span>USE THE SHEET SAFELY</span><h2>Discovery is not verification</h2><p>A spreadsheet shortens product discovery. It does not prove current stock, seller quality, authenticity or the condition of a future unit. Reopen the exact destination, confirm the selected variation and use exact-unit warehouse photos for the final decision.</p></div>
    </section>
  </main><Footer /><JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: "FindQC product spreadsheet", url: `${PLANNED_ORIGIN}/spreadsheet`, numberOfItems: products.length, itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: product.href })) }} /></>;
}
