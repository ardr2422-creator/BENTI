"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";
import { ArrowUpRight, Close, Instagram } from "./icons";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermeture au changement de route + verrou du scroll quand le tiroir est ouvert
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navigation principale"
        className={`transition-all duration-500 ease-smooth ${
          scrolled
            ? "bg-cream/85 shadow-[0_10px_40px_-28px_rgba(14,58,71,0.7)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-b flex items-center justify-between gap-4 py-3">
          <Link
            href="/"
            aria-label="Benti, accueil"
            className="relative z-10 shrink-0"
          >
            <Image
              src="/brand/logo.png"
              alt="Benti"
              width={132}
              height={124}
              priority
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-10" : "h-12"
              }`}
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "text-terracotta"
                    : "text-sidi-ink/80 hover:text-sidi-ink"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-terracotta" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${SITE.instagramHandle}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-sidi-ink/15 text-sidi-ink transition-colors hover:bg-sidi-ink hover:text-cream"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Link href="/carte" className="btn btn--flame">
              <span>Commander</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Burger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-sidi-ink/15 lg:hidden"
          >
            <span className="h-0.5 w-5 rounded bg-sidi-ink" />
            <span className="h-0.5 w-5 rounded bg-sidi-ink" />
            <span className="h-0.5 w-5 rounded bg-sidi-ink" />
          </button>
        </div>
      </nav>

      {/* Drawer mobile */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-sidi-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream zellige-warm shadow-lift transition-transform duration-500 ease-smooth ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <Image
              src="/brand/logo.png"
              alt="Benti"
              width={110}
              height={104}
              className="h-10 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-sidi-ink/15 text-sidi-ink"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Navigation mobile"
            className="flex flex-1 flex-col gap-1 px-6 pt-4"
          >
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between border-b border-sidi-ink/10 py-4 font-display text-3xl text-sidi-ink"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-6 w-6 text-terracotta opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="space-y-3 px-6 pb-8">
            <Link href="/carte" className="btn btn--flame w-full justify-center">
              <span>Commander</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-sidi-ink/80"
            >
              <Instagram className="h-4 w-4" />
              {SITE.instagramHandle}
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
