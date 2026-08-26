import { languagePath } from "../lib/routing";

export const dynamic = "force-static";

export default function manifest() {
  return { name: "FindQCS", short_name: "FindQCS", description: "Product finder and QC evidence guides", start_url: languagePath("/"), display: "standalone", background_color: "#f6f8fb", theme_color: "#10283f", icons: [{ src: "/findqc-logo.png", sizes: "128x128", type: "image/png" }] };
}
