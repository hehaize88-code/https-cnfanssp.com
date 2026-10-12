import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { hrefFor, locales, routeNames } from "@/lib/site-data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hacoovip.store";
  const paths = [
    ...["", ...routeNames].map(path => ({ path, modified: "2026-10-12" })),
    ...articles.map(a => ({ path: `articles/${a.slug}`, modified: a.modifiedISO ?? a.dateISO ?? "2026-08-29" })),
  ];
  return locales.flatMap(locale => paths.map(({path,modified}) => ({
    url: base + hrefFor(locale,path), lastModified: modified,
    alternates: { languages: Object.fromEntries([...locales.map(l => [l,base + hrefFor(l,path)]), ["x-default",base + hrefFor("en",path)]]) },
  })));
}
