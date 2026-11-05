import en from './content/new-en.json';
import de from './content/new-de.json';
import fr from './content/new-fr.json';
import es from './content/new-es.json';
import it from './content/new-it.json';
import type { Article } from './article-content';

import type { NewArticleKey } from './article-meta';
export { newArticleKeys, type NewArticleKey } from './article-meta';
type LocalizedArticle = Article & { title: string; intro: string };
const content = { en, de, fr, es, it };
export const newArticles = Object.fromEntries(Object.entries(content).map(([locale, entries]) => [locale,
  Object.fromEntries(Object.entries(entries).map(([slug, article]) => [`articles/${slug}`, article])),
])) as Record<keyof typeof content, Record<NewArticleKey, LocalizedArticle>>;
