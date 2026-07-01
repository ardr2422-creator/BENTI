import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AddressCard from "@/components/AddressCard";
import JsonLd from "@/components/JsonLd";
import { ADDRESSES, SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nos adresses — Benti Paris 11e & 3e",
  description:
    "Retrouvez Benti à Paris : 31 rue Léon Frot (11e) et 16 rue des Filles du Calvaire (3e). Horaires, téléphone, itinéraire et commande à emporter.",
  alternates: { canonical: "/adresses" },
  openGraph: { title: "Nos adresses — Benti Paris", url: "/adresses" },
};

export default function AdressesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Nos adresses", url: "/adresses" },
        ])}
      />
      <PageHeader
        eyebrow="Nous trouver"
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Nos adresses" }]}
        title={
          <>
            Deux maisons Benti,{" "}
            <span className="text-terracotta">au cœur de Paris.</span>
          </>
        }
        lead={`Léon Frot dans le 11e, Filles du Calvaire dans le 3e. Même cuisine, même accueil. Ouvert du lundi au samedi, le midi. Noté ${SITE.rating.value}/5 par ${SITE.rating.count} clients.`}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="container-b grid gap-8 md:grid-cols-2">
          {ADDRESSES.map((a) => (
            <AddressCard key={a.slug} address={a} />
          ))}
        </div>
      </section>
    </>
  );
}
