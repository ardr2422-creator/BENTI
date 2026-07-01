import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Which cookies the Benti website uses and how to manage your consent.",
  alternates: {
    canonical: "/en/cookies",
    languages: { fr: "/cookies", en: "/en/cookies" },
  },
  robots: { index: false, follow: true },
};

export default function CookiesEN() {
  return (
    <>
      <PageHeader
        eyebrow="Cookies"
        crumbs={[{ label: "Home", href: "/en" }, { label: "Cookie policy" }]}
        title="Cookie policy"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="container-b">
          <article className="legal-prose mx-auto max-w-3xl">
            <p>
              A cookie is a small file placed on your device when you visit a
              website. Here is how Benti uses them, and how you stay in control.
            </p>

            <h2>The cookies we use</h2>
            <h3>Essential cookies</h3>
            <p>
              Necessary for the site to work (remembering your consent choice,
              security). They cannot be disabled and don't require your consent.
            </p>
            <h3>Audience measurement cookies</h3>
            <p>
              They help us understand how the site is used so we can improve it.
              They are only set with your consent.
            </p>

            <h2>Your consent</h2>
            <p>
              On your first visit, a banner lets you accept all cookies or limit
              yourself to essential ones. Your choice is stored in your browser
              and you can change it at any time by clearing the site data.
            </p>

            <h2>Managing cookies from your browser</h2>
            <p>
              You can set your browser to block or delete cookies: Chrome,
              Firefox, Safari and Edge all offer these settings in their privacy
              preferences.
            </p>

            <h2>Retention</h2>
            <p>Consent is kept for up to 6 months. After that, the banner is shown again.</p>

            <p className="text-sm">
              <em>Cookie list to be finalised based on the tools actually deployed before going live.</em>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
