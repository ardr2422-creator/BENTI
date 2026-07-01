import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/SiteMotion";
import CookieBanner from "@/components/CookieBanner";
import MobileActionBar from "@/components/MobileActionBar";
import { SITE } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Benti · Le makloub de Sidi Bou Saïd, fait maison à Paris",
    template: "%s · Benti",
  },
  description:
    "Benti, restaurant tunisien à Paris (11e & 3e). Le makloub héros de Sidi Bou Saïd, des bols ensoleillés et un service traiteur. Fait maison avec amour par Abir & Yassine.",
  keywords: [
    "makloub Paris",
    "restaurant tunisien Paris",
    "Benti",
    "Sidi Bou Saïd",
    "traiteur tunisien Paris",
    "street food tunisienne",
  ],
  authors: [{ name: "Benti" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: "Benti · Le makloub de Sidi Bou Saïd, fait maison à Paris",
    description:
      "Le makloub héros, des bols ensoleillés et un service traiteur. Cuisine tunisienne fait maison, à Paris 11e & 3e.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benti · Le makloub de Sidi Bou Saïd",
    description: "Cuisine tunisienne fait maison, à Paris 11e & 3e.",
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf5ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <SiteMotion />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sidi-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Aller au contenu
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <CookieBanner />
      </body>
    </html>
  );
}
