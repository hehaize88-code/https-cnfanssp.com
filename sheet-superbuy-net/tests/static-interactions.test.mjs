import fs from 'node:fs';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
const langs=['en','zh','de','fr','es','it','pt','pl','nl'];
for(const lang of langs){
 const prefix=lang==='en'?'':'/'+lang;
 const dom=new JSDOM(fs.readFileSync(`dist/client${prefix}/index.html`,'utf8'),{url:`https://sheet-superbuy.net${prefix}/`,runScripts:'outside-only'});
 const w=dom.window,d=w.document;w.eval(fs.readFileSync('public/site.js','utf8'));
 const shown=()=>[...d.querySelectorAll('[data-product-row]')].filter(n=>!n.hidden);
 assert.equal(shown().length,8);d.querySelector('[data-show-products]').click();assert.equal(shown().length,12);
 d.querySelector('[data-category-filter="Shoes"]').click();assert.equal(shown().length,3);assert.ok(shown().every(n=>n.dataset.category==='Shoes'));
 d.querySelector('[data-category-filter="All"]').click();assert.equal(shown().length,8);
 const form=d.querySelector('.main-site-search');assert.equal(form.action,'https://www.cnfanssp.com/search.html');form.elements.keywords.value='winter jacket';assert.equal(form.elements.channelid.value,'2');
 form.addEventListener('submit',e=>e.preventDefault());form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));
 const link=d.querySelector('[data-product-row] a');link.addEventListener('click',e=>e.preventDefault());link.click();
 const events=w.dataLayer.filter(x=>x[0]==='event');assert.ok(events.some(x=>x[1]==='search_submit'&&x[2].search_term==='winter jacket'));assert.ok(events.some(x=>x[1]==='product_click'));assert.ok(events.every(x=>x[2].language===(lang==='zh'?'zh-CN':lang)));
 assert.equal(d.querySelectorAll('[data-locale-switch]').length,9);w.close();
 const calc=new JSDOM(fs.readFileSync(`dist/client${prefix}/shipping/index.html`,'utf8'),{url:`https://sheet-superbuy.net${prefix}/shipping/`,runScripts:'outside-only'});const c=calc.window;c.eval(fs.readFileSync('public/site.js','utf8'));const f=c.document.querySelector('[data-weight-calculator]');f.elements.namedItem('length').value='60';f.elements.width.value='40';f.elements.height.value='30';f.elements.weight.value='4';f.elements.divisor.value='6000';f.dispatchEvent(new c.Event('submit',{bubbles:true,cancelable:true}));assert.equal(c.document.querySelector('[data-volume-result]').textContent,(12).toLocaleString(lang==='zh'?'zh-CN':lang,{minimumFractionDigits:2,maximumFractionDigits:2}));assert.ok(c.dataLayer.some(x=>x[0]==='event'&&x[1]==='shipping_calculator_use'));c.close();
}
console.log('PASS: nine languages; product filters, show-more, search targets, click events and 12 kg calculator scenario.');
