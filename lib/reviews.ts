// Captures d'stories Instagram (reposts clients) présentes dans /infos.
// Ce sont de vraies preuves sociales — utilisées dans la section "Ils parlent de Benti".
export const STORY_IMAGES: string[] = Array.from({ length: 57 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/reviews/story_${n}.jpg`;
});

// Témoignages illustratifs pour la démo (à remplacer par de vrais avis Google/
// reposts au lancement). Ton fidèle à l'univers Benti.
export type Testimonial = {
  quote: string;
  author: string;
  meta: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Le Tunis, c'est devenu mon rituel du midi. La pâte du makloub est incroyable, moelleuse et dorée à la fois. On sent le fait maison.",
    author: "Inès",
    meta: "Paris 11e",
    rating: 5,
  },
  {
    quote:
      "Ambiance Sidi Bou Saïd, accueil au top d'Abir et Yassine, et une sauce blanche à tomber. On se croirait en vacances en Tunisie.",
    author: "Mehdi",
    meta: "Habitué · Filles du Calvaire",
    rating: 5,
  },
  {
    quote:
      "Le bol ensoleillé veggie est généreux et plein de goût. Enfin une option végé qui n'est pas triste. Gros coup de cœur.",
    author: "Camille",
    meta: "Paris 3e",
    rating: 5,
  },
  {
    quote:
      "On a commandé Benti en traiteur pour un tournage, tout le monde a adoré. Livraison carrée, buffet coloré, zéro fausse note.",
    author: "Sofiane",
    meta: "Production · Paris",
    rating: 5,
  },
  {
    quote:
      "Le Carthage au thon m'a rappelé le fricassé de ma grand-mère. Rare de retrouver ces saveurs à Paris. Merci Benti.",
    author: "Yasmine",
    meta: "Cliente fidèle",
    rating: 5,
  },
  {
    quote:
      "Rapport qualité-prix imbattable. Un makloub + batatas et je suis calé pour l'après-midi. Les batatas ail-persil sont dangereuses.",
    author: "Thomas",
    meta: "Bureau à Voltaire",
    rating: 5,
  },
  {
    quote:
      "Version piquante pour les courageux : ça réveille ! Et le dessert du jour change à chaque visite, j'adore la surprise.",
    author: "Nadia",
    meta: "Paris 11e",
    rating: 5,
  },
  {
    quote:
      "Deux adresses, même bonne énergie. Les couleurs, la musique, le sourire. Benti c'est un petit bout de Tunisie dans le quartier.",
    author: "Léa",
    meta: "Haut-Marais",
    rating: 5,
  },
];

// Presse / mentions (illustratif — à confirmer au lancement).
export const PRESS = [
  { name: "Le Bonbon", quote: "Le makloub qui met tout le monde d'accord." },
  { name: "Enlarge your Paris", quote: "Un vent de Sidi Bou Saïd sur l'est parisien." },
  { name: "Sortir à Paris", quote: "La street food tunisienne qu'on attendait." },
];
