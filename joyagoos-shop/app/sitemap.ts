import type { MetadataRoute } from "next";
import { categoryKeys, languages, pageKeys, type CategoryKey, type PageKey } from "./site-data";
import { seoArticleSlugs } from "./seo-articles";
const base="https://joyagoos.shop";
export const dynamic = "force-static";

const changedOn:Partial<Record<PageKey,string>>={
  "joyagoo-title-thumbnail-destination-consistency-check":"2026-09-04",
  "joyagoo-product-id-source-link-destination-url-guide":"2026-09-02",
  "joyagoo-destination-listing-verification-guide":"2026-08-31",
  "joyagoo-spreadsheet-independent-product-index-guide":"2026-08-29",
  home:"2026-08-28",spreadsheet:"2026-08-28",finds:"2026-08-28",articles:"2026-08-28",
  guide:"2026-08-27",qc:"2026-08-27",shipping:"2026-08-27",faq:"2026-08-27",
  shoes:"2026-08-28",hoodies:"2026-08-28","t-shirts":"2026-08-28",jackets:"2026-08-28",pants:"2026-08-28",accessories:"2026-08-28",
  about:"2026-08-28","editorial-policy":"2026-08-28","how-we-verify-links":"2026-08-28",
};

function route(lang:string,page:PageKey){if(page==="home")return `/${lang}/`;if(seoArticleSlugs.includes(page))return `/${lang}/articles/${page}/`;if(categoryKeys.includes(page as CategoryKey))return `/${lang}/categories/${page}/`;return `/${lang}/${page}/`;}

export default function sitemap():MetadataRoute.Sitemap{
  const indexablePages=pageKeys.filter(page=>!seoArticleSlugs.includes(page)||page==="joyagoo-title-thumbnail-destination-consistency-check"||page==="joyagoo-spreadsheet-independent-product-index-guide"||page==="joyagoo-destination-listing-verification-guide"||page==="joyagoo-product-id-source-link-destination-url-guide");
  return languages.flatMap(lang=>indexablePages.map(page=>({
    url:`${base}${route(lang,page)}`,
    lastModified:new Date(changedOn[page]??"2026-08-26"),
    changeFrequency:page==="home"||page==="finds"?"weekly":"monthly",
    priority: page === "home" ? 1 : (categoryKeys.includes(page as CategoryKey) ? 0.85 : 0.8),
  })));
}
