import en from './content/october-en.json';
import de from './content/october-de.json';
import fr from './content/october-fr.json';
import es from './content/october-es.json';
import it from './content/october-it.json';
import novEN from './content/november-en.json';
import novDE from './content/november-de.json';
import novFR from './content/november-fr.json';
import novES from './content/november-es.json';
import novIT from './content/november-it.json';
import type { Article } from './article-content';

export const guideContent = {
  en: {...en, ...novEN},
  de: {...de, ...novDE},
  fr: {...fr, ...novFR},
  es: {...es, ...novES},
  it: {...it, ...novIT},
};
export type GuideArticleKey = keyof typeof guideContent.en;
export const novemberKeys = Object.keys(novEN) as (keyof typeof novEN)[];
export const guideKeys = Object.keys(guideContent.en) as GuideArticleKey[];
export const guideArticles = Object.fromEntries(Object.entries(guideContent).map(([locale, content]) => [locale,
  Object.fromEntries(Object.entries(content).map(([key, article]) => [key, {
    minutes: Math.ceil(article.sections.flat().join(' ').split(/\s+/).length / 180),
    sections: article.sections.map(([heading, ...paragraphs]) => ({ heading, paragraphs })),
    takeaways: article.takeaways,
  }]))
])) as Record<keyof typeof guideContent, Record<GuideArticleKey, Article>>;
