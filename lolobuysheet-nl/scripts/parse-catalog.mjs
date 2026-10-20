import fs from 'node:fs';
import * as cheerio from 'cheerio';
const root='/tmp/lolo-sources';
const categories=['shoes','hoodies','tshirts','pants','accessories','jerseys'];
const groups=categories.map(category=>{
 const $=cheerio.load(fs.readFileSync(`${root}/${category}.html`,'utf8'));
 return $('.product-card').slice(0,8).map((i,e)=>{
  const c=$(e), img=c.find('img').first();
  return {recordId:c.attr('data-id'),name:c.find('.product-name').text().trim(),priceCny:Number(c.find('.product-price').text().trim()),views:Number(c.find('.product-views').text().replace(/\D/g,'')),date:Number(c.attr('data-date')||0),image:new URL(img.attr('data-src')||img.attr('src'),'https://www.cnfanssp.com').href,source:new URL(c.find('a.product-image').attr('href'),'https://www.cnfanssp.com').href,category};
 }).get();
});
// Round-robin keeps the initial view representative while preserving source records.
const products=groups[0].flatMap((_,i)=>groups.map(g=>g[i]).filter(Boolean));
fs.writeFileSync(root+'/products.json',JSON.stringify(products,null,2));
console.log('Source products:',products.length,products.slice(0,6).map(x=>x.name));
