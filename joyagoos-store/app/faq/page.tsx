import { GuideInteractive } from "../guide-interactive";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";
export const metadata = buildPageMetadata({ title: "Joyagoo Product Directory FAQ | Listing, QC & Route Checks", description: "Clear answers about Joyagoo product routes, reference prices, QC photos, storage timing and this independent directory.", path:"/faq" });
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){ const query=await searchParams; return <GuideInteractive section="faq" initialLocale={resolveLanguage(query.lang)} />; }
