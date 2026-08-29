import type { Metadata } from "next"; import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
export const metadata: Metadata = { title: "Joyagoo Spreadsheet FAQ | Site Scope & Product Checks", description: "Clear answers about Joyagoo spreadsheet product routes, reference prices, QC photos and this independent guide.", alternates:{ canonical:"/faq" } };
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="faq" initialLocale={resolveLanguage(query.lang)} />; }
