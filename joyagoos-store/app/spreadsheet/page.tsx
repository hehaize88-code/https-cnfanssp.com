import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";
export const metadata = buildPageMetadata({ title: "Joyagoo Spreadsheet 2026 | How to Use Product Links", description: "Use a Joyagoo spreadsheet to narrow categories, verify live listings and keep product options connected to later QC evidence.", path:"/spreadsheet" });
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="spreadsheet" initialLocale={resolveLanguage(query.lang)} />; }
