import assert from "node:assert/strict";
import {readFile,access} from "node:fs/promises";
import test from "node:test";

const root=new URL('../dist/client/',import.meta.url);
const languages=['en','de','fr','es','it'];
const slugs=['no-qc-photos-found','sneaker-qc-photo-checklist','seller-photos-vs-warehouse-qc'];
test('every sitemap page has matching language, canonical, reciprocal alternates and live internal links',async()=>{
  const sitemap=await readFile(new URL('sitemap.xml',root),'utf8');
  const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]));
  assert.equal(urls.length,135);
  for(const url of urls){
    const html=await readFile(new URL(url.pathname.slice(1)+'index.html',root),'utf8');
    const lang=url.pathname.match(/^\/(de|fr|es|it)\//)?.[1]||'en';
    assert.match(html,new RegExp(`<html lang="${lang}"`),url.pathname);
    assert.ok(html.includes(`<link rel="canonical" href="${url.href}"`),url.pathname);
    assert.equal((html.match(/rel="canonical"/g)||[]).length,1);
    for(const alternate of [...languages,'x-default']) assert.ok(html.includes(`hrefLang="${alternate}"`)||html.includes(`hreflang="${alternate}"`),`${url.pathname} missing ${alternate}`);
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,url.pathname);
    assert.doesNotMatch(html,/translate\.googleapis\.com/);
    if(lang!=='en') {
      const englishPath=url.pathname.replace(/^\/(de|fr|es|it)/,'');
      const english=await readFile(new URL(englishPath.slice(1)+'index.html',root),'utf8');
      const main=html.slice(html.indexOf('<body'),html.indexOf('</body>'));
      for(const p of [...english.matchAll(/<p(?:\s[^>]*)?>(.*?)<\/p>/g)].map(m=>m[1]).filter(p=>p.length>120&&!p.includes('<')))
        assert.ok(!main.includes(p),`${url.pathname} has an untranslated paragraph`);
    }

    assert.doesNotMatch(html,/<meta name="robots" content="noindex/);
    const body=html.slice(html.indexOf('<body'),html.indexOf('</body>'));
    for(const match of body.matchAll(/href="(\/[^"?#]*)/g)){
      const path=match[1];
      if(path.startsWith('//')||path.startsWith('/assets/')||path.endsWith('.png'))continue;
      await access(new URL(path.slice(1)+(path.endsWith('/')?'index.html':''),root)).catch(()=>assert.fail(`Broken link on ${url.pathname}: ${path}`));
    }
  }
});
test('new articles contain complete translated prose and localized article schemas',async()=>{
  for(const lang of languages)for(const slug of slugs){
    const path=`${lang==='en'?'':lang+'/'}articles/${slug}/index.html`;
    const html=await readFile(new URL(path,root),'utf8');
    const main=html.slice(html.indexOf('<div class="prose">'),html.indexOf('</article>'));
    const paragraphs=[...main.matchAll(/<p(?:\s[^>]*)?>(.*?)<\/p>/g)];
    assert.ok(paragraphs.length>=17,`${path} incomplete body`);
    assert.match(html,new RegExp(`"inLanguage":"${lang}"`));
    assert.match(html,/"datePublished":"2026-10-08"/);
    assert.doesNotMatch(html,/"@type":"FAQPage"/);
    if(lang!=='en'){
      assert.doesNotMatch(main,/An empty QC search means|A useful sneaker QC checklist starts|Seller photographs describe an offer/);
      const english=await readFile(new URL(`articles/${slug}/index.html`,root),'utf8');
      const original=[...english.matchAll(/<p(?:\s[^>]*)?>(.*?)<\/p>/g)].map(m=>m[1]).filter(p=>p.length>100&&!p.includes('<'));
      for(const p of original)assert.ok(!main.includes(p),`${path} contains untranslated paragraph`);
    }
  }
});
