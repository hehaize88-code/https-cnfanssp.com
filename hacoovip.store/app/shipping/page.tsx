import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Reading Hacoo Delivery Estimates", description: "How to read Hacoo's published delivery ranges, processing time and after-sales wording as dated guidance rather than a promise.", alternates: { canonical: "/shipping", languages: languageAlternates("shipping") } };
export default function Page(){ return <ContentView page="shipping" />; }
