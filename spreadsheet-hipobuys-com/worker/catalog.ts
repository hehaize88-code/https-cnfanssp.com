import { localizedCatalogTitle } from './catalog-locale';
import { isLang } from '../app/languages';
/** Search cache of cnfanssp product pages. All prices are the catalogue's yuan amounts. */
// Compact row layout shared with scripts/sync_catalog.py.
type Row = [
  recordId: string, title: string, priceCny: number, category: string,
  listedAt: number, views: number, photos: string[], weidianId: string | null,
  qcPhotos: string[], detailsVerified: boolean
];
type Detail = { images: string[]; qc: string[]; item: string | null };
interface Assets { fetch(request: Request): Promise<Response> }
const source = 'https://www.cnfanssp.com';
const json = (value: unknown, status = 200) => new Response(JSON.stringify(value), {
  status, headers: { 'content-type': 'application/json;charset=utf-8', 'cache-control': status === 200 ? 'public, max-age=240' : 'no-store' },
});
const imageURL = (path: string) => new URL(path, source).href;
const buyURL = (item: string) => 'https://hipobuy.com/product/weidian/' + item;
const output = (r: Row, lang:string, path = r[6][0]) => ({
  id: r[0], name: localizedCatalogTitle(r[1],lang), priceCny: r[2], category: r[3], image: path ? imageURL(path) : '',
  buyUrl: r[7] ? buyURL(r[7]) : r[9] ? null : '/api/buy/' + r[0], qcCount: r[8].length, photoCount: r[6].length,
});

