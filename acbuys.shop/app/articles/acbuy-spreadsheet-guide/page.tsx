import type { Metadata } from "next";
import LongArticle from "../../ui/LongArticle";
import { articles, getArticle } from "../article-data";

const article = getArticle("acbuy-spreadsheet-guide");
export const metadata: Metadata = { title: article.seoTitle, description: article.description, alternates: { canonical: `https://acbuys.shop/articles/${article.slug}/` } };
export default function Page() { return <LongArticle article={article} related={articles.filter((item) => item.slug !== article.slug).slice(0, 3)} />; }
