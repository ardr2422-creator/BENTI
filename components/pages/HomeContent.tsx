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
import { ADDRESSES, SITE, VIDEOS } from "@/lib/site";
import { localizedHref, t, type Lang } from "@/lib/i18n";
import { getMakloubs, getPress, getTestimonials } from "@/lib/localized";
import { homeRestaurantSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export default function HomeContent({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const makloubs = getMakloubs(lang);
  const testimonials = getTestimonials(lang);
  const press = getPress(lang);
  const videos = VIDEOS.map((v) => ({
    ...v,
    title: tr.video.videoTitle,
    label: tr.video.videoLabel,
  }));

  return (
    <>
      <JsonLd data={[homeRestaurantSchema(), websiteSchema(), organizationSchema()]} />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden pb-16 pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/hero/sidi-bou.jpg"
            alt={
              lang === "fr"
                ? "Coucher de soleil sur Sidi Bou Saïd : dôme blanc, palmier et mer turquoise"
                : "Sunset over Sidi Bou Saïd: white dome, palm tree and turquoise sea"
            }
            fill
            priority
            sizes="100vw"
            data-parallax="0.12"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sidi-ink/95 via-sidi-ink/50 to-sidi-ink/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-sidi-ink/75 via-sidi-ink/20 to-transparent" />
        </div>

        <div className="container-b">
          <div className="max-w-2xl">
            <p className="reveal eyebrow !text-sun">{tr.hero.eyebrow}</p>
            <h1 className="reveal mt-5 text-balance font-display text-[clamp(2.6rem,1.8rem+5vw,5.4rem)] leading-[0.98] text-cream">
              {tr.hero.titlePre}
              <span className="italic text-sun">{tr.hero.titleAccent}</span>,{" "}
              <span className="display-hand !text-4xl text-harissa md:!text-6xl">
                {tr.hero.titleHand}
              </span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-pretty text-lg text-cream/85">
              {tr.hero.lead}
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-3">
              <Link href={localizedHref("/carte", lang)} className="btn btn--flame">
                <span>{tr.hero.cta1}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href={localizedHref("/adresses", lang)} className="btn btn--ghost-light">
                <span>{tr.hero.cta2}</span>
              </Link>
            </div>

            <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-cream/80">
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Sparkle className="h-4 w-4 text-sun" /> {tr.hero.stat1}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Flame className="h-4 w-4 text-harissa" /> {tr.hero.stat2}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Bowl className="h-4 w-4 text-sun" /> {tr.hero.stat3}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-sidi-ink/10 bg-sun py-4 text-sidi-ink">
        <Marquee
          items={tr.marquee}
          duration={30}
          separator={<span aria-hidden className="px-3 text-harissa">✦</span>}
        />
      </div>

      {/* CONCEPT */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="zellige absolute inset-0 opacity-[0.5]" aria-hidden />
        <div className="container-b relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal-img">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/images/food/food-1.jpg"
                alt={
                  lang === "fr"
                    ? "Intérieur du restaurant Benti : mur bleu arqué, lampes en osier, bougainvilliers"
                    : "Inside Benti: blue arched wall, wicker lamps, bougainvillea"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sidi-ink/45 via-transparent to-transparent" aria-hidden />
              {/* Badge "ma fille" — placé À L'INTÉRIEUR de l'image */}
              <span className="absolute left-4 top-4 rotate-[-4deg] rounded-full bg-harissa px-4 py-2 font-hand text-lg text-cream shadow-card md:text-xl">
                {tr.concept.founderTag}
              </span>
              {/* Photo fondateurs — encart À L'INTÉRIEUR de l'image */}
              <div className="absolute bottom-4 right-4 w-28 overflow-hidden rounded-2xl border-4 border-paper shadow-card sm:w-32 md:w-40">
                <Image
                  src="/images/founders/abir-yassine.jpg"
                  alt={lang === "fr" ? "Abir et Yassine, fondateurs de Benti" : "Abir and Yassine, founders of Benti"}
                  width={260}
                  height={320}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div data-stagger>
            <SectionHeading
              eyebrow={tr.concept.eyebrow}
              title={
                <>
                  {tr.concept.title.pre}
                  <span className="text-terracotta">{tr.concept.title.accent}</span>
                </>
              }
            />
            <div className="reveal mt-6 space-y-4 text-lg text-ink-soft">
              <p>{tr.concept.p1}</p>
              <p>
                {tr.concept.p2.split(tr.concept.makloubWord).length > 1 ? (
                  <>
                    {tr.concept.p2.split(tr.concept.makloubWord)[0]}
                    <strong className="text-sidi-ink">{tr.concept.makloubWord}</strong>
                    {tr.concept.p2.split(tr.concept.makloubWord)[1]}
                  </>
                ) : (
                  tr.concept.p2
                )}
              </p>
            </div>
            <div className="reveal mt-8 grid grid-cols-3 gap-4">
              {tr.concept.stats.map((s) => (
                <div key={s.l} className="rounded-2xl border border-sidi-ink/10 bg-paper p-4 text-center shadow-soft">
                  <div className="font-display text-3xl text-terracotta">{s.n}</div>
                  <div className="mt-1 text-xs text-ink-soft">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="reveal mt-8">
              <Link href={localizedHref("/traiteur", lang)} className="btn btn--sidi">
                <span>{tr.concept.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-sand/60 py-20 md:py-28">
        <div className="container-b">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={tr.highlights.eyebrow}
              title={
                <>
                  {tr.highlights.title.pre}
                  <span className="text-harissa">{tr.highlights.title.accent}</span>
                </>
              }
              lead={tr.highlights.lead}
            />
            <Link
              href={localizedHref("/carte", lang)}
              className="reveal btn btn--ghost shrink-0 self-start md:self-auto"
            >
              <span>{tr.highlights.ctaAll}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <div className="coverflow no-scrollbar container-b !flex" data-coverflow>
            {makloubs.map((dish, i) => (
              <MakloubCard key={dish.name} dish={dish} index={i} reveal={false} />
            ))}
          </div>
          <p className="container-b mt-2 text-center text-sm text-ink-soft md:hidden">
            {tr.highlights.dragHint}
          </p>
        </div>

        <div className="container-b mt-12 grid gap-5 sm:grid-cols-3">
          {tr.highlights.cats.map((cat, i) => (
            <Link
              key={cat.t}
              href={localizedHref(cat.href.split("#")[0], lang) + "#" + cat.href.split("#")[1]}
              className={`reveal group relative isolate overflow-hidden rounded-[1.75rem] ${
                ["bg-olive", "bg-terracotta", "bg-sidi-deep"][i]
              } p-7 text-white shadow-soft transition-shadow duration-500 hover:shadow-card`}
            >
              <div className="zellige absolute inset-0 -z-10 opacity-20" aria-hidden />
              <div className="relative">
                <h3 className="font-display text-2xl text-white">{cat.t}</h3>
                <p className="mt-2 text-white/90">{cat.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {tr.highlights.catCta}{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VIDÉO */}
      <section className="relative overflow-hidden bg-sidi-ink py-20 text-cream md:py-28">
        <div className="zellige absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="container-b relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div data-stagger>
            <SectionHeading
              light
              eyebrow={tr.video.eyebrow}
              title={
                <>
                  {tr.video.title.pre}
                  <span className="text-sun">{tr.video.title.accent}</span>
                </>
              }
              lead={tr.video.lead}
            />
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Link href={localizedHref("/carte", lang)} className="btn btn--sun">
                <span>{tr.video.cta}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">
                <Instagram className="h-4 w-4" />
                <span>{SITE.instagramHandle}</span>
              </a>
            </div>
          </div>
          <VideoShowcase videos={videos} />
        </div>
      </section>

      {/* AVIS */}
      <section className="py-20 md:py-28">
        <div className="container-b">
          <SectionHeading
            center
            eyebrow={tr.reviews.eyebrow}
            title={
              <>
                {tr.reviews.title.pre}
                <span className="text-terracotta">{tr.reviews.title.accent}</span>
              </>
            }
          />
          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-sidi-ink/10 bg-paper px-4 py-2 font-semibold text-sidi-ink shadow-soft">
              <span className="flex text-sun" aria-hidden>{"★★★★★"}</span>
              <span className="text-lg">{SITE.rating.value}/5</span>
              <span className="text-sm text-ink-soft">· {SITE.rating.count} {tr.reviews.ratingLabel}</span>
            </span>
          </div>
          <div className="mx-auto mt-10 max-w-5xl">
            <ReviewSlider items={testimonials} />
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="overflow-hidden bg-sand/60 py-20 md:py-28">
        <div className="container-b">
          <SectionHeading
            center
            eyebrow={tr.stories.eyebrow}
            title={
              <>
                {tr.stories.title.pre}
                <span className="text-harissa">{tr.stories.title.accent}</span>
              </>
            }
            lead={tr.stories.lead}
          />
        </div>
        <div className="mt-12">
          <StoriesStrip />
        </div>
        <div className="container-b mt-12">
          <div className="grid gap-4 md:grid-cols-3">
            {press.map((p) => (
              <figure key={p.name} className="reveal rounded-2xl border border-sidi-ink/10 bg-paper p-6 shadow-soft">
                <blockquote className="font-display text-xl text-sidi-ink">« {p.quote} »</blockquote>
                <figcaption className="mt-3 text-sm font-bold uppercase tracking-wide text-terracotta">
                  {p.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TRAITEUR */}
      <section className="py-20 md:py-28">
        <div className="container-b">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-harissa text-cream shadow-lift">
            <div className="zellige absolute inset-0 opacity-15" aria-hidden />
            <div className="relative grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-14">
              <div data-stagger>
                <p className="reveal eyebrow !text-sun">{tr.cateringBlock.eyebrow}</p>
                <h2 className="reveal mt-4 font-display text-[clamp(2rem,1.6rem+2vw,3.2rem)] text-cream">
                  {tr.cateringBlock.title}
                </h2>
                <p className="reveal mt-5 text-lg text-cream/85">{tr.cateringBlock.lead}</p>
                <div className="reveal mt-8 flex flex-wrap gap-3">
                  <Link href={localizedHref("/traiteur", lang)} className="btn btn--sun">
                    <span>{tr.cateringBlock.cta1}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href={localizedHref("/traiteur", lang)} className="btn btn--ghost-light">
                    <span>{tr.cateringBlock.cta2}</span>
                  </Link>
                </div>
              </div>
              <div className="reveal-img grid grid-cols-2 gap-3">
                {["/catering/catering-1.jpg", "/catering/catering-5.jpg", "/catering/catering-8.jpg", "/catering/catering-12.jpg"].map((src) => (
                  <div key={src} className="overflow-hidden rounded-2xl shadow-card ring-1 ring-cream/25">
                    <Image
                      src={src}
                      alt={lang === "fr" ? "Buffet traiteur Benti" : "Benti catering buffet"}
                      width={280}
                      height={280}
                      className="aspect-square h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADRESSES */}
      <section className="relative overflow-hidden bg-sidi-ink py-20 text-cream md:py-28">
        <div className="zellige absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="container-b relative">
          <SectionHeading
            light
            eyebrow={tr.addressesBlock.eyebrow}
            title={
              <>
                {tr.addressesBlock.title.pre}
                <span className="text-sun">{tr.addressesBlock.title.accent}</span>
              </>
            }
            lead={tr.addressesBlock.lead}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {ADDRESSES.map((a) => (
              <AddressCard key={a.slug} address={a} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 md:py-24">
        <div className="container-b">
          <div className="reveal flex flex-col items-center gap-6 text-center">
            <Instagram className="h-10 w-10 text-harissa" />
            <h2 className="font-display text-[clamp(1.8rem,1.4rem+2vw,3rem)] text-sidi-ink">
              {tr.instaBlock.title}
            </h2>
            <p className="max-w-xl text-lg text-ink-soft">{tr.instaBlock.lead}</p>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--flame">
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