let rowsTask: Promise<Row[]> | undefined;
let hashTask: Promise<Record<string,string[]>> | undefined;
async function read<T>(request: Request, assets: Assets, filename: string): Promise<T> {
  const r = await assets.fetch(new Request(new URL('/catalog-data/' + filename, request.url)));
  if (!r.ok) throw Error('Could not load catalog cache');
  return await r.json() as T;
}
function records(request: Request, assets: Assets) {
  rowsTask ??= read<Row[]>(request, assets, 'records.json').catch(e => { rowsTask = undefined; throw e; });
  return rowsTask;
}
function hashes(request: Request, assets: Assets) {
  hashTask ??= read<Record<string,string[]>>(request, assets, 'hashes.json').catch(e => { hashTask = undefined; throw e; });
  return hashTask;
}
const searchTexts = new Map<string,string[]>();
function searchable(rows:Row[], lang:string) {
  let entries=searchTexts.get(lang);
  if (!entries) {
    entries=rows.map(row=>[row[0],row[1],row[3],row[7],lang==='en'?'':localizedCatalogTitle(row[1],lang)].join(' ').toLowerCase());
    searchTexts.set(lang,entries);
  }
  return entries;
}
function popcount32(n:number) {
  n -= (n >>> 1) & 0x55555555;
  n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
  return (((n + (n >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
}
type Descriptor = {path:string; high:number; low:number; sha?:string};
let preparedIndex: Map<string,Descriptor[]> | undefined;
async function imageGroups(request:Request, assets:Assets, rows:Row[]) {
  if (preparedIndex) return preparedIndex;
  const lookup=await hashes(request,assets);
  const groups=new Map<string,Descriptor[]>();
  for (const row of rows) {
    const pictures:Descriptor[]=[];
    for (const path of row[6]) {
      const signature=lookup[path];
      if(signature) {
        const [h,sha]=signature;
        pictures.push({path,high:parseInt(h.slice(0,8),16),low:parseInt(h.slice(8),16),sha});
      }
    }
    if (pictures.length) groups.set(row[0],pictures);
  }
  preparedIndex=groups;
  return groups;
}
async function gallery(row: Row): Promise<Detail> {
  if (row[9]) return {images:row[6].map(imageURL),qc:row[8].map(imageURL),item:row[7]};
  const r = await fetch(source + '/AllProducts/' + row[0] + '.html', {signal:AbortSignal.timeout(12000)});
  if (!r.ok) throw Error('Source unavailable');
  const content = (await r.text()).split('<div class="product-detail">')[1]?.split('<section class="product-list">')[0];
  if (!content) throw Error('Missing product');
  const images = new Set(row[6].map(imageURL)), qc = new Set<string>();
  const qcStart=content.search(/class=["'][^"']*\bqc-photo/i);
  for (const match of content.matchAll(/<img\b[^>]*>/gi)) {
    const tag=match[0];
    const raw = tag.match(/\bdata-src="([^"]+)"/i)?.[1] || tag.match(/\bsrc="([^"]+)"/i)?.[1];
    if (!raw || raw.startsWith('data:')) continue;
    const url = new URL(raw.replaceAll('&amp;','&'),source);
    if (url.protocol !== 'https:') continue;
    images.add(url.href);
    if ((qcStart>=0 && (match.index ?? 0)>qcStart) || /\bqc\b|quality[\s_-]*check|质检/i.test(tag)) qc.add(url.href);
  }
  const item = content.match(/https?:\/\/(?:www\.)?weidian\.com\/item\.html\?itemid=(\d+)/i)?.[1] || null;
  return {images:[...images],qc:[...qc],item};
}
export async function catalogApi(request: Request, assets: Assets): Promise<Response | null> {
  const {pathname,searchParams:p} = new URL(request.url);
  if (!(pathname === '/api/catalog' || pathname === '/api/image-search' || /^\/api\/(gallery|buy)\/\d+$/.test(pathname))) return null;
  if (request.method !== 'GET') return new Response(null,{status:405,headers:{Allow:'GET'}});
  try {
    const rows = await records(request,assets);
    const requestedLang=p.get('lang') || 'en';
    const lang=isLang(requestedLang) ? requestedLang : 'en';
    if (pathname.startsWith('/api/gallery/') || pathname.startsWith('/api/buy/')) {
      const row = rows.find(r => r[0] === pathname.split('/').pop());
      if (!row) return json({error:'unknown_product'},404);
      const detail = await gallery(row);
      const buyUrl = detail.item ? buyURL(detail.item) : null;
      if (pathname.startsWith('/api/buy/')) return buyUrl ? Response.redirect(buyUrl,302) : json({error:'purchase_link_unavailable'},404);
      return json({...detail,buyUrl});
    }
    const limit = Math.min(60, Math.max(1, Math.trunc(Number(p.get('limit')) || 24)));
    const pageResponse = (found: Row[], image?: Map<string,string>) => {
      const pages=Math.ceil(found.length/limit);
      const page=Math.max(1,Math.min(pages,Math.trunc(Number(p.get('page'))||1)));
      return json({items:found.slice((page-1)*limit,page*limit).map(r=>output(r,lang,image?.get(r[0]))),page,pages,total:found.length});
    };
    if (pathname === '/api/image-search') {
      const hash=p.get('hash') || '';
      const sha=(p.get('sha') || '').toLowerCase();
      if (!/^[a-f\d]{16}$/i.test(hash)) return json({error:'invalid_hash'},400);
      const index=await imageGroups(request,assets,rows);
      const high=parseInt(hash.slice(0,8),16), low=parseInt(hash.slice(8),16);
      if (!index.size) return json({error:'index_unavailable'},503);
      const matches: {row:Row; image:string; score:number}[]=[];
      for (const row of rows) {
        let best='', score=65;
        for (const photo of index.get(row[0]) || []) {
          if (sha && sha===photo.sha) {best=photo.path;score=-1;break;}
          const d=popcount32(high ^ photo.high) + popcount32(low ^ photo.low);
          if(d<score) {best=photo.path;score=d;}
        }
        if (best && score<=24) matches.push({row,image:best,score});
      }
      matches.sort((a,b)=>a.score-b.score);
      return pageResponse(matches.map(x=>x.row),new Map(matches.map(x=>[x.row[0],x.image])));
    }
    const query=(p.get('q')||'').trim().toLowerCase(), category=p.get('category');
    const words=query.split(/\s+/).filter(Boolean);
    const searchableRows=words.length ? searchable(rows,lang) : [];
    const found=rows.filter((row,i)=>{
      if(category && category!=='all' && row[3]!==category) return false;
      if(p.get('qc')==='1' && !row[8].length) return false;
      if (!words.length) return true;
      return words.every(w=>searchableRows[i].includes(w));
    });
    switch(p.get('sort')) {
      case 'popular':found.sort((a,b)=>b[5]-a[5]);break;
      case 'price-asc':found.sort((a,b)=>a[2]-b[2]);break;
      case 'price-desc':found.sort((a,b)=>b[2]-a[2]);break;
      default:found.sort((a,b)=>b[4]-a[4]);
    }
    return pageResponse(found);
  } catch {return json({error:'source_unavailable'},503);}
}
