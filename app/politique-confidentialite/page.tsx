import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Benti traite et protège vos données personnelles, conformément au RGPD.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Vos données"
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
        title="Politique de confidentialité"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="container-b">
          <article className="legal-prose mx-auto max-w-3xl">
            <p>
              Benti attache une grande importance à la protection de votre vie
              privée. Cette politique explique quelles données nous collectons,
              pourquoi, et quels sont vos droits, conformément au Règlement
              général sur la protection des données (RGPD).
            </p>

            <h2>Responsable du traitement</h2>
            <p>
              {SITE.legalName}, joignable à l&apos;adresse{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez :</p>
            <ul>
              <li>
                Via le <strong>formulaire de contact</strong> : nom, email,
                sujet et contenu du message.
              </li>
              <li>
                Via le <strong>formulaire de devis traiteur</strong> : nom,
                email, téléphone, société, type et date d&apos;événement, nombre
                de convives, message.
              </li>
              <li>
                Des <strong>données de navigation</strong> anonymisées via les
                outils de mesure d&apos;audience (voir la{" "}
                <a href="/cookies">politique de cookies</a>).
              </li>
            </ul>

            <h2>Finalités &amp; base légale</h2>
            <ul>
              <li>Répondre à vos demandes (intérêt légitime / mesures précontractuelles).</li>
              <li>Établir un devis traiteur (mesures précontractuelles).</li>
              <li>Améliorer le site et mesurer l&apos;audience (consentement).</li>
            </ul>

            <h2>Durée de conservation</h2>
            <p>
              Les messages sont conservés le temps nécessaire au traitement de
              votre demande, puis archivés ou supprimés dans un délai maximum de
              3 ans après le dernier contact.
            </p>

            <h2>Destinataires</h2>
            <p>
              Vos données sont destinées aux seules équipes de Benti. Elles ne
              sont ni vendues ni cédées. Elles peuvent transiter par nos
              prestataires techniques (hébergement, envoi d&apos;emails) dans le
              strict cadre de la fourniture du service.
            </p>

            <h2>Vos droits</h2>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de
              portabilité de vos données. Pour les exercer, écrivez à{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL
              (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
            </p>

            <p className="text-sm">
              <em>
                Modèle de politique fourni à titre indicatif, à faire valider par
                Benti avant mise en production.
              </em>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
