import type {Lang} from './site-data';
import type {SeoArticle} from './seo-articles';
import en from './content/november-en.json';
import de from './content/november-de.json';
import es from './content/november-es.json';
import fr from './content/november-fr.json';
import it from './content/november-it.json';
import ui from './content/november-ui.json';

export const novemberDate = '2026-11-06';
export const novemberArticles: Record<Lang, SeoArticle[]> = {en,de,es,fr,it};
export const novemberSlugs = en.map(article=>article.slug);
export const novemberUi = ui;
export const novemberRevisedSlugs = [
  'joyagoo-spreadsheet-shipping-budget-checklist',
  'joyagoo-product-link-not-working',
  'joyagoo-qc-photos-listing-comparison-guide',
  'joyagoo-listing-availability-price-domestic-freight-recheck',
];
export const latestArticleSlugs = [...novemberSlugs,novemberRevisedSlugs[0]];
export function reviseNovemberArticle(article:SeoArticle,lang:Lang):SeoArticle {
  const index=novemberRevisedSlugs.indexOf(article.slug);
  if(index<0)return article;
  const [heading,...paragraphs]=novemberUi[lang].updates[index];
  return {...article,sourceNote:`${article.sourceNote} ${novemberUi[lang].updated}`,sections:[...article.sections,{heading,paragraphs}]};
}
