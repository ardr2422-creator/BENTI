import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import MenuNav from "@/components/MenuNav";
import MakloubCard from "@/components/MakloubCard";
import Badge from "@/components/Badge";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Flame, Phone } from "@/components/icons";
import { localizedHref, t, type Lang } from "@/lib/i18n";
import { getAddressViews, getMenu } from "@/lib/localized";
import { breadcrumbSchema, menuSchema } from "@/lib/schema";

export default function CarteContent({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const c = tr.carte;
  const menu = getMenu(lang);
  const addresses = getAddressViews(lang);
  const navItems = menu.map((s) => ({ id: s.id, title: s.title }));

  return (
    <>
      <JsonLd
        data={[
          menuSchema(),
          breadcrumbSchema([
            { name: tr.nav[0].label, url: localizedHref("/", lang) },
            { name: c.crumb, url: localizedHref("/carte", lang) },
          ]),
        ]}
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
            <span className="text-terracotta">{c.title.accent}</span>
          </>
        }
        lead={c.lead}
      />

      {/* Commander */}
      <section id="commander" className="scroll-mt-40 bg-sidi-ink py-10 text-cream">
        <div className="container-b flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-sun">{c.orderEyebrow}</p>
            <h2 className="mt-2 font-display text-2xl text-cream md:text-3xl">
              {c.orderTitle}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {addresses.map((a) => (
              <a key={a.slug} href={a.phoneHref} className="btn btn--sun">
                <Phone className="h-4 w-4" />
                <span>
                  {a.cityView} · {a.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <MenuNav items={navItems} />

      <div className="bg-cream">
        {menu.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-40 border-b border-sidi-ink/5 py-16 md:py-20"
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
                      <span className="mt-1 h-3 w-3 shrink-0 rotate-45 rounded-sm bg-terracotta" aria-hidden />
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-xl text-sidi-ink">{dish.name}</h3>
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
              <h2 className="font-display text-2xl text-sidi-ink">{c.ctaTraiteurTitle}</h2>
              <p className="mt-2 text-ink-soft">{c.ctaTraiteurLead}</p>
            </div>
            <Link href={localizedHref("/traiteur", lang)} className="btn btn--flame shrink-0">
              <span>{c.ctaTraiteur}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
