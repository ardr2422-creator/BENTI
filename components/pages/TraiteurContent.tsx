import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Phone, Sparkle } from "@/components/icons";
import { SITE } from "@/lib/site";
import { localizedHref, t, type Lang } from "@/lib/i18n";
import { getAddressViews } from "@/lib/localized";
import { breadcrumbSchema } from "@/lib/schema";

const GALLERY = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 22].map(
  (n) => `/catering/catering-${n}.jpg`
);
const STRIP = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((n) => `/catering/catering-${n}.jpg`);

// Trames bento : uniquement des tuiles CARRÉES (1×1), VERTICALES (1×2) ou
// des grands carrés (2×2). Jamais d'image horizontale.
const BENTO = [
  "col-span-2 row-span-2",
  "row-span-2",
  "",
  "",
  "",
  "row-span-2",
  "col-span-2 row-span-2",
  "",
  "row-span-2",
  "",
  "",
  "row-span-2",
];

export default function TraiteurContent({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const c = tr.traiteur;
  const addresses = getAddressViews(lang);
  const alt = lang === "fr" ? "Buffet traiteur Benti" : "Benti catering buffet";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tr.nav[0].label, url: localizedHref("/", lang) },
          { name: c.crumb, url: localizedHref("/traiteur", lang) },
        ])}
      />

      <PageHeader
        eyebrow={c.eyebrow}
        crumbs={[
          { label: tr.nav[0].label, href: localizedHref("/", lang) },
          { label: c.crumb },
        ]}
        title={
          <>
            {c.title.pre}
            <span className="text-harissa">{c.title.accent}</span>
          </>
        }
        lead={c.lead}
      >
        <a href="#devis" className="btn btn--flame">
          <span>{tr.common.quote}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHeader>

      {/* Citation — fond couleur unie */}
      <section className="bg-harissa py-14 text-cream md:py-16">
        <div className="container-b text-center">
          <p className="mx-auto max-w-3xl text-balance font-hand text-3xl leading-snug text-cream md:text-4xl">
            {c.quote}
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-24">
        <div className="container-b">
          <SectionHeading eyebrow={c.promiseEyebrow} title={c.promiseTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-3" data-stagger>
            {c.values.map((v) => (
              <div key={v.t} className="reveal lift rounded-3xl border border-sidi-ink/10 bg-paper p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun/25 text-terracotta">
                  <Sparkle className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-sidi-ink">{v.t}</h3>
                <p className="mt-2 text-ink-soft">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="bg-sand/60 py-20 md:py-24">
        <div className="container-b">
          <SectionHeading
            eyebrow={c.formulesEyebrow}
            title={
              <>
                {c.formulesTitle.pre}
                <span className="text-terracotta">{c.formulesTitle.accent}</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3" data-stagger>
            {c.formules.map((f, i) => (
              <div
                key={f.t}
                className={`reveal lift relative overflow-hidden rounded-3xl ${
                  ["bg-terracotta", "bg-olive", "bg-sidi-deep"][i]
                } p-8 text-cream`}
              >
                <div className="zellige absolute inset-0 opacity-20" aria-hidden />
                <div className="relative">
                  <h3 className="font-display text-3xl">{f.t}</h3>
                  <p className="mt-3 text-cream/85">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {c.useCases.map((u) => (
              <span key={u} className="rounded-full border border-sidi-ink/15 bg-paper px-4 py-2 text-sm font-semibold text-sidi-ink">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 md:py-24">
        <div className="container-b">
          <SectionHeading center eyebrow={c.galleryEyebrow} title={c.galleryTitle} />
        </div>
        <div className="container-b mt-12">
          <div className="grid auto-rows-[44vw] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4">
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className={`reveal-img overflow-hidden rounded-2xl ${BENTO[i % BENTO.length]}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={640}
                  height={640}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Marquee séparé nettement du bento */}
        <div className="mt-16 md:mt-20">
          <Marquee
            pausable
            duration={60}
            separator={<span aria-hidden className="px-1.5" />}
            items={STRIP.map((src) => (
              <span key={src} className="block h-40 w-56 overflow-hidden rounded-xl border-4 border-paper shadow-card">
                <Image src={src} alt={alt} width={280} height={200} className="h-full w-full object-cover" loading="lazy" />
              </span>
            ))}
          />
        </div>
      </section>

      {/* Devis */}
      <section id="devis" className="scroll-mt-24 bg-sidi-ink py-20 text-cream md:py-24">
        <div className="container-b grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow !text-sun">{c.devisEyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,1.6rem+2vw,3.2rem)] text-cream">{c.devisTitle}</h2>
            <p className="mt-5 text-lg text-cream/80">{c.devisLead}</p>
            <div className="mt-8 space-y-3">
              {addresses.map((a) => (
                <a key={a.slug} href={a.phoneHref} className="flex items-center gap-3 text-cream/90 transition-colors hover:text-sun">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm text-cream/60">{a.cityView}</span>
                    <span className="font-semibold">{a.phone}</span>
                  </span>
                </a>
              ))}
              <p className="pt-2 text-sm text-cream/60">
                {c.orEmail}{" "}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-cream p-6 shadow-lift md:p-8">
            <InquiryForm kind="devis" lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
