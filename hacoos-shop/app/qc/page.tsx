import type { Metadata } from "next"; import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
export const metadata: Metadata = { title: "Joyagoo QC Guide 2026 | Photo Checklist", description: "Review Joyagoo QC photos for item identity, size, construction, visible defects and the exact option ordered.", alternates:{ canonical:"/qc" } };
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="qc" initialLocale={resolveLanguage(query.lang)} />; }
