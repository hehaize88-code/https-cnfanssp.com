import { notFound } from "next/navigation";
import { articles, type ArticleSlug } from "../../../article-data";
import { ArticleInteractive } from "../../../article-interactive";
import { locales, type Locale } from "../../../site-data";
import { buildPageMetadata } from "../../../seo";
import { getArticleCopy } from "../../../article-content";

export function generateStaticParams() {
  return Object.keys(locales).flatMap((locale) =>
    Object.keys(articles).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!(locale in locales) || !(slug in articles)) return {};
  const language = locale as Locale;
  const article = getArticleCopy(slug as ArticleSlug, language);
  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/articles/${slug}`,
    language,
    article: true,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!(locale in locales) || !(slug in articles)) notFound();
  return (
    <ArticleInteractive
      slug={slug as ArticleSlug}
      language={locale as Locale}
      prefix={`/${locale}`}
    />
  );
}
