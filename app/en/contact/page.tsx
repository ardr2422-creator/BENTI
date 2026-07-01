import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";
import { t } from "@/lib/i18n";

const c = t("en").contact;

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDesc,
  alternates: {
    canonical: "/en/contact",
    languages: { fr: "/contact", en: "/en/contact" },
  },
  openGraph: { title: "Contact — Benti", url: "/en/contact", locale: "en_GB" },
};

export default function ContactPageEN() {
  return <ContactContent lang="en" />;
}
