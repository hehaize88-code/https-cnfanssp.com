import metadata from './content/article-meta.json';
export const newArticleKeys = ['articles/shoes-spreadsheet', 'articles/clothing-spreadsheet', 'articles/links-not-working', 'articles/tracking-not-updating'] as const;
export type NewArticleKey = typeof newArticleKeys[number];
export const newArticleMeta = metadata;
