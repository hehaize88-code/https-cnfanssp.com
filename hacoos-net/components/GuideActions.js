import Link from "next/link";
import { discoveryCopy } from "@/app/discoveryCopy";
import { REFUND_GUIDE, SHOE_GUIDE, editionMetadata } from "@/app/guideEditions";
import { localizePath } from "@/app/i18n";

export default function GuideActions({ slug, locale = "en" }) {
  const copy = discoveryCopy[locale];
  const destinations = {
    "shipping-planning": ["/guides/hacoo-order-tracking", copy.tracking],
    "hacoo-returns-refunds": [`/guides/${REFUND_GUIDE}`, editionMetadata(REFUND_GUIDE, locale).title],
    [REFUND_GUIDE]: ["/guides/hacoo-returns-refunds", editionMetadata("hacoo-returns-refunds", locale).title],
    "size-guide": [`/guides/${SHOE_GUIDE}`, copy.model],
    [SHOE_GUIDE]: ["/products/grey-low-top-sneakers", copy.product],
  };
  const next = destinations[slug];
  return next && <div className="discovery-links"><Link href={localizePath(next[0], locale)}>{next[1]} →</Link></div>;
}
