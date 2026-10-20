import {groups,getHtml,parseList} from '../../src/lib/source.mjs';
export async function onRequestGet(context:any){
 const category=new URL(context.request.url).searchParams.get('category');const group=groups.find(g=>g[0]===category);if(!group)return Response.json({error:'invalid_category'},{status:400});
 const key=new Request(new URL(`/api/catalog?category=${category}`,context.request.url)),cache=caches.default,hit=await cache.match(key);if(hit)return hit;
 try{const visited=new Set<string>(),queue=[`/${group[1]}/`],products=new Map();while(queue.length){const path=queue.shift()!;if(visited.has(path))continue;visited.add(path);if(visited.size>40)throw Error('Use complete build snapshot');const parsed=parseList(await getHtml(path),category!);if(!parsed.products.length&&visited.size===1)throw Error('Empty source');for(const p of parsed.products)products.set(p.recordId,p);for(const p of parsed.pages)if(p.toLowerCase().startsWith(`/${group[1]}/`)&&!visited.has(p)&&!queue.includes(p))queue.push(p);}
 const result=Response.json({category,complete:true,retrievedAt:new Date().toISOString(),products:[...products.values()]},{headers:{'Cache-Control':'public,max-age=900','X-Content-Type-Options':'nosniff'}});context.waitUntil(cache.put(key,result.clone()));return result;
 }catch{return Response.json({error:'source_unavailable'},{status:502,headers:{'Cache-Control':'no-store'}})}
}
