import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(site?.hostname === 'lolobuysheet.nl'
  ? `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /data/\nSitemap: ${new URL('/sitemap.xml',site).href}\n`
  : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
