import type { Metadata } from "next"; import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
export const metadata: Metadata = { title: "Joyagoo Spreadsheet 2026 | How to Use Product Links", description: "Use a Joyagoo spreadsheet to narrow categories, verify live listings and keep product options connected to later QC evidence.", alternates:{ canonical:"/spreadsheet" } };
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="spreadsheet" initialLocale={resolveLanguage(query.lang)} />; }
