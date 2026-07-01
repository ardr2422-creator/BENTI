// -----------------------------------------------------------------------------
// Benti — source de vérité du site (marque, adresses/NAP, carte, navigation)
// -----------------------------------------------------------------------------

export const SITE = {
  name: "Benti",
  legalName: "Benti Paris",
  tagline: "Homemade with love",
  baseline: "Le makloub de Sidi Bou Saïd, fait maison à Paris.",
  url: "https://benti-paris.fr",
  locale: "fr_FR",
  instagram: "https://www.instagram.com/benti_paris/",
  instagramHandle: "@benti_paris",
  priceRange: "€",
  cuisine: ["Tunisienne", "Méditerranéenne", "Street food"],
  email: "contact@benti-paris.fr", // à confirmer
  // Note social réelle (Google) — source avis_benti.txt, extraction 01/07/2026.
  rating: { value: "4.8", count: 669, source: "Google" },
  // Aucun lien de livraison public trouvé au crawl : Benti fonctionne sur place
  // & à emporter. Brancher Uber Eats / Deliveroo ici quand disponibles.
  delivery: {
    ubereats: null as string | null,
    deliveroo: null as string | null,
  },
} as const;

export type Address = {
  slug: string;
  label: string;
  city: string;
  street: string;
  postalCode: string;
  locality: string;
  region: string;
  phone: string;
  phoneHref: string;
  geo: { lat: number; lng: number };
  mapEmbed: string;
  mapLink: string;
  neighborhood: string;
  hours: { days: string; slots: string[] }[];
  photo: string;
};

// Horaires réels (source publique RestaurantGuru / Google, juin 2026).
// Benti est un spot du midi : service le déjeuner, à emporter ou sur place.
const HOURS = [
  { days: "Lundi – Vendredi", slots: ["11:45 – 15:00"] },
  { days: "Samedi", slots: ["12:00 – 16:00"] },
  { days: "Dimanche", slots: ["Fermé"] },
];

export const ADDRESSES: Address[] = [
  {
    slug: "paris-11",
    label: "Paris 11 — Léon Frot",
    city: "Paris 11e",
    street: "31 rue Léon Frot",
    postalCode: "75011",
    locality: "Paris",
    region: "Île-de-France",
    phone: "01 42 72 12 01",
    phoneHref: "tel:+33142721201",
    geo: { lat: 48.8557, lng: 2.3855 },
    mapEmbed:
      "https://www.google.com/maps?q=31+rue+L%C3%A9on+Frot+75011+Paris&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=31+rue+L%C3%A9on+Frot+75011+Paris",
    neighborhood: "Charonne · Voltaire",
    hours: HOURS,
    photo: "/images/restaurant/paris-11.webp",
  },
  {
    slug: "paris-3",
    label: "Paris 3 — Filles du Calvaire",
    city: "Paris 3e",
    street: "16 rue des Filles du Calvaire",
    postalCode: "75003",
    locality: "Paris",
    region: "Île-de-France",
    phone: "01 86 04 19 15",
    phoneHref: "tel:+33186041915",
    geo: { lat: 48.8632, lng: 2.3661 },
    mapEmbed:
      "https://www.google.com/maps?q=16+rue+des+Filles+du+Calvaire+75003+Paris&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=16+rue+des+Filles+du+Calvaire+75003+Paris",
    neighborhood: "Haut-Marais · Filles du Calvaire",
    hours: HOURS,
    photo: "/images/restaurant/paris-3.webp",
  },
];

// -----------------------------------------------------------------------------
// La carte
// -----------------------------------------------------------------------------

export type Badge = "best" | "veggie" | "tradi" | "hot";

export type Dish = {
  name: string;
  desc: string;
  badges?: Badge[];
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  price?: string;
  note?: string;
  items: Dish[];
};

export const BADGE_LABEL: Record<Badge, string> = {
  best: "Best-seller",
  veggie: "Veggie",
  tradi: "Le tradi",
  hot: "Piquant",
};

