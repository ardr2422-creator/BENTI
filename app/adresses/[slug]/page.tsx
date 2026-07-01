import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Clock, Instagram, Phone, Pin } from "@/components/icons";
import { ADDRESSES, SITE } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  restaurantSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return ADDRESSES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ADDRESSES.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `Benti ${a.city} — ${a.street}`,
    description: `Restaurant tunisien Benti ${a.city} : ${a.street}, ${a.postalCode} ${a.locality}. Makloubs et bols ensoleillés faits maison. Horaires, téléphone (${a.phone}) et itinéraire.`,
    alternates: { canonical: `/adresses/${a.slug}` },
    openGraph: {
      title: `Benti ${a.city}`,
      url: `/adresses/${a.slug}`,
      images: [{ url: a.photo }],
    },
  };
}

export default async function AddressPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = ADDRESSES.find((x) => x.slug === slug);
  if (!a) notFound();

  const other = ADDRESSES.find((x) => x.slug !== slug)!;

  return (
    <>
      <JsonLd
        data={[
          restaurantSchema(a),
          localBusinessSchema(a),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Nos adresses", url: "/adresses" },
            { name: a.city, url: `/adresses/${a.slug}` },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={`Benti · ${a.neighborhood}`}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nos adresses", href: "/adresses" },
          { label: a.city },
        ]}
        title={
          <>
            Benti <span className="text-terracotta">{a.city}</span>
          </>
        }
        lead={`${a.street}, ${a.postalCode} ${a.locality}. Le makloub de Sidi Bou Saïd, fait maison, à deux pas de chez vous.`}
      >
        <div className="flex flex-wrap gap-3">
          <a href={a.phoneHref} className="btn btn--flame">
            <Phone className="h-4 w-4" />
            <span>Commander · {a.phone}</span>
          </a>
          <a
            href={a.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <Pin className="h-4 w-4" />
            <span>Itinéraire</span>
          </a>
        </div>
      </PageHeader>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-b grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Photo */}
          <div className="reveal-img overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src={a.photo}
              alt={`Devanture du restaurant Benti ${a.city}`}
              width={720}
              height={560}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Infos pratiques */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-sidi-ink/10 bg-paper p-7 shadow-soft">
              <h2 className="flex items-center gap-2 font-display text-2xl text-sidi-ink">
                <Clock className="h-6 w-6 text-olive" />
                Horaires
              </h2>
              <dl className="mt-4 divide-y divide-sidi-ink/10">
                {a.hours.map((h) => (
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
              <p className="mt-4 text-sm text-ink-soft">
                Service du midi · sur place & à emporter.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={a.phoneHref}
                className="lift flex items-center gap-3 rounded-2xl border border-sidi-ink/10 bg-paper p-5 shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-terracotta/15 text-terracotta">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-soft">Téléphone</span>
                  <span className="font-semibold text-sidi-ink">{a.phone}</span>
                </span>
              </a>
              <a
                href={a.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lift flex items-center gap-3 rounded-2xl border border-sidi-ink/10 bg-paper p-5 shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sidi/15 text-sidi-deep">
                  <Pin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-soft">Adresse</span>
                  <span className="font-semibold text-sidi-ink">
                    {a.street}
                  </span>
                </span>
              </a>
            </div>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-harissa transition-colors hover:text-terracotta"
            >
              <Instagram className="h-5 w-5" />
              Suivre {SITE.instagramHandle}
            </a>
          </div>
        </div>

        {/* Carte Google */}
        <div className="container-b mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-sidi-ink/10 shadow-soft">
            <iframe
              title={`Carte — Benti ${a.city}`}
              src={a.mapEmbed}
              className="h-[360px] w-full md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Autre adresse */}
      <section className="bg-sidi-ink py-14 text-cream">
        <div className="container-b flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-sun">L&apos;autre maison</p>
            <h2 className="mt-2 font-display text-2xl text-cream md:text-3xl">
              Découvrez aussi Benti {other.city}
            </h2>
            <p className="mt-1 text-cream/70">
              {other.street}, {other.postalCode} {other.locality}
            </p>
          </div>
          <Link href={`/adresses/${other.slug}`} className="btn btn--sun shrink-0">
            <span>Voir {other.city}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
