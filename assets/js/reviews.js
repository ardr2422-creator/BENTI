/* =====================================================================
   C'EST MON DESSERT — Avis (slider horizontal à défilement)
   Cartes de taille égale, défilement tactile + flèches + points,
   « Lire plus » qui agrandit la carte (et donc la section).
   ===================================================================== */
(function () {
  "use strict";

  var root = document.getElementById("reviews-carousel");
  if (!root) return;
  var track = root.querySelector(".reviews__track");
  if (!track) return;

  var cards = Array.prototype.slice.call(track.querySelectorAll(".review-card"));
  if (!cards.length) return;

  var dotsWrap = root.querySelector(".carousel__dots");
  var prevBtn = root.querySelector(".carousel__nav--prev");
  var nextBtn = root.querySelector(".carousel__nav--next");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var behavior = reduce ? "auto" : "smooth";

  /* ---- « Lire plus » : seulement quand le texte est tronqué ---- */
  function measureMore() {
    cards.forEach(function (card) {
      var textEl = card.querySelector(".review-card__text");
      if (!textEl || card.classList.contains("is-expanded")) return;
      var existing = card.querySelector(".review-card__more");
      var overflowing = textEl.scrollHeight - textEl.clientHeight > 4;
      if (overflowing && !existing) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "review-card__more";
        btn.textContent = "Lire plus";
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          var open = card.classList.toggle("is-expanded");
          btn.textContent = open ? "Lire moins" : "Lire plus";
          stopAuto();
          requestAnimationFrame(update);
        });
        textEl.insertAdjacentElement("afterend", btn);
      } else if (!overflowing && existing) {
        existing.remove();
      }
    });
  }

  /* ---- Défilement par carte ---- */
  function step() {
    var cs = getComputedStyle(track);
    var gap = parseFloat(cs.columnGap || cs.gap || "0") || 0;
    return cards[0].getBoundingClientRect().width + gap;
  }
  function scrollByCards(dir) {
    track.scrollBy({ left: dir * step(), behavior: behavior });
  }
  if (nextBtn) nextBtn.addEventListener("click", function () { scrollByCards(1); stopAuto(); });
  if (prevBtn) prevBtn.addEventListener("click", function () { scrollByCards(-1); stopAuto(); });

  /* ---- Points ---- */
  var dots = [];
  if (dotsWrap) {
    cards.forEach(function (_, i) {
      var d = document.createElement("button");
      d.type = "button";
      d.className = "carousel__dot";
      d.setAttribute("aria-label", "Aller à l'avis " + (i + 1));
      d.addEventListener("click", function () { goTo(i); stopAuto(); });
      dotsWrap.appendChild(d);
      dots.push(d);
    });
  }
  function goTo(i) {
    var c = cards[i];
    if (!c) return;
    var left = c.offsetLeft - (track.clientWidth - c.offsetWidth) / 2;
    track.scrollTo({ left: Math.max(0, left), behavior: behavior });
  }
  function activeIndex() {
    var mid = track.scrollLeft + track.clientWidth / 2;
    var best = 0, bestDist = Infinity;
    cards.forEach(function (c, i) {
      var center = c.offsetLeft + c.offsetWidth / 2;
      var d = Math.abs(center - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }

  /* ---- État (points actifs + flèches désactivées aux extrémités) ---- */
  function update() {
    var idx = activeIndex();
    dots.forEach(function (d, i) { d.classList.toggle("is-active", i === idx); });
    var max = track.scrollWidth - track.clientWidth;
    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
    if (nextBtn) nextBtn.disabled = track.scrollLeft >= max - 2;
  }

  var raf = null;
  track.addEventListener("scroll", function () {
    if (raf) return;
    raf = requestAnimationFrame(function () { raf = null; update(); });
  }, { passive: true });
  window.addEventListener("resize", function () { measureMore(); update(); }, { passive: true });

  /* ---- Lecture auto douce (s'arrête dès que l'utilisateur agit) ---- */
  var timer = null;
  var stopped = reduce;
  function tick() {
    var max = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= max - 2) track.scrollTo({ left: 0, behavior: behavior });
    else scrollByCards(1);
  }
  function pauseAuto() { if (timer) { clearInterval(timer); timer = null; } }
  function startAuto() {
    if (timer || stopped || cards.length < 2) return;
    timer = setInterval(tick, 5500);
  }
  function stopAuto() { stopped = true; pauseAuto(); }

  root.addEventListener("mouseenter", pauseAuto);
  root.addEventListener("mouseleave", startAuto);
  root.addEventListener("focusin", pauseAuto);
  track.addEventListener("touchstart", stopAuto, { passive: true });
  track.addEventListener("wheel", function (e) { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) stopAuto(); }, { passive: true });

  /* ---- Init ---- */
  function init() { measureMore(); update(); startAuto(); }
  init();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { measureMore(); update(); });
  }
})();
