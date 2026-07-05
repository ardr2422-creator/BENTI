import Image from "next/image";
import type { Dish } from "@/lib/site";
import Badge from "./Badge";

// Palette Sidi Bou Saïd : le bleu domine, réchauffé par les accents chauds.
const THEMES = [
  { bg: "bg-sidi-deep", fg: "text-cream", ghost: "text-cream/25" },
  { bg: "bg-terracotta", fg: "text-cream", ghost: "text-cream/25" },
  { bg: "bg-sidi", fg: "text-sidi-ink", ghost: "text-sidi-ink/15" },
  { bg: "bg-harissa", fg: "text-cream", ghost: "text-cream/25" },
  { bg: "bg-olive", fg: "text-cream", ghost: "text-cream/25" },
  { bg: "bg-flame", fg: "text-cream", ghost: "text-cream/25" },
];

export default function MakloubCard({
  dish,
  index = 0,
  className = "",
  reveal = true,
}: {
  dish: Dish;
  index?: number;
  className?: string;
  reveal?: boolean;
}) {
  const theme = THEMES[index % THEMES.length];

  return (
    <article
      className={`${reveal ? "reveal" : ""} group relative flex flex-col overflow-hidden rounded-3xl border border-sidi-ink/10 bg-paper shadow-soft transition-shadow duration-500 hover:shadow-card ${className}`}
    >
      <div className={`relative overflow-hidden ${theme.bg} px-6 pb-5 pt-6`}>
        <div className="zellige absolute inset-0 opacity-20" aria-hidden />
        {dish.image && (
          <Image
            src={dish.image}
            alt={`Makloub ${dish.name} — Benti`}
            fill
            sizes="340px"
            className="object-cover opacity-90"
          />
        )}
        <span
          aria-hidden
          className={`pointer-events-none absolute -bottom-6 right-2 font-display text-[7rem] font-semibold leading-none ${theme.ghost}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative flex items-start justify-between gap-3">
          <span
            className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.fg} opacity-80`}
          >
            Makloub
          </span>
          {dish.badges && dish.badges.length > 0 && (
            <div className="flex flex-col items-end gap-1.5">
              {dish.badges.map((b) => (
                <Badge key={b} type={b} />
              ))}
            </div>
          )}
        </div>
        <h3 className={`relative mt-8 font-display text-4xl ${theme.fg}`}>
          {dish.name}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.95rem] leading-relaxed text-ink-soft">{dish.desc}</p>
      </div>
    </article>
  );
}
