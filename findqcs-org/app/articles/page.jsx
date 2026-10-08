import Link from '../../components/LocalizedLink';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageHero from '../../components/PageHero';
import { ArrowIcon } from '../../components/Icons';
import { BUILD_LANGUAGE, languageUrl } from '../../lib/routing';
import { getArticleUi, getLocalizedArticles } from '../../lib/localizedArticles';
import T from '../../components/LocalizedText';
import { localizedMetadata } from '../../lib/seo';
const articles=getLocalizedArticles(BUILD_LANGUAGE);
const articleUi=getArticleUi(BUILD_LANGUAGE);
const groups=['search','review','plan'];
export const metadata=localizedMetadata({title:articleUi.journalMetadataTitle,description:articleUi.journalMetadataDescription},'/articles');
export default function ArticlesPage() {
 const itemListLd={'@context':'https://schema.org','@type':'ItemList',name:articleUi.journalSchemaName,numberOfItems:articles.length,
 itemListElement:articles.map((article,index)=>({'@type':'ListItem',position:index+1,url:languageUrl(`/articles/${article.slug}`),name:article.title}))};
 return <div className="shell inner-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(itemListLd)}}/>
  <Breadcrumbs items={[{labelKey:'nav.journal'}]}/>
  <PageHero eyebrow={<T id="articles.eyebrow"/>} title={<><T id="articles.title1"/><br/><em><T id="articles.title2"/></em></>} intro={<T id="articles.intro"/>}/>
  <div className="journal-research-note"><span>{articleUi.journalCount}</span><p>{articleUi.journalNote}</p></div>
  <nav className="article-topic-nav" aria-label={articleUi.contents}>{groups.map((group,i)=><a href={`#${group}`} key={group}>{articleUi.groups[i]} <span>{articles.filter(a=>a.topic===group).length}</span></a>)}</nav>
  {groups.map((group,i)=><section id={group} className="article-topic-section" key={group} aria-labelledby={`heading-${group}`}>
   <h2 id={`heading-${group}`}>{articleUi.groups[i]}</h2>
   <div className="journal-grid">{articles.filter(a=>a.topic===group).map((article,index)=><Link href={`/articles/${article.slug}`} className="journal-card" key={article.slug} data-analytics-event="article_open" data-analytics-id={article.slug}>
    <span>{String(index+1).padStart(2,'0')}</span>
    <div className="journal-card-image"><img src={article.heroImage} alt="" loading="lazy" width="640" height="480"/></div>
    <div className="journal-card-copy"><small>{article.category} · {article.readTime}</small><h3>{article.title}</h3><p>{article.excerpt}</p></div>
    <b><T id="articles.read"/> <ArrowIcon/></b>
   </Link>)}</div>
  </section>)}
 </div>;
}
