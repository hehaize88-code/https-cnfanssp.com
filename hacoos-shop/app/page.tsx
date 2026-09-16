import type { Metadata } from "next";
import { SitePage, buildMetadata } from "./site";

export const metadata: Metadata = buildMetadata("en", "home");

export default function Home() {
  return <SitePage lang="en" page="home" />;
}
