import { ArticleView } from "@/components/article-view";
import { articles } from "@/lib/articles";
import { languageAlternates } from "@/lib/site-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams(){ return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = articles.find((item) => item.slug === slug); return article ? { title: article.seoTitle, description: article.seoDescription, alternates: { canonical: `/articles/${article.slug}`, languages: languageAlternates(`articles/${article.slug}`) }, openGraph: { type: "article", title: article.seoTitle, description: article.seoDescription, publishedTime: "2026-08-28", modifiedTime: "2026-08-29", images: article.image ? [{ url: article.image.src, width: 1200, height: 630, alt: article.image.alt }] : undefined }, twitter: { card: "summary_large_image", title: article.seoTitle, description: article.seoDescription, images: article.image ? [article.image.src] : undefined } } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!articles.some((article) => article.slug === slug)) notFound(); return <ArticleView slug={slug} />; }
