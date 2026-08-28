import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";

export const metadata: Metadata = {
  title: "ACBuy Shopping Articles | Finds, QC & Parcel Guides",
  description: "Practical ACBuy research articles covering product discovery, warehouse QC photos, storage, consolidation, and international parcel planning.",
  alternates: { canonical: "https://acbuys.shop/articles/" },
};

export default function ArticlesPage() {
  return <InfoPage canonicalPath="/articles/" accent="blue" eyebrow="Research & guides" title="Useful ACBuy research, written for real shopping decisions." intro="This article hub targets the questions people search before ordering. Every topic is separated by intent, grounded in current platform information, and linked to a practical next step." sections={[
    { kicker: "Product discovery · 9 min", title: "How to use an ACBuy spreadsheet efficiently", body: <><p>A useful product index should shorten the path from a search term to a verifiable source record. Start with a specific product type, model, material, or use case; then compare the listed price, source ID, available variants, and destination record before ordering.</p><p>The complete article follows the full decision trail from discovery and order submission to warehouse QC and parcel planning.</p><a className="article-link" href="/articles/acbuy-spreadsheet-guide/">Read the complete article ↗</a></> },
    { kicker: "Quality control · 10 min", title: "What ACBuy QC photos can—and cannot—prove", body: <><p>Warehouse photographs can reveal shape, color consistency, stitching, measurements, visible damage, and included accessories. They cannot guarantee material composition, long-term durability, fit, or customs outcomes.</p><p>The complete checklist explains how to review every frame in a repeatable order and how to respond when important evidence is missing.</p><a className="article-link" href="/articles/acbuy-qc-photos-guide/">Read the complete article ↗</a></> },
    { kicker: "Shipping · 10 min", title: "Parcel planning without fake universal prices", body: <><p>International shipping cost depends on destination, available line, actual or volumetric weight, packaging, product restrictions, and current carrier pricing. That is why a fixed external price table quickly becomes misleading.</p><p>The full guide separates product cost, domestic delivery, consolidation, chargeable weight, packaging, route choice and destination customs.</p><a className="article-link" href="/articles/acbuy-shipping-cost-guide/">Read the complete article ↗</a></> },
    { kicker: "Research standard · 9 min", title: "How this independent guide verifies information", body: <><p>Platform facts are checked against ACBuy’s current official pages before publication. Product names, prices, and source links are checked against public destination records. Claims that cannot be verified are not presented as facts.</p><p>The methodology page explains our source hierarchy, update dates, customer-review rules and treatment of dynamic platform claims.</p><a className="article-link" href="/articles/acbuy-information-verification/">Read the complete article ↗</a></> },
  ]} />;
}
