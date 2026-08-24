import type { Metadata } from "next";
import { ResourceShell } from "../components/ResourceShell";

export const metadata: Metadata = { title: "Superbuy Spreadsheet FAQ", description: "Answers about Superbuy spreadsheets, product links, QC photos, warehouse storage, consolidation, prices and shipping estimates.", alternates: { canonical: "/faq" } };

const faqItems = [
  ["Is this the official Superbuy website?", "No. This is an independent informational resource. It does not sell products, collect order payments, operate a warehouse or represent the official platform."],
  ["What is a Superbuy spreadsheet?", "It is a product-discovery index that groups public listings by category and may add reference prices, option notes and QC reminders. Treat it as a starting point rather than proof that a listing or seller is suitable."],
  ["Are spreadsheet products verified?", "A current link can be checked, but the condition of your exact item cannot be verified before it arrives at the warehouse. Always review the current listing and the warehouse photos for your own order."],
  ["Why can the USD price differ from the listing?", "Displayed USD prices are references. Source prices, currency conversion, domestic shipping and promotional conditions can change. The current product page and checkout control the amount you actually pay."],
  ["How do I order an item from a spreadsheet?", "Open the product source, confirm the seller and exact option, then use the supported product link in the platform’s search or order flow. Review every captured detail before payment."],
  ["How many free QC photos are provided?", "The current official Superbuy homepage states that three free QC photos are taken during warehouse inspection. Service details can change, so confirm the current policy in your account or the official help center."],
  ["How long can items stay in the warehouse?", "The current official guide states that 90 days of free storage are provided. Do not treat storage as a reason to postpone planning; record arrival dates and build a deliberate consolidation schedule."],
  ["Does consolidation always make shipping cheaper?", "Combining items can reduce repeated base charges, but a larger parcel can change chargeable weight, route eligibility and risk. Compare the intended consolidated parcel rather than assuming bigger is always cheaper."],
  ["What should I check in QC photos?", "Confirm identity and selected options first. Then review measurements, construction, visible damage, symmetry, hardware and important details. Ask for clarification when a critical area is not visible."],
  ["Can a spreadsheet guarantee authenticity or quality?", "No. A spreadsheet organizes information; it cannot guarantee authenticity, legality, seller performance, material quality or the condition of a future order."],
  ["Why do some product links stop working?", "Marketplace listings can be removed, replaced, redirected or changed by sellers. A visible review date helps, but every user still needs to open the current page before ordering."],
  ["How should I choose a shipping route?", "Use current route availability, restriction labels, verified parcel details, delivery expectations, insurance options and total cost. Old route recommendations can become inaccurate quickly."],
  ["Why is the international shipping deposit different from the final charge?", "Superbuy's current User Guidance says the deposit uses estimated product weight, destination and selected method. The final fee uses the package size and weight verified by the shipping company, with the difference handled through the user's account after shipment under the current process."],
  ["What is volumetric weight?", "It is a billing weight based on parcel size rather than only scale weight. Superbuy's current calculator gives a common air-cargo example of length × width × height in centimetres divided by 6,000. Route-specific rules may differ."],
  ["Are forwarding parcels inspected like shopping-agent orders?", "Not by default. Superbuy's current forwarding guide says forwarded parcels are checked for restricted items, while quantity, color, size and similar checks require the user to select an inspection check."],
  ["Are 1688 products inspected under the same rules?", "Superbuy's official User Guidance says 1688 purchases have different quality-control standards. Seller guarantees, sampling inspection and after-sales conditions can vary, so review the current 1688 terms before ordering wholesale quantities."],
  ["Which products may have shipping restrictions?", "The official calculator separates categories such as branded goods, textiles, liquids, powders, batteries, electrical products, food and medicine. It also publishes prohibited-item examples. Eligibility depends on the destination and current route rules."],
];

export default function FAQPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <ResourceShell eyebrow="FAQ" title="Clear answers before you build a parcel." intro="Use the sheet for discovery, the current listing for product details and warehouse evidence for the final item decision.">
    <div className="faq-page-list">{faqItems.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </ResourceShell>;
}
