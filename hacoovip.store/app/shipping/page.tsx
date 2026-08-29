import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Shipping Times, Returns & Refund Facts 2026", description: "Official Hacoo shipping ranges, processing time, split-parcel guidance, the 15-day after-sales window and current support routes.", alternates: { canonical: "/shipping", languages: languageAlternates("shipping") } };
export default function Page(){ return <ContentView page="shipping" />; }
