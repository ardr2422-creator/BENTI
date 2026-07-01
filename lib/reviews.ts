// Captures d'stories Instagram (reposts clients) présentes dans /infos.
// Ce sont de vraies preuves sociales — utilisées dans la section "Ils parlent de Benti".
export const STORY_IMAGES: string[] = Array.from({ length: 57 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/reviews/story_${n}.jpg`;
});

// -----------------------------------------------------------------------------
// Avis Google RÉELS (source : avis_benti.txt, extraction 01/07/2026).
// Note globale réelle : 4,8 ★ · 669 avis. Photos de profil dans /reviews/profiles.
// Textes fidèles aux avis d'origine (troncatures « …Plus » retirées proprement).
// -----------------------------------------------------------------------------
export type Testimonial = {
  quote: string;
  author: string;
  meta: string;
  rating: number;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Très belle découverte ! Une cuisine savoureuse, généreuse et préparée avec soin. Les saveurs sont authentiques et bien équilibrées, chaque plat met en valeur les spécialités tunisiennes.",
    author: "djam djamel",
    meta: "Local Guide · déc. 2025",
    rating: 5,
    avatar: "/reviews/profiles/djam.jpg",
  },
  {
    quote:
      "La découverte de l'année ! Franchement le meilleur sandwich makloub sur Paris, et sur la Tunisie aussi. Produits frais, fait maison, et les desserts sont un régal.",
    author: "Houssem Khanfir",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/houssem.jpg",
  },
  {
    quote:
      "Excellent makloub ! Pain fait maison, poulet mariné, harissa maison… Pour 10,90 € avec les pommes de terre, on est largement calé. Je reviendrai, c'est sûr !",
    author: "JL Honda",
    meta: "Local Guide · 1 911 photos",
    rating: 5,
    avatar: "/reviews/profiles/jl.jpg",
  },
  {
    quote:
      "Super bon ! On a pris deux menus, un poulet, l'autre merguez : explosion de saveurs en bouche. Les pommes de terre sont savoureuses et l'équipe jeune, dynamique et accueillante.",
    author: "Olfa Mzita",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/olfa.jpg",
  },
  {
    quote:
      "Super rapport qualité-prix ! Le staff est sympa, surtout la dame à l'accueil qui vous reçoit avec un grand sourire. On se sent tout de suite bien.",
    author: "Hind Yamini",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/hind.jpg",
  },
  {
    quote:
      "Menu sandwich Makloub + batatas et la boisson au melon Benti faite maison : j'ai vraiment adoré, c'était super bon ! Je recommande beaucoup cet endroit.",
    author: "Segui Ryan",
    meta: "Local Guide · juil. 2025",
    rating: 5,
    avatar: "/reviews/profiles/ryan.jpg",
  },
  {
    quote:
      "Délicieux sandwichs tunisiens ! Le responsable est adorable et le service est rapide. Il y a quelques tables pour manger sur place. Allez-y, c'est vraiment délicieux !",
    author: "Jeanne Le Nezet",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/jeanne.jpg",
  },
  {
    quote:
      "Impeccable, leurs sandwichs et leurs plats sont trop bons. Accueillants, ils prennent le soin de discuter avec les clients, ça change et ça fait plaisir.",
    author: "Chamsou Merouani",
    meta: "Local Guide · 2 247 photos",
    rating: 5,
    avatar: "/reviews/profiles/chamsou.jpg",
  },
  {
    quote:
      "Un bon accueil, la dame qui s'en charge est très sympathique. Très belle décoration : un vrai voyage en Tunisie, à l'enfance, aux maisons de Sidi Bou Saïd.",
    author: "Hayfa BTH",
    meta: "Local Guide",
    rating: 5,
    avatar: "/reviews/profiles/hayfa.jpg",
  },
];

// Presse / mentions (illustratif — à confirmer au lancement).
export const PRESS = [
  { name: "Le Bonbon", quote: "Le makloub qui met tout le monde d'accord." },
  { name: "Enlarge your Paris", quote: "Un vent de Sidi Bou Saïd sur l'est parisien." },
  { name: "Sortir à Paris", quote: "La street food tunisienne qu'on attendait." },
];
