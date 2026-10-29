type Params=Record<string,string|number>;
type AnalyticsWindow=Window & {gtag?: (...args:unknown[])=>void; __loloInteractions?:boolean};
export function track(name:string,params:Params={}) {
 const w=window as AnalyticsWindow;
 if(location.hostname!=='lolobuysheet.nl'||typeof w.gtag!=='function')return;
 w.gtag('event',name,{content_language:document.documentElement.lang,...params});
}
export function initInteractions(){
 const w=window as AnalyticsWindow;if(w.__loloInteractions)return;w.__loloInteractions=true;
 document.addEventListener('click',event=>{
  const link=(event.target as Element)?.closest<HTMLAnchorElement>('a[href]');if(!link)return;
  let url:URL;try{url=new URL(link.href,location.href)}catch{return}
  const source=document.querySelector<HTMLElement>('main')?.dataset.page||'home';
  if(url.origin===location.origin){
   const destination=url.pathname.replace(/^\/(?:de|es|fr|it|pl|pt|ro|sv|nl|da|fi|el|cs|hu|bg|sk|hr|sl|lt|lv|et|ga|mt)(?=\/)/,'');
   if(destination.startsWith('/articles/'))track('guide_click',{guide_slug:destination.split('/')[2]||'',source_page:source});
   if(destination==='/spreadsheet/'&&source.startsWith('articles/'))track('article_to_catalog',{article_slug:source.split('/')[1]});
   if(destination==='/product/'&&/^\d+$/.test(url.searchParams.get('id')||''))track('product_detail_click',{item_id:url.searchParams.get('id')!,source_page:source});
  }else if(url.hostname==='www.lolobuy.com'||url.hostname==='lolobuy.com'){
   if(/^\/productDetail\/\d+/.test(url.pathname))track('purchase_link_click',{item_id:url.pathname.split('/')[2],source_page:source});
   else if(url.pathname==='/index')track('platform_visit',{source_page:source});
  }
 });
}
