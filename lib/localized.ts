import {
  ADDRESSES,
  MAKLOUBS,
  MENU,
  type Address,
  type Dish,
  type MenuSection,
} from "./site";
import type { Lang } from "./i18n";

// -------- Makloubs --------
const MAKLOUB_EN: Record<string, string> = {
  Tunis:
    "Irresistible chicken chawarma, roasted batatas, mozzarella, salad, red onions and creamy white sauce.",
  Nabeul:
    "Marinated chicken fillet, mozzarella, grilled peppers, salad, red onions, creamy white sauce.",
  "Sidi Bou":
    "Chicken chawarma, sautéed tomatoes & onions, mozzarella, salad, red onions and perfectly spiced mayo.",
  Hammamet:
    "Homemade beef keftas, mozzarella, caramelised onions, salad and chickpea cream.",
  Bardo:
    "Golden roasted veggies, sautéed tomatoes & onions, mozzarella, salad, red onions and spiced mayo.",
  Carthage:
    "Tuna, olives, mozzarella, batatas, salad, red onions and perfectly spiced mayo. A nod to the fricassé.",
};

export function getMakloubs(lang: Lang): Dish[] {
  if (lang === "fr") return MAKLOUBS;
  return MAKLOUBS.map((d) => ({ ...d, desc: MAKLOUB_EN[d.name] ?? d.desc }));
}

// -------- Carte complète --------
type SectionTr = {
  title: string;
  intro?: string;
  note?: string;
  price?: string;
  items: Record<string, string>;
};

const MENU_EN: Record<string, SectionTr> = {
  bols: {
    title: "Sunny bowls",
    intro:
      "Bulgur or rice base & roasted veggies. A generous, colourful, Mediterranean bowl.",
    price: "€10.90",
    items: {
      "Filet de poulet mariné": "Creamy white sauce.",
      "Chawarma de poulet": "Creamy white sauce.",
      "Keftas de bœuf maison": "Chickpea cream.",
      "Veggie Habibi": "Sautéed tomatoes & onions and perfectly spiced mayo.",
    },
  },
  makloub: {
    title: "Makloub sandwich",
    intro:
      "A bread dough between pizza and pita, filled and folded. Our hero, five recipes.",
    note: "Makloub alone €9.90 · Makloub + batatas €10.90",
    items: MAKLOUB_EN,
  },
  gourmands: {
    title: "For the greedy",
    intro: "We push the pleasure one notch further.",
    items: {
      "Extra viande": "For big appetites. +€3",
      "Extra légumes · batatas · mozza · condiments": "Build it your way. +€1 each",
    },
  },
  batatas: {
    title: "Batatas",
    intro: "Baby potatoes, garlic & parsley. Crispy outside, soft inside.",
    price: "€3",
    items: { "Batatas maison": "Baby potatoes, garlic, parsley." },
  },
  boissons: {
    title: "Our drinks",
    intro: "To go with it, from homemade to the classics.",
    items: {
      "Boisson maison": "The house recipe.",
      Sodas: "The classics, ice-cold.",
    },
  },
  desserts: {
    title: "Dessert",
    intro: "Depending on the mood. The sweet touch that closes the journey.",
    price: "€4",
    items: { "Dessert du jour": "Depending on the mood." },
  },
};

// Renomme les plats en EN quand pertinent (garde les noms propres identiques).
const DISH_NAME_EN: Record<string, string> = {
  "Filet de poulet mariné": "Marinated chicken fillet",
  "Chawarma de poulet": "Chicken chawarma",
  "Keftas de bœuf maison": "Homemade beef keftas",
  "Extra viande": "Extra meat",
  "Extra légumes · batatas · mozza · condiments":
    "Extra veggies · batatas · mozza · toppings",
  "Batatas maison": "Homemade batatas",
  "Boisson maison": "Homemade drink",
  "Dessert du jour": "Dessert of the day",
};

export function getMenu(lang: Lang): MenuSection[] {
  if (lang === "fr") return MENU;
  return MENU.map((section) => {
    const tr = MENU_EN[section.id];
    if (!tr) return section;
    return {
      ...section,
      title: tr.title,
      intro: tr.intro ?? section.intro,
      note: tr.note ?? section.note,
      price: tr.price ?? section.price,
      items: section.items.map((item) => ({
        ...item,
        name: DISH_NAME_EN[item.name] ?? item.name,
        desc: tr.items[item.name] ?? item.desc,
      })),
    };
  });
}

