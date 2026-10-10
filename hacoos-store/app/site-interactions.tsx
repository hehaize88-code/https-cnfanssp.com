"use client";

import { useEffect, useState, type ReactNode } from 'react';
import { ChevronRight, Languages, Menu } from 'lucide-react';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

type HeaderProps = {
  logo: ReactNode;
  locale: string;
  links: {href: string; label: string; active: boolean}[];
  localeRoutes: Record<string, string>;
  labels: {primaryNav: string; language: string; menu: string; close: string};
};
export function InteractiveHeader({logo, locale, links, localeRoutes, labels}: HeaderProps) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    {logo}
    <nav className="desktop-nav" aria-label={labels.primaryNav}>{links.map(link => <a key={link.href} className={link.active ? 'active' : ''} href={link.href}>{link.label}</a>)}</nav>
    <div className="header-tools"><div className="language-control"><Languages aria-hidden="true" />
      <NativeSelect className="language-trigger" value={locale} onChange={event => {window.location.href = localeRoutes[event.target.value];}} aria-label={labels.language}>
        <NativeSelectOption value="en">English</NativeSelectOption><NativeSelectOption value="de">Deutsch</NativeSelectOption><NativeSelectOption value="fr">Français</NativeSelectOption><NativeSelectOption value="es">Español</NativeSelectOption><NativeSelectOption value="it">Italiano</NativeSelectOption>
      </NativeSelect>
    </div><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? labels.close : labels.menu}><Menu aria-hidden="true" /></button></div>
  </div>{open && <nav className="mobile-nav" aria-label={labels.primaryNav}>{links.map(link => <a key={link.href} href={link.href}>{link.label}<ChevronRight aria-hidden="true" /></a>)}</nav>}</header>;
}

export function SiteTracking({locale, pageKey}: {locale: string; pageKey: string}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    const sendEvent = (name: string, parameters: Record<string, string>) => {
      const analytics = window as Window & {gtag?: (command: string, event: string, values: Record<string,string>) => void};
      analytics.gtag?.('event', name, parameters);
    };
    const common = {language: locale, page_type: pageKey.startsWith('articles/') ? 'article' : pageKey, page_path: window.location.pathname};
    const trackOutbound = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;
      const target = new URL(anchor.href, window.location.href);
      if (!['cnfanshp.com','www.cnfanshp.com'].includes(target.hostname)) return;
      sendEvent('outbound_product_click', {...common, link_url: target.href, link_text: anchor.textContent?.trim().slice(0,100) ?? '', link_type: target.pathname.startsWith('/AllProducts/') ? 'product' : 'category'});
    };
    const trackSearch = (event: SubmitEvent) => {
      if (!(event.target instanceof HTMLFormElement) || !event.target.matches('.search-desk')) return;
      sendEvent('product_search', {...common, search_term: String(new FormData(event.target).get('keywords') ?? '').slice(0,100)});
    };
    document.addEventListener('click', trackOutbound);
    document.addEventListener('submit', trackSearch);
    return () => {document.removeEventListener('click', trackOutbound);document.removeEventListener('submit', trackSearch);};
  }, [locale, pageKey]);
  return null;
}
