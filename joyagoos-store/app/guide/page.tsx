import type { Metadata } from "next"; import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
export const metadata: Metadata = { title: "Joyagoo Buying Guide 2026 | From Link to Warehouse", description: "Follow a clear Joyagoo buying sequence from product discovery and option checks to warehouse QC and parcel planning.", alternates:{ canonical:"/guide" } };
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="guide" initialLocale={resolveLanguage(query.lang)} />; }
