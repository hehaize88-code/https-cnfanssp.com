export const guideAliases: Record<string, string> = {
  'guides/using-the-spreadsheet': 'articles/using-lolobuy-spreadsheet',
  'guides/checking-qc-photos': 'articles/lolobuy-qc-photos',
  'guides/understanding-costs': 'articles/lolobuy-order-budget',
  'guides/finding-your-size': 'articles/lolobuy-sizing-guide'
};
export const canonicalPage = (page: string) => guideAliases[page] || page;
export const indexable = (page: string) => page !== '404' && page !== 'image-search' && !page.startsWith('product');
