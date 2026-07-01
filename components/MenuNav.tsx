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
    <div className="sticky top-[68px] z-30 -mx-4 border-y border-sidi-ink/10 bg-cream/90 px-4 backdrop-blur-md">
      <div className="container-b !px-0">
        <div className="no-scrollbar flex gap-2 overflow-x-auto py-3">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === i.id
                  ? "border-terracotta bg-terracotta text-cream"
                  : "border-sidi-ink/15 text-sidi-ink hover:border-sidi-ink/40"
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
