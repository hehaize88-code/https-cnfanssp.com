(function () {
  if (window.hacoosEventsBound) return;
  window.hacoosEventsBound = true;
  function track(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, Object.assign({
      page_language: document.documentElement.lang,
      page_path: location.pathname,
      transport_type: 'beacon'
    }, params));
  }
  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (!form.matches || !form.matches('form.search')) return;
    var input = form.querySelector('input[name="keywords"]');
    if (!input || !input.value.trim()) return;
    // Measure use of search without sending typed personal details to analytics.
    track('search_submit', { search_location: form.classList.contains('route-search') ? 'guide' : 'home' });
  });
  document.addEventListener('click', function (event) {
    var target = event.target;
    var a = target && target.closest ? target.closest('a') : null;
    if (!a) return;
    var url;
    try { url = new URL(a.href, location.href); } catch (_) { return; }
    if (url.hostname === 'cnfanshp.com' || url.hostname === 'www.cnfanshp.com') {
      var product = url.pathname.match(/^\/AllProducts\/(\d+)\.html$/);
      track(product ? 'product_click' : 'catalogue_click', {
        link_url: url.origin + url.pathname,
        destination_type: product ? 'product' : 'category',
        ...(product ? { product_id: product[1] } : {})
      });
    }
    if (a.hasAttribute('hreflang')) {
      track('language_change', { target_language: a.getAttribute('hreflang') });
      return;
    }
    if (url.origin === location.origin && /\/articles\/[^/]+\/$/.test(url.pathname)) {
      track('article_click', { article_path: url.pathname });
    }
  });
})();
