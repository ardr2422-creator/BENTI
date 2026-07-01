import type { Metadata } from "next";
import AdressesContent from "@/components/pages/AdressesContent";
import { t } from "@/lib/i18n";

const c = t("en").adresses;

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDesc,
  alternates: {
    canonical: "/en/locations",
    languages: { fr: "/adresses", en: "/en/locations" },
  },
  openGraph: { title: "Our locations — Benti Paris", url: "/en/locations", locale: "en_GB" },
};

export default function LocationsPageEN() {
  return <AdressesContent lang="en" />;
}
