import { SEARCH_INDEXING_ENABLED, SITE_URL } from "./data";
export const dynamic = "force-static";
export default function robots() {
  if (!SEARCH_INDEXING_ENABLED) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
