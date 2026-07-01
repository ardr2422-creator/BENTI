import Link from "next/link";
import Image from "next/image";
import type { Address } from "@/lib/site";
import { localizedHref, t, type Lang } from "@/lib/i18n";
import { getAddressView } from "@/lib/localized";
import { ArrowUpRight, Clock, Phone, Pin } from "./icons";

export default function AddressCard({
  address,
  lang = "fr",
}: {
  address: Address;
  lang?: Lang;
}) {
  const a = getAddressView(address, lang);
  const tr = t(lang).common;
  const href = localizedHref(`/adresses/${a.slug}`, lang);

  return (
    <article className="reveal lift group flex flex-col overflow-hidden rounded-3xl border border-sidi-ink/10 bg-paper shadow-soft">
      <Link href={href} className="relative block aspect-[16/11] overflow-hidden">
        <Image
          src={a.photo}
          alt={`Benti ${a.cityView}`}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sidi-ink/70 via-sidi-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wide text-sidi-ink">
            <Pin className="h-3.5 w-3.5" />
            {a.neighborhood}
          </span>
          <h3 className="mt-2 font-display text-3xl text-cream">{a.cityView}</h3>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="flex items-start gap-2 text-ink-soft">
          <Pin className="mt-1 h-4 w-4 shrink-0 text-terracotta" />
          {a.street}, {a.postalCode} {a.locality}
        </p>
        <a
          href={a.phoneHref}
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-sidi-ink transition-colors hover:text-terracotta"
        >
          <Phone className="h-4 w-4 text-terracotta" />
          {a.phone}
        </a>
        <dl className="space-y-1.5 rounded-2xl bg-cream/70 p-4 text-sm">
          {a.hoursView.map((h) => {
            const closed = h.slots[0] === "Fermé" || h.slots[0] === "Closed";
            return (
              <div key={h.days} className="flex items-center justify-between gap-3">
                <dt className="inline-flex items-center gap-2 text-ink-soft">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-olive" />
                  {h.days}
                </dt>
                <dd className={`text-right font-semibold ${closed ? "text-harissa" : "text-sidi-ink"}`}>
                  {h.slots.join(" · ")}
                </dd>
              </div>
            );
          })}
        </dl>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <Link href={href} className="btn btn--sidi !py-2.5 !px-4">
            <span>{tr.seeAddress}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={a.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost !py-2.5 !px-4"
          >
            {tr.itinerary}
          </a>
        </div>
      </div>
    </article>
  );
}
