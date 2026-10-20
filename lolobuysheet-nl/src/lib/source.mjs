import {load} from 'cheerio/slim';
export const SOURCE='https://www.cnfanssp.com';
export const groups=[['shoes','shoes',4],['hoodies','hoodies-sweaters',5],['tshirts','t-shirts',6],['jackets','jackets',7],['pants','pants-shorts',8],['headwear','headwear',9],['accessories','accessories',10],['sets','short-sets',11],['electronics','electronics',12],['other','other-stuff',13],['jerseys','jersey',15]];
const absolute=(s)=>{try{const u=new URL(s,SOURCE);return u.origin===SOURCE&&/^\/uploads\//.test(u.pathname)?u.href:null}catch{return null}};
export function parseList(html,category='all'){
 const $=load(html);const products=$('.product-grid .product-card').map((_,e)=>{const c=$(e),img=c.find('img').first();return {recordId:c.attr('data-id'),name:c.find('.product-name').text().trim(),priceCny:Number(c.find('.product-price').text().replace(/[^\d.]/g,'')),views:Number(c.find('.product-views').text().replace(/\D/g,'')),date:Number(c.attr('data-date')||0),image:absolute(img.attr('data-src')||img.attr('src')),source:new URL(c.find('a.product-image').attr('href')||'/',SOURCE).href,category}}).get().filter(p=>/^\d+$/.test(p.recordId||'')&&p.image&&p.name&&Number.isFinite(p.priceCny));
 const pages=[...new Set($('.pagination a[href]').map((_,e)=>{try{const u=new URL($(e).attr('href'),SOURCE);return u.origin===SOURCE?u.pathname+u.search:null}catch{return null}}).get().filter(Boolean))];return {products,pages};
}
export function parseDetail(html,id){
 const $=load(html),c=$('.product-detail').first();const name=c.find('h1').text().trim();if(!name)throw Error('Source item not found');
 const seller=c.find('.weidian-btn').attr('href');let sellerUrl,productId;
 try{const u=new URL(seller);if(!['weidian.com','www.weidian.com'].includes(u.hostname))throw Error();productId=u.searchParams.get('itemID')||u.searchParams.get('itemId');if(!/^\d+$/.test(productId||''))throw Error();sellerUrl=`https://weidian.com/item.html?itemID=${productId}`;}catch{throw Error('Source seller product ID unavailable');}
 const images=[...new Set(c.find('.product-gallery img').map((_,e)=>absolute($(e).attr('data-src')||$(e).attr('src'))).get().filter(Boolean))];
 return {recordId:String(id),name,priceCny:Number(c.find('.product-price').first().text().replace(/[^\d.]/g,'')),productId,sellerUrl,buyUrl:`https://www.lolobuy.com/productDetail/${productId}?url=${encodeURIComponent(sellerUrl)}`,images,image:images[0],source:`${SOURCE}/AllProducts/${id}.html`,qcImages:[],retrievedAt:new Date().toISOString()};
}
export async function getHtml(path){
 const u=new URL(path,SOURCE);if(u.origin!==SOURCE)throw Error('Invalid source');
 const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0 (compatible; LoloBuySheet source reader)','Accept':'text/html'},signal:AbortSignal.timeout(25000)});
 if(!r.ok)throw Error(`Source returned ${r.status}`);const html=await r.text();if(html.length>5000000)throw Error('Unexpected source response');return html;
}
