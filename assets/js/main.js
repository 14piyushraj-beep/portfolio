/* ─── RAJ IMAGEN — main.js ─── */

/* Loader */
window.addEventListener('load', function () {
  setTimeout(function () {
    var loader = document.getElementById('loader');
    if (loader) loader.classList.add('out');
  }, 2000);
});

/* Navbar shrink on scroll */
window.addEventListener('scroll', function () {
  var nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* Scroll Reveal */
(function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
})();

/* Skill bars */
(function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.width = e.target.getAttribute('data-w') + '%';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.sk-bar').forEach(function (b) { obs.observe(b); });
})();

/* Contact form validation (Bootstrap) */
(function () {
  'use strict';
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault(); e.stopPropagation();
    if (form.checkValidity()) {
      form.reset(); form.classList.remove('was-validated');
      var s = document.getElementById('formSuccess');
      if (s) { s.classList.remove('d-none'); setTimeout(function () { s.classList.add('d-none'); }, 5000); }
    } else { form.classList.add('was-validated'); }
  }, false);
})();

/* Counter animation */
(function () {
  function animateNum(el) {
    var target = parseInt(el.getAttribute('data-count') || el.innerText);
    var dur = 1800; var step = 30;
    var increment = target / (dur / step);
    var current = 0;
    var timer = setInterval(function () {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.innerText = Math.floor(current) + (el.getAttribute('data-suffix') || '+');
    }, step);
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { animateNum(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count-num').forEach(function (el) { obs.observe(el); });
})();
