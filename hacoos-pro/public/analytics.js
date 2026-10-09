// Collect production Hacoos traffic only. Preview visits must not pollute reports.
(function () {
  if (!['hacoos.pro', 'www.hacoos.pro'].includes(location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-JXEDJMZZFB', { site_name: 'hacoos.pro' });
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JXEDJMZZFB';
  document.head.appendChild(script);
  function send(kind, element) {
    window.gtag('event', kind, {
      site_name: 'hacoos.pro',
      page_path: location.pathname,
      content_language: document.documentElement.lang,
      link_type: element.dataset.linkType || 'catalogue',
      link_domain: 'www.cnfanshp.com',
      transport_type: 'beacon'
    });
  }
  document.addEventListener('click', function (event) {
    var anchor = event.target.closest && event.target.closest('a[href]');
    if (!anchor) return;
    try {
      var target = new URL(anchor.href);
      if (['cnfanshp.com', 'www.cnfanshp.com'].includes(target.hostname)) send('main_site_click', anchor);
    } catch (_) { /* Ignore non-URL controls. */ }
  });
  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (form.matches('form[data-main-search]')) send('main_site_search', form);
  });
})();
