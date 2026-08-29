import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";
export const metadata = buildPageMetadata({ title: "Joyagoo Product Routes 2026 | Matched Listings by Category", description: "Browse maintained Joyagoo product routes across shoes, clothing, accessories and electronics, then check the current destination before choosing an option.", path:"/finds" });
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="finds" initialLocale={resolveLanguage(query.lang)} />; }
