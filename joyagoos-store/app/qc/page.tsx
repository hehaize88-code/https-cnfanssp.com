import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";
export const metadata = buildPageMetadata({ title: "Joyagoo QC Guide 2026 | Photo Checklist", description: "Review Joyagoo QC photos for item identity, size, construction, visible defects and the exact option ordered.", path:"/qc" });
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="qc" initialLocale={resolveLanguage(query.lang)} />; }
