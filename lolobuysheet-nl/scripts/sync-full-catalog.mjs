import fs from 'node:fs';
import {groups,parseList,getHtml} from '../src/lib/source.mjs';
const out=new Map(),stats=[],started=Date.now();let next=0;
const crawlGroups=[...groups,['all','AllProducts']];
async function category([key,slug]){const visited=new Set(),queue=[`/${slug}/`],seen=new Map();while(queue.length){const path=queue.shift();if(visited.has(path))continue;visited.add(path);if(visited.size>500)throw Error('Unexpected pagination volume');let result;for(let attempt=0;attempt<3;attempt++){try{result=parseList(await getHtml(path),key);break}catch(e){if(attempt===2)throw e;await new Promise(r=>setTimeout(r,1000*(attempt+1)))}}if(!result.products.length&&visited.size===1)throw Error(`Empty source category ${key}`);result.products.forEach(p=>seen.set(p.recordId,p));for(const p of result.pages){if(p.toLowerCase().startsWith(`/${slug.toLowerCase()}/`)&&!visited.has(p)&&!queue.includes(p))queue.push(p)}if(visited.size%5===0)console.log(key,visited.size,seen.size);}
 for(const p of seen.values()){const old=out.get(p.recordId);if(!old||old.category==='all')out.set(p.recordId,p);}stats.push({key,slug,products:seen.size,pages:visited.size});console.log('DONE',key,seen.size,visited.size);
}
async function worker(){while(next<crawlGroups.length){const i=next++;await category(crawlGroups[i]);}}
await Promise.all([worker(),worker(),worker()]);
for(const p of out.values())if(p.category==='all'){const detail=await getHtml(`/AllProducts/${p.recordId}.html`);const group=groups.find(g=>detail.toLowerCase().includes(`href='/${g[1]}/'`)||detail.toLowerCase().includes(`href=\"/${g[1]}/\"`));p.category=group?.[0]||'other';}
const products=[...out.values()].sort((a,b)=>b.date-a.date||Number(b.recordId)-Number(a.recordId));
if(products.length<660)throw Error('Catalogue unexpectedly small; refusing incomplete replacement');
const data={source:'https://www.cnfanssp.com',retrievedAt:new Date().toISOString(),mode:'complete-source-catalogue',categories:groups.map(([key,slug])=>({key,slug,products:products.filter(p=>p.category===key).length,pages:stats.find(s=>s.key===key)?.pages||0})),sourcePages:stats.reduce((n,g)=>n+g.pages,0),products};
fs.mkdirSync('public/data',{recursive:true});fs.writeFileSync('public/data/catalog.json',JSON.stringify(data));fs.writeFileSync('src/data/catalog-summary.json',JSON.stringify({...data,products:products.slice(0,20),featured:['shoes','hoodies','accessories'].map(c=>products.find(p=>p.category===c))},null,2));
console.log('COMPLETE',products.length,'pages',stats.reduce((n,g)=>n+g.pages,0),'seconds',Math.round((Date.now()-started)/1000));
