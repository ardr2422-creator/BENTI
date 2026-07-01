import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Phone, Sparkle } from "@/components/icons";
import { ADDRESSES, SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Traiteur & catering — cuisine tunisienne pour vos événements",
  description:
    "Service traiteur Benti à Paris : buffets gourmands, plateaux repas et lunch box aux saveurs tunisiennes pour séminaires, réunions et tournages. Cuisine ensoleillée, fait maison, sur mesure. Demandez votre devis.",
  alternates: { canonical: "/traiteur" },
  openGraph: { title: "Traiteur Benti — cuisine tunisienne pour vos événements", url: "/traiteur" },
};

const VALUES = [
  {
    t: "Ensoleillée & fait maison",
    d: "La richesse des saveurs méditerranéennes et tunisiennes, à travers des recettes authentiques préparées avec amour.",
  },
  {
    t: "Sur mesure",
    d: "Séminaires, réunions pro ou tournages : on adapte nos créations à vos besoins et au nombre de convives.",
  },
  {
    t: "Partage & convivialité",
    d: "Une cuisine simple, chaleureuse et inspirée, pour offrir à vos invités une vraie expérience gourmande.",
  },
];

const FORMULES = [
  {
    t: "Buffets gourmands",
    d: "Makloubs à composer, bols ensoleillés, batatas, mezze colorés. Le partage à la tunisienne, en grand format.",
    c: "bg-terracotta",
  },
  {
    t: "Plateaux repas",
    d: "Une formule individuelle complète et équilibrée, prête à servir. Idéale en réunion ou en déplacement.",
    c: "bg-olive",
  },
  {
    t: "Lunch box",
    d: "Le makloub qu'on aime, en version nomade. Pratique pour les tournages et les journées qui filent.",
    c: "bg-sidi-deep",
  },
];

const USE_CASES = ["Séminaires", "Réunions pro", "Tournages", "Événements privés", "Lancements", "Team building"];

const GALLERY = [1, 3, 5, 7, 9, 11, 13, 15].map((n) => `/catering/catering-${n}.jpg`);
const STRIP = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((n) => `/catering/catering-${n}.jpg`);

export default function TraiteurPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Traiteur", url: "/traiteur" },
        ])}
      />

      <PageHeader
        eyebrow="Traiteur & événements"
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Traiteur" }]}
        title={
          <>
            Une cuisine ensoleillée{" "}
            <span className="text-harissa">pour vos plus beaux moments.</span>
          </>
        }
        lead="Offrez à vos événements une touche de couleurs. Benti compose buffets, plateaux repas et lunch box tunisiens, sur mesure, partout à Paris."
      >
        <a href="#devis" className="btn btn--flame">
          <span>Demander un devis</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHeader>

      {/* Bandeau photo */}
      <section className="relative h-[42vh] min-h-[320px] overflow-hidden">
        <Image
          src="/catering/catering-1.jpg"
          alt="Buffet traiteur Benti aux saveurs tunisiennes"
          fill
          sizes="100vw"
          data-parallax="0.1"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sidi-ink/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-b pb-8">
            <p className="font-hand text-3xl text-cream md:text-4xl">
              « Parce qu&apos;une cuisine généreuse fait toute la différence. »
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-24">
        <div className="container-b">
          <SectionHeading
            eyebrow="Notre promesse"
            title="Le goût du fait maison, à l'échelle de votre événement."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3" data-stagger>
            {VALUES.map((v) => (
              <div
                key={v.t}
                className="reveal lift rounded-3xl border border-sidi-ink/10 bg-paper p-7 shadow-soft"
              >
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
            eyebrow="Nos formules"
            title={
              <>
                Trois façons de{" "}
                <span className="text-terracotta">régaler vos convives.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3" data-stagger>
            {FORMULES.map((f) => (
              <div
                key={f.t}
                className={`reveal lift relative overflow-hidden rounded-3xl ${f.c} p-8 text-cream`}
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
            {USE_CASES.map((u) => (
              <span
                key={u}
                className="rounded-full border border-sidi-ink/15 bg-paper px-4 py-2 text-sm font-semibold text-sidi-ink"
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 md:py-24">
        <div className="container-b">
          <SectionHeading
            center
            eyebrow="En images"
            title="Des tables qui donnent le sourire."
          />
        </div>
        <div className="container-b mt-12">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className={`reveal-img overflow-hidden rounded-2xl shadow-soft ${
                  i % 4 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt="Prestation traiteur Benti"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Marquee
            pausable
            duration={60}
            separator={<span aria-hidden className="px-1.5" />}
            items={STRIP.map((src) => (
              <span
                key={src}
                className="block h-40 w-56 overflow-hidden rounded-xl border-4 border-paper shadow-card"
              >
                <Image
                  src={src}
                  alt="Buffet traiteur Benti"
                  width={280}
                  height={200}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </span>
            ))}
          />
        </div>
      </section>

      {/* Devis */}
      <section id="devis" className="scroll-mt-24 bg-sidi-ink py-20 text-cream md:py-24">
        <div className="container-b grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow !text-sun">Devis gratuit</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,1.6rem+2vw,3.2rem)] text-cream">
              Parlez-nous de votre événement.
            </h2>
            <p className="mt-5 text-lg text-cream/80">
              Décrivez-nous vos envies : on revient vers vous avec une
              proposition sur mesure, gourmande et colorée. Sans engagement.
            </p>
            <div className="mt-8 space-y-3">
              {ADDRESSES.map((a) => (
                <a
                  key={a.slug}
                  href={a.phoneHref}
                  className="flex items-center gap-3 text-cream/90 transition-colors hover:text-sun"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm text-cream/60">{a.city}</span>
                    <span className="font-semibold">{a.phone}</span>
                  </span>
                </a>
              ))}
              <p className="pt-2 text-sm text-cream/60">
                Ou par email :{" "}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-cream p-6 shadow-lift md:p-8">
            <InquiryForm kind="devis" />
          </div>
        </div>
      </section>
    </>
  );
}
