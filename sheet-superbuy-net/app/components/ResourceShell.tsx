import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { SHOP_URL } from "../data";

type Props = { eyebrow: string; title: string; intro: string; children: ReactNode; stats?: { value: string; label: string }[] };

export function ResourceShell({ eyebrow, title, intro, children, stats }: Props) {
  return (
    <><SiteHeader /><main>
      <section className="resource-hero">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{eyebrow}</span></div>
        <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="resource-intro">{intro}</p>
        <div className="resource-actions"><a className="button button-primary" href={SHOP_URL} target="_blank" rel="nofollow sponsored noopener">Browse live products <span>↗</span></a><Link className="button button-outline" href="/articles">Read practical guides</Link></div>
        {stats && <div className="mini-stats">{stats.map((stat) => <div key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>)}</div>}
      </section>
      <section className="resource-content">{children}</section>
    </main><SiteFooter /></>
  );
}
