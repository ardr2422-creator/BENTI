import { ADDRESSES, MENU, SITE, type Address } from "./site";

// Conversion horaires "11:30 – 22:30" → openingHoursSpecification schema.org
const DAY_MAP: Record<string, string[]> = {
  "Lundi – Vendredi": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Samedi: ["Saturday"],
  Dimanche: ["Sunday"],
};

function openingSpec(a: Address) {
  const spec: Record<string, unknown>[] = [];
  a.hours.forEach((h) => {
    if (h.slots[0] === "Fermé") return;
    const days = DAY_MAP[h.days] || [];
    h.slots.forEach((slot) => {
      const [opens, closes] = slot.split("–").map((s) =>
        s.trim().replace(/\s/g, "").replace("h", ":")
      );
      spec.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens,
        closes,
      });
    });
  });
  return spec;
}

export function restaurantSchema(a: Address) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE.url}/adresses/${a.slug}#restaurant`,
    name: `${SITE.name} — ${a.city}`,
    image: `${SITE.url}${a.photo}`,
    url: `${SITE.url}/adresses/${a.slug}`,
    servesCuisine: SITE.cuisine,
    priceRange: SITE.priceRange,
    telephone: a.phone,
    acceptsReservations: "False",
    hasMenu: `${SITE.url}/carte`,
    currenciesAccepted: "EUR",
    paymentAccepted: "Espèces, Carte bancaire",
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.locality,
      postalCode: a.postalCode,
      addressRegion: a.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: a.geo.lat,
      longitude: a.geo.lng,
    },
    openingHoursSpecification: openingSpec(a),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: "5",
    },
    sameAs: [SITE.instagram],
  };
}

export function localBusinessSchema(a: Address) {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${SITE.url}/adresses/${a.slug}#localbusiness`,
    name: `${SITE.name} ${a.city}`,
    image: `${SITE.url}${a.photo}`,
    url: `${SITE.url}/adresses/${a.slug}`,
    telephone: a.phone,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.locality,
      postalCode: a.postalCode,
      addressRegion: a.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: a.geo.lat,
      longitude: a.geo.lng,
    },
    openingHoursSpecification: openingSpec(a),
    sameAs: [SITE.instagram],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/brand/logo.png`,
    sameAs: [SITE.instagram],
    founder: [
      { "@type": "Person", name: "Abir" },
      { "@type": "Person", name: "Yassine" },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE.url}#organization` },
  };
}

// Restaurant "chaîne" 2 adresses pour la home
export function homeRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE.url}#restaurant`,
    name: SITE.name,
    description: SITE.baseline,
    image: `${SITE.url}/images/restaurant/resto-2.webp`,
    url: SITE.url,
    servesCuisine: SITE.cuisine,
    priceRange: SITE.priceRange,
    hasMenu: `${SITE.url}/carte`,
    acceptsReservations: "False",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: "5",
    },
    sameAs: [SITE.instagram],
    department: ADDRESSES.map((a) => ({
      "@type": "Restaurant",
      name: `${SITE.name} — ${a.city}`,
      telephone: a.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: a.street,
        addressLocality: a.locality,
        postalCode: a.postalCode,
        addressCountry: "FR",
      },
    })),
  };
}

export function menuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE.url}/carte#menu`,
    name: "La carte Benti",
    inLanguage: "fr-FR",
    hasMenuSection: MENU.map((section) => ({
      "@type": "MenuSection",
      name: section.title,
      description: section.intro,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.desc,
      })),
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.url}`,
    })),
  };
}