// Les makloubs héros (sandwich makloub). Pas de photo par recette côté /infos :
// cartes couleur (identité forte, honnête). Un theme par recette.
export const MAKLOUBS: Dish[] = [
  {
    name: "Tunis",
    desc: "Chawarma de poulet irrésistible, batatas rôties, mozzarella, salade, oignons rouges et sauce blanche onctueuse.",
    badges: ["best"],
  },
  {
    name: "Nabeul",
    desc: "Filet de poulet mariné, mozzarella, poivrons grillés, salade, oignons rouges, sauce blanche onctueuse.",
    badges: ["tradi"],
  },
  {
    name: "Sidi Bou",
    desc: "Chawarma de poulet, poêlée de tomates oignons, mozzarella, salade, oignons rouges et mayo parfaitement épicée.",
  },
  {
    name: "Hammamet",
    desc: "Keftas de bœuf maison, mozzarella, oignons confits, salade et crème de pois chiche.",
  },
  {
    name: "Bardo",
    desc: "Légumes rôtis bien dorés, poêlée de tomates oignons, mozzarella, salade, oignons rouges et mayo épicée.",
    badges: ["veggie"],
  },
  {
    name: "Carthage",
    desc: "Thon, olives, mozzarella, batatas, salade, oignons rouges et mayo parfaitement épicée. Le clin d'œil au fricassé.",
  },
];

export const MENU: MenuSection[] = [
  {
    id: "bols",
    title: "Bols ensoleillés",
    price: "10,90 €",
    intro: "Base boulghour ou riz & légumes rôtis. Un bol généreux, coloré, méditerranéen.",
    items: [
      { name: "Filet de poulet mariné", desc: "Sauce blanche onctueuse." },
      { name: "Chawarma de poulet", desc: "Sauce blanche onctueuse.", badges: ["best"] },
      { name: "Keftas de bœuf maison", desc: "Crème de pois chiche." },
      {
        name: "Veggie Habibi",
        desc: "Poêlée de tomates oignons & mayo parfaitement épicée.",
        badges: ["veggie"],
      },
    ],
  },
  {
    id: "makloub",
    title: "Sandwich makloub",
    intro:
      "Une pâte à pain entre la pizza et la pita, garnie et pliée. Notre héros, cinq recettes.",
    note: "Makloub seul 9,90 € · Makloub + batatas 10,90 €",
    items: MAKLOUBS,
  },
  {
    id: "gourmands",
    title: "Pour les gourmands",
    intro: "On pousse le plaisir un cran plus loin.",
    items: [
      { name: "Extra viande", desc: "Pour les grosses faims. +3 €" },
      {
        name: "Extra légumes · batatas · mozza · condiments",
        desc: "Composez à votre goût. +1 € l'extra",
      },
    ],
  },
  {
    id: "batatas",
    title: "Batatas",
    price: "3 €",
    intro: "Pommes grenailles, ail & persil. Croustillantes dehors, fondantes dedans.",
    items: [{ name: "Batatas maison", desc: "Pommes grenailles ail persil." }],
  },
  {
    id: "boissons",
    title: "Nos boissons",
    intro: "Pour accompagner, du fait maison aux classiques.",
    items: [
      { name: "Boisson maison", desc: "La recette de la maison.", badges: ["best"], },
      { name: "Sodas", desc: "Les classiques bien frais." },
    ],
  },
  {
    id: "desserts",
    title: "Dessert",
    price: "4 €",
    intro: "En fonction du mood. La touche sucrée qui clôt le voyage.",
    items: [{ name: "Dessert du jour", desc: "En fonction du mood." }],
  },
];

export const MENU_OPTIONS = ["Sans gluten", "Vegan", "Version piquante 🔥"];
export const MENU_FOOTNOTE = "Prix TTC · service compris";

// -----------------------------------------------------------------------------
// Vidéos (slider) — déposez d'autres fichiers dans /public/video pour enrichir
// -----------------------------------------------------------------------------
export const VIDEOS = [
  {
    src: "/video/presentation-abir.mp4",
    title: "Abir vous raconte Benti",
    label: "Rencontre",
  },
];

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "La carte", href: "/carte" },
  { label: "Traiteur", href: "/traiteur" },
  { label: "Nos adresses", href: "/adresses" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_NAV = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Cookies", href: "/cookies" },
];
