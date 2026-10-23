import type { ArticleSlug } from './article-data';

const clusters: ArticleSlug[][] = [
  ['hacoo-spreadsheet-guide', 'find-products-on-hacoo', 'hacoo-links-not-working', 'hacoo-website-vs-app', 'hacoo-product-specification-checklist'],
  ['hacoo-shipping-returns-guide', 'hacoo-shipping-time-by-country', 'hacoo-tracking-order-guide', 'hacoo-tracking-not-updating', 'hacoo-delivered-but-not-received', 'hacoo-returns-refund-timeline'],
  ['hacoo-qc-photo-checklist', 'hacoo-size-guide', 'hacoo-shoe-qc-guide', 'hacoo-clothing-qc-guide', 'hacoo-product-specification-checklist'],
];
export function relatedSlugs(slug: ArticleSlug): ArticleSlug[] {
  const cluster = clusters.find(group => group.includes(slug)) ?? clusters[0];
  const index = cluster.indexOf(slug);
  return [...cluster.slice(index + 1), ...cluster.slice(0, index)].slice(0, 4);
}
