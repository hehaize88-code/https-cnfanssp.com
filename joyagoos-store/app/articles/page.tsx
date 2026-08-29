import { ArticlesContent } from "../articles-content";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";
export const metadata = buildPageMetadata({ title:"Joyagoo Guides & Research 2026 | QC, Shipping & Links", description:"Read source-backed Joyagoo guides for buying flow, QC photo review, parcel weight and product-route verification.", path:"/articles" });
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){const query=await searchParams;return <ArticlesContent initialLocale={resolveLanguage(query.lang)} />}
