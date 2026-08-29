import { ArticleView } from "@/components/article-view";
import { articles } from "@/lib/articles";
import { languageAlternates } from "@/lib/site-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams(){ return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = articles.find((item) => item.slug === slug); return article ? { title: article.title, description: article.deck, alternates: { canonical: `/articles/${article.slug}`, languages: languageAlternates(`articles/${article.slug}`) }, openGraph: { type: "article", title: article.title, description: article.deck, publishedTime: "2026-08-28" } } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!articles.some((article) => article.slug === slug)) notFound(); return <ArticleView slug={slug} />; }
