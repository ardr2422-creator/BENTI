import PageHeader from "@/components/PageHeader";
import AddressCard from "@/components/AddressCard";
import JsonLd from "@/components/JsonLd";
import { ADDRESSES, SITE } from "@/lib/site";
import { localizedHref, t, type Lang } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";

export default function AdressesContent({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const a = tr.adresses;
  const lead = a.leadTpl
    .replace("{rating}", SITE.rating.value)
    .replace("{count}", String(SITE.rating.count));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tr.nav[0].label, url: localizedHref("/", lang) },
          { name: a.crumb, url: localizedHref("/adresses", lang) },
        ])}
      />
      <PageHeader
        eyebrow={a.eyebrow}
        crumbs={[
          { label: tr.nav[0].label, href: localizedHref("/", lang) },
          { label: a.crumb },
        ]}
        title={
          <>
            {a.title.pre}
            <span className="text-terracotta">{a.title.accent}</span>
          </>
        }
        lead={lead}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="container-b grid gap-8 md:grid-cols-2">
          {ADDRESSES.map((addr) => (
            <AddressCard key={addr.slug} address={addr} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}
