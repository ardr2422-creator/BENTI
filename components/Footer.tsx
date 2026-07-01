import Link from "next/link";
import Image from "next/image";
import { ADDRESSES, LEGAL_NAV, NAV, SITE } from "@/lib/site";
import { ArrowUpRight, Clock, Instagram, Phone, Pin } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-sidi-ink text-cream">
      <div className="zellige absolute inset-0 opacity-[0.12]" aria-hidden />
      <div className="container-b relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-10">
          {/* Marque */}
          <div>
            <Image
              src="/brand/logo.png"
              alt="Benti"
              width={150}
              height={140}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-cream/70">
              Benti — « ma fille » en tunisien. Le makloub de Sidi Bou Saïd,
              fait maison avec amour, au cœur de Paris. Une histoire de famille
              signée Abir & Yassine.
            </p>
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

          {/* Adresses */}
          <div>
            <h5 className="font-display text-xl text-sun">Nos adresses</h5>
            <ul className="mt-5 space-y-6">
              {ADDRESSES.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/adresses/${a.slug}`}
                    className="group inline-flex items-start gap-2 font-semibold transition-colors hover:text-sun"
                  >
                    <Pin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                    {a.city}
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

          {/* Liens */}
          <div className="flex flex-col gap-8">
            <div>
              <h5 className="font-display text-xl text-sun">Explorer</h5>
              <ul className="mt-5 space-y-2.5 text-cream/75">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-sun"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/traiteur"
                    className="inline-flex items-center gap-1.5 font-semibold text-sun transition-colors hover:text-cream"
                  >
                    Demander un devis traiteur
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-start gap-2 text-sm text-cream/60">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <span>
                Ouvert du lundi au samedi.
                <br />
                Service du midi · sur place & à emporter.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 text-sm text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. Fait maison, à Paris.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL_NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
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
