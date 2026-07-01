import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ADDRESSES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Legal notice for the Benti website — Tunisian restaurant in Paris.",
  alternates: {
    canonical: "/en/legal-notice",
    languages: { fr: "/mentions-legales", en: "/en/legal-notice" },
  },
  robots: { index: false, follow: true },
};

export default function LegalNoticeEN() {
  return (
    <>
      <PageHeader
        eyebrow="Legal information"
        crumbs={[{ label: "Home", href: "/en" }, { label: "Legal notice" }]}
        title="Legal notice"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="container-b">
          <article className="legal-prose mx-auto max-w-3xl">
            <p>
              This page sets out the information relating to the publisher and
              the host of this website.
            </p>

            <h2>Publisher</h2>
            <p>
              <strong>{SITE.legalName}</strong> — Tunisian restaurant.
              <br />
              Legal form: <em>to be completed</em>. Company number (SIRET):{" "}
              <em>to be completed</em>.
            </p>
            <p>Establishments:</p>
            <ul>
              {ADDRESSES.map((a) => (
                <li key={a.slug}>
                  {a.city} — {a.street}, {a.postalCode} {a.locality}. Phone{" "}
                  <a href={a.phoneHref}>{a.phone}</a>.
                </li>
              ))}
            </ul>
            <p>
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <br />
              Publication director: Abir &amp; Yassine.
            </p>

            <h2>Host</h2>
            <p>
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              <br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content on this site (text, the Benti logo, photographs,
              videos, graphic elements) is protected by intellectual property
              law. Any reproduction without prior written consent is prohibited.
              Some photographs come from Benti customers (Instagram stories
              reposted with their consent). For any removal request, email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>Personal data &amp; cookies</h2>
            <p>
              How we process your data is described in our{" "}
              <a href="/en/privacy-policy">privacy policy</a> and our{" "}
              <a href="/en/cookies">cookie policy</a>.
            </p>

            <p className="text-sm">
              <em>
                Some legal details (company number, legal form, insurance) are to
                be completed by Benti before going live.
              </em>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
