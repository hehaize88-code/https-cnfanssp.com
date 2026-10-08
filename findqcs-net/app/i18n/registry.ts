import type { Metadata } from "next";
import type { ComponentType } from "react";
import * as page0 from "../articles/map-listing-identity-to-qc-record/page";
import * as page1 from "../articles/page";
import * as page2 from "../articles/pre-purchase-qc-evidence-worksheet/page";
import * as page3 from "../articles/qc-evidence-freshness-source-record-review-dates/page";
import * as page4 from "../articles/record-variant-color-size-quantity-before-comparison/page";
import * as page5 from "../categories/page";
import * as page6 from "../disclaimer/page";
import * as page7 from "../faq/page";
import * as page8 from "../guides/page";
import * as page9 from "../guides/qc-photo-checklist/page";
import * as page10 from "../guides/size-and-measurements/page";
import * as page11 from "../guides/warehouse-lighting/page";
import * as page12 from "../page";
import * as page13 from "../privacy/page";

const homeMetadata: Metadata = { title: "FindQCs: QC Photo Search and Inspection Guides", description: "Find product listings and learn to check Weidian, Taobao and 1688 QC photos, sneaker details, clothing measurements and color differences." };

export const staticPages: Record<string, { Page: ComponentType; metadata: Metadata }> = {
  "/articles/map-listing-identity-to-qc-record/": {Page: page0.default, metadata: page0.metadata},
  "/articles/": {Page: page1.default, metadata: page1.metadata},
  "/articles/pre-purchase-qc-evidence-worksheet/": {Page: page2.default, metadata: page2.metadata},
  "/articles/qc-evidence-freshness-source-record-review-dates/": {Page: page3.default, metadata: page3.metadata},
  "/articles/record-variant-color-size-quantity-before-comparison/": {Page: page4.default, metadata: page4.metadata},
  "/categories/": {Page: page5.default, metadata: page5.metadata},
  "/disclaimer/": {Page: page6.default, metadata: page6.metadata},
  "/faq/": {Page: page7.default, metadata: page7.metadata},
  "/guides/": {Page: page8.default, metadata: page8.metadata},
  "/guides/qc-photo-checklist/": {Page: page9.default, metadata: page9.metadata},
  "/guides/size-and-measurements/": {Page: page10.default, metadata: page10.metadata},
  "/guides/warehouse-lighting/": {Page: page11.default, metadata: page11.metadata},
  "/": {Page: page12.default, metadata: homeMetadata},
  "/privacy/": {Page: page13.default, metadata: page13.metadata},
};
