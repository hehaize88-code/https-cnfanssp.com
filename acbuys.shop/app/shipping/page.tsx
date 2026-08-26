import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";

export const metadata: Metadata = { title: "ACBuy Shipping & Parcel Planning Guide", description: "Understand consolidation, chargeable weight, packaging, shipping estimates, restrictions, and parcel submission.", alternates: { canonical: "https://acbuys.shop/shipping/" } };

export default function ShippingPage() {
  return <InfoPage canonicalPath="/shipping/" accent="lime" eyebrow="Parcel planning" title="Plan the parcel before the parcel plans your budget." intro="International shipping depends on the destination, line, weight, dimensions, restrictions, and packaging choices. A useful guide explains those variables instead of publishing a fake universal price." sections={[
    { kicker: "Factor 01", title: "Actual versus volumetric weight", body: <><p>Carriers may charge using actual weight or dimensional weight. Bulky but light products can therefore cost more than their scale weight suggests. Compare both the item weight and packed dimensions when the estimate provides them.</p></> },
    { kicker: "Factor 02", title: "Consolidation", body: <><p>ACBuy’s official guide says combining more products for international shipping can help save shipping costs. Consolidation avoids repeating some base parcel costs, but the final parcel must still match the chosen line’s size, weight, and product restrictions.</p><p>Use the current shipping estimator after the warehouse records actual item data. Pre-purchase estimates are useful for planning, not a final invoice.</p></> },
    { kicker: "Factor 03", title: "Packaging choices", body: <><p>Removing unnecessary packaging can reduce volume, while reinforcement may protect fragile items at the cost of extra size and weight. Decide based on the product: soft clothing and rigid footwear do not need the same packing strategy.</p></> },
    { kicker: "Factor 04", title: "Line restrictions and customs", body: <><p>Available routes vary by destination and item type. Read the current line notes for restricted categories, tracking level, compensation terms, declared-value rules, and estimated transit time. Customs decisions are made by local authorities, so no external guide can guarantee clearance or delivery dates.</p></> },
  ]} />;
}
