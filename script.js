(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setFooterYear() {
    var el = document.getElementById("footer-year");
    if (el) {
      el.textContent = String(new Date().getFullYear());
    }
  }

  function initHeaderScroll() {
    var header = document.getElementById("site-header");
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 16) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileMenu() {
    var toggle = document.getElementById("menu-toggle");
    var drawer = document.getElementById("mobile-drawer");
    if (!toggle || !drawer) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      if (open) {
        drawer.classList.add("is-open");
      } else {
        drawer.classList.remove("is-open");
      }
    }

    setOpen(false);

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!expanded);
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  function revealHeroImmediately() {
    document.querySelectorAll(".hero .js-reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  function initScrollReveal() {
    if (prefersReducedMotion) {
      document.querySelectorAll(".js-reveal, .js-reveal-stagger").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    document.querySelectorAll(".js-reveal").forEach(function (el) {
      if (!el.closest(".hero")) {
        io.observe(el);
      }
    });

    document.querySelectorAll(".js-reveal-stagger").forEach(function (el) {
      io.observe(el);
    });
  }

  function onReady() {
    setFooterYear();
    initHeaderScroll();
    initMobileMenu();
    revealHeroImmediately();
    initScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
