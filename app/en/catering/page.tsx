import type { Metadata } from "next";
import TraiteurContent from "@/components/pages/TraiteurContent";
import { t } from "@/lib/i18n";

const c = t("en").traiteur;

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDesc,
  alternates: {
    canonical: "/en/catering",
    languages: { fr: "/traiteur", en: "/en/catering" },
  },
  openGraph: { title: "Benti catering", url: "/en/catering", locale: "en_GB" },
};

export default function CateringPageEN() {
  return <TraiteurContent lang="en" />;
}
