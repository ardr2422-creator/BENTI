import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { ArrowUpRight, Clock, Instagram, Phone, Pin } from "@/components/icons";
import { ADDRESSES, SITE, type Address } from "@/lib/site";
import { localizedHref, t, type Lang } from "@/lib/i18n";
import { getAddressView } from "@/lib/localized";
import {
  breadcrumbSchema,
  localBusinessSchema,
  restaurantSchema,
} from "@/lib/schema";

export default function AddressContent({
  address,
  lang,
}: {
  address: Address;
  lang: Lang;
}) {
  const tr = t(lang);
  const c = tr.address;
  const a = getAddressView(address, lang);
  const otherBase = ADDRESSES.find((x) => x.slug !== address.slug)!;
  const other = getAddressView(otherBase, lang);

  const lead = c.leadTpl
    .replace("{street}", a.street)
    .replace("{postal}", a.postalCode)
    .replace("{locality}", a.locality);

  return (
    <>
      <JsonLd
        data={[
          restaurantSchema(address),
          localBusinessSchema(address),
          breadcrumbSchema([
            { name: tr.nav[0].label, url: localizedHref("/", lang) },
            { name: tr.adresses.crumb, url: localizedHref("/adresses", lang) },
            { name: a.cityView, url: localizedHref(`/adresses/${a.slug}`, lang) },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={`Benti · ${a.neighborhood}`}
        crumbs={[
          { label: tr.nav[0].label, href: localizedHref("/", lang) },
          { label: tr.adresses.crumb, href: localizedHref("/adresses", lang) },
          { label: a.cityView },
        ]}
        title={
          <>
            Benti <span className="text-terracotta">{a.cityView}</span>
          </>
        }
        lead={lead}
      >
        <div className="flex flex-wrap gap-3">
          <a href={a.phoneHref} className="btn btn--flame">
            <Phone className="h-4 w-4" />
            <span>
              {tr.common.order} · {a.phone}
            </span>
          </a>
          <a href={a.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            <Pin className="h-4 w-4" />
            <span>{tr.common.itinerary}</span>
          </a>
        </div>
      </PageHeader>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-b grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="reveal-img overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src={a.photo}
              alt={`Benti ${a.cityView}`}
              width={720}
              height={560}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-sidi-ink/10 bg-paper p-7 shadow-soft">
              <h2 className="flex items-center gap-2 font-display text-2xl text-sidi-ink">
                <Clock className="h-6 w-6 text-olive" />
                {c.hours}
              </h2>
              <dl className="mt-4 divide-y divide-sidi-ink/10">
                {a.hoursView.map((h) => (
                  <div key={h.days} className="flex items-center justify-between py-2.5">
                    <dt className="font-semibold text-sidi-ink">{h.days}</dt>
                    <dd className="text-right text-ink-soft">
                      {h.slots.map((s, i) => (
                        <span key={i} className="block">
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-ink-soft">{c.hoursNote}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href={a.phoneHref} className="lift flex items-center gap-3 rounded-2xl border border-sidi-ink/10 bg-paper p-5 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-terracotta/15 text-terracotta">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-soft">{c.phone}</span>
                  <span className="font-semibold text-sidi-ink">{a.phone}</span>
                </span>
              </a>
              <a href={a.mapLink} target="_blank" rel="noopener noreferrer" className="lift flex items-center gap-3 rounded-2xl border border-sidi-ink/10 bg-paper p-5 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sidi/15 text-sidi-deep">
                  <Pin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-soft">{c.address}</span>
                  <span className="font-semibold text-sidi-ink">{a.street}</span>
                </span>
              </a>
            </div>

            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-harissa transition-colors hover:text-terracotta">
              <Instagram className="h-5 w-5" />
              {tr.common.followInsta} {SITE.instagramHandle}
            </a>
          </div>
        </div>

        <div className="container-b mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-sidi-ink/10 shadow-soft">
            <iframe
              title={`Benti ${a.cityView} — map`}
              src={a.mapEmbed}
              className="h-[360px] w-full md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-sidi-ink py-14 text-cream">
        <div className="container-b flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-sun">{c.otherEyebrow}</p>
            <h2 className="mt-2 font-display text-2xl text-cream md:text-3xl">
              {c.otherTitle} {other.cityView}
            </h2>
            <p className="mt-1 text-cream/70">
              {other.street}, {other.postalCode} {other.locality}
            </p>
          </div>
          <Link href={localizedHref(`/adresses/${other.slug}`, lang)} className="btn btn--sun shrink-0">
            <span>
              {c.otherCta} {other.cityView}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
