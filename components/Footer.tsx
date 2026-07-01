"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Marquee from "./Marquee";
import { SITE } from "@/lib/site";
import { getLang, localizedHref, t } from "@/lib/i18n";
import { getAddressViews } from "@/lib/localized";
import { ArrowUpRight, Clock, Instagram, Phone, Pin } from "./icons";

export default function Footer() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const tr = t(lang);
  const addresses = getAddressViews(lang);
  const home = lang === "fr" ? "/" : "/en";
  const year = new Date().getFullYear();

  const nameStrip = [
    "Benti",
    SITE.tagline,
    "Benti",
    "Sidi Bou Saïd",
    "Benti",
    "Le makloub",
  ];

  return (
    <footer className="relative overflow-hidden bg-sidi-ink text-cream">
      {/* Bandeau défilant avec le nom du resto, au-dessus du footer */}
      <div className="relative z-10 overflow-hidden bg-harissa py-5 text-cream md:py-6">
        <div className="zellige absolute inset-0 opacity-10" aria-hidden />
        <Marquee
          items={nameStrip}
          duration={24}
          separator={<span aria-hidden className="px-5 text-sun">✦</span>}
        />
      </div>
      <div className="zellige absolute inset-0 opacity-[0.12]" aria-hidden />
      <div className="container-b relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-10">
          <div>
            <Link href={home} aria-label="Benti">
              <Image src="/brand/logo.png" alt="Benti" width={150} height={140} className="h-14 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-cream/70">{tr.footer.tagline}</p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-semibold transition-colors hover:bg-cream hover:text-sidi-ink"
            >
              <Instagram className="h-4 w-4" />
              {SITE.instagramHandle}
            </a>
          </div>

          <div>
            <h5 className="font-display text-xl text-sun">{tr.footer.addresses}</h5>
            <ul className="mt-5 space-y-6">
              {addresses.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={localizedHref(`/adresses/${a.slug}`, lang)}
                    className="group inline-flex items-start gap-2 font-semibold transition-colors hover:text-sun"
                  >
                    <Pin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                    {a.cityView}
                  </Link>
                  <p className="mt-1 pl-6 text-sm text-cream/65">
                    {a.street}, {a.postalCode} {a.locality}
                  </p>
                  <a
                    href={a.phoneHref}
                    className="mt-1 flex items-center gap-2 pl-6 text-sm text-cream/80 transition-colors hover:text-sun"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {a.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h5 className="font-display text-xl text-sun">{tr.footer.explore}</h5>
              <ul className="mt-5 space-y-2.5 text-cream/75">
                {tr.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localizedHref(item.href, lang)}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-sun"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={localizedHref("/traiteur", lang)}
                    className="inline-flex items-center gap-1.5 font-semibold text-sun transition-colors hover:text-cream"
                  >
                    {tr.footer.quoteLink}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-start gap-2 text-sm text-cream/60">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <span className="whitespace-pre-line">{tr.footer.hours}</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 text-sm text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. {tr.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {tr.legal.map((l) => (
              <Link
                key={l.href}
                href={localizedHref(l.href, lang)}
                className="transition-colors hover:text-sun"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
