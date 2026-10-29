/** Related reading follows the buyer's next decision, shared by every locale. */
export const featuredArticles = [
  'lolobuy-shipping-netherlands', 'lolobuy-payment-methods-fees',
  'lolobuy-link-not-working', 'lolobuy-shipping-costs',
  'lolobuy-qc-photos', 'how-to-order-on-lolobuy'
];
export const priorityArticles = [
  'how-to-order-on-lolobuy', 'lolobuy-qc-photos', 'lolobuy-shipping-costs',
  'lolobuy-shipping-netherlands', 'lolobuy-payment-methods-fees', 'lolobuy-link-not-working'
];
export const relatedArticles: Record<string, string[]> = {
  'using-lolobuy-spreadsheet': ['lolobuy-link-not-working','how-to-order-on-lolobuy','lolobuy-seller-and-review-checks','lolobuy-order-budget'],
  'how-to-order-on-lolobuy': ['lolobuy-payment-methods-fees','lolobuy-link-not-working','lolobuy-qc-photos','lolobuy-shipping-costs'],
  'lolobuy-qc-photos': ['lolobuy-sizing-guide','lolobuy-returns-refunds','lolobuy-warehouse-consolidation','lolobuy-shipping-costs'],
  'lolobuy-shipping-costs': ['lolobuy-shipping-netherlands','lolobuy-warehouse-consolidation','lolobuy-order-budget','lolobuy-payment-methods-fees'],
  'lolobuy-warehouse-consolidation': ['lolobuy-qc-photos','lolobuy-returns-refunds','lolobuy-shipping-costs','lolobuy-shipping-netherlands'],
  'lolobuy-sizing-guide': ['lolobuy-qc-photos','how-to-order-on-lolobuy','lolobuy-returns-refunds','lolobuy-link-not-working'],
  'lolobuy-tracking-guide': ['lolobuy-shipping-netherlands','lolobuy-shipping-costs','lolobuy-returns-refunds','lolobuy-payment-methods-fees'],
  'lolobuy-returns-refunds': ['lolobuy-qc-photos','lolobuy-payment-methods-fees','lolobuy-tracking-guide','lolobuy-warehouse-consolidation'],
  'lolobuy-order-budget': ['lolobuy-payment-methods-fees','lolobuy-shipping-costs','lolobuy-shipping-netherlands','lolobuy-warehouse-consolidation'],
  'lolobuy-seller-and-review-checks': ['lolobuy-link-not-working','using-lolobuy-spreadsheet','lolobuy-qc-photos','lolobuy-returns-refunds'],
  'lolobuy-shipping-netherlands': ['lolobuy-shipping-costs','lolobuy-order-budget','lolobuy-tracking-guide','lolobuy-payment-methods-fees'],
  'lolobuy-payment-methods-fees': ['lolobuy-order-budget','how-to-order-on-lolobuy','lolobuy-returns-refunds','lolobuy-shipping-costs'],
  'lolobuy-link-not-working': ['using-lolobuy-spreadsheet','how-to-order-on-lolobuy','lolobuy-sizing-guide','lolobuy-qc-photos']
};
export function orderArticles<T extends {slug: string}>(articles: T[]): T[] {
  return [...articles].sort((a,b) => {
    const ai=featuredArticles.indexOf(a.slug),bi=featuredArticles.indexOf(b.slug);
    return (ai<0?featuredArticles.length:ai)-(bi<0?featuredArticles.length:bi);
  });
}
