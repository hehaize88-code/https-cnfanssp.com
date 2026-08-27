import type { Metadata } from "next";
import { Breadcrumbs, Footer, Header, JsonLd, PageIntro, SearchDesk } from "../components";
import { categories, PLANNED_ORIGIN } from "../data";

export const metadata: Metadata = {
  title: "Product Categories",
  description: "Browse exact destination categories for shoes, hoodies, T-shirts, jackets, accessories, jerseys, electronics and more.",
  alternates: { canonical: `${PLANNED_ORIGIN}/categories` },
};

export default function CategoriesPage() {
  return (
    <><Header /><main><Breadcrumbs items={[{ label: "Categories" }]} /><PageIntro eyebrow="Product directory" title="Choose a category. Keep the destination exact." description="Every category opens its corresponding live catalog page. Use search when the name is more useful than a broad category." />
      <section className="shell page-content"><SearchDesk compact /><div className="category-grid full-category-grid">{categories.map((category, index) => <a key={category.name} className="category-tile category-large" href={category.href} target="_blank" rel="noopener noreferrer"><span>{category.mark}</span><div><small>0{index + 1}</small><b>{category.name}</b><p>{category.note}</p></div><i>Open ↗</i></a>)}</div>
        <div className="evidence-note"><b>Why exact category links matter</b><p>A successful homepage link is not a substitute for the intended category. These destinations were matched to the category names shown here, so a Shoes click opens Shoes rather than a general search or unrelated collection.</p></div>
      </section></main><Footer /><JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "FindQC Product Categories", url: `${PLANNED_ORIGIN}/categories`, mainEntity: categories.map((c, i) => ({ "@type": "ItemList", position: i + 1, name: c.name, url: c.href })) }} /></>
  );
}
