import fs from 'node:fs';
import * as cheerio from 'cheerio';
const root='/tmp/lolo-sources';
const products=JSON.parse(fs.readFileSync(root+'/products.json','utf8')).map(p=>{
 const path=root+'/'+p.recordId+'.html';if(!fs.existsSync(path))return null;
 const $=cheerio.load(fs.readFileSync(path,'utf8'));
 const sellerUrl=$('.weidian-btn').attr('href');
 if(!sellerUrl)return null;
 let url;try{url=new URL(sellerUrl)}catch{return null}
 if(!url.hostname.endsWith('weidian.com')) return null;
 const productId=url.searchParams.get('itemID');
 if(!/^\d+$/.test(productId||''))return null;
 const images=[...new Set($('.product-gallery img').map((_,i)=>new URL($(i).attr('data-src')||$(i).attr('src'),'https://www.cnfanssp.com').href).get())];
 return {...p,productId,sellerUrl,buyUrl:`https://www.lolobuy.com/productDetail/${productId}?url=${encodeURIComponent(sellerUrl)}`,images};
}).filter(Boolean);
if(products.length<16)throw Error('Fewer than 16 valid real products. Refusing to create demo data.');
fs.mkdirSync('src/data',{recursive:true});
fs.writeFileSync('src/data/catalog.json',JSON.stringify({source:'https://www.cnfanssp.com',retrievedAt:new Date().toISOString(),mode:'build-time-source-snapshot',products},null,2));
console.log('Verified source items:',products.length,'Categories:',[...new Set(products.map(p=>p.category))].join(', '));
