"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { getLang } from "@/lib/i18n";

/**
 * Système d'animation global du site.
 * - Lenis smooth scroll
 * - Reveal au scroll (.reveal / .reveal-img) via IntersectionObserver
 * - Stagger ([data-stagger] → --i sur les enfants .reveal)
 * - Parallax léger ([data-parallax])
 * - Coverflow ([data-coverflow] → .is-active sur la carte centrale)
 *
 * Les animations sont FORCÉES : on ignore volontairement prefers-reduced-motion
 * (demande explicite du brief).
 */
export default function SiteMotion() {
  const pathname = usePathname();

  // Lenis — monté une seule fois.
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.09,
    });
    document.documentElement.classList.add("lenis", "lenis-smooth");

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Ancres internes fluides
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
    };
    document.addEventListener("click", onClick);

    // Parallax
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        document
          .querySelectorAll<HTMLElement>("[data-parallax]")
          .forEach((el) => {
            const speed = parseFloat(el.dataset.parallax || "0.12");
            el.style.transform = `translate3d(0, ${(y * speed).toFixed(
              1
            )}px, 0) scale(1.1)`;
          });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  // Reveal + stagger + coverflow — ré-évalués à chaque changement de route.
  useEffect(() => {
    // Langue du document (le layout racine est partagé FR/EN)
    document.documentElement.lang = getLang(pathname);

    const cleanups: Array<() => void> = [];

    // Stagger index
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      let i = 0;
      group.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.style.setProperty("--i", String(i++));
      });
    });

    // Reveal observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 }
    );
    const observeAll = () => {
      document
        .querySelectorAll(".reveal:not(.is-visible), .reveal-img:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };
    observeAll();

    // Nouveaux noeuds (contenu asynchrone) → on ré-observe
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });
    cleanups.push(() => mo.disconnect());
    cleanups.push(() => io.disconnect());

    // Coverflow
    document
      .querySelectorAll<HTMLElement>("[data-coverflow]")
      .forEach((scroller) => {
        const cards = Array.from(scroller.children) as HTMLElement[];
        if (!cards.length) return;
        let pending = false;
        const update = () => {
          pending = false;
          const box = scroller.getBoundingClientRect();
          const mid = box.left + box.width / 2;
          let best: HTMLElement | null = null;
          let bestDist = Infinity;
          cards.forEach((card) => {
            const r = card.getBoundingClientRect();
            const d = Math.abs(r.left + r.width / 2 - mid);
            if (d < bestDist) {
              bestDist = d;
              best = card;
            }
          });
          cards.forEach((card) => card.classList.toggle("is-active", card === best));
        };
        const queue = () => {
          if (pending) return;
          pending = true;
          requestAnimationFrame(update);
        };
        scroller.addEventListener("scroll", queue, { passive: true });
        window.addEventListener("resize", queue, { passive: true });

        // Clic sur une carte → on la recentre (surtout confortable sur PC).
        // Calcul via getBoundingClientRect (robuste : offsetLeft dépend de
        // l'offsetParent, qui n'est pas forcément le scroller).
        const onCardClick = (e: MouseEvent) => {
          const card = (e.target as HTMLElement)?.closest?.(
            "[data-coverflow] > *"
          ) as HTMLElement | null;
          if (!card || card.parentElement !== scroller) return;
          const cardRect = card.getBoundingClientRect();
          const scRect = scroller.getBoundingClientRect();
          const delta =
            cardRect.left + cardRect.width / 2 - (scRect.left + scRect.width / 2);
          scroller.scrollTo({
            left: scroller.scrollLeft + delta,
            behavior: "smooth",
          });
        };
        scroller.addEventListener("click", onCardClick);

        update();
        cleanups.push(() => {
          scroller.removeEventListener("scroll", queue);
          window.removeEventListener("resize", queue);
          scroller.removeEventListener("click", onCardClick);
        });
      });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
