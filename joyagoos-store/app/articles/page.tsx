import { guideHubCopy } from "../guide-hub-copy";
import { ArticlesContent } from "../articles-content";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";
export const metadata = buildPageMetadata({ title:guideHubCopy.en.title, description:guideHubCopy.en.description, path:"/articles" });
export default async function Page({searchParams}:{searchParams:Promise<{lang?:string|string[]}>}){const query=await searchParams;return <ArticlesContent initialLocale={"en"} />}
