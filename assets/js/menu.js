/* =====================================================================
   C'EST MON DESSERT — Rendu de la carte (catalogue filtrable + ajout panier)
   Dépend de products.js (window.CMD_CATEGORIES, window.CMD_FORMAT).
   À charger AVANT main.js pour que les .reveal injectés soient observés.
   ===================================================================== */
(function () {
  "use strict";

  var cats = window.CMD_CATEGORIES || [];
  var fmt = (window.CMD_FORMAT && window.CMD_FORMAT.price) || function (n) {
    return n.toFixed(2).replace(".", ",") + " €";
  };
  var root = document.getElementById("menu-root");
  var filters = document.getElementById("menu-filters");
  if (!root || !cats.length) return;

  var TAGS = { star: "Best-seller", xl: "Format XL", veg: "Végé", "new": "Nouveau" };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  var plus = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';

  function dishHtml(p) {
    var tagHtml = (p.tags || []).map(function (t) {
      var cls = t === "star" ? "star" : (t === "xl" || t === "new") ? "new" : t;
      return '<span class="tag tag--' + cls + '">' + (TAGS[t] || t) + "</span>";
    }).join("");
    return '<article class="dish reveal">' +
      '<div class="dish__img">' +
      (p.img ? '<img src="' + p.img + '" alt="' + esc(p.nom) + '" loading="lazy" />' : '') +
      (tagHtml ? '<div class="dish__tags">' + tagHtml + '</div>' : '') +
      '</div>' +
      '<div class="dish__body">' +
      '<div class="dish__head">' +
      '<h3 class="dish__name">' + esc(p.nom) + '</h3>' +
      '<span class="dish__price">' + fmt(p.prix) + '</span>' +
      '</div>' +
      '<p class="dish__desc">' + esc(p.desc) + '</p>' +
      '<div class="dish__cta">' +
      '<button class="add-btn" type="button" data-add="' + p.id + '">' + plus + '<span data-add-label>Ajouter</span></button>' +
      '</div>' +
      '</div>' +
      '</article>';
  }

  function categoryHtml(cat) {
    var count = cat.items.length;
    return '<section class="menu-category" id="' + cat.id + '" data-cat="' + cat.id + '">' +
      '<div class="menu-category__head">' +
      '<h2>' + esc(cat.nom) + '</h2>' +
      '<span class="menu-category__count">' + count + (count > 1 ? " références" : " référence") + '</span>' +
      '</div>' +
      (cat.tagline ? '<p class="menu-note" style="margin:-0.6rem 0 1.6rem">' + esc(cat.tagline) + '</p>' : '') +
      '<div class="dish-grid" data-stagger>' + cat.items.map(dishHtml).join("") + '</div>' +
      '</section>';
  }

  /* Rendu du catalogue */
  root.innerHTML = cats.map(categoryHtml).join("");

  /* Barre d'ancres (sticky) : chaque bulle fait défiler vers sa catégorie,
     et la bulle active suit la catégorie visible pendant le scroll. */
  if (filters) {
    filters.innerHTML = cats.map(function (c) {
      return '<button class="menu-nav__btn" type="button" data-target="' + c.id + '">' + esc(c.nom) + '</button>';
    }).join("");

    var sections = Array.prototype.slice.call(root.querySelectorAll(".menu-category"));
    var pills = Array.prototype.slice.call(filters.querySelectorAll(".menu-nav__btn"));
    var lastActive = null;

    function setActive(id) {
      if (id === lastActive) return;
      lastActive = id;
      pills.forEach(function (b) {
        var on = b.getAttribute("data-target") === id;
        b.classList.toggle("is-active", on);
        if (on) {
          /* garder la bulle active visible dans la barre horizontale */
          var left = b.offsetLeft - (filters.clientWidth - b.offsetWidth) / 2;
          filters.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
        }
      });
    }

    function scrollToCat(id) {
      var sec = document.getElementById(id);
      if (!sec) return;
      var stickyTop = parseFloat(getComputedStyle(filters).top) || 0;
      var offset = stickyTop + filters.offsetHeight + 18;
      var y = sec.getBoundingClientRect().top + window.scrollY - offset;
      if (window.CMDLenis) window.CMDLenis.scrollTo(y, { offset: 0 });
      else window.scrollTo({ top: y, behavior: "smooth" });
    }

    filters.addEventListener("click", function (e) {
      var b = e.target.closest("[data-target]");
      if (!b) return;
      var id = b.getAttribute("data-target");
      setActive(id);
      scrollToCat(id);
      if (history.replaceState) history.replaceState(null, "", "#" + id);
    });

    /* Scroll-spy : la bulle change en fonction de la catégorie à l'écran */
    var spyRaf = null;
    function spy() {
      spyRaf = null;
      var line = filters.getBoundingClientRect().bottom + 44;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= line) current = s;
      });
      if (current) setActive(current.getAttribute("data-cat"));
    }
    window.addEventListener("scroll", function () {
      if (spyRaf) return;
      spyRaf = requestAnimationFrame(spy);
    }, { passive: true });

    /* Lien entrant menu.html#categorie */
    var hash = (location.hash || "").replace("#", "");
    if (hash && cats.some(function (c) { return c.id === hash; })) {
      setActive(hash);
      setTimeout(function () { scrollToCat(hash); }, 90);
    } else {
      setActive(cats[0].id);
    }
  }
})();
