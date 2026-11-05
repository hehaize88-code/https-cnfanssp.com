import type { MetadataRoute } from "next";
import { PLANNED_ORIGIN } from "./data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: `${PLANNED_ORIGIN}/sitemap.xml`, host: PLANNED_ORIGIN }; }
