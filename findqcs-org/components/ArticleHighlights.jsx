import Link from './LocalizedLink';
import { ArrowIcon } from './Icons';
import { getLocalizedArticle, getArticleUi } from '../lib/localizedArticles';
import { BUILD_LANGUAGE } from '../lib/routing';
export default function ArticleHighlights() {
 const ui=getArticleUi(BUILD_LANGUAGE);
 const slugs=['taobao-qc-finder-item-id-link-checks','qc-checker-review-decision-guide','request-extra-qc-photos-templates'];
 return <section className="shell section article-highlights" aria-labelledby="home-guides-title">
  <div className="section-heading compact-heading"><h2 id="home-guides-title">{ui.relatedNotes}</h2><Link href="/articles">{ui.allArticles} <ArrowIcon/></Link></div>
  <div className="related-article-grid">{slugs.map(slug=>{const a=getLocalizedArticle(slug,BUILD_LANGUAGE);return <Link key={slug} href={`/articles/${slug}`} data-analytics-event="article_open" data-analytics-id={slug}><span>{a.category}</span><h3>{a.seoTitle}</h3><p>{a.excerpt}</p><b>{ui.readArticle} <ArrowIcon/></b></Link>})}</div>
 </section>;
}
