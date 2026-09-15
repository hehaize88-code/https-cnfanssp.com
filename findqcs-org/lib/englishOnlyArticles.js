export const NEW_ENGLISH_ONLY_ARTICLE_SLUGS = [
  "taobao-qc-finder-item-id-link-checks",
  "weidian-qc-finder-item-id-original-listing",
  "1688-qc-finder-supplier-variant-batch-checks",
  "qc-finder-no-photos-dead-link-recovery",
  "findqc-image-search-reference-photo-checks",
  "qc-photos-vs-qc-videos-evidence-guide",
  "sneaker-qc-photo-checklist-shape-tags-soles-box",
  "clothing-qc-photos-measurements-print-stitching",
];

export const ENGLISH_ONLY_ARTICLE_SLUGS = [
  "warehouse-measurement-guide",
  "shipping-cost-checklist",
  ...NEW_ENGLISH_ONLY_ARTICLE_SLUGS,
];

export const ENGLISH_ONLY_ARTICLE_ROUTES = ENGLISH_ONLY_ARTICLE_SLUGS
  .map((slug) => `/articles/${slug}`);
