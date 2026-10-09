(function () {
  if (window.__hacoosAnalytics) return;
  window.__hacoosAnalytics = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-FNVB24S4VG', {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  function event(name, data) {
    window.gtag('event', name, Object.assign({
      language: location.pathname.split('/')[1] || 'en',
      source_path: location.pathname,
      transport_type: 'beacon'
    }, data));
  }
  document.addEventListener('click', function (e) {
    var link = e.target instanceof Element && e.target.closest('a[href]');
    if (!link) return;
    var url = new URL(link.href, location.href);
    if (url.hostname === 'cnfanshp.com' || url.hostname === 'www.cnfanshp.com') {
      event(url.pathname.indexOf('/AllProducts/') === 0 ? 'product_click' : 'category_click', {
        destination_path: url.pathname
      });
    }
  });
  document.addEventListener('submit', function (e) {
    if (e.target instanceof HTMLFormElement && e.target.matches('.search-form')) {
      // Count search intent without transmitting free-text input to analytics.
      event('catalog_search', { destination_path: '/search.html' });
    }
  });
})();
