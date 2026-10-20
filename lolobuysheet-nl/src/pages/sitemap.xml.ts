import type { APIRoute } from 'astro';
import { languages, pathFor, content } from '../data/i18n';
const escape = (value: string) => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
export const GET: APIRoute = ({ site }) => {
  const pages = ['', 'spreadsheet', 'how-it-works', 'guides', 'articles', 'faq', ...content.en.articles.map((a: { slug: string }) => 'articles/' + a.slug)];
  const url = (lang: typeof languages[number], page: string) => escape(new URL(pathFor(lang, page), site).href);
  const entries = pages.flatMap(page => languages.map(lang => `<url><loc>${url(lang,page)}</loc>${languages.map(other => `<xhtml:link rel="alternate" hreflang="${other}" href="${url(other,page)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${url('en',page)}"/></url>`));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
