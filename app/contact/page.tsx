import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { Clock, Instagram, Phone, Pin } from "@/components/icons";
import { ADDRESSES, SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact — écrivez-nous",
  description:
    "Une question, une envie de traiteur, un partenariat ? Contactez Benti, restaurant tunisien à Paris 11e & 3e. Téléphone, email et formulaire.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Benti", url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <PageHeader
        eyebrow="Contact"
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
        title={
          <>
            On adore{" "}
            <span className="text-terracotta">vous lire.</span>
          </>
        }
        lead="Une question sur la carte, un projet traiteur, une collaboration presse ? Écrivez-nous, on répond vite."
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="container-b grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Coordonnées */}
          <div className="flex flex-col gap-6">
            {ADDRESSES.map((a) => (
              <div
                key={a.slug}
                className="rounded-3xl border border-sidi-ink/10 bg-paper p-7 shadow-soft"
              >
                <h2 className="font-display text-2xl text-sidi-ink">
                  Benti {a.city}
                </h2>
                <ul className="mt-4 space-y-3 text-ink-soft">
                  <li className="flex items-start gap-3">
                    <Pin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                    {a.street}, {a.postalCode} {a.locality}
                  </li>
                  <li>
                    <a
                      href={a.phoneHref}
                      className="flex items-center gap-3 font-semibold text-sidi-ink transition-colors hover:text-terracotta"
                    >
                      <Phone className="h-5 w-5 text-terracotta" />
                      {a.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-olive" />
                    Lundi – Samedi · le midi
                  </li>
                </ul>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="btn btn--ghost"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-harissa transition-colors hover:text-terracotta"
              >
                <Instagram className="h-5 w-5" />
                {SITE.instagramHandle}
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-[2rem] border border-sidi-ink/10 bg-paper p-6 shadow-soft md:p-8">
            <h2 className="font-display text-2xl text-sidi-ink">
              Envoyez-nous un message
            </h2>
            <div className="mt-6">
              <InquiryForm kind="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
