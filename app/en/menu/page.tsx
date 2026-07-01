import type { Metadata } from "next";
import CarteContent from "@/components/pages/CarteContent";
import { t } from "@/lib/i18n";

const c = t("en").carte;

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDesc,
  alternates: {
    canonical: "/en/menu",
    languages: { fr: "/carte", en: "/en/menu" },
  },
  openGraph: { title: "Benti menu", url: "/en/menu", locale: "en_GB" },
};

export default function MenuPageEN() {
  return <CarteContent lang="en" />;
}
