import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import MenuNav from "@/components/MenuNav";
import MakloubCard from "@/components/MakloubCard";
import Badge from "@/components/Badge";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Flame, Phone } from "@/components/icons";
import {
  ADDRESSES,
  MENU,
  MENU_FOOTNOTE,
  MENU_OPTIONS,
  SITE,
} from "@/lib/site";
import { breadcrumbSchema, menuSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "La carte — makloubs, bols ensoleillés & batatas",
  description:
    "Découvrez la carte Benti : 6 makloubs (Tunis, Nabeul, Sidi Bou, Hammamet, Bardo, Carthage), les bols ensoleillés, les batatas maison, boissons et desserts. Fait maison, prix TTC service compris. Sans gluten & vegan disponibles.",
  alternates: { canonical: "/carte" },
  openGraph: { title: "La carte Benti", url: "/carte" },
};

export default function CartePage() {
  const navItems = MENU.map((s) => ({ id: s.id, title: s.title }));

  return (
    <>
      <JsonLd
        data={[
          menuSchema(),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "La carte", url: "/carte" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="La carte"
        crumbs={[{ label: "Accueil", href: "/" }, { label: "La carte" }]}
        title={
          <>
            Tout est fait maison,{" "}
            <span className="text-terracotta">tout appelle le soleil.</span>
          </>
        }
        lead="Le makloub en héros, des bols généreux, des batatas ail-persil qui rendent accro. Choisissez, on plie devant vous."
      >
        <div className="flex flex-wrap items-center gap-2">
          {MENU_OPTIONS.map((o) => (
            <span
              key={o}
              className="rounded-full border border-sidi-ink/15 bg-paper px-3 py-1.5 text-sm font-semibold text-sidi-ink"
            >
              {o}
            </span>
          ))}
          <span className="text-sm text-ink-soft">· {MENU_FOOTNOTE}</span>
        </div>
      </PageHeader>

      <MenuNav items={navItems} />

      {/* Commander / à emporter */}
      <section id="commander" className="scroll-mt-32 bg-sidi-ink py-10 text-cream">
        <div className="container-b flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-sun">Sur place ou à emporter</p>
            <h2 className="mt-2 font-display text-2xl text-cream md:text-3xl">
              Commandez par téléphone, on prépare tout.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {ADDRESSES.map((a) => (
              <a key={a.slug} href={a.phoneHref} className="btn btn--sun">
                <Phone className="h-4 w-4" />
                <span>
                  {a.city} · {a.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-cream">
        {MENU.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 border-b border-sidi-ink/5 py-16 md:py-20"
          >
            <div className="container-b">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                  <p className="reveal eyebrow">
                    {String(si + 1).padStart(2, "0")} · {section.title}
                  </p>
                  <h2 className="reveal mt-3 font-display text-[clamp(1.8rem,1.4rem+2vw,2.8rem)] text-sidi-ink">
                    {section.title}
                  </h2>
                  {section.intro && (
                    <p className="reveal mt-3 text-ink-soft">{section.intro}</p>
                  )}
                </div>
                {section.price && (
                  <span className="reveal shrink-0 rounded-full bg-sun px-5 py-2 font-display text-xl text-sidi-ink">
                    {section.price}
                  </span>
                )}
              </div>

              {section.note && (
                <p className="reveal mt-4 inline-flex items-center gap-2 rounded-xl bg-harissa/10 px-4 py-2 text-sm font-semibold text-harissa">
                  <Flame className="h-4 w-4" />
                  {section.note}
                </p>
              )}

              {section.id === "makloub" ? (
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((dish, i) => (
                    <MakloubCard key={dish.name} dish={dish} index={i} />
                  ))}
                </div>
              ) : (
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {section.items.map((dish) => (
                    <li
                      key={dish.name}
                      className="reveal lift flex items-start gap-4 rounded-2xl border border-sidi-ink/10 bg-paper p-5 shadow-soft"
                    >
                      <span
                        className="mt-1 h-3 w-3 shrink-0 rotate-45 rounded-sm bg-terracotta"
                        aria-hidden
                      />
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-xl text-sidi-ink">
                            {dish.name}
                          </h3>
                          {dish.badges?.map((b) => (
                            <Badge key={b} type={b} />
                          ))}
                        </div>
                        <p className="mt-1 text-ink-soft">{dish.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Rappel traiteur */}
      <section className="bg-cream py-16">
        <div className="container-b">
          <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl border border-sidi-ink/10 bg-paper p-8 text-center shadow-soft md:flex-row md:text-left">
            <div>
              <h2 className="font-display text-2xl text-sidi-ink">
                Un événement à régaler ?
              </h2>
              <p className="mt-2 text-ink-soft">
                Buffets, plateaux repas et lunch box aux couleurs de la Tunisie.
              </p>
            </div>
            <Link href="/traiteur" className="btn btn--flame shrink-0">
              <span>Demander un devis traiteur</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
