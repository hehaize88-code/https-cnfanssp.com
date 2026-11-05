import translations from "../content/field-guides/index.json";
import links from "../content/field-guides/allchinabuy-spreadsheet-links-not-working/en.html?raw";
import jackets from "../content/field-guides/allchinabuy-jacket-finds-sizing-qc/en.html?raw";
import freight from "../content/field-guides/allchinabuy-shipping-estimate-vs-final-cost/en.html?raw";

export type GuideSummary = { title: string; seoTitle: string; summary: string; label: string };
export const fieldGuides: Record<string, GuideSummary> = Object.fromEntries(
  Object.entries(translations).map(([slug, copy]) => [slug, copy.en]),
);

export const guideBodies: Record<string, string> = {
  "allchinabuy-spreadsheet-links-not-working": links,
  "allchinabuy-jacket-finds-sizing-qc": jackets,
  "allchinabuy-shipping-estimate-vs-final-cost": freight,
};
export const linkGuide = "allchinabuy-spreadsheet-links-not-working";
export const jacketGuide = "allchinabuy-jacket-finds-sizing-qc";
export const freightGuide = "allchinabuy-shipping-estimate-vs-final-cost";
