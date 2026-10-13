(() => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config','G-H4PY5G9L1M');
  const event=(name,params)=>window.gtag('event',name,{page_path:location.pathname,language:document.documentElement.lang,transport_type:'beacon',...params});
  document.querySelectorAll('.explorer').forEach(section=>{
    const rows=[...section.querySelectorAll('[data-product-row]')];const more=section.querySelector('[data-show-products]');let category='All',limit=8;
    const render=()=>{const matching=rows.filter(row=>category==='All'||row.dataset.category===category);rows.forEach(row=>row.hidden=!matching.slice(0,limit).includes(row));section.querySelector('[data-product-count]').textContent=String(matching.length);if(more)more.hidden=matching.length<=limit;};
    section.querySelectorAll('[data-category-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.categoryFilter;limit=8;section.querySelectorAll('[data-category-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();event('category_select',{item_category:category});}));
    more?.addEventListener('click',()=>{limit=rows.length;render();});render();
  });
  document.querySelectorAll('[data-weight-calculator]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const n=k=>Number(d.get(k));const volume=n('length')*n('width')*n('height')/n('divisor');form.querySelector('[data-volume-result]').textContent=volume.toLocaleString(document.documentElement.lang,{minimumFractionDigits:2,maximumFractionDigits:2});form.querySelector('[data-charge-result]').textContent=Math.max(volume,n('weight')).toLocaleString(document.documentElement.lang,{minimumFractionDigits:2,maximumFractionDigits:2});event('shipping_calculator_use',{route_divisor:n('divisor')});}));
  document.addEventListener('click',e=>{const a=e.target instanceof Element?e.target.closest('a[href]'):null;if(!a)return;const u=new URL(a.href,location.href);const params={link_url:u.href,link_text:(a.textContent||'').trim().slice(0,100)};
    if(a.dataset.localeSwitch){if(location.hash)a.href=u.href+location.hash;event('language_select',{selected_language:a.dataset.localeSwitch});}
    else if(u.hostname==='www.cnfanssp.com'||u.hostname==='cnfanssp.com'){event('main_site_click',params);if(/^\/AllProducts\/\d+\.html$/.test(u.pathname)){event('product_click',params);}if(/\/articles\/[^/]+\//.test(location.pathname))event('guide_to_catalog_click',params);}
    else if(u.hostname===location.hostname&&/\/articles\/[^/]+\//.test(u.pathname))event('article_click',params);
  });
  document.addEventListener('submit',e=>{const form=e.target;if(!(form instanceof HTMLFormElement))return;const u=new URL(form.action,location.href);if(u.hostname==='www.cnfanssp.com'&&u.pathname==='/search.html'){const q=new FormData(form).get('keywords');event('search_submit',{search_term:typeof q==='string'?q.trim().slice(0,100):''});}});
})();
