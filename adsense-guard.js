/**
 * AdSense Guard — réduit la hauteur des slots vides à 0 sans toucher au layout
 */
(function() {
  var TIMEOUT = 3000;

  function guardSlot(ins) {
    var filled = false;

    var observer = new MutationObserver(function() {
      if (ins.querySelector('iframe') || ins.getAttribute('data-ad-status') === 'filled') {
        filled = true;
        observer.disconnect();
      }
    });

    observer.observe(ins, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-ad-status'] });

    setTimeout(function() {
      if (!filled) {
        // Cacher uniquement le <ins> — ne pas toucher au wrapper parent
        ins.style.display = 'none';
        ins.style.height = '0';
        ins.style.minHeight = '0';
      }
      observer.disconnect();
    }, TIMEOUT);
  }

  function init() {
    document.querySelectorAll('ins.adsbygoogle').forEach(guardSlot);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
