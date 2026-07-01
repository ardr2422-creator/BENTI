import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import { t } from "@/lib/i18n";

const tr = t("en");

export const metadata: Metadata = {
  title: "Benti · The makloub of Sidi Bou Saïd, homemade in Paris",
  description:
    "Benti, Tunisian restaurant in Paris (11th & 3rd). The hero makloub of Sidi Bou Saïd, sunny bowls and a catering service. Homemade with love by Abir & Yassine.",
  alternates: {
    canonical: "/en",
    languages: { fr: "/", en: "/en" },
  },
  openGraph: {
    title: "Benti · The makloub of Sidi Bou Saïd, homemade in Paris",
    description: tr.hero.lead,
    url: "/en",
    locale: "en_GB",
  },
};

export default function HomePageEN() {
  return <HomeContent lang="en" />;
}
