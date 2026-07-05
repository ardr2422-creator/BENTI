"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

export default function MenuNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    // Bulle contenue (pas une bannière pleine largeur), opaque, sans
    // glassmorphism, détachée du header sticky par un léger espace.
    <div className="sticky top-[80px] z-30 md:top-[90px]">
      <div className="container-b py-3">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-full border border-sidi-ink/10 bg-paper p-1.5 md:justify-center">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === i.id
                  ? "border-terracotta bg-terracotta text-cream"
                  : "border-transparent text-sidi-ink hover:bg-sidi-ink/5"
              }`}
            >
              {i.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
