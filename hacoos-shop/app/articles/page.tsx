import type { Metadata } from "next";
import { ArticlesContent } from "../articles-content";
import { resolveLanguage } from "../i18n";
export const metadata: Metadata = { title:"Joyagoo Guides & Updates 2026 | QC, Shipping & Links", description:"Read source-backed Joyagoo spreadsheet guides for QC photo review, parcel weight, shipping and link verification.", alternates:{canonical:"/articles"} };
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){const query=await searchParams;return <ArticlesContent initialLocale={resolveLanguage(query.lang)} />}
