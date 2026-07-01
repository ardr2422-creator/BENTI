import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en" },
  },
};

export default function HomePage() {
  return <HomeContent lang="fr" />;
}
