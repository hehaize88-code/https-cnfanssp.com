import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialPage } from "../../components/EditorialPage";
import { priorityArticles, published } from "../priorityArticles";

type Params = Promise<{ slug: string }>;

function getArticle(slug: string) {
  return priorityArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return priorityArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const canonical = `/articles/${article.slug}/`;
  return {
    title: article.metaTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: canonical,
      images: ["/og.png"],
      publishedTime: published,
      modifiedTime: published,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og.png"],
    },
  };
}

export default async function PriorityArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const canonical = `https://findqcs.net/articles/${article.slug}/`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: "https://findqcs.net/og.png",
    datePublished: published,
    dateModified: published,
    inLanguage: "en",
    author: { "@type": "Organization", name: "FindQCs", url: "https://findqcs.net/" },
    publisher: { "@type": "Organization", name: "FindQCs", logo: { "@type": "ImageObject", url: "https://findqcs.net/findqc-logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    keywords: article.keywords.join(", "),
    articleSection: article.label,
  };

  return (
    <EditorialPage
      eyebrow={`${article.label} / ${article.readTime.toUpperCase()} READ`}
      title={article.title}
      intro={article.intro}
      breadcrumbs={[["Articles", "/articles/"], [article.shortTitle, `/articles/${article.slug}/`]]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="article-layout">
        <aside className="toc">
          <strong>ON THIS PAGE</strong>
          {article.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
        </aside>
        <div className="prose">
          <p className="lead">{article.intro}</p>
          {article.sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              {section.panel && <div className="check-block"><strong>{section.panel.title}</strong><ul>{section.panel.items.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            </section>
          ))}
          <p className="article-disclosure"><strong>Independent scope:</strong> FindQCs organizes product research and visible QC evidence. It does not sell the items, operate a warehouse, take current-unit photos, authenticate products or execute purchases, returns or international shipping.</p>
          <Link className="article-cta" href={article.next.href}>{article.next.label} <span>→</span></Link>
        </div>
      </div>
    </EditorialPage>
  );
}

