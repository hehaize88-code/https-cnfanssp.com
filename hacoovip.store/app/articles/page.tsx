import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Source-Checked Buyer Guides", description: "Source-checked guides separating current official statements, dated public records and independent buyer guidance.", alternates: { canonical: "/articles", languages: languageAlternates("articles") } };
export default function Page(){ return <ContentView page="articles" />; }
