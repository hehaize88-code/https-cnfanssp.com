import {getHtml,parseDetail} from '../../src/lib/source.mjs';
export async function onRequestGet(context:any){
 const id=new URL(context.request.url).searchParams.get('id')||'';
 if(!/^\d{1,10}$/.test(id))return Response.json({error:'invalid_id'},{status:400});
 const key=new Request(new URL(`/api/product?id=${id}`,context.request.url));const cache=caches.default;const hit=await cache.match(key);if(hit)return hit;
 try{const product=parseDetail(await getHtml(`/AllProducts/${id}.html`),id);const response=Response.json(product,{headers:{'Cache-Control':'public, max-age=300','X-Content-Type-Options':'nosniff'}});context.waitUntil(cache.put(key,response.clone()));return response;}catch{return Response.json({error:'source_unavailable'},{status:502,headers:{'Cache-Control':'no-store'}});}
}
