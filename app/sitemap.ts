import type { MetadataRoute } from "next";
import { ADDRESSES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Routes FR + équivalents EN (site bilingue)
  const paths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/carte", priority: 0.9, freq: "monthly" },
    { path: "/traiteur", priority: 0.8, freq: "monthly" },
    { path: "/adresses", priority: 0.7, freq: "monthly" },
    ...ADDRESSES.map((a) => ({
      path: `/adresses/${a.slug}`,
      priority: 0.8,
      freq: "monthly" as const,
    })),
    { path: "/contact", priority: 0.6, freq: "yearly" },
    { path: "/mentions-legales", priority: 0.2, freq: "yearly" },
    { path: "/politique-confidentialite", priority: 0.2, freq: "yearly" },
    { path: "/cookies", priority: 0.2, freq: "yearly" },
  ];

  const enMap: Record<string, string> = {
    "/": "/en",
    "/carte": "/en/menu",
    "/traiteur": "/en/catering",
    "/adresses": "/en/locations",
    "/adresses/paris-11": "/en/locations/paris-11",
    "/adresses/paris-3": "/en/locations/paris-3",
    "/contact": "/en/contact",
  };

  const fr: MetadataRoute.Sitemap = paths.map((p) => {
    const en = enMap[p.path];
    return {
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
      ...(en
        ? {
            alternates: {
              languages: {
                fr: `${SITE.url}${p.path}`,
                en: `${SITE.url}${en}`,
              },
            },
          }
        : {}),
    };
  });

  const en: MetadataRoute.Sitemap = Object.values(enMap).map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...fr, ...en];
}
