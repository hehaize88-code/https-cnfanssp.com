import type { Metadata } from "next";
import { articleSlugs, type ArticleSlug } from "./article-data";
import { getArticle } from "./article-locales";
import { relatedSlugs } from "./article-relations";
import { editorialUi } from "./editorial-ui";
import { articleRoutePath, languages, routePath, type Lang } from "./site";

export function isArticleSlug(value: string): value is ArticleSlug { return articleSlugs.includes(value as ArticleSlug); }

export function articleMetadata(lang: Lang, slug: ArticleSlug): Metadata {
  const article = getArticle(lang, slug);
  return {
    title: article.title, description: article.description,
    alternates: { canonical: articleRoutePath(lang, slug), languages: {
      ...Object.fromEntries(languages.map(code => [code, articleRoutePath(code, slug)])),
      'x-default': articleRoutePath('en', slug),
    } },
    robots: { index: true, follow: true },
    openGraph: { type: 'article', title: article.title, description: article.description,
      url: articleRoutePath(lang, slug), locale: lang,
      publishedTime: article.publishedISO, modifiedTime: article.updatedISO },
  };
}

export function ArticlePage({ lang, slug }: { lang: Lang; slug: ArticleSlug }) {
  const article = getArticle(lang, slug);
  const t = editorialUi[lang];
  const articleUrl = `https://hacoos.shop${articleRoutePath(lang, slug)}`;
  const related = relatedSlugs(slug).map(item => getArticle(lang, item));
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: article.title, description: article.description,
      datePublished: article.publishedISO, dateModified: article.updatedISO, inLanguage: lang,
      mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
      author: { '@type': 'Organization', name: 'Hacoos Shop', url: `https://hacoos.shop${routePath(lang, 'articles')}` },
      publisher: { '@type': 'Organization', name: 'Hacoos Shop', url: 'https://hacoos.shop/' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hacoos Shop', item: `https://hacoos.shop${routePath(lang, 'home')}` },
      { '@type': 'ListItem', position: 2, name: t.all, item: `https://hacoos.shop${routePath(lang, 'articles')}` },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ] },
  ] };
  return <main id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="statusbar"><span>{t.independent}</span><span>{t.updated} {article.updated}</span></div>
    <header><a href={routePath(lang, 'home')} aria-label="Hacoos Shop"><span className="brand"><b>HACOO</b><i>Hacoos Shop</i></span></a>
      <div className="article-head-actions"><a className="back-index" href={routePath(lang, 'articles')}>{t.all} →</a>
        <details className="language"><summary>{lang.toUpperCase()} <span>⌄</span></summary><div>{languages.map(code => <a className={code === lang ? 'active' : ''} href={articleRoutePath(code, slug)} hrefLang={code} key={code}>{code.toUpperCase()}</a>)}</div></details>
      </div>
    </header>
    <nav className="function-bar" aria-label={t.all}>{(Object.keys(t.nav) as (keyof typeof t.nav)[]).map((key, i) => <a className={key === 'articles' ? 'active' : ''} href={routePath(lang, key)} key={key}><span>0{i + 1}</span>{t.nav[key]}</a>)}</nav>
    <article className="long-article">
      <header className="article-hero"><p>{t.guide} · {article.readTime}</p><h1>{article.title}</h1><p className="article-summary">{article.description}</p><div><span>{t.updated} <time dateTime={article.updatedISO}>{article.updated}</time></span><span>{article.sections.length} {t.sections}</span></div></header>
      <div className="article-layout"><aside><p>{t.contents}</p><ol>{article.sections.map((section, i) => <li key={i}><a href={`#section-${i + 1}`}>{String(i + 1).padStart(2, '0')} {section.heading}</a></li>)}</ol></aside>
        <div className="article-body">{article.sections.map((section, i) => <section id={`section-${i + 1}`} key={i}><span>{String(i + 1).padStart(2, '0')}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}</section>)}
          <div className="source-note"><b>{t.source}</b><p>{article.sourceNote}</p><p>{t.catalogueNote}</p>{article.sources?.length ? <ul>{article.sources.map(source => <li key={source.url}><a href={source.url} rel="noopener" target="_blank">{source.label} ↗</a></li>)}</ul> : null}</div>
        </div>
      </div>
    </article>
    <section className="article-next"><p>{t.next}</p><h2>{t.browse}</h2><div className="related-articles">{related.map(item => <a href={articleRoutePath(lang, item.slug)} key={item.slug}>{item.title} →</a>)}</div><a className="all-articles-link" href={routePath(lang, 'articles')}>{t.all} →</a></section>
    <footer><span className="brand"><b>HACOO</b><i>Hacoos Shop</i></span><p>{t.independent}</p><div>{languages.map(code => <a href={articleRoutePath(code, slug)} hrefLang={code} key={code}>{code.toUpperCase()}</a>)}</div><small>© 2026 HACOOS.SHOP</small></footer>
  </main>;
}
