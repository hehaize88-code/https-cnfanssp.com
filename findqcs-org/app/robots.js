export const dynamic = "force-static";

export default function robots() {
  return { rules: { userAgent: "*", disallow: "/" }, sitemap: "https://findqcs.org/sitemap.xml" };
}
