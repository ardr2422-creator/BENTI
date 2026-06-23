/* =========================================================================
   DR WINGS — Données du menu (« l'ordonnance »)
   Source : Uber Eats Dr Wings Franconville (récupéré le 23/06/2026).
   - `prix`    : prix Uber Eats en euros.
   - `dosage`  : niveau d'épice 0–5 (0 = non concerné, non affiché).
   - `tags`    : "star" = best-seller.
   - `id`      : sert d'ancre (#id) — synchronisé avec les liens de l'accueil.
   ========================================================================= */
window.DRWINGS_MENU = [
  {
    id: "menus",
    nom: "Menus",
    rx: "Rx · Formules",
    intro: "Composez votre prise en charge complète : des wings signatures, un side, et de quoi faire passer le feu.",
    items: [
      { nom: "Wings + Side", prix: 13.90, dosage: 0, tags: ["star"], desc: "Les wings signatures de votre choix, accompagnées d'un de nos sides croustillants." },
      { nom: "Wings + Side + Boisson", prix: 15.90, dosage: 0, tags: [], desc: "Le protocole complet : wings signatures, un side, et une boisson fraîche pour éteindre l'incendie." }
    ]
  },
  {
    id: "wings-signature",
    nom: "Wings Signature",
    rx: "Rx · 14,90 €",
    intro: "Le cœur de la clinique. Cinq glaçages, du placebo tout doux à la dose maximale. La posologie indique le niveau d'épice.",
    items: [
      { nom: "Korean Wings", flag: "🇰🇷", prix: 14.90, dosage: 2, tags: ["star"], desc: "Sauce soja sucrée légèrement épicée, parsemée de ciboulette. Dépaysement assuré." },
      { nom: "Bangkok Glaze", flag: "🛺", prix: 14.90, dosage: 2, tags: [], desc: "Sauce sweet & chili, pluie d'oignon frit. Un aller simple pour la street food asiatique." },
      { nom: "Dirty BBQ", flag: "🇺🇸", prix: 14.90, dosage: 3, tags: ["star"], desc: "Sauce barbecue cajun fumée, oignon frit. Irrésistibles — on assume le clin d'œil." },
      { nom: "Atomic Red", flag: "🔥", prix: 14.90, dosage: 5, tags: [], desc: "Hot sauce sriracha, pluie d'oignon frit. Chaud devant — gardez un verre de lait à portée." },
      { nom: "Classic Wings", flag: "🍗", prix: 14.90, dosage: 1, tags: ["star"], desc: "Wings tendres et fondantes, servies avec la sauce de votre choix à dipper." }
    ]
  },
  {
    id: "a-dipper",
    nom: "Chicken à dipper",
    rx: "Rx · Croustillant",
    intro: "Filets et bouchées dorés à la friture, à tremper sans modération dans la sauce de votre ordonnance.",
    items: [
      { nom: "Tenders x3", prix: 7.90, dosage: 0, tags: [], desc: "Trois filets de poulet frits, croustillants et fondants à souhait." },
      { nom: "Tenders x6", prix: 10.90, dosage: 0, tags: ["star"], desc: "Six filets de poulet frits, croustillants et fondants à souhait." },
      { nom: "Tenders x9", prix: 15.90, dosage: 0, tags: [], desc: "Neuf filets de poulet frits — la dose familiale." },
      { nom: "Karaage x4", prix: 4.90, dosage: 0, tags: [], desc: "Quatre pièces de poulet mariné à la japonaise, tendre et croustillant." },
      { nom: "Karaage x6", prix: 6.90, dosage: 0, tags: [], desc: "Six pièces de poulet mariné, tendre et croustillant." },
      { nom: "Karaage x8", prix: 8.90, dosage: 0, tags: [], desc: "Huit pièces de poulet mariné, tendre et croustillant." }
    ]
  },
  {
    id: "sides",
    nom: "Sides",
    rx: "Rx · Accompagnements",
    intro: "Les soins de support. Indispensables pour une convalescence réussie.",
    items: [
      { nom: "Frites", prix: 3.50, dosage: 0, tags: [], desc: "Frites de pommes de terre, dorées et salées." },
      { nom: "Potato waffle fries", prix: 4.50, dosage: 0, tags: ["star"], desc: "Frites gaufrées, croquantes et savoureuses." },
      { nom: "Frites de patate douce", prix: 4.90, dosage: 0, tags: ["star"], desc: "Frites de patate douce, dorées et légèrement sucrées." },
      { nom: "Crispy Cheese x5", prix: 4.90, dosage: 0, tags: [], desc: "Bouchées fondantes de camembert frit, 5 pièces." },
      { nom: "Crispy Rings x6", prix: 5.90, dosage: 0, tags: [], desc: "Rondelles d'oignon dorées et ultra croustillantes, 6 pièces." }
    ]
  },
  {
    id: "desserts",
    nom: "Desserts",
    rx: "Rx · Cure de sucre",
    intro: "La phase de récupération. Sucrée, moelleuse, parfaitement non médicale.",
    items: [
      { nom: "Cookie pépites de chocolat", prix: 2.90, dosage: 0, tags: [], desc: "Cookie fourré aux pépites de chocolat." },
      { nom: "Fondant au chocolat", prix: 4.90, dosage: 0, tags: ["star"], desc: "Fondant au chocolat au cœur coulant." },
      { nom: "Churros 4 pièces", prix: 3.90, dosage: 0, tags: ["star"], desc: "Les iconiques : ultra-croustillants, dorés, saupoudrés d'un voile de sucre craquant." },
      { nom: "Donut au sucre", prix: 5.50, dosage: 0, tags: [], desc: "Donut nature au sucre." },
      { nom: "Donut chocolat", prix: 5.50, dosage: 0, tags: [], desc: "Donut glaçage et éclats de chocolat." },
      { nom: "Häagen-Dazs Macadamia (100 ml)", prix: 4.90, dosage: 0, tags: [], desc: "Crème glacée vanille, éclats de noix de macadamia caramélisées. 100 ml." },
      { nom: "Häagen-Dazs Vanille Caramel Brownie (100 ml)", prix: 4.90, dosage: 0, tags: [], desc: "Crème glacée vanille, brownie et caramel. 100 ml." },
      { nom: "Häagen-Dazs Macadamia (460 ml)", prix: 9.90, dosage: 0, tags: [], desc: "Le grand pot à partager. Vanille et macadamia caramélisée. 460 ml." }
    ]
  },
  {
    id: "boissons",
    nom: "Boissons",
    rx: "Rx · 2,90 €",
    intro: "Anti-incendie de rigueur, surtout après une Atomic Red.",
    items: [
      { nom: "Coca-Cola", prix: 2.90, dosage: 0, tags: [], desc: "Goût original. 33 cl." },
      { nom: "Coca-Cola Zéro", prix: 2.90, dosage: 0, tags: [], desc: "Le goût du Coca, zéro sucre, zéro calorie. 33 cl." },
      { nom: "Ice Tea pêche", prix: 2.90, dosage: 0, tags: [], desc: "Thé glacé saveur pêche. 33 cl." },
      { nom: "Tropico", prix: 2.90, dosage: 0, tags: [], desc: "Le cocktail de fruits pétillant. 33 cl." },
      { nom: "Evian", prix: 2.90, dosage: 0, tags: [], desc: "Eau plate. 50 cl." },
      { nom: "Perrier", prix: 2.90, dosage: 0, tags: [], desc: "Eau gazeuse. 33 cl." }
    ]
  },
  {
    id: "sauces",
    nom: "Sauces",
    rx: "Rx · 1,50 €",
    intro: "Les fioles du docteur. À dipper, à napper, à boire (déconseillé pour l'Atomic Red).",
    items: [
      { nom: "Ketchup", prix: 1.50, dosage: 0, tags: [], desc: "Le grand classique." },
      { nom: "Mayo", prix: 1.50, dosage: 0, tags: [], desc: "Mayonnaise onctueuse." },
      { nom: "Dirty BBQ", prix: 1.50, dosage: 2, tags: [], desc: "Le cœur du Texas dans une fiole." },
      { nom: "Bangkok Fire", prix: 1.50, dosage: 2, tags: [], desc: "Sweet chili : sucrée, légèrement pimentée, un kick doux et gourmand." },
      { nom: "Korean", prix: 1.50, dosage: 2, tags: ["star"], desc: "Soja sucrée & légèrement spicy — l'équilibre doux-piquant signature." },
      { nom: "Spicy Mayo", prix: 1.50, dosage: 3, tags: [], desc: "Mayonnaise crémeuse relevée, kick pimenté ultra addictif." },
      { nom: "Atomic Red", prix: 1.50, dosage: 5, tags: [], desc: "Sriracha pure. La fiole rouge. Vous étiez prévenu." }
    ]
  }
];
