import Link from "next/link";
import { discoveryCopy } from "@/app/discoveryCopy";
import { SHOE_GUIDE } from "@/app/guideEditions";
import { localizePath } from "@/app/i18n";

export default function DiscoveryLinks({ locale = "en", context }) {
  const copy = discoveryCopy[locale];
  const links = context === "faq"
    ? [["https://www.hacoo.app/", copy.official], ["/guides/hacoo-order-tracking", copy.tracking], ["/categories", copy.browse]]
    : [["/guides/size-guide", copy.size], ["/guides/qc-photo-checklist", copy.qc]];
  if (context === "shoes") links.unshift([`/guides/${SHOE_GUIDE}`, copy.model]);
  return <div className="discovery-links">{links.map(([path, label]) =>
    path.startsWith("https:") ? <a key={path} href={path} rel="external">{label} ↗</a> :
      <Link key={path} href={localizePath(path, locale)}>{label}</Link>
  )}</div>;
}
