import type { Metadata } from "next"; import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
export const metadata: Metadata = { title: "Best Joyagoo Finds 2026 | Matched Product Pages", description: "Browse curated Joyagoo finds across shoes, clothing, accessories and electronics with matched product destinations.", alternates:{ canonical:"/finds" } };
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="finds" initialLocale={resolveLanguage(query.lang)} />; }
