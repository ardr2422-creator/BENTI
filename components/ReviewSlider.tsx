"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS, type Testimonial } from "@/lib/reviews";
import { ArrowRight } from "./icons";

function Stars({ n, className = "" }: { n: number; className?: string }) {
  return (
    <div className={`flex gap-1 text-sun ${className}`} aria-label={`${n} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8-4.3-4.1 5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sidi-ink/10 bg-cream px-2.5 py-1 text-xs font-bold text-ink-soft">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9z" />
        <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
        <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8z" />
        <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8L20 3.2A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
      </svg>
      Google
    </span>
  );
}

export default function ReviewSlider({
  items = TESTIMONIALS,
}: {
  items?: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragX = useRef<number | null>(null);
  const count = items.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => clearInterval(id);
  }, [paused, count]);

  // Carte centrale nette + voisines floutées qui dépassent des deux côtés.
  const frac = width >= 768 ? 0.6 : 0.86;
  const cardW = width * frac;
  const offset = cardW ? width / 2 - (index * cardW + cardW / 2) : 0;

  return (
    <div>
      <div
        ref={containerRef}
        className="relative cursor-grab touch-pan-y select-none overflow-hidden py-2 active:cursor-grabbing"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={(e) => {
          dragX.current = e.clientX;
          setPaused(true);
        }}
        onPointerUp={(e) => {
          if (dragX.current !== null) {
            const dx = e.clientX - dragX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          }
          dragX.current = null;
          if (e.pointerType !== "mouse") setPaused(false);
        }}
        onPointerCancel={() => {
          dragX.current = null;
        }}
      >
        <div className="peek-track" style={{ transform: `translateX(${offset}px)` }}>
          {items.map((t, i) => (
            <figure
              key={t.author + i}
              className={`peek-card ${i === index ? "is-active" : ""}`}
              style={{ width: cardW || undefined }}
              aria-hidden={i !== index}
              onClick={() => i !== index && setIndex(i)}
            >
              <div className="mx-2 flex h-full flex-col rounded-3xl border border-sidi-ink/10 bg-paper p-7 shadow-soft md:mx-3 md:p-9">
                <div className="flex items-center gap-3">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-sun/70">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-sidi-ink">
                      {t.author}
                    </span>
                    <span className="block truncate text-sm text-ink-soft">
                      {t.meta}
                    </span>
                  </span>
                  <span className="ml-auto shrink-0">
                    <GoogleMark />
                  </span>
                </div>
                <Stars n={t.rating} className="mt-5" />
                <blockquote className="mt-3 text-pretty text-lg leading-relaxed text-ink-soft md:text-xl md:leading-relaxed">
                  {t.quote}
                </blockquote>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Avis précédent"
          className="grid h-11 w-11 place-items-center rounded-full border border-sidi-ink/15 bg-paper text-sidi-ink transition-colors hover:bg-sidi-ink hover:text-cream"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Avis suivant"
          className="grid h-11 w-11 place-items-center rounded-full border border-sidi-ink/15 bg-paper text-sidi-ink transition-colors hover:bg-sidi-ink hover:text-cream"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
