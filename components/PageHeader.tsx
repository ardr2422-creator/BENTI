import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-cream pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="zellige absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sun/25 blur-3xl"
        aria-hidden
      />
      <div className="container-b relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Fil d'ariane" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-terracotta">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-sidi-ink">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="reveal eyebrow">{eyebrow}</p>}
        <h1 className="reveal mt-4 max-w-4xl text-balance font-display text-[clamp(2.4rem,1.8rem+3.5vw,4.4rem)] leading-[1.06] text-sidi-ink">
          {title}
        </h1>
        {lead && (
          <p className="reveal mt-5 max-w-2xl text-pretty text-lg text-ink-soft">
            {lead}
          </p>
        )}
        {children && <div className="reveal mt-8">{children}</div>}
      </div>
    </header>
  );
}
