import GuideLayout from "../components/GuideLayout";
import { getArticles } from "../article-data";
import { localPath, t, type Lang } from "../i18n";
export default function ArticlesPage({lang}:{lang:Lang}) {
  const articles=getArticles(lang);
  const topics=[["shipping","Shipping"],["buying","Buying"],["qc","QC & sizing"],["verification","Listing checks"]];
  return <GuideLayout lang={lang} path="/articles" kicker="Buyer library" title="Hipobuy shipping, buying and QC guides." intro="Start with your next decision: estimate shipping, place an order, check measurements or verify a product link.">
    <section className="article-hub"><nav className="topic-nav" aria-label={t("Article topics",lang)}>{topics.map(([id,label])=><a key={id} href={`#${id}`}>{t(label,lang)}</a>)}</nav>
      {topics.map(([id,label])=><section id={id} key={id} className="article-topic"><h2>{t(label,lang)}</h2><div className="article-card-grid">{articles.filter(a=>a.topic===id).map(article=><article className="article-card" key={article.slug}><div className="article-card-top"><p>{article.readTime}</p><time dateTime={article.updated}>{article.updated}</time></div><h3><a href={localPath(`/articles/${article.slug}`,lang)}>{article.title}</a></h3><p>{article.description}</p><a className="article-card-link" href={localPath(`/articles/${article.slug}`,lang)}>{t("Read full article",lang)} <span>↗</span></a></article>)}</div></section>)}
    </section>
  </GuideLayout>;
}
