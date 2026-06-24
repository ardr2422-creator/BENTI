(function () {
  "use strict";

  var DATA = window.DRWINGS_MENU || [];
  var navRoot = document.getElementById("menu-nav");
  var root = document.getElementById("menu-root");
  var emptyEl = document.getElementById("menu-empty");
  if (!root) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function chilis(d) {
    var s = "";
    for (var i = 1; i <= 5; i++) s += '<i class="' + (i <= d ? "on" : "") + '"></i>';
    return '<span class="dosage__chilis">' + s + "</span>";
  }

  function lineEl(item, catId) {
    var isStar = item.tags && item.tags.indexOf("star") >= 0;
    var el = document.createElement("article");
    el.className = "rx-line";
    el.setAttribute("data-dosage", item.dosage || 0);
    el.setAttribute("data-star", isStar ? "1" : "0");
    el.setAttribute("data-cat", catId);

    var meta = "";
    if (item.dosage > 0) {
      meta += '<span class="rx-line__dose-label">Posologie</span>' + chilis(item.dosage);
    }
    if (isStar) meta += '<span class="rx-line__star">★ Best-seller</span>';

    var flag = item.flag ? '<span aria-hidden="true">' + item.flag + "</span> " : "";

    var media = item.img
      ? '<div class="rx-line__media"><img src="' + item.img + '" alt="" loading="lazy" decoding="async" /></div>'
      : "";

    el.innerHTML =
      media +
      '<div class="rx-line__body">' +
        '<div class="rx-line__top">' +
          '<h3 class="rx-line__name">' + flag + esc(item.nom) + "</h3>" +
        "</div>" +
        (item.desc ? '<p class="rx-line__desc">' + esc(item.desc) + "</p>" : "") +
        '<div class="rx-line__meta">' + meta + "</div>" +
      "</div>";
    return el;
  }

  DATA.forEach(function (cat) {
    var section = document.createElement("section");
    section.className = "rx-sheet reveal";
    section.id = cat.id;

    var head = document.createElement("div");
    head.className = "rx-sheet__head";
    head.innerHTML =
      "<div>" +
        (cat.rx ? '<span class="rx-sheet__rx">' + esc(cat.rx) + "</span>" : "") +
        "<h2>" + esc(cat.nom) + "</h2>" +
        (cat.intro ? '<p class="rx-sheet__intro">' + esc(cat.intro) + "</p>" : "") +
      "</div>" +
      '<span class="rx-sheet__count">' + cat.items.length + " réf.</span>";
    section.appendChild(head);

    var list = document.createElement("div");
    list.className = "rx-list";
    cat.items.forEach(function (item) { list.appendChild(lineEl(item, cat.id)); });
    section.appendChild(list);
    root.appendChild(section);
  });

  if (navRoot) {
    DATA.forEach(function (cat) {
      var btn = document.createElement("a");
      btn.className = "menu-nav__btn";
      btn.href = "#" + cat.id;
      btn.textContent = cat.nom;
      navRoot.appendChild(btn);
    });
  }

  if (navRoot && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navRoot.querySelectorAll(".menu-nav__btn").forEach(function (b) {
            b.classList.toggle("is-active", b.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    DATA.forEach(function (cat) {
      var s = document.getElementById(cat.id);
      if (s) spy.observe(s);
    });
  }
})();
