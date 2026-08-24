import type { Metadata } from "next";
import { ResourceShell } from "../components/ResourceShell";

export const metadata: Metadata = { title: "How to Use a Superbuy Spreadsheet in 2026", description: "A fact-checked workflow for using a Superbuy spreadsheet, verifying Taobao, Tmall and JD listings, reviewing warehouse QC and planning a parcel.", alternates: { canonical: "/spreadsheet" } };

export default function SpreadsheetPage() {
  return <ResourceShell eyebrow="Spreadsheet guide" title="Use the sheet to discover. Use current evidence to decide." intro="A Superbuy spreadsheet can shorten product discovery, but the official order flow still depends on the live marketplace listing, the option captured at checkout, the item received by the warehouse and the parcel you finally submit." stats={[{ value: "99%", label: "official capture claim for Taobao, Tmall & JD" }, { value: "90 days", label: "official free storage" }, { value: "2", label: "separate payment stages" }]}>
    <div className="content-grid">
      <article className="content-card"><span>01 · Discover</span><h2>Start with a current product link</h2><p>Superbuy’s official guide says users can paste a Taobao, Tmall or JD link into its search bar, or search by product name. A sheet helps you reach that starting point faster.</p></article>
      <article className="content-card"><span>02 · Capture</span><h2>Check what the order form imported</h2><p>The official guide says the system can capture information for 99% of products on those marketplaces. The remaining cases use a manual shopping-agent order, so never assume every field was imported correctly.</p></article>
      <article className="content-card"><span>03 · Verify</span><h2>Preserve the exact option</h2><p>Confirm color, size, quantity, version and seller notes before payment. The row price is a reference; the live selection and Chinese domestic delivery determine the product-stage payment.</p></article>
    </div>
    <div className="content-prose">
      <h2>Where a spreadsheet fits in the official nine-step flow</h2>
      <p>Superbuy’s current User Guidance divides a shopping-agent order into selecting an item, submitting and paying for it, agent purchase, warehouse inspection and storage, parcel submission, international shipping deposit, dispatch and delivery. A spreadsheet belongs at the very beginning of that chain. It reduces search friction, but it does not replace the live order form, warehouse record or parcel quote.</p>
      <p>The distinction matters because product links change. A seller can remove an option, replace images, change the minimum quantity or apply a low headline price to a minor accessory. Open the current page and compare the captured order information with what you intended to buy. If the platform shows a manual order form, fill every field deliberately and attach a concise note where an option is ambiguous.</p>
      <h2>What a trustworthy row should preserve</h2>
      <p>A useful row identifies the product clearly, links to the current destination, labels the USD amount as a reference and states what remains uncertain. It should never suggest that popularity, a low price or another buyer’s photograph guarantees authenticity, seller performance or the condition of your future item.</p>
      <div className="checklist"><div><i>✓</i><span>Readable product and category name</span></div><div><i>✓</i><span>Current destination link</span></div><div><i>✓</i><span>Price clearly marked as a reference</span></div><div><i>✓</i><span>Option and measurement reminders</span></div><div><i>✓</i><span>Visible review or checked date</span></div></div>
      <h2>The product payment is not the delivered cost</h2>
      <p>The official guide separates payment for the item and Chinese domestic delivery from the later international parcel charge. After the purchasing agent orders the item, it moves to the warehouse. The current official homepage says three free QC photos are taken, while the User Guidance states that items receive 90 days of free storage and can be consolidated before international delivery.</p>
      <p>Only after you select stored items and submit a parcel do you choose an eligible shipping route and pay an international shipping deposit. Superbuy states that this deposit uses estimated weight, route and destination, while the final charge uses the package size and weight verified by the shipping company. That is why a $20 product can still be a poor choice if it is heavy, bulky, fragile or difficult to route.</p>
      <h2>Build a repeatable evidence trail</h2>
      <p>Save the product title, original link, selected option, reference price and date checked. When the item reaches the warehouse, add the order number, actual weight if shown, QC observations and your decision. When the parcel is submitted, record packaging instructions, route, deposit and final charge. This turns a list of links into a useful purchasing record without pretending that the sheet controls the seller or carrier.</p>
      <div className="note-box"><b>Fact-check basis</b>This page was checked against Superbuy’s current User Guidance, homepage service summary, warehouse-storage guidance and parcel-submission explanation on 24 August 2026. Service terms and route availability can change.</div>
    </div>
  </ResourceShell>;
}
