import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { Clock, Instagram, Phone, Pin } from "@/components/icons";
import { SITE } from "@/lib/site";
import { localizedHref, t, type Lang } from "@/lib/i18n";
import { getAddressViews } from "@/lib/localized";
import { breadcrumbSchema } from "@/lib/schema";

export default function ContactContent({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const c = tr.contact;
  const addresses = getAddressViews(lang);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tr.nav[0].label, url: localizedHref("/", lang) },
          { name: c.crumb, url: localizedHref("/contact", lang) },
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
            <span className="text-terracotta">{c.title.accent}</span>
          </>
        }
        lead={c.lead}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="container-b grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            {addresses.map((a) => (
              <div key={a.slug} className="rounded-3xl border border-sidi-ink/10 bg-paper p-7 shadow-soft">
                <h2 className="font-display text-2xl text-sidi-ink">Benti {a.cityView}</h2>
                <ul className="mt-4 space-y-3 text-ink-soft">
                  <li className="flex items-start gap-3">
                    <Pin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                    {a.street}, {a.postalCode} {a.locality}
                  </li>
                  <li>
                    <a href={a.phoneHref} className="flex items-center gap-3 font-semibold text-sidi-ink transition-colors hover:text-terracotta">
                      <Phone className="h-5 w-5 text-terracotta" />
                      {a.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-olive" />
                    {c.hoursShort}
                  </li>
                </ul>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${SITE.email}`} className="btn btn--ghost">
                {SITE.email}
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-harissa transition-colors hover:text-terracotta">
                <Instagram className="h-5 w-5" />
                {SITE.instagramHandle}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-sidi-ink/10 bg-paper p-6 shadow-soft md:p-8">
            <h2 className="font-display text-2xl text-sidi-ink">{c.formTitle}</h2>
            <div className="mt-6">
              <InquiryForm kind="contact" lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
