"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/reviews";
import { ArrowRight } from "./icons";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1 text-sun" aria-label={`${n} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
          <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8-4.3-4.1 5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-smooth"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="w-full shrink-0 px-1"
              aria-hidden={i !== index}
            >
              <div className="relative h-full rounded-3xl border border-sidi-ink/10 bg-paper p-8 shadow-soft md:p-12">
                <span className="pointer-events-none absolute left-6 top-3 font-display text-8xl leading-none text-sun/40">
                  &ldquo;
                </span>
                <Stars n={t.rating} />
                <blockquote className="relative mt-5 font-display text-2xl leading-snug text-sidi-ink md:text-[1.9rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-harissa/15 font-display text-lg text-harissa">
                    {t.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold text-sidi-ink">{t.author}</span>
                    <span className="block text-sm text-ink-soft">{t.meta}</span>
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Avis clients">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Avis ${i + 1}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-terracotta" : "w-2 bg-sidi-ink/20 hover:bg-sidi-ink/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Avis précédent"
            className="grid h-11 w-11 place-items-center rounded-full border border-sidi-ink/15 text-sidi-ink transition-colors hover:bg-sidi-ink hover:text-cream"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Avis suivant"
            className="grid h-11 w-11 place-items-center rounded-full border border-sidi-ink/15 text-sidi-ink transition-colors hover:bg-sidi-ink hover:text-cream"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
