import metadata from "./metadata.json";

export const RELEASE_DATE = "2026-11-05";
export const REFUND_GUIDE = "hacoo-refund-payment-method";
export const SHOE_GUIDE = "hacoo-new-balance-9060-size-and-qc";
export const publishedGuides = [REFUND_GUIDE, SHOE_GUIDE];
export const revisedGuides = ["shipping-planning", "hacoo-returns-refunds", "size-guide"];

export function editionMetadata(slug, locale) {
  const copy = metadata[locale]?.[slug];
  return copy ? { ...copy, seoDescription: copy.short, dateModified: RELEASE_DATE } : null;
}
