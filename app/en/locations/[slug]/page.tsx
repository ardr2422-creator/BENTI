import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AddressContent from "@/components/pages/AddressContent";
import { ADDRESSES } from "@/lib/site";
import { getAddressView } from "@/lib/localized";

export function generateStaticParams() {
  return ADDRESSES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ADDRESSES.find((x) => x.slug === slug);
  if (!a) return {};
  const v = getAddressView(a, "en");
  return {
    title: `Benti ${v.cityView} — ${a.street}`,
    description: `Benti Tunisian restaurant ${v.cityView}: ${a.street}, ${a.postalCode} ${a.locality}. Homemade makloubs and sunny bowls. Hours, phone (${a.phone}) and directions.`,
    alternates: {
      canonical: `/en/locations/${a.slug}`,
      languages: {
        fr: `/adresses/${a.slug}`,
        en: `/en/locations/${a.slug}`,
      },
    },
    openGraph: {
      title: `Benti ${v.cityView}`,
      url: `/en/locations/${a.slug}`,
      locale: "en_GB",
      images: [{ url: a.photo }],
    },
  };
}

export default async function LocationPageEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const address = ADDRESSES.find((x) => x.slug === slug);
  if (!address) notFound();
  return <AddressContent address={address} lang="en" />;
}
