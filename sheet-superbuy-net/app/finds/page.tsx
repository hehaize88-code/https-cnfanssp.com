import type { Metadata } from "next";
import { ResourceShell } from "../components/ResourceShell";
import { CategoryExplorer } from "../components/CategoryExplorer";

export const metadata: Metadata = { title: "Curated Superbuy Finds & Product Verification", description: "Browse curated product finds with USD references, live main-site search, option checks and shipping-aware selection notes.", alternates: { canonical: "/finds" } };

export default function FindsPage() {
  return <ResourceShell eyebrow="Curated finds" title="Find fewer products. Eliminate weak candidates earlier." intro="A useful shortlist is not the largest possible feed. It prioritizes live links, readable option structures, realistic reference prices and products that still have a practical path through warehouse inspection and international shipping.">
    <CategoryExplorer />
    <div className="content-prose finds-notes">
      <h2>How products should earn a place in the index</h2>
      <p>Selection begins with link health and option clarity. A card is not useful if the destination is dead, the title no longer matches, or the visible price belongs to a small accessory rather than the pictured item. Each row should therefore point to the current main-site destination and preserve the product name, category and review note that helps a shopper verify the listing.</p>
      <p>Superbuy’s official process supports pasting product links from major Chinese marketplaces and also provides a manual shopping-agent order when information cannot be captured automatically. That flexibility does not remove the need to inspect the seller’s current page. Minimum-order rules, selectable variants, domestic delivery and after-sales conditions can differ even when two listings use the same images.</p>
      <h2>Use category-specific rejection rules</h2>
      <div className="checklist"><div><i>1</i><span>Shoes: confirm EU/CN sizing, insole evidence, pair symmetry and whether the box is needed</span></div><div><i>2</i><span>Hoodies and T-shirts: confirm garment measurements, print option, fabric description and weight</span></div><div><i>3</i><span>Bags and accessories: check dimensions, closures, included pieces and fragile hardware</span></div><div><i>4</i><span>Electronics: confirm voltage, plug, battery status, configuration and route restrictions</span></div><div><i>5</i><span>Sets: verify that the selected option includes every pictured component</span></div></div>
      <h2>Why shipping suitability belongs in product research</h2>
      <p>Superbuy’s shipping calculator separates general goods from textiles, branded items, liquids, batteries, food, medicine and other restricted categories. The official guide also notes that some products are unavailable on certain routes. A strong finds page therefore does not treat shipping as a problem for later: it flags products whose weight, volume, battery, liquid or fragility may dominate the final decision.</p>
      <div className="note-box"><b>Price discipline</b>All USD amounts in this index are references. Recheck the current listing, exchange-rate display, Chinese domestic delivery and selected option before paying.</div>
    </div>
  </ResourceShell>;
}
