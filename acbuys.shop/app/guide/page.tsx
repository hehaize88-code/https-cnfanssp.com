import copy from "../../content/editorial/en/ui.json";
import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";

export const metadata: Metadata = { title: "How to Use ACBuy Finds | ACBuy Finds & QC Guide", description: "A practical step-by-step guide to finding an item, ordering, checking QC photos, storing products, and preparing a parcel.", alternates: { canonical: "https://acbuys.shop/guide/" } };

export default function GuidePage() {
  return <InfoPage canonicalPath="/guide/" eyebrow="Beginner guide" title="How to use ACBuy finds without losing the plot." intro="The useful part of a spreadsheet is not the spreadsheet—it is the path from a trustworthy product record to a parcel you are comfortable shipping. This guide keeps that path clear." sections={[
    { kicker: "Step 01", title: "Start with the product record", body: <><p>Search by a specific product name when possible. A focused query such as a model, garment type, or material is more useful than a broad brand-only search. Open the result and compare the displayed item name, listed price, variants, and source ID.</p><p>Product photography on this preview is representative. The destination record is the source of truth for the exact listing, so inspect it before placing an order.</p></> },
    { kicker: "Step 02", title: "Submit the source link", body: <><p>ACBuy’s official shopping flow starts by pasting an item link. The platform retrieves the listing and presents the order form. Re-check the selected color, size, quantity, domestic delivery fee, and any seller note before paying.</p><div className="callout"><b>Keep a record</b><span>Save the source item ID and selected variant. It makes warehouse checks and after-sales questions much easier.</span></div></> },
    { kicker: "Step 03", title: "Wait for warehouse inspection", body: <><p>{copy.photoNote}</p><p>If the photographs do not show a detail you need, check the platform’s current options for additional photography before making a decision.</p></> },
    { kicker: "Step 04", title: "Store, combine, then submit", body: <><p>{copy.storageNote}</p><p>Consolidation can reduce duplicated base charges, but a larger parcel is not always automatically cheaper. Compare the estimated weight, volumetric weight, restrictions, and available shipping lines before submitting.</p></> },
  ]} />;
}
