import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";
export const metadata = buildPageMetadata({ title: "How to Use the Joyagoo Spreadsheet | Link & QC Checklist", description: "Use the Joyagoo spreadsheet to shortlist products, verify live links and exact options, preserve size evidence, and connect each find to warehouse QC.", path:"/spreadsheet" });
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="spreadsheet" initialLocale={resolveLanguage(query.lang)} />; }
