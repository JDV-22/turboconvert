/**
 * AdSense Guard — cache les slots vides, affiche les slots actifs
 * À inclure une seule fois dans chaque page, après le script AdSense
 */
(function() {
  var TIMEOUT = 3000; // ms après lesquels on considère le slot vide

  function guardSlot(ins) {
    var wrapper = ins.closest('.ad-slot-hero, .ad-between-cats, .ad-slot-footer-wrap, [data-ad-guard]');
    if (!wrapper) {
      wrapper = ins.parentElement;
    }

    // Observer si AdSense injecte quelque chose dans le <ins>
    var filled = false;
    var observer = new MutationObserver(function() {
      // AdSense injecte un iframe ou des attributs quand l'ad est servie
      if (ins.querySelector('iframe') || ins.getAttribute('data-ad-status') === 'filled') {
        filled = true;
        wrapper.style.display = '';
        observer.disconnect();
      }
    });

    observer.observe(ins, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-ad-status'] });

    // Masquer après le timeout si toujours vide
    setTimeout(function() {
      if (!filled) {
        wrapper.style.display = 'none';
        wrapper.style.margin = '0';
        wrapper.style.padding = '0';
        observer.disconnect();
      }
    }, TIMEOUT);
  }

  // Lancer après chargement de la page
  function init() {
    document.querySelectorAll('ins.adsbygoogle').forEach(guardSlot);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
