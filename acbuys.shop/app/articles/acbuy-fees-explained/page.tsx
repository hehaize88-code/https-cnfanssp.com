import type { Metadata } from "next";
import LongArticle from "../../ui/LongArticle";
import { getArticle, getRelatedArticles } from "../article-data";

const article = getArticle("acbuy-fees-explained");
export const metadata: Metadata = { title: article.seoTitle, description: article.description, alternates: { canonical: `https://acbuys.shop/articles/${article.slug}/` } };
export default function Page() { return <LongArticle article={article} related={getRelatedArticles(article.slug)} />; }
