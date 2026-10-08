"use client";
import { useEffect } from 'react';

export function sendAnalyticsEvent(name, parameters={}) {
 if(typeof window==='undefined'||typeof window.gtag!=='function') return false;
 window.gtag('event',name,{
  site_language:document.documentElement.lang||'en',
  page_path:window.location.pathname,
  transport_type:'beacon',
  ...parameters,
 });
 return true;
}

export function navigateToCatalog(destination) {
 let navigated=false;
 const navigate=()=>{if(!navigated){navigated=true;window.location.assign(destination);}};
 const url=new URL(destination);
 const sent=sendAnalyticsEvent('catalog_outbound_click',{
  link_domain:url.hostname, link_path:url.pathname, placement:'search',
  event_callback:navigate, event_timeout:500,
 });
 if(!sent) navigate();
 else window.setTimeout(navigate,500);
}

export default function Analytics() {
 useEffect(()=>{
  function handleClick(event) {
   if(!(event.target instanceof Element)) return;
   const link=event.target.closest('a[href]');
   if(!link) return;
   const declared=link.dataset.analyticsEvent;
   if(declared) sendAnalyticsEvent(declared,{
    link_url:link.href,
    item_id:link.dataset.analyticsId||undefined,
    item_category:link.dataset.analyticsCategory||undefined,
   });
   const url=new URL(link.href,window.location.href);
   if(url.hostname==='cnfanssp.com'||url.hostname==='www.cnfanssp.com') {
    sendAnalyticsEvent('catalog_outbound_click',{
     link_domain:url.hostname,link_path:url.pathname,
     item_id:link.dataset.analyticsId||undefined,
     item_category:link.dataset.analyticsCategory||undefined,
     placement:link.closest('.long-read')?'article':link.closest('header')?'header':link.closest('footer')?'footer':declared||'catalog_link',
    });
   }
  }
  document.addEventListener('click',handleClick);
  return ()=>document.removeEventListener('click',handleClick);
 },[]);
 return null;
}
