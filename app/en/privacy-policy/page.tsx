import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Benti processes and protects your personal data, under the GDPR.",
  alternates: {
    canonical: "/en/privacy-policy",
    languages: { fr: "/politique-confidentialite", en: "/en/privacy-policy" },
  },
  robots: { index: false, follow: true },
};

export default function PrivacyEN() {
  return (
    <>
      <PageHeader
        eyebrow="Your data"
        crumbs={[{ label: "Home", href: "/en" }, { label: "Privacy policy" }]}
        title="Privacy policy"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="container-b">
          <article className="legal-prose mx-auto max-w-3xl">
            <p>
              Benti cares deeply about your privacy. This policy explains what
              data we collect, why, and your rights under the General Data
              Protection Regulation (GDPR).
            </p>

            <h2>Data controller</h2>
            <p>
              {SITE.legalName}, reachable at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>Data we collect</h2>
            <p>We only collect the data you send us:</p>
            <ul>
              <li>
                Via the <strong>contact form</strong>: name, email, subject and
                message.
              </li>
              <li>
                Via the <strong>catering quote form</strong>: name, email, phone,
                company, event type and date, guest count, message.
              </li>
              <li>
                Anonymised <strong>browsing data</strong> via audience
                measurement tools (see the <a href="/en/cookies">cookie policy</a>).
              </li>
            </ul>

            <h2>Purposes &amp; legal basis</h2>
            <ul>
              <li>Answering your requests (legitimate interest / pre-contractual steps).</li>
              <li>Preparing a catering quote (pre-contractual steps).</li>
              <li>Improving the site and measuring traffic (consent).</li>
            </ul>

            <h2>Retention</h2>
            <p>
              Messages are kept for as long as needed to handle your request,
              then archived or deleted within a maximum of 3 years after the last
              contact.
            </p>

            <h2>Recipients</h2>
            <p>
              Your data is intended for the Benti team only. It is never sold or
              transferred. It may pass through our technical providers (hosting,
              email) strictly to deliver the service.
            </p>

            <h2>Your rights</h2>
            <p>
              You have the right to access, rectify, erase, restrict, object to
              and port your data. To exercise them, email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. You may also
              lodge a complaint with the CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              ).
            </p>

            <p className="text-sm">
              <em>Template provided for guidance, to be validated by Benti before going live.</em>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
