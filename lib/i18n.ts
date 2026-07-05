// -----------------------------------------------------------------------------
// Bilingue FR / EN. FR = source de vérité typée ; EN doit respecter la même forme.
// -----------------------------------------------------------------------------

export type Lang = "fr" | "en";
export const LOCALES: Lang[] = ["fr", "en"];

export function getLang(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

// Correspondance des routes FR <-> EN (slugs localisés, comme le site actuel).
const PATH_MAP: Record<string, string> = {
  "/": "/en",
  "/carte": "/en/menu",
  "/traiteur": "/en/catering",
  "/adresses": "/en/locations",
  "/adresses/paris-11": "/en/locations/paris-11",
  "/adresses/paris-3": "/en/locations/paris-3",
  "/contact": "/en/contact",
  "/mentions-legales": "/en/legal-notice",
  "/politique-confidentialite": "/en/privacy-policy",
  "/cookies": "/en/cookies",
};
const PATH_MAP_REV: Record<string, string> = Object.fromEntries(
  Object.entries(PATH_MAP).map(([fr, en]) => [en, fr])
);

/** URL équivalente dans l'autre langue (pour le sélecteur de langue). */
export function altPath(pathname: string, to: Lang): string {
  if (to === "en") return PATH_MAP[pathname] ?? "/en";
  return PATH_MAP_REV[pathname] ?? "/";
}

/** Préfixe une route FR interne pour la langue courante. */
export function localizedHref(frPath: string, lang: Lang): string {
  if (lang === "fr") return frPath;
  return PATH_MAP[frPath] ?? frPath;
}

type Title = { pre: string; accent: string; post?: string };

const fr = {
  nav: [
    { label: "Accueil", href: "/" },
    { label: "La carte", href: "/carte" },
    { label: "Traiteur", href: "/traiteur" },
    { label: "Nos adresses", href: "/adresses" },
    { label: "Contact", href: "/contact" },
  ],
  common: {
    order: "Commander",
    viewMenu: "Voir la carte",
    seeMenu: "Découvrir la carte",
    quote: "Demander un devis",
    itinerary: "Itinéraire",
    seeAddress: "Voir l'adresse",
    lunchOnly: "Lun – Sam · le midi",
    followInsta: "Suivre",
    langLabel: "EN",
  },
  cookie: {
    text: "On utilise des cookies pour mesurer l'audience et améliorer votre visite. Vous gardez la main.",
    more: "En savoir plus",
    essential: "Essentiels",
    all: "Tout accepter",
  },
  footer: {
    tagline:
      "Benti — « ma fille » en tunisien. Le makloub de Sidi Bou Saïd, fait maison avec amour, au cœur de Paris. Une histoire de famille signée Abir & Yassine.",
    addresses: "Nos adresses",
    explore: "Explorer",
    quoteLink: "Demander un devis traiteur",
    hours: "Ouvert du lundi au samedi.\nService du midi · sur place & à emporter.",
    rights: "Fait maison, à Paris.",
  },
  mobileBar: { menu: "Voir la carte", order: "Commander" },
  orderModal: {
    eyebrow: "Commander",
    title: "Quelle adresse ?",
    lead: "Choisissez le restaurant le plus proche : on décroche et on prépare tout.",
    close: "Fermer",
  },
  hero: {
    eyebrow: "Restaurant tunisien · Paris 11e & 3e",
    titlePre: "Le makloub de ",
    titleAccent: "Sidi Bou Saïd",
    titleHand: "fait maison.",
    lead: "Une pâte dorée entre la pizza et la pita, pliée sur du chawarma, de la mozzarella fondante et notre sauce blanche onctueuse. Benti, « ma fille » en tunisien : l'histoire d'Abir & Yassine, et un vent de Tunisie sur Paris.",
    cta1: "Découvrir la carte",
    cta2: "Nos deux adresses",
    stat1: "Fait maison, chaque jour",
    stat2: "Best-seller : le Tunis",
    stat3: "Bols & version veggie",
    scroll: "Défiler",
  },
  marquee: [
    "Makloub maison",
    "Sidi Bou Saïd",
    "Homemade with love",
    "Bols ensoleillés",
    "Chawarma · Keftas · Thon",
    "Paris 11 & 3",
  ],
  concept: {
    eyebrow: "Notre histoire",
    title: { pre: "Benti, « ma fille », ", accent: "une histoire de famille." } as Title,
    p1: "Abir, d'origine tunisienne, a monté Benti avec son mari Yassine. Un lieu chaleureux et coloré qui rappelle les ruelles bleues et blanches de Sidi Bou Saïd.",
    p2: "Ici, on met le makloub à l'honneur : ce sandwich tunisien à la pâte dorée, traditionnellement garni de poulet, de slata mechouia et de harissa. Cinq recettes, plus une version au thon qui rappelle le fricassé de l'enfance.",
    makloubWord: "makloub",
    stats: [
      { n: "5", l: "recettes de makloub" },
      { n: "2", l: "adresses à Paris" },
      { n: "100%", l: "fait maison" },
    ],
    cta: "Découvrir le traiteur",
    founderTag: "Abir & Yassine",
  },
  highlights: {
    eyebrow: "Les héros de la carte",
    title: { pre: "Cinq makloubs, ", accent: "un aller simple pour Tunis." } as Title,
    lead: "Makloub seul, ou makloub + batatas. Généreux, doré, plié devant vous.",
    ctaAll: "Toute la carte",
    dragHint: "← Faites glisser pour explorer →",
    cats: [
      { t: "Bols ensoleillés", d: "Boulghour ou riz, légumes rôtis, la garniture de votre choix.", href: "/carte#bols" },
      { t: "Batatas maison", d: "Pommes grenailles, ail & persil. Croustillantes, addictives.", href: "/carte#batatas" },
      { t: "Boissons & dessert", d: "Une boisson maison, un dessert selon le mood du jour.", href: "/carte#boissons" },
    ],
    catCta: "Voir",
  },
  video: {
    eyebrow: "En vidéo",
    title: { pre: "Rencontrez Benti, ", accent: "en coulisses." } as Title,
    lead: "Abir vous ouvre les portes : la pâte du makloub, l'esprit Sidi Bou Saïd, l'accueil. La meilleure façon de comprendre Benti, c'est de la regarder vivre.",
    cta: "Voir la carte",
    videoTitle: "Abir vous raconte Benti",
    videoLabel: "Rencontre",
  },
  reviews: {
    eyebrow: "Ce que vous en pensez",
    title: { pre: "Ils reviennent, ", accent: "et ils le disent." } as Title,
    ratingLabel: "avis Google",
  },
  stories: {
    eyebrow: "Sur Instagram",
    title: { pre: "Vous nous taguez, ", accent: "on adore ça." } as Title,
    lead: "Une sélection de vos stories repostées. Rejoignez la communauté @benti_paris.",
  },
  cateringBlock: {
    eyebrow: "Traiteur & événements",
    title: "Une cuisine ensoleillée pour vos événements.",
    lead: "Séminaires, réunions, tournages : buffets gourmands, plateaux repas et lunch box aux saveurs tunisiennes. On adapte tout à vos convives, sans jamais perdre le goût du fait maison.",
    cta1: "Demander un devis",
    cta2: "Voir les formules",
  },
  addressesBlock: {
    eyebrow: "Nous trouver",
    title: { pre: "Deux adresses, ", accent: "la même chaleur." } as Title,
    lead: "Au cœur de Paris, à Léon Frot (11e) et aux Filles du Calvaire (3e). Passez commande, appelez, ou venez faire la queue avec le sourire.",
  },
  instaBlock: {
    title: "Suivez le quotidien de Benti",
    lead: "Nouveautés, coulisses de cuisine et vos plus belles assiettes. C'est sur Instagram que ça se passe.",
  },

  // -------- Pages internes --------
  carte: {
    metaTitle: "La carte — makloubs, bols ensoleillés & batatas",
    metaDesc:
      "Découvrez la carte Benti : 6 makloubs, les bols ensoleillés, les batatas maison, boissons et desserts. Fait maison, prix TTC service compris. Sans gluten & vegan disponibles.",
    crumb: "La carte",
    eyebrow: "La carte",
    title: { pre: "Tout est fait maison, ", accent: "tout appelle le soleil." } as Title,
    lead: "Le makloub en héros, des bols généreux, des batatas ail-persil qui rendent accro. Choisissez, on plie devant vous.",
    orderEyebrow: "Sur place ou à emporter",
    orderTitle: "Commandez par téléphone, on prépare tout.",
    ctaTraiteurTitle: "Un événement à régaler ?",
    ctaTraiteurLead: "Buffets, plateaux repas et lunch box aux couleurs de la Tunisie.",
    ctaTraiteur: "Demander un devis traiteur",
  },
  traiteur: {
    metaTitle: "Traiteur & catering — cuisine tunisienne pour vos événements",
    metaDesc:
      "Service traiteur Benti à Paris : buffets, plateaux repas et lunch box aux saveurs tunisiennes pour séminaires, réunions et tournages. Cuisine ensoleillée, fait maison. Demandez votre devis.",
    crumb: "Traiteur",
    eyebrow: "Traiteur & événements",
    title: { pre: "Une cuisine ensoleillée ", accent: "pour vos plus beaux moments." } as Title,
    lead: "Offrez à vos événements une touche de couleurs. Benti compose buffets, plateaux repas et lunch box tunisiens, sur mesure, partout à Paris.",
    quote: "« Parce qu'une cuisine généreuse fait toute la différence. »",
    promiseEyebrow: "Notre promesse",
    promiseTitle: "Le goût du fait maison, à l'échelle de votre événement.",
    values: [
      { t: "Ensoleillée & fait maison", d: "La richesse des saveurs méditerranéennes et tunisiennes, à travers des recettes authentiques préparées avec amour." },
      { t: "Sur mesure", d: "Séminaires, réunions pro ou tournages : on adapte nos créations à vos besoins et au nombre de convives." },
      { t: "Partage & convivialité", d: "Une cuisine simple, chaleureuse et inspirée, pour offrir à vos invités une vraie expérience gourmande." },
    ],
    formulesEyebrow: "Nos formules",
    formulesTitle: { pre: "Trois façons de ", accent: "régaler vos convives." } as Title,
    formules: [
      { t: "Buffets gourmands", d: "Makloubs à composer, bols ensoleillés, batatas, mezze colorés. Le partage à la tunisienne, en grand format." },
      { t: "Plateaux repas", d: "Une formule individuelle complète et équilibrée, prête à servir. Idéale en réunion ou en déplacement." },
      { t: "Lunch box", d: "Le makloub qu'on aime, en version nomade. Pratique pour les tournages et les journées qui filent." },
    ],
    useCases: ["Séminaires", "Réunions pro", "Tournages", "Événements privés", "Lancements", "Team building"],
    galleryEyebrow: "En images",
    galleryTitle: "Des tables qui donnent le sourire.",
    devisEyebrow: "Devis gratuit",
    devisTitle: "Parlez-nous de votre événement.",
    devisLead: "Décrivez-nous vos envies : on revient vers vous avec une proposition sur mesure, gourmande et colorée. Sans engagement.",
    orEmail: "Ou par email :",
  },
  adresses: {
    metaTitle: "Nos adresses — Benti Paris 11e & 3e",
    metaDesc:
      "Retrouvez Benti à Paris : 31 rue Léon Frot (11e) et 16 rue des Filles du Calvaire (3e). Horaires, téléphone, itinéraire et commande à emporter.",
    crumb: "Nos adresses",
    eyebrow: "Nous trouver",
    title: { pre: "Deux maisons Benti, ", accent: "au cœur de Paris." } as Title,
    leadTpl: "Léon Frot dans le 11e, Filles du Calvaire dans le 3e. Même cuisine, même accueil. Ouvert du lundi au samedi, le midi. Noté {rating}/5 par {count} clients.",
  },
  address: {
    hours: "Horaires",
    hoursNote: "Service du midi · sur place & à emporter.",
    phone: "Téléphone",
    address: "Adresse",
    otherEyebrow: "L'autre maison",
    otherTitle: "Découvrez aussi Benti",
    otherCta: "Voir",
    leadTpl: "{street}, {postal} {locality}. Le makloub de Sidi Bou Saïd, fait maison, à deux pas de chez vous.",
  },
  contact: {
    metaTitle: "Contact — écrivez-nous",
    metaDesc:
      "Une question, une envie de traiteur, un partenariat ? Contactez Benti, restaurant tunisien à Paris 11e & 3e. Téléphone, email et formulaire.",
    crumb: "Contact",
    eyebrow: "Contact",
    title: { pre: "On adore ", accent: "vous lire." } as Title,
    lead: "Une question sur la carte, un projet traiteur, une collaboration presse ? Écrivez-nous, on répond vite.",
    formTitle: "Envoyez-nous un message",
    hoursShort: "Lundi – Samedi · le midi",
  },
  form: {
    name: "Nom & prénom",
    email: "Email",
    company: "Société / structure",
    companyPh: "Optionnel",
    phone: "Téléphone",
    eventType: "Type d'événement",
    choose: "Choisir…",
    eventOptions: ["Séminaire", "Réunion pro", "Tournage", "Événement privé", "Autre"],
    date: "Date",
    guests: "Convives",
    subject: "Sujet",
    subjectOptions: ["Une question sur la carte", "Traiteur / événement", "Presse & partenariats", "Autre"],
    message: "Votre message",
    messagePhDevis: "Parlez-nous de votre événement, vos envies, votre budget…",
    messagePhContact: "Dites-nous tout…",
    sendDevis: "Envoyer ma demande",
    send: "Envoyer",
    reply: "Réponse sous 48h ouvrées.",
    thanks: "Merci !",
    thanksLead: "Votre message est prêt à partir. On revient vers vous très vite. À bientôt chez Benti.",
    again: "Envoyer un autre message",
  },
  menuOptions: ["Sans gluten", "Vegan", "Version piquante 🔥"],
  menuFootnote: "Prix TTC · service compris",
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export type Content = typeof fr;

const en: Content = {
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/carte" },
    { label: "Catering", href: "/traiteur" },
    { label: "Locations", href: "/adresses" },
    { label: "Contact", href: "/contact" },
  ],
  common: {
    order: "Order",
    viewMenu: "See the menu",
    seeMenu: "Explore the menu",
    quote: "Request a quote",
    itinerary: "Directions",
    seeAddress: "View location",
    lunchOnly: "Mon – Sat · lunch",
    followInsta: "Follow",
    langLabel: "FR",
  },
  cookie: {
    text: "We use cookies to measure traffic and improve your visit. You stay in control.",
    more: "Learn more",
    essential: "Essentials",
    all: "Accept all",
  },
  footer: {
    tagline:
      "Benti — “my daughter” in Tunisian. The makloub of Sidi Bou Saïd, homemade with love in the heart of Paris. A family story by Abir & Yassine.",
    addresses: "Our locations",
    explore: "Explore",
    quoteLink: "Request a catering quote",
    hours: "Open Monday to Saturday.\nLunch service · dine in & takeaway.",
    rights: "Homemade, in Paris.",
  },
  mobileBar: { menu: "See the menu", order: "Order" },
  orderModal: {
    eyebrow: "Order",
    title: "Which location?",
    lead: "Pick the nearest restaurant — we'll pick up and get everything ready.",
    close: "Close",
  },
  hero: {
    eyebrow: "Tunisian restaurant · Paris 11 & 3",
    titlePre: "The makloub of ",
    titleAccent: "Sidi Bou Saïd",
    titleHand: "homemade.",
    lead: "A golden dough somewhere between pizza and pita, folded over chawarma, melting mozzarella and our creamy white sauce. Benti — “my daughter” in Tunisian — is Abir & Yassine's story, and a breeze of Tunisia over Paris.",
    cta1: "Explore the menu",
    cta2: "Our two locations",
    stat1: "Homemade, every day",
    stat2: "Best-seller: the Tunis",
    stat3: "Bowls & veggie option",
    scroll: "Scroll",
  },
  marquee: [
    "Homemade makloub",
    "Sidi Bou Saïd",
    "Homemade with love",
    "Sunny bowls",
    "Chawarma · Kefta · Tuna",
    "Paris 11 & 3",
  ],
  concept: {
    eyebrow: "Our story",
    title: { pre: "Benti, “my daughter”, ", accent: "a family story." },
    p1: "Tunisian-born Abir set up Benti with her husband Yassine. A warm, colorful place that echoes the blue-and-white lanes of Sidi Bou Saïd.",
    p2: "Here the makloub takes centre stage: a Tunisian sandwich with golden dough, traditionally filled with chicken, slata mechouia and harissa. Five recipes, plus a tuna version that brings back childhood fricassé.",
    makloubWord: "makloub",
    stats: [
      { n: "5", l: "makloub recipes" },
      { n: "2", l: "locations in Paris" },
      { n: "100%", l: "homemade" },
    ],
    cta: "Discover catering",
    founderTag: "Abir & Yassine",
  },
  highlights: {
    eyebrow: "The heroes of the menu",
    title: { pre: "Five makloubs, ", accent: "a one-way ticket to Tunis." },
    lead: "Makloub on its own, or makloub + batatas. Generous, golden, folded in front of you.",
    ctaAll: "See the full menu",
    dragHint: "← Swipe to explore →",
    cats: [
      { t: "Sunny bowls", d: "Bulgur or rice, roasted veggies, the topping of your choice.", href: "/carte#bols" },
      { t: "Homemade batatas", d: "Baby potatoes, garlic & parsley. Crispy and addictive.", href: "/carte#batatas" },
      { t: "Drinks & dessert", d: "A homemade drink, a dessert depending on the day's mood.", href: "/carte#boissons" },
    ],
    catCta: "See",
  },
  video: {
    eyebrow: "In video",
    title: { pre: "Meet Benti, ", accent: "behind the scenes." },
    lead: "Abir opens the doors: the makloub dough, the Sidi Bou Saïd spirit, the welcome. The best way to understand Benti is to watch it come alive.",
    cta: "See the menu",
    videoTitle: "Abir tells the Benti story",
    videoLabel: "Meet the team",
  },
  reviews: {
    eyebrow: "What you think",
    title: { pre: "They come back, ", accent: "and they say so." },
    ratingLabel: "Google reviews",
  },
  stories: {
    eyebrow: "On Instagram",
    title: { pre: "You tag us, ", accent: "we love it." },
    lead: "A selection of your reposted stories. Join the @benti_paris community.",
  },
  cateringBlock: {
    eyebrow: "Catering & events",
    title: "Sunny cuisine for your events.",
    lead: "Seminars, meetings, film shoots: generous buffets, meal trays and lunch boxes with Tunisian flavours. We adapt everything to your guests, without ever losing the homemade taste.",
    cta1: "Request a quote",
    cta2: "See the options",
  },
  addressesBlock: {
    eyebrow: "Find us",
    title: { pre: "Two locations, ", accent: "the same warmth." },
    lead: "In the heart of Paris, at Léon Frot (11th) and Filles du Calvaire (3rd). Order ahead, call, or come queue up with a smile.",
  },
  instaBlock: {
    title: "Follow Benti's daily life",
    lead: "New dishes, kitchen behind-the-scenes and your best plates. It all happens on Instagram.",
  },

  carte: {
    metaTitle: "Menu — makloubs, sunny bowls & batatas",
    metaDesc:
      "Discover the Benti menu: 6 makloubs, sunny bowls, homemade batatas, drinks and desserts. Homemade, taxes and service included. Gluten-free & vegan available.",
    crumb: "Menu",
    eyebrow: "The menu",
    title: { pre: "Everything is homemade, ", accent: "everything calls the sun." },
    lead: "The makloub as the hero, generous bowls, garlic-parsley batatas you can't stop eating. Pick, and we fold it in front of you.",
    orderEyebrow: "Dine in or takeaway",
    orderTitle: "Order by phone, we prepare it all.",
    ctaTraiteurTitle: "An event to cater?",
    ctaTraiteurLead: "Buffets, meal trays and lunch boxes in the colours of Tunisia.",
    ctaTraiteur: "Request a catering quote",
  },
  traiteur: {
    metaTitle: "Catering — Tunisian cuisine for your events",
    metaDesc:
      "Benti catering in Paris: buffets, meal trays and lunch boxes with Tunisian flavours for seminars, meetings and film shoots. Sunny, homemade cuisine. Request your quote.",
    crumb: "Catering",
    eyebrow: "Catering & events",
    title: { pre: "Sunny cuisine ", accent: "for your finest moments." },
    lead: "Bring a splash of colour to your events. Benti creates Tunisian buffets, meal trays and lunch boxes, made to measure, anywhere in Paris.",
    quote: "“Because generous cooking makes all the difference.”",
    promiseEyebrow: "Our promise",
    promiseTitle: "The homemade taste, at the scale of your event.",
    values: [
      { t: "Sunny & homemade", d: "The richness of Mediterranean and Tunisian flavours, through authentic recipes made with love." },
      { t: "Made to measure", d: "Seminars, business meetings or film shoots: we adapt our creations to your needs and guest count." },
      { t: "Sharing & warmth", d: "Simple, warm, inspired cooking, to give your guests a truly delicious experience." },
    ],
    formulesEyebrow: "Our options",
    formulesTitle: { pre: "Three ways to ", accent: "delight your guests." },
    formules: [
      { t: "Generous buffets", d: "Build-your-own makloubs, sunny bowls, batatas, colourful mezze. Tunisian sharing, in a big format." },
      { t: "Meal trays", d: "A complete, balanced individual formula, ready to serve. Ideal for meetings or on the go." },
      { t: "Lunch boxes", d: "The makloub we love, in a nomad version. Handy for film shoots and busy days." },
    ],
    useCases: ["Seminars", "Business meetings", "Film shoots", "Private events", "Launches", "Team building"],
    galleryEyebrow: "In pictures",
    galleryTitle: "Tables that make everyone smile.",
    devisEyebrow: "Free quote",
    devisTitle: "Tell us about your event.",
    devisLead: "Describe what you have in mind: we'll come back with a tailored, generous and colourful proposal. No commitment.",
    orEmail: "Or by email:",
  },
  adresses: {
    metaTitle: "Our locations — Benti Paris 11 & 3",
    metaDesc:
      "Find Benti in Paris: 31 rue Léon Frot (11th) and 16 rue des Filles du Calvaire (3rd). Hours, phone, directions and takeaway orders.",
    crumb: "Locations",
    eyebrow: "Find us",
    title: { pre: "Two Benti homes, ", accent: "in the heart of Paris." },
    leadTpl: "Léon Frot in the 11th, Filles du Calvaire in the 3rd. Same cuisine, same welcome. Open Monday to Saturday, at lunch. Rated {rating}/5 by {count} guests.",
  },
  address: {
    hours: "Opening hours",
    hoursNote: "Lunch service · dine in & takeaway.",
    phone: "Phone",
    address: "Address",
    otherEyebrow: "The other home",
    otherTitle: "Discover also Benti",
    otherCta: "See",
    leadTpl: "{street}, {postal} {locality}. The makloub of Sidi Bou Saïd, homemade, just around the corner.",
  },
  contact: {
    metaTitle: "Contact — get in touch",
    metaDesc:
      "A question, a catering idea, a partnership? Contact Benti, Tunisian restaurant in Paris 11 & 3. Phone, email and form.",
    crumb: "Contact",
    eyebrow: "Contact",
    title: { pre: "We love ", accent: "hearing from you." },
    lead: "A question about the menu, a catering project, a press collaboration? Write to us, we reply fast.",
    formTitle: "Send us a message",
    hoursShort: "Monday – Saturday · lunch",
  },
  form: {
    name: "Full name",
    email: "Email",
    company: "Company / organisation",
    companyPh: "Optional",
    phone: "Phone",
    eventType: "Event type",
    choose: "Choose…",
    eventOptions: ["Seminar", "Business meeting", "Film shoot", "Private event", "Other"],
    date: "Date",
    guests: "Guests",
    subject: "Subject",
    subjectOptions: ["A question about the menu", "Catering / event", "Press & partnerships", "Other"],
    message: "Your message",
    messagePhDevis: "Tell us about your event, your wishes, your budget…",
    messagePhContact: "Tell us everything…",
    sendDevis: "Send my request",
    send: "Send",
    reply: "Reply within 48 business hours.",
    thanks: "Thank you!",
    thanksLead: "Your message is ready to send. We'll get back to you very soon. See you at Benti.",
    again: "Send another message",
  },
  menuOptions: ["Gluten-free", "Vegan", "Spicy version 🔥"],
  menuFootnote: "Taxes & service included",
  legal: [
    { label: "Legal notice", href: "/mentions-legales" },
    { label: "Privacy policy", href: "/politique-confidentialite" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export const DICT: Record<Lang, Content> = { fr, en };

export function t(lang: Lang): Content {
  return DICT[lang];
}
