import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import MakloubCard from "@/components/MakloubCard";
import AddressCard from "@/components/AddressCard";
import ReviewSlider from "@/components/ReviewSlider";
import VideoShowcase from "@/components/VideoShowcase";
import StoriesStrip from "@/components/StoriesStrip";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, ArrowUpRight, Bowl, Flame, Instagram, Sparkle } from "@/components/icons";
import { ADDRESSES, MAKLOUBS, SITE, VIDEOS } from "@/lib/site";
import { PRESS } from "@/lib/reviews";
import { homeRestaurantSchema, organizationSchema, websiteSchema } from "@/lib/schema";

const MARQUEE_WORDS = [
  "Makloub maison",
  "Sidi Bou Saïd",
  "Homemade with love",
  "Bols ensoleillés",
  "Chawarma · Keftas · Thon",
  "Paris 11 & 3",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homeRestaurantSchema(), websiteSchema(), organizationSchema()]} />

      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden pb-16 pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/food/food-2.jpg"
            alt="Deux makloubs Benti garnis de keftas, mozzarella et salade, sur fond de zellige tunisien"
            fill
            priority
            sizes="100vw"
            data-parallax="0.12"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sidi-ink/90 via-sidi-ink/45 to-sidi-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-sidi-ink/70 to-transparent" />
        </div>

        <div className="container-b">
          <div className="max-w-2xl">
            <p className="reveal eyebrow !text-sun">
              Restaurant tunisien · Paris 11e &amp; 3e
            </p>
            <h1 className="reveal mt-5 text-balance font-display text-[clamp(2.6rem,1.8rem+5vw,5.4rem)] leading-[0.98] text-cream">
              Le makloub de <span className="italic text-sun">Sidi Bou Saïd</span>,{" "}
              <span className="display-hand !text-4xl text-harissa md:!text-6xl">
                fait maison.
              </span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-pretty text-lg text-cream/85">
              Une pâte dorée entre la pizza et la pita, pliée sur du chawarma,
              de la mozzarella fondante et notre sauce blanche onctueuse. Benti,
              « ma fille » en tunisien : l&apos;histoire d&apos;Abir &amp;
              Yassine, et un vent de Tunisie sur Paris.
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-3">
              <Link href="/carte" className="btn btn--flame">
                <span>Découvrir la carte</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/adresses" className="btn btn--ghost-light">
                <span>Nos deux adresses</span>
              </Link>
            </div>

            <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-cream/80">
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Sparkle className="h-4 w-4 text-sun" /> Fait maison, chaque jour
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Flame className="h-4 w-4 text-harissa" /> Best-seller : le Tunis
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Bowl className="h-4 w-4 text-sun" /> Bols &amp; version veggie
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 md:flex">
          <span className="text-xs uppercase tracking-[0.25em]">Défiler</span>
          <span className="h-10 w-px animate-floaty bg-cream/50" />
        </div>
      </section>

      {/* Marquee band */}
      <div className="border-y border-sidi-ink/10 bg-sun py-4 text-sidi-ink">
        <Marquee
          items={MARQUEE_WORDS}
          duration={30}
          separator={<span aria-hidden className="px-3 text-harissa">✦</span>}
        />
      </div>

      {/* ======================= CONCEPT / HISTOIRE ======================= */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="zellige absolute inset-0 opacity-[0.5]" aria-hidden />
        <div className="container-b relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative reveal-img">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/images/food/food-1.jpg"
                alt="Intérieur du restaurant Benti : mur bleu arqué, lampes en osier, bougainvilliers"
                width={720}
                height={540}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-40 rotate-3 overflow-hidden rounded-2xl border-4 border-paper shadow-card md:-right-8 md:w-52">
              <Image
                src="/images/founders/abir-yassine.jpg"
                alt="Abir et Yassine, les fondateurs de Benti"
                width={260}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute -left-3 top-6 hidden rotate-[-6deg] rounded-full bg-harissa px-4 py-2 font-hand text-xl text-cream shadow-card md:block">
              Abir &amp; Yassine
            </span>
          </div>

          <div data-stagger>
            <SectionHeading
              eyebrow="Notre histoire"
              title={
                <>
                  Benti, « ma fille »,{" "}
                  <span className="text-terracotta">une histoire de famille.</span>
                </>
              }
            />
            <div className="reveal mt-6 space-y-4 text-lg text-ink-soft">
              <p>
                Abir, d&apos;origine tunisienne, a monté Benti avec son mari
                Yassine. Un lieu chaleureux et coloré qui rappelle les ruelles
                bleues et blanches de Sidi Bou Saïd.
              </p>
              <p>
                Ici, on met le <strong className="text-sidi-ink">makloub</strong>{" "}
                à l&apos;honneur : ce sandwich tunisien à la pâte dorée,
                traditionnellement garni de poulet, de slata mechouia et de
                harissa. Cinq recettes, plus une version au thon qui rappelle le
                fricassé de l&apos;enfance.
              </p>
            </div>
            <div className="reveal mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "5", l: "recettes de makloub" },
                { n: "2", l: "adresses à Paris" },
                { n: "100%", l: "fait maison" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-sidi-ink/10 bg-paper p-4 text-center shadow-soft"
                >
                  <div className="font-display text-3xl text-terracotta">{s.n}</div>
                  <div className="mt-1 text-xs text-ink-soft">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="reveal mt-8">
              <Link href="/traiteur" className="btn btn--sidi">
                <span>Découvrir le traiteur</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= HIGHLIGHTS CARTE ======================= */}
      <section className="bg-sand/60 py-20 md:py-28">
        <div className="container-b">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Les héros de la carte"
              title={
                <>
                  Cinq makloubs,{" "}
                  <span className="text-harissa">un aller simple pour Tunis.</span>
                </>
              }
              lead="Makloub seul, ou makloub + batatas. Version piquante disponible pour les courageux."
            />
            <Link
              href="/carte"
              className="reveal btn btn--ghost shrink-0 self-start md:self-auto"
            >
              <span>Toute la carte</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Coverflow */}
        <div className="mt-12">
          <div className="coverflow no-scrollbar container-b !flex" data-coverflow>
            {MAKLOUBS.map((dish, i) => (
              <MakloubCard key={dish.name} dish={dish} index={i} reveal={false} />
            ))}
          </div>
          <p className="container-b mt-2 text-center text-sm text-ink-soft md:hidden">
            ← Faites glisser pour explorer →
          </p>
        </div>

        {/* Au-delà du makloub */}
        <div className="container-b mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              t: "Bols ensoleillés",
              d: "Boulghour ou riz, légumes rôtis, la garniture de votre choix.",
              c: "bg-olive",
              href: "/carte#bols",
            },
            {
              t: "Batatas maison",
              d: "Pommes grenailles, ail & persil. Croustillantes, addictives.",
              c: "bg-terracotta",
              href: "/carte#batatas",
            },
            {
              t: "Boissons & dessert",
              d: "Une boisson maison, un dessert selon le mood du jour.",
              c: "bg-sidi-deep",
              href: "/carte#boissons",
            },
          ].map((cat) => (
            <Link
              key={cat.t}
              href={cat.href}
              className={`reveal lift group relative overflow-hidden rounded-3xl ${cat.c} p-6 text-cream`}
            >
              <div className="zellige absolute inset-0 opacity-20" aria-hidden />
              <div className="relative">
                <h3 className="font-display text-2xl">{cat.t}</h3>
                <p className="mt-2 text-cream/85">{cat.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Voir <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ======================= VIDÉO ======================= */}
      <section className="relative overflow-hidden bg-sidi-ink py-20 text-cream md:py-28">
        <div className="zellige absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="container-b relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div data-stagger>
            <SectionHeading
              light
              eyebrow="En vidéo"
              title={
                <>
                  Rencontrez Benti,{" "}
                  <span className="text-sun">celles et ceux qui la font.</span>
                </>
              }
              lead="Abir vous ouvre les portes : la pâte du makloub, l'esprit Sidi Bou Saïd, l'accueil. La meilleure façon de comprendre Benti, c'est de la regarder vivre."
            />
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Link href="/carte" className="btn btn--sun">
                <span>Voir la carte</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost-light"
              >
                <Instagram className="h-4 w-4" />
                <span>{SITE.instagramHandle}</span>
              </a>
            </div>
          </div>
          <VideoShowcase videos={VIDEOS} />
        </div>
      </section>

      {/* ======================= AVIS ======================= */}
      <section className="py-20 md:py-28">
        <div className="container-b">
          <SectionHeading
            center
            eyebrow="Ce que vous en pensez"
            title={
              <>
                Ils reviennent,{" "}
                <span className="text-terracotta">et ils le disent.</span>
              </>
            }
          />
          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-sidi-ink/10 bg-paper px-4 py-2 font-semibold text-sidi-ink shadow-soft">
              <span className="flex text-sun" aria-hidden>
                {"★★★★★"}
              </span>
              <span className="text-lg">{SITE.rating.value}/5</span>
              <span className="text-sm text-ink-soft">
                · {SITE.rating.count} avis Google
              </span>
            </span>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <ReviewSlider />
          </div>
        </div>
      </section>

      {/* ======================= STORIES / PRESSE ======================= */}
      <section className="overflow-hidden bg-sand/60 py-20 md:py-28">
        <div className="container-b">
          <SectionHeading
            center
            eyebrow="Sur Instagram"
            title={
              <>
                Vous nous taguez,{" "}
                <span className="text-harissa">on adore ça.</span>
              </>
            }
            lead="Une sélection de vos stories repostées. Rejoignez la communauté @benti_paris."
          />
        </div>
        <div className="mt-12">
          <StoriesStrip />
        </div>
        <div className="container-b mt-12">
          <div className="grid gap-4 md:grid-cols-3">
            {PRESS.map((p) => (
              <figure
                key={p.name}
                className="reveal rounded-2xl border border-sidi-ink/10 bg-paper p-6 shadow-soft"
              >
                <blockquote className="font-display text-xl text-sidi-ink">
                  « {p.quote} »
                </blockquote>
                <figcaption className="mt-3 text-sm font-bold uppercase tracking-wide text-terracotta">
                  {p.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= TRAITEUR ======================= */}
      <section className="py-20 md:py-28">
        <div className="container-b">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-harissa text-cream shadow-lift">
            <div className="zellige absolute inset-0 opacity-15" aria-hidden />
            <div className="relative grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-14">
              <div data-stagger>
                <p className="reveal eyebrow !text-sun">Traiteur & événements</p>
                <h2 className="reveal mt-4 font-display text-[clamp(2rem,1.6rem+2vw,3.2rem)] text-cream">
                  Une cuisine ensoleillée pour vos événements.
                </h2>
                <p className="reveal mt-5 text-lg text-cream/85">
                  Séminaires, réunions, tournages : buffets gourmands, plateaux
                  repas et lunch box aux saveurs tunisiennes. On adapte tout à
                  vos convives, sans jamais perdre le goût du fait maison.
                </p>
                <div className="reveal mt-8 flex flex-wrap gap-3">
                  <Link href="/traiteur" className="btn btn--sun">
                    <span>Demander un devis</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href="/traiteur" className="btn btn--ghost-light">
                    <span>Voir les formules</span>
                  </Link>
                </div>
              </div>
              <div className="reveal-img relative grid grid-cols-2 gap-3">
                {["/catering/catering-1.jpg", "/catering/catering-5.jpg", "/catering/catering-8.jpg", "/catering/catering-12.jpg"].map(
                  (src, i) => (
                    <div
                      key={src}
                      className={`overflow-hidden rounded-2xl border-2 border-cream/20 shadow-card ${
                        i % 2 ? "translate-y-4" : ""
                      }`}
                    >
                      <Image
                        src={src}
                        alt="Buffet traiteur Benti"
                        width={280}
                        height={280}
                        className="aspect-square h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= ADRESSES ======================= */}
      <section className="relative overflow-hidden bg-sidi-ink py-20 text-cream md:py-28">
        <div className="zellige absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="container-b relative">
          <SectionHeading
            light
            eyebrow="Nous trouver"
            title={
              <>
                Deux adresses,{" "}
                <span className="text-sun">la même chaleur.</span>
              </>
            }
            lead="Au cœur de Paris, à Léon Frot (11e) et aux Filles du Calvaire (3e). Passez commande, appelez, ou venez faire la queue avec le sourire."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {ADDRESSES.map((a) => (
              <AddressCard key={a.slug} address={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================= INSTAGRAM ======================= */}
      <section className="py-20 md:py-24">
        <div className="container-b">
          <div className="reveal flex flex-col items-center gap-6 text-center">
            <Instagram className="h-10 w-10 text-harissa" />
            <h2 className="font-display text-[clamp(1.8rem,1.4rem+2vw,3rem)] text-sidi-ink">
              Suivez le quotidien de Benti
            </h2>
            <p className="max-w-xl text-lg text-ink-soft">
              Nouveautés, coulisses de cuisine et vos plus belles assiettes.
              C&apos;est sur Instagram que ça se passe.
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--flame"
            >
              <Instagram className="h-4 w-4" />
              <span>{SITE.instagramHandle}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
