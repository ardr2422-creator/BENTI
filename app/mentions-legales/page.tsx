import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ADDRESSES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Benti — restaurant tunisien à Paris.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
        title="Mentions légales"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="container-b">
          <article className="legal-prose mx-auto max-w-3xl">
            <p>
              Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
              dans l&apos;économie numérique, voici les informations relatives à
              l&apos;éditeur et à l&apos;hébergeur du présent site.
            </p>

            <h2>Éditeur du site</h2>
            <p>
              <strong>{SITE.legalName}</strong>
              <br />
              Restaurant tunisien.
              <br />
              Forme juridique : <em>à compléter</em> — Capital social :{" "}
              <em>à compléter</em>.
              <br />
              SIRET : <em>à compléter</em> — RCS / TVA intracommunautaire :{" "}
              <em>à compléter</em>.
            </p>
            <p>
              Adresses des établissements :
            </p>
            <ul>
              {ADDRESSES.map((a) => (
                <li key={a.slug}>
                  {a.city} — {a.street}, {a.postalCode} {a.locality}. Tél.{" "}
                  <a href={a.phoneHref}>{a.phone}</a>.
                </li>
              ))}
            </ul>
            <p>
              Email : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <br />
              Directeur / directrice de la publication : Abir &amp; Yassine.
            </p>

            <h2>Hébergeur</h2>
            <p>
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              <br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus (textes, logo Benti, photographies,
              vidéos, éléments graphiques) présents sur ce site est protégé par
              le droit de la propriété intellectuelle. Toute reproduction ou
              représentation, totale ou partielle, sans autorisation écrite
              préalable est interdite.
            </p>
            <p>
              Certaines photographies proviennent des clients de Benti (stories
              Instagram repostées avec leur accord). Pour toute demande de
              retrait, écrivez à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>Données personnelles &amp; cookies</h2>
            <p>
              Le traitement de vos données est décrit dans notre{" "}
              <a href="/politique-confidentialite">
                politique de confidentialité
              </a>{" "}
              et notre{" "}
              <a href="/cookies">politique de cookies</a>.
            </p>

            <h2>Crédits</h2>
            <p>
              Conception &amp; développement : démonstration réalisée pour Benti.
              Cartographie : Google Maps.
            </p>

            <p className="text-sm">
              <em>
                Certaines informations légales (SIRET, forme juridique, mentions
                d&apos;assurance) sont à compléter par Benti avant mise en
                production.
              </em>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