// -------- Adresses (vue localisée pour l'affichage) --------
export type AddressView = Address & {
  cityView: string;
  hoursView: { days: string; slots: string[] }[];
};

const DAYS_EN: Record<string, string> = {
  "Lundi – Vendredi": "Monday – Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday",
};
const CITY_EN: Record<string, string> = {
  "Paris 11e": "Paris 11",
  "Paris 3e": "Paris 3",
};

export function getAddressView(a: Address, lang: Lang): AddressView {
  if (lang === "fr") return { ...a, cityView: a.city, hoursView: a.hours };
  return {
    ...a,
    cityView: CITY_EN[a.city] ?? a.city,
    hoursView: a.hours.map((h) => ({
      days: DAYS_EN[h.days] ?? h.days,
      slots: h.slots.map((s) => (s === "Fermé" ? "Closed" : s)),
    })),
  };
}

export function getAddressViews(lang: Lang): AddressView[] {
  return ADDRESSES.map((a) => getAddressView(a, lang));
}

// -------- Avis / presse --------
import { TESTIMONIALS, PRESS, type Testimonial } from "./reviews";

const TESTIMONIALS_EN: Testimonial[] = [
  {
    quote:
      "A wonderful find! Tasty, generous cooking prepared with care. The flavours are authentic and well balanced, every dish showcases Tunisian specialities.",
    author: "djam djamel",
    meta: "Local Guide · Dec. 2025",
    rating: 5,
    avatar: "/reviews/profiles/djam.jpg",
  },
  {
    quote:
      "The discovery of the year! Honestly the best makloub sandwich in Paris, and in Tunisia too. Fresh, homemade produce, and the desserts are a treat.",
    author: "Houssem Khanfir",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/houssem.jpg",
  },
  {
    quote:
      "Excellent makloub! Homemade bread, marinated chicken, homemade harissa… For €10.90 with the potatoes you're more than full. I'll definitely be back!",
    author: "JL Honda",
    meta: "Local Guide · 1,911 photos",
    rating: 5,
    avatar: "/reviews/profiles/jl.jpg",
  },
  {
    quote:
      "So good! We had two menus, one chicken, one merguez: an explosion of flavour. The potatoes are delicious and the team young, dynamic and welcoming.",
    author: "Olfa Mzita",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/olfa.jpg",
  },
  {
    quote:
      "Unbeatable value! The staff is lovely, especially the lady at the counter who greets you with a big smile. You feel at home straight away.",
    author: "Hind Yamini",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/hind.jpg",
  },
  {
    quote:
      "The Makloub + batatas menu with the homemade Benti melon drink: I really loved it, it was so good! I highly recommend this place.",
    author: "Segui Ryan",
    meta: "Local Guide · July 2025",
    rating: 5,
    avatar: "/reviews/profiles/ryan.jpg",
  },
  {
    quote:
      "Delicious Tunisian sandwiches! The manager is adorable and the service is quick. There are a few tables to eat in. Go for it, it's truly delicious!",
    author: "Jeanne Le Nezet",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/jeanne.jpg",
  },
  {
    quote:
      "Impeccable, their sandwiches and dishes are so good. Welcoming, they take the time to chat with customers — a real change and a pleasure.",
    author: "Chamsou Merouani",
    meta: "Local Guide · 2,247 photos",
    rating: 5,
    avatar: "/reviews/profiles/chamsou.jpg",
  },
  {
    quote:
      "A warm welcome, the lady in charge is very friendly. Beautiful decoration: a real trip to Tunisia, to childhood, to the houses of Sidi Bou Saïd.",
    author: "Hayfa BTH",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/hayfa.jpg",
  },
];

export function getTestimonials(lang: Lang): Testimonial[] {
  return lang === "en" ? TESTIMONIALS_EN : TESTIMONIALS;
}

const PRESS_EN = [
  { name: "Le Bonbon", quote: "The makloub everyone agrees on." },
  { name: "Enlarge your Paris", quote: "A breeze of Sidi Bou Saïd over eastern Paris." },
  { name: "Sortir à Paris", quote: "The Tunisian street food we were waiting for." },
];

export function getPress(lang: Lang) {
  return lang === "en" ? PRESS_EN : PRESS;
}
