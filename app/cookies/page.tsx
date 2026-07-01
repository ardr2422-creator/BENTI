import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Quels cookies utilise le site Benti et comment gérer votre consentement.",
  alternates: {
    canonical: "/cookies",
    languages: { fr: "/cookies", en: "/en/cookies" },
  },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cookies"
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Cookies" }]}
        title="Politique de cookies"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="container-b">
          <article className="legal-prose mx-auto max-w-3xl">
            <p>
              Un cookie est un petit fichier déposé sur votre appareil lors de la
              visite d&apos;un site. Voici comment Benti les utilise, et comment
              vous gardez la main.
            </p>

            <h2>Les cookies que nous utilisons</h2>
            <h3>Cookies essentiels</h3>
            <p>
              Nécessaires au bon fonctionnement du site (mémorisation de votre
              choix de consentement, sécurité). Ils ne peuvent pas être
              désactivés et ne nécessitent pas votre accord.
            </p>
            <h3>Cookies de mesure d&apos;audience</h3>
            <p>
              Ils nous aident à comprendre comment le site est utilisé afin de
              l&apos;améliorer (pages vues, parcours). Ils ne sont déposés
              qu&apos;avec votre consentement.
            </p>

            <h2>Votre consentement</h2>
            <p>
              Lors de votre première visite, un bandeau vous permet d&apos;accepter
              l&apos;ensemble des cookies ou de vous limiter aux cookies
              essentiels. Votre choix est conservé dans votre navigateur et vous
              pouvez le modifier à tout moment en effaçant les données du site.
            </p>

            <h2>Gérer les cookies depuis votre navigateur</h2>
            <p>
              Vous pouvez configurer votre navigateur pour bloquer ou supprimer
              les cookies : Chrome, Firefox, Safari et Edge proposent tous ces
              réglages dans leurs paramètres de confidentialité.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Le consentement est conservé jusqu&apos;à 6 mois. Passé ce délai, le
              bandeau vous est de nouveau présenté.
            </p>

            <p className="text-sm">
              <em>
                Liste des cookies à finaliser selon les outils réellement
                déployés (mesure d&apos;audience, cartographie) avant mise en
                production.
              </em>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
