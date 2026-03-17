/* RIZZOLI — Scroll Animations */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    /* Fade-in on scroll */
    var fadeElements = document.querySelectorAll('.rz-fade-in');

    if ('IntersectionObserver' in window && fadeElements.length > 0) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('rz-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      fadeElements.forEach(function(el) {
        observer.observe(el);
      });
    }
  });
})();
