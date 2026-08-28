import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";

export const metadata: Metadata = {
  title: "ACBuy Spreadsheet FAQ | Finds, QC, Storage & Shipping",
  description: "Clear answers about ACBuy finds, product links, QC photos, warehouse storage, pricing, and shipping estimates.",
  alternates: { canonical: "https://acbuys.shop/faq/" },
};

const faqs = [
  { kicker: "Finds", question: "Is this an official ACBuy website?", answer: "No. This is an independent product-discovery and educational guide. It organizes public product records and links visitors to the destination catalog. It does not process payments, store parcels, or sell the displayed goods." },
  { kicker: "Products", question: "Does a listing guarantee quality or availability?", answer: "No. Seller stock, variants, price, and product condition can change. Open the destination record, verify the current listing, and inspect the warehouse QC photos before making a decision." },
  { kicker: "QC", question: "How many free QC photos are provided?", answer: "ACBuy’s current official shopping flow describes 3–5 free QC photos. The exact photo set and any optional services should be confirmed on the platform when the item reaches the warehouse." },
  { kicker: "Storage", question: "How long is free warehouse storage?", answer: "The current official ACBuy shopping guide states 90 days of free storage at its designated warehouse. Policies can change, so check the account or official guide before relying on a deadline." },
  { kicker: "Shipping", question: "Can this site calculate my final shipping price?", answer: "No static external page can guarantee a final price. Chargeable weight, parcel dimensions, destination, selected route, packaging, restrictions, and current carrier pricing all affect the result. Use the platform’s live estimator with warehouse data." },
];

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <InfoPage canonicalPath="/faq/" eyebrow="Straight answers" title="Frequently asked questions, without the filler." intro="These answers separate what this independent catalog does from what the purchasing platform does. Current platform terms always take priority." sections={faqs.map((faq) => ({ kicker: faq.kicker, title: faq.question, body: <p>{faq.answer}</p> }))} />
  </>;
}
