import en from './content/october-en.json';
import de from './content/october-de.json';
import fr from './content/october-fr.json';
import es from './content/october-es.json';
import it from './content/october-it.json';
import type { Article } from './article-content';

export const octoberContent = { en, de, fr, es, it };
export type OctoberArticleKey = keyof typeof en;
export const octoberKeys = Object.keys(en) as OctoberArticleKey[];
export const octoberArticles = Object.fromEntries(Object.entries(octoberContent).map(([locale, content]) => [locale,
  Object.fromEntries(Object.entries(content).map(([key, article]) => [key, {
    minutes: Math.ceil(article.sections.flat().join(' ').split(/\s+/).length / 180),
    sections: article.sections.map(([heading, ...paragraphs]) => ({ heading, paragraphs })),
    takeaways: article.takeaways,
  }]))
])) as Record<keyof typeof octoberContent, Record<OctoberArticleKey, Article>>;
