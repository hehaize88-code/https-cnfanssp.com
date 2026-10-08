(() => {
  const root=document.documentElement,language=root.lang,page=root.dataset.page||'/';
  document.getElementById('site-language')?.addEventListener('change',event=>{
    const selected=event.target.value;
    if(!['en','de','fr','es','it','pl'].includes(selected))return;
    try{localStorage.setItem('acb-language',selected);}catch{}
    location.assign((selected==='en'?page:'/'+selected+(page==='/'?'/':page))+location.search+location.hash);
  });
  const menu=document.querySelector('.menu-button'),nav=document.querySelector('.nav-links');
  if(menu&&nav){nav.id='main-navigation';menu.setAttribute('aria-controls',nav.id);menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?root.dataset.menuOpen:root.dataset.menuClosed;nav.classList.toggle('open',open);});}
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());window.gtag('config','G-Q81YBM09Z1');
  const tag=document.createElement('script');tag.async=true;tag.src='https://www.googletagmanager.com/gtag/js?id=G-Q81YBM09Z1';document.head.appendChild(tag);
  const catalog=url=>['www.cnfanssp.com','cnfanssp.com'].includes(url.hostname);
  document.addEventListener('click',event=>{const link=event.target instanceof Element?event.target.closest('a[href]'):null;if(!link)return;const url=new URL(link.href,location.href);if(!catalog(url))return;window.gtag('event','outbound_catalog_click',{link_url:url.href,link_text:(link.textContent||link.getAttribute('aria-label')||'').trim().slice(0,100),source_path:location.pathname,language,destination_type:/\/AllProducts\/\d+\.html/.test(url.pathname)?'product':'category',transport_type:'beacon'});});
  document.addEventListener('submit',event=>{const form=event.target;if(!(form instanceof HTMLFormElement))return;const url=new URL(form.action,location.href);if(!catalog(url)||url.pathname!=='/search.html')return;window.gtag('event','catalog_search',{search_term:String(new FormData(form).get('keywords')||'').trim().slice(0,100),source_path:location.pathname,language,transport_type:'beacon'});});
})();
