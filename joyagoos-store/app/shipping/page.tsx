import type { Metadata } from "next"; import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
export const metadata: Metadata = { title: "Joyagoo Shipping Guide 2026 | Weight, Volume & Routes", description: "Plan Joyagoo parcel shipping using actual weight, volumetric weight, packaging choices, restrictions and live route rules.", alternates:{ canonical:"/shipping" } };
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="shipping" initialLocale={resolveLanguage(query.lang)} />; }
