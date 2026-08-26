import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";

export const metadata: Metadata = { title: "ACBuy Spreadsheet FAQ | Finds, QC, Storage & Shipping", description: "Clear answers about ACBuy finds, product links, QC photos, warehouse storage, pricing, and shipping estimates." };

export default function FaqPage() {
  return <InfoPage eyebrow="Straight answers" title="Frequently asked questions, without the filler." intro="These answers separate what this independent catalog does from what the purchasing platform does. Current platform terms always take priority." sections={[
    { kicker: "Finds", title: "Is this an official ACBuy website?", body: <p>No. This is an independent product-discovery and educational guide. It organizes public product records and links visitors to the destination catalog. It does not process payments, store parcels, or sell the displayed goods.</p> },
    { kicker: "Products", title: "Does a listing guarantee quality or availability?", body: <p>No. Seller stock, variants, price, and product condition can change. Open the destination record, verify the current listing, and inspect the warehouse QC photos before making a decision.</p> },
    { kicker: "QC", title: "How many free QC photos are provided?", body: <p>ACBuy’s current official shopping flow describes 3–5 free QC photos. The exact photo set and any optional services should be confirmed on the platform when the item reaches the warehouse.</p> },
    { kicker: "Storage", title: "How long is free warehouse storage?", body: <p>The current official ACBuy shopping guide states 90 days of free storage at its designated warehouse. Policies can change, so check the account or official guide before relying on a deadline.</p> },
    { kicker: "Shipping", title: "Can this site calculate my final shipping price?", body: <p>No static external page can guarantee a final price. Chargeable weight, parcel dimensions, destination, selected route, packaging, restrictions, and current carrier pricing all affect the result. Use the platform’s live estimator with warehouse data.</p> },
  ]} />;
}
