/* =========================================================================
   KAYANI KITCHEN — Données du menu
   Source : Uber Eats (récupéré le 21/06/2026).
   - `img`  : nom de fichier exact dans /images (encodé à l'affichage).
   - `tags` : star = best-seller · heat = épicé · veg = végétarien · new = nouveau
   - `prix` : prix Uber Eats (livraison). À confirmer pour la commande directe.
   ========================================================================= */
window.KAYANI_MENU = [
  /* -----------------------------------------------------------------------
     1. Menus & Formules
  ----------------------------------------------------------------------- */
  {
    id: "menus",
    nom: "Menus & Formules",
    intro: "Des formules généreuses pour goûter à tout, du plus doux au plus relevé.",
    items: [
      { nom: "Biryani Box", prix: 19.90, desc: "1 biryani et 1 naan au choix.", img: "Biryani Box.png", tags: [] },
      { nom: "Menu Initiation aux épices", prix: 20.90, desc: "Une entrée, un curry doux et un naan pour découvrir nos saveurs.", img: "Menu initiation aux épices.png", tags: [] },
      { nom: "Menu Bollywood", prix: 19.90, desc: "Naan + plat sauce butter chicken + riz.", img: "Menu Bollywood.png", tags: ["star"] },
      { nom: "Menu Bollywood Massala", prix: 18.90, desc: "Naan + plat massala + riz.", img: "Menu Bollywood Massala.png", tags: [] },
      { nom: "Menu Chicken Spice", prix: 18.90, desc: "Poulet mariné préparé dans une sauce madras épicée à la poudre de chilli.", img: "Menu Chicken Spice.png", tags: ["heat"] }
    ]
  },

  /* -----------------------------------------------------------------------
     2. Entrées & Beignets
  ----------------------------------------------------------------------- */
  {
    id: "entrees",
    nom: "Entrées & Beignets",
    intro: "La street food indo-pakistanaise : croustillante, parfumée, à partager.",
    items: [
      { nom: "Mix de Beignets", prix: 8.00, desc: "Assortiment de beignets — samoussas légumes, pakora aubergines, pakora pommes de terre et oignons bhajia.", img: "Mix de beignets.png", tags: ["star"] },
      { nom: "Mix de Beignets (grande portion)", prix: 15.90, desc: "Assortiment généreux de beignets maison — samoussas, pakoras et oignons bhajia — pour partager.", img: "Mix de beignets 1p 🥇 🔥.png", tags: ["star", "heat"] },
      { nom: "Samoussa Légumes", prix: 5.00, desc: "Beignets de légumes épicés, 2 pièces.", img: "Samoussa légumes.png", tags: ["veg"] },
      { nom: "Samoussa Viande", prix: 5.50, desc: "Beignets farcis à la viande hachée, 2 pièces.", img: "Samoussa viande.png", tags: [] },
      { nom: "Mix Samoussa", prix: 7.90, desc: "Beignets farcis au poulet et viande hachée, 2 pièces.", img: "Mix samoussa.png", tags: [] },
      { nom: "Chana Samousa", prix: 8.90, desc: "Samoussa croustillant farci de pois chiches cuisinés aux épices (cumin, coriandre, garam masala), servi avec chutney menthe ou tamarin.", img: "Chana Samousa.png", tags: ["veg"] },
      { nom: "Chana Samousa Chaat", prix: 8.90, desc: "Samoussas cassés en morceaux, nappés d'un curry de pois chiches épicés, de yaourt crémeux, de chutney tamarin et de chutney menthe-coriandre.", img: "Chana Samousa Chaat 🔥.png", tags: ["veg", "heat"] },
      { nom: "Pakora Poulet", prix: 7.50, desc: "Beignets de poulet marinés aux épices.", img: "Pakora poulet.png", tags: [] },
      { nom: "Pakora Crevettes", prix: 7.00, desc: "Beignets de crevettes marinées aux épices.", img: "Pakora crevettes.png", tags: [] },
      { nom: "Pakora Aubergines", prix: 6.50, desc: "Beignets d'aubergines marinées aux épices.", img: "Pakora Aubergines.png", tags: ["veg"] },
      { nom: "Pakora Alou", prix: 5.00, desc: "Beignets de pommes de terre épicés.", img: "Pakora Alou (Pomme de terre).png", tags: ["veg"] },
      { nom: "Chilli Pakora", prix: 6.90, desc: "Beignets de piment vert.", img: "Chilli Pakora.png", tags: ["veg", "heat"] },
      { nom: "Oignons Bhajia", prix: 5.50, desc: "Beignets d'oignons marinés aux épices.", img: "Oignons bhajia.png", tags: ["veg"] },
      { nom: "Onion Rings", prix: 6.00, desc: "Rondelles d'oignons panées, dorées à la friture.", img: "Onions Rings.png", tags: ["veg"] },
      { nom: "Potato Pops", prix: 4.50, desc: "Bouchées de pomme de terre croustillantes.", img: "Potato Pops.png", tags: ["veg"] },
      { nom: "Frites Maison", prix: 4.20, desc: "Frites croustillantes, sel et épices.", img: "Frites.png", tags: ["veg"] },
      { nom: "Veggie Box — 3 Légumes au choix", prix: 21.90, desc: "3 plats végétariens au choix, genereux et parfumés.", img: "Veggie Box 3 Légumes aux choix 🥇 🔥.png", tags: ["veg", "star"] }
    ]
  },

  /* -----------------------------------------------------------------------
     3. Crousty By Kayani
  ----------------------------------------------------------------------- */
  {
    id: "crousty",
    nom: "Crousty By Kayani",
    intro: "Notre ligne croustillante signature : chicken tenders et sauces maison.",
    items: [
      { nom: "Crousty Butter Chicken", prix: 13.90, desc: "Chicken tenders croustillants nappés d'une sauce butter chicken onctueuse et légèrement épicée, servis avec riz basmati parfumé.", img: "Crousty Butter Chicken 🔥.png", tags: ["heat", "new"] },
      { nom: "Crousty Curry", prix: 13.90, desc: "Chicken tenders croustillants enrobés d'une sauce massala riche aux notes d'épices orientales, servis avec riz basmati assaisonné.", img: "Crousty Curry.png", tags: ["star", "new"] },
      { nom: "Tenders (5 pièces)", prix: 8.90, desc: "Cinq chicken tenders ultra-croustillants, dorés à la perfection, servis avec une sauce signature.", img: "Tenders 5p 🍗🔥.png", tags: ["heat"] },
      { nom: "Wings (5 pièces)", prix: 7.90, desc: "Ailes de poulet marinées aux épices, grillées.", img: "Wings 5p.png", tags: [] }
    ]
  },

  /* -----------------------------------------------------------------------
     4. Soupes
  ----------------------------------------------------------------------- */
  {
    id: "soupes",
    nom: "Soupes",
    intro: "Réconfortantes et parfumées, à siroter avant le festin.",
    items: [
      { nom: "Soupe de Poulet", prix: 6.50, desc: "Parfumée aux herbes fraîches, non pimentée et savoureuse.", img: "Soupe de poulet.png", tags: [] },
      { nom: "Soupe de Crevettes", prix: 6.50, desc: "Parfumée aux herbes fraîches, non pimentée et savoureuse.", img: "Soupe de crevettes.png", tags: [] },
      { nom: "Soupe de Légumes", prix: 5.50, desc: "Parfumée aux herbes fraîches, non pimentée et savoureuse.", img: "Soupe de légumes.png", tags: ["veg"] },
      { nom: "Soupe de Lentilles", prix: 5.50, desc: "Parfumée aux herbes fraîches, non pimentée et savoureuse.", img: "Soupe de lentilles indiennes.png", tags: ["veg"] }
    ]
  },

  /* -----------------------------------------------------------------------
     5. Grillades Tandoori
  ----------------------------------------------------------------------- */
  {
    id: "grillades",
    nom: "Grillades Tandoori",
    intro: "Marinées au yaourt et aux épices, saisies au four tandoor.",
    items: [
      { nom: "Poulet Tikka", prix: 8.00, desc: "Filet de blanc de poulet coupé en dés, macéré aux épices et aromates, cuit en brochette au tandoor.", img: "Poulet tikka.png", tags: ["star"] },
      { nom: "Poulet Tandoori", prix: 7.00, desc: "Cuisse de poulet longuement marinée aux épices, grillée au four tandoor.", img: "Poulet tandoori.png", tags: [] },
      { nom: "Poulet Menthe Tikka", prix: 8.90, desc: "Filet de blanc de poulet à la menthe, coupé en dés, macéré aux épices et aromates, cuit en brochette au tandoor.", img: "Poulet Menth Tikka.png", tags: [] },
      { nom: "Seekh Kabab", prix: 6.90, desc: "Gigot d'agneau haché cuit en brochette avec oignons, menthe et épices.", img: "Seekh kabab.png", tags: [] },
      { nom: "Saumon Tikka", prix: 9.50, desc: "Filet de saumon coupé en dés, macéré aux épices et aromates, cuit en brochette au tandoor.", img: "Saumon Tikka.png", tags: [] },
      { nom: "Mix Grillé", prix: 12.90, desc: "Assortiment de nos grillades : poulet tandoori, seekh kabab et poulet tikka.", img: "Mix Grille.png", tags: ["star"] }
    ]
  },

  /* -----------------------------------------------------------------------
     6. Biryanis
  ----------------------------------------------------------------------- */
  {
    id: "biryani",
    nom: "Biryanis",
    intro: "Riz basmati safrané mijoté à l'étouffée avec épices et fruits secs.",
    items: [
      { nom: "Biryani Poulet", prix: 14.90, desc: "Riz basmati safrané, suprême de volaille, petits pois, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani poulet.png", tags: ["star"] },
      { nom: "Biryani Tikka", prix: 15.90, desc: "Riz basmati safrané, poulet tikka grillé au tandoor, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani tikka 🥇.png", tags: ["star"] },
      { nom: "Biryani Butter Chicken", prix: 16.50, desc: "Riz basmati safrané, poulet tikka grillé, noix de cajou, amandes et raisins. Servi avec sauce butter chicken.", img: "Biryani Butter Chicken 🥇.png", tags: ["star"] },
      { nom: "Biryani Royal", prix: 17.90, desc: "Riz basmati safrané avec poulet, agneau et crevettes, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani royal.png", tags: [] },
      { nom: "Mumbai Chicken Biryani", prix: 16.90, desc: "Riz basmati safrané, poulet mariné aux épices, oignons caramélisés, coriandre et menthe fraîches — façon Mumbai.", img: "Mumbai Chicken Biryani.png", tags: ["heat"] },
      { nom: "Biryani Poulet Tandoori", prix: 16.50, desc: "Riz basmati safrané, cuisse de poulet grillée au tandoor, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani Poulet Tandoori.png", tags: [] },
      { nom: "Biryani Seekh Kabab", prix: 15.90, desc: "Riz basmati safrané, seekh kabab grillé au tandoor, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani Seekh Kebab.png", tags: [] },
      { nom: "Biryani Agneau", prix: 16.90, desc: "Riz basmati safrané, morceaux de gigot d'agneau, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani agneau.png", tags: [] },
      { nom: "Biryani Bœuf", prix: 16.90, desc: "Riz basmati safrané, bœuf mijoté aux épices, oignons frits, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani Bœuf 🥩.png", tags: [] },
      { nom: "Biryani Crevettes", prix: 16.90, desc: "Riz basmati safrané, crevettes décortiquées, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani crevettes.png", tags: [] },
      { nom: "Biryani Saumon", prix: 15.90, desc: "Riz basmati safrané, saumon, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani Saumon.png", tags: [] },
      { nom: "Biryani Légumes", prix: 12.90, desc: "Riz basmati safrané aux légumes, noix de cajou, amandes et raisins. Servi avec sauce au choix.", img: "Biryani légumes.png", tags: ["veg"] }
    ]
  },

  /* -----------------------------------------------------------------------
     7. Curries de Poulet
  ----------------------------------------------------------------------- */
  {
    id: "poulet",
    nom: "Curries de Poulet",
    intro: "Le cœur de notre carte : des sauces parfumées, du plus doux au plus ardent.",
    items: [
      { nom: "Butter Chicken", prix: 14.00, desc: "Poulet mariné et grillé, mijoté dans une sauce onctueuse à base de tomates, beurre et crème, relevée d'épices douces. Un grand classique de la cuisine indienne.", img: "Butter Chicken 🥇 🔥 ( Sans Riz).png", tags: ["star", "heat"] },
      { nom: "Poulet Tikka Massala", prix: 13.50, desc: "Morceaux de poulet marinés aux épices, grillés puis mijotés dans une sauce onctueuse à base de tomates, crème et garam masala.", img: "Poulet Tikka Massala 🥇 (Sans Riz).png", tags: ["star"] },
      { nom: "Poulet Massala", prix: 11.90, desc: "Morceaux de poulet tendres mijotés dans une sauce épicée à base de tomates, oignons, ail, gingembre et garam masala.", img: "Poulet Massala (Sans riz).png", tags: [] },
      { nom: "Poulet Mangue Tikka Massala", prix: 13.90, desc: "Poulet grillé nappé d'une sauce crémeuse au curry et à la mangue, délicatement épicée et garnie de coriandre fraîche.", img: "Poulet Mangue Tikka Massala 🥭.png", tags: [] },
      { nom: "Poulet Ananas Curry", prix: 13.90, desc: "Morceaux de poulet tendres dans une sauce curry onctueuse aux épices indiennes, agrémentée de morceaux d'ananas sucrés qui équilibrent les épices.", img: "Poulet Ananas Curry (Nouveau) 🍍.png", tags: ["new"] },
      { nom: "Poulet Imli Massala", prix: 13.90, desc: "Poulet tendre mijoté dans une sauce imli (tamarin) légèrement aigre-douce, parfumée aux épices indiennes et oignons caramélisés.", img: "Poulet Imli (Tamarin) Massala.png", tags: [] },
      { nom: "Poulet Shahi Korma", prix: 13.50, desc: "Morceaux de poulet tendres mijotés dans une sauce crémeuse aux noix de cajou, amandes et raisins secs, parfumée aux épices douces — héritage des cuisines mogholes.", img: "Poulet shahi korma.png", tags: [] },
      { nom: "Poulet Mughlai Tikka Massala", prix: 13.50, desc: "Poulet mariné aux épices et grillé, mijoté dans une sauce onctueuse façon Mughlai, à base de crème, noix de cajou, tomates et épices douces.", img: "Poulet mughlai tikka massala.png", tags: [] },
      { nom: "Poulet Madras", prix: 12.50, desc: "Poulet mijoté dans une sauce riche aux saveurs du sud de l'Inde, relevée au curry Madras, ail, gingembre et un mélange d'épices aromatiques.", img: "Poulet Madras.png", tags: ["heat"] },
      { nom: "Poulet Vindaloo", prix: 12.50, desc: "Poulet tendre et pommes de terre mijotés dans une sauce épicée au vinaigre, ail, gingembre et piments, avec une touche d'acidité typique de Goa. Pour les amateurs de sensations fortes.", img: "Poulet vindaloo.png", tags: ["heat"] },
      { nom: "Poulet Achari", prix: 13.50, desc: "Poulet tendre mijoté aux épices d'achar (pickle indien) : fenugrec, moutarde, ail et piments. Légèrement acidulé et relevé, typique du nord de l'Inde.", img: "Poulet Achari.png", tags: ["heat"] },
      { nom: "Poulet Sagwala", prix: 12.50, desc: "Morceaux de poulet désossés cuits dans une sauce parfumée aux épices indiennes, enrichie d'épinards hachés.", img: "Poulets sagwala.png", tags: [] },
      { nom: "Poulet Aubergines", prix: 13.50, desc: "Poulet tendre mijoté avec des aubergines fondantes dans une sauce tomate parfumée aux épices indiennes.", img: "Poulet aubergines.png", tags: [] },
      { nom: "Poulet Coco Curry", prix: 13.50, desc: "Poulet fondant mijoté dans une sauce onctueuse au lait de coco et curry doux, aux notes exotiques.", img: "Poulet Coco Curry.png", tags: [] },
      { nom: "Poulet Gingembre", prix: 13.50, desc: "Poulet tendre sauté avec du gingembre frais, de l'ail et des épices douces. Parfumé et légèrement relevé.", img: "Poulet Gingembre.png", tags: [] },
      { nom: "Poulet Daal", prix: 13.50, desc: "Morceaux de poulet tendre et lentilles épicées mijotés aux saveurs indiennes — cumin, coriandre et gingembre.", img: "Poulet Daal.png", tags: [] }
    ]
  },

  /* -----------------------------------------------------------------------
     8. Curries de Bœuf
  ----------------------------------------------------------------------- */
  {
    id: "boeuf",
    nom: "Curries de Bœuf",
    intro: "Bœuf mijoté longuement, généreux et fondant.",
    items: [
      { nom: "Butter Bœuf", prix: 15.90, desc: "Morceaux de bœuf tendres mijotés dans une sauce onctueuse à base de tomates, beurre, crème et épices douces comme le garam masala et le fenugrec.", img: "BUTTER BOEUF 🥩 🥇 🔥.png", tags: ["star", "heat"] },
      { nom: "Bœuf Massala", prix: 15.90, desc: "Morceaux de bœuf mijotés lentement dans une sauce riche à base de tomates, oignons, ail et gingembre, relevée au garam masala.", img: "Bœuf Massala 🥩.png", tags: [] },
      { nom: "Bœuf Shahi Korma", prix: 15.90, desc: "Morceaux de bœuf tendres mijotés dans une sauce crémeuse aux oignons caramélisés, noix de cajou ou amandes, yaourt et épices délicates.", img: "BŒUF SHAHI KORMA 🥩.png", tags: [] },
      { nom: "Bœuf Madras", prix: 14.90, desc: "Morceaux de bœuf fondants mijotés dans une sauce intense aux saveurs du sud de l'Inde — tomates, piments, coriandre et curry Madras.", img: "BŒUF MADRAS 🥩.png", tags: ["heat"] },
      { nom: "Bœuf Vindaloo", prix: 14.90, desc: "Dés de bœuf mijotés dans une sauce relevée au vinaigre, ail, gingembre et piments, avec une touche d'acidité typique de Goa. Intense et parfumé.", img: "BOEUF VINDALOO 🥩.png", tags: ["heat"] },
      { nom: "Bœuf Sag", prix: 15.90, desc: "Morceaux de bœuf tendres mijotés avec des épinards frais dans une sauce onctueuse aux épices — garam masala, gingembre et ail.", img: "BŒUF SAG 🥩 (épinards).png", tags: [] },
      { nom: "Bœuf Spice", prix: 14.90, desc: "Dés de bœuf marinés et préparés dans une sauce madras épicée, relevée à la poudre de chilli.", img: "image d'illustration 6.jpg", tags: ["heat", "new"] }
    ]
  },

  /* -----------------------------------------------------------------------
     9. Curries d'Agneau
  ----------------------------------------------------------------------- */
  {
    id: "agneau",
    nom: "Curries d'Agneau",
    intro: "L'agneau dans toutes ses sauces, tendre et parfumé.",
    items: [
      { nom: "Butter Agneau", prix: 15.50, desc: "Agneau grillé au tandoor puis mijoté dans une sauce tomate aux amandes et noix de cajou avec une pointe de crème.", img: "Butter Agneau.png", tags: [] },
      { nom: "Agneau Massala", prix: 14.50, desc: "Curry d'agneau préparé dans sa sauce massala.", img: "Agneau massala.png", tags: [] },
      { nom: "Agneau Tikka Massala", prix: 13.50, desc: "Agneau grillé au tandoor, mijoté dans une sauce tomate et ses épices, cuisiné au curry massala.", img: "Agneau tikka massala.png", tags: [] },
      { nom: "Agneau Shahi Korma", prix: 14.50, desc: "Morceaux de gigot d'agneau mijotés dans une sauce crémeuse aux noix de cajou et raisins.", img: "Agneau shahi korma.png", tags: [] },
      { nom: "Agneau Roghan Josh", prix: 13.90, desc: "Curry cachemiri d'agneau mijoté dans une sauce parfumée aux épices douces : cardamome, clou de girofle, gingembre et fenouil. Riche et fondant.", img: "Agneau roghan josh.png", tags: [] },
      { nom: "Agneau Madras", prix: 12.50, desc: "Dés d'agneau marinés et préparés dans une sauce Madras épicée avec poudre de chilli.", img: "Agneau Madras.png", tags: ["heat"] },
      { nom: "Agneau Vindaloo", prix: 14.50, desc: "Curry d'agneau aux pommes de terre, sauce relevée style Goa.", img: "Agneau Vindaloo.png", tags: ["heat"] },
      { nom: "Agneau Achari", prix: 14.50, desc: "Agneau mijoté aux épices d'achar (pickle indien) : fenugrec, moutarde, ail et piments. Acidulé et relevé, typique du nord de l'Inde.", img: "Agneau Achari.png", tags: ["heat"] },
      { nom: "Agneau Sagwala", prix: 13.50, desc: "Curry d'agneau aux épinards hachés et fromage fondu.", img: "Agneau sagwala.png", tags: [] },
      { nom: "Agneau Aubergines", prix: 13.50, desc: "Curry d'agneau au caviar d'aubergines.", img: "Agneau aubergines.png", tags: [] },
      { nom: "Agneau Daal", prix: 14.50, desc: "Curry d'agneau aux lentilles.", img: "Agneau Daal.png", tags: [] }
    ]
  },

  /* -----------------------------------------------------------------------
     10. Crevettes & Saumon
  ----------------------------------------------------------------------- */
  {
    id: "mer",
    nom: "Crevettes & Saumon",
    intro: "Les saveurs de la mer relevées aux épices indo-pakistanaises.",
    items: [
      { nom: "Butter Saumon", prix: 16.50, desc: "Saumon grillé au tandoor puis mijoté dans une sauce tomate aux amandes et noix de cajou avec une pointe de crème.", img: "Butter Saumon 🥇 🔥.png", tags: ["star", "heat"] },
      { nom: "Saumon Tikka Massala", prix: 14.00, desc: "Saumon grillé au tandoor, mijoté dans une sauce massala parfumée et garni de coriandre fraîche.", img: "image d'illustration 5.jpg", tags: [] },
      { nom: "Saumon Shahi Korma", prix: 14.50, desc: "Saumon cuit aux amandes, noix de cajou et crème fraîche.", img: "Saumon shahi korma.png", tags: [] },
      { nom: "Butter Crevettes", prix: 15.50, desc: "Crevettes grillées puis mijotées dans une sauce tomate aux amandes et noix de cajou avec une pointe de crème.", img: "Butter Crevettes.png", tags: [] },
      { nom: "Crevettes Massala", prix: 14.50, desc: "Crevettes cuites dans une sauce massala, parsemées de coriandre fraîche.", img: "Crevettes massala.png", tags: [] },
      { nom: "Crevettes Korma", prix: 14.50, desc: "Curry de crevettes décortiquées, sauce aux noix de cajou, amandes, raisins et crème fraîche.", img: "Crevettes korma.png", tags: [] },
      { nom: "Crevettes Sagwala", prix: 14.50, desc: "Curry de crevettes décortiquées aux épinards.", img: "Crevettes sagwala.png", tags: [] },
      { nom: "Crevettes Aubergines", prix: 14.50, desc: "Curry de crevettes décortiquées au caviar d'aubergines.", img: "Crevettes aubergines.png", tags: [] }
    ]
  },

  /* -----------------------------------------------------------------------
     11. Bowls
  ----------------------------------------------------------------------- */
  {
    id: "bowls",
    nom: "Bowls",
    intro: "Curry, riz basmati et naan réunis dans un bol, prêt à emporter.",
    items: [
      { nom: "Butter Chicken Bowl", prix: 17.50, desc: "Poulet, sauce butter chicken crémeuse, herbes et épices indiennes, servi avec riz au choix.", img: "Butter chicken bowl.png", tags: ["star"] },
      { nom: "Korma Bowl", prix: 16.00, desc: "Viande et sauce korma onctueuse aux noix de cajou et crème, herbes et épices indiennes, servi avec riz au choix.", img: "Korma bowl.png", tags: [] },
      { nom: "Massala Bowl", prix: 16.00, desc: "Viande et sauce massala parfumée, herbes et épices indiennes, servi avec riz au choix.", img: "Massala bowl.png", tags: [] },
      { nom: "Madras Bowl", prix: 16.00, desc: "Viande et sauce madras épicée, herbes et épices du sud de l'Inde, servi avec riz au choix.", img: "Madras bowl.png", tags: ["heat"] },
      { nom: "Bœuf Bowl", prix: 18.90, desc: "Bœuf mijoté dans une sauce massala riche et parfumée, servi avec riz au choix.", img: "Bœuf Bowl 🥩.png", tags: [] }
    ]
  },

  /* -----------------------------------------------------------------------
     12. Plats Végétariens
  ----------------------------------------------------------------------- */
  {
    id: "vegetarien",
    nom: "Plats Végétariens",
    intro: "Des classiques végétariens généreux, dont notre sag paneer maison.",
    items: [
      { nom: "Sag Paneer", prix: 9.00, desc: "Fromage indien (paneer) et épinards frais mijotés aux épices. La spécialité maison.", img: "Sag panir ''spécialité maison''.png", tags: ["veg", "star"] },
      { nom: "Mater Paneer", prix: 8.50, desc: "Curry de petits pois au fromage indien.", img: "Mater Paneer.png", tags: ["veg"] },
      { nom: "Daal Makhani", prix: 9.90, desc: "Lentilles indiennes finement préparées aux herbes fraîches.", img: "Daal Makhani.png", tags: ["veg"] },
      { nom: "Daal Tarka", prix: 9.00, desc: "Lentilles jaunes préparées à la façon traditionnelle avec de l'ail.", img: "Daal tarka.png", tags: ["veg"] },
      { nom: "Dal Sag", prix: 9.00, desc: "Épinards hachés à l'indienne, aux lentilles jaunes et épices.", img: "Dal sag.png", tags: ["veg"] },
      { nom: "Chana Massala", prix: 9.00, desc: "Pois chiches frais mijotés à la sauce massala et aux épices indiennes.", img: "Chana massala.png", tags: ["veg"] },
      { nom: "Baingan Bharta", prix: 9.00, desc: "Fondue d'aubergines aux aromates, saupoudrée d'herbes fraîches — spécialité maison.", img: "Banghin bartha.png", tags: ["veg"] },
      { nom: "Alou Curry", prix: 8.00, desc: "Pommes de terre fondantes mijotées dans une sauce indienne épicée à base de tomates, oignons, ail et gingembre.", img: "Alou Curry.png", tags: ["veg"] },
      { nom: "Légumes Korma Spécial", prix: 9.00, desc: "Mélange de légumes avec sauce aux noix de cajou, pistaches, amandes et crème fraîche.", img: "Légumes Korma Spécial.png", tags: ["veg"] }
    ]
  },

  /* -----------------------------------------------------------------------
     13. Naans & Pains
  ----------------------------------------------------------------------- */
  {
    id: "naans",
    nom: "Naans & Pains",
    intro: "Cuits minute au tandoor, moelleux et dorés — l'incontournable.",
    items: [
      { nom: "Naan Nature", prix: 3.00, desc: "Galette de farine de blé au levain, cuite au four tandoor.", img: "Naan.png", tags: ["veg"] },
      { nom: "Naan à l'Ail", prix: 4.50, desc: "Naan badigeonné de beurre à l'ail et coriandre fraîche.", img: "Naan à l'ail.png", tags: ["veg"] },
      { nom: "Naan au Fromage", prix: 4.00, desc: "Pain indien cuit au tandoor, garni d'un fromage fondant onctueux. Moelleux, doux et irrésistiblement gourmand.", img: "Naan au fromage 🥇 🔥.png", tags: ["veg", "star"] },
      { nom: "Naan Fromage à l'Ail", prix: 5.50, desc: "Pain à pâte levée fourré au fromage et parfumé à l'ail et aux herbes. Un incontournable plein de goût.", img: "Naan fromage à l'ail 🥇 🔥.png", tags: ["veg", "star"] },
      { nom: "Naan Double Fromage", prix: 6.50, desc: "Naan gonflé au tandoor, à la croûte dorée, débordant d'un cœur généreux de fromage fondant.", img: "Naan Double Fromage 🥇 🔥🧀.png", tags: ["veg", "star"] },
      { nom: "Naan Chilli Fromage", prix: 5.50, desc: "Naan fourré au piment vert et fromage.", img: "Naan Chilli Fromage 🌶 🥇.png", tags: ["veg", "star", "heat"] },
      { nom: "Naan Mozzarella", prix: 5.00, desc: "Naan moelleux garni de mozzarella fondante et filante, doré au four.", img: "Naan Mozzarella.png", tags: ["veg", "new"] },
      { nom: "Naan Fromage Miel", prix: 4.50, desc: "Pain indien moelleux garni de fromage fondant, nappé de miel pour une touche sucrée-salée.", img: "Naan au fromage miel🥇.png", tags: ["veg", "star"] },
      { nom: "Naan Halwa Fromage", prix: 6.90, desc: "Naan moelleux à cœur coulant de halwa sucré et fromage fondant — une création gourmande qui revisite les saveurs indiennes.", img: "Naan Halwa Fromage 🍯 (Nouveau) 🥇 🔥.png", tags: ["veg", "star", "new"] },
      { nom: "Naan Poulet Fromage", prix: 5.90, desc: "Pain fourré au poulet grillé et fromage.", img: "Naan poulet fromage.png", tags: [] },
      { nom: "Keema Naan", prix: 5.50, desc: "Naan fourré à la viande hachée épicée.", img: "Keema Naan.png", tags: [] },
      { nom: "Naan Kashmiri", prix: 5.50, desc: "Naan fourré au fromage, pistaches, noix de coco et raisins secs.", img: "Naan kashmiri.png", tags: ["veg"] },
      { nom: "Naan Roghni", prix: 2.00, desc: "Pain à pâte levée, doré au beurre et parsemé de graines de sésame.", img: "Naan Roghni.png", tags: ["veg"] },
      { nom: "Naan Gingembre", prix: 5.50, desc: "Naan fourré au gingembre.", img: "Naan Gingembre.png", tags: ["veg"] },
      { nom: "Chilli Naan", prix: 5.50, desc: "Naan fourré au piment vert.", img: "Chilli Naan 🔥.png", tags: ["veg", "heat"] },
      { nom: "Paratha", prix: 3.50, desc: "Galette de blé beurrée, cuite à la plaque.", img: "Paratha.png", tags: ["veg"] },
      { nom: "Stuffed Paratha", prix: 3.90, desc: "Galette de farine de blé farcie d'une purée de pommes de terre et petits pois.", img: "Stuffed paratha.png", tags: [] }
    ]
  },

  /* -----------------------------------------------------------------------
     14. Riz
  ----------------------------------------------------------------------- */
  {
    id: "riz",
    nom: "Riz",
    intro: "Basmati parfumé, à associer à votre curry.",
    items: [
      { nom: "Riz au Safran", prix: 4.00, desc: "Riz basmati parfumé au safran.", img: "Riz au safran.png", tags: ["veg"] },
      { nom: "Riz Zeera", prix: 4.50, desc: "Riz basmati préparé au cumin et frit aux oignons.", img: "Riz zeera.png", tags: ["veg"] },
      { nom: "Riz Kashmiri", prix: 5.00, desc: "Riz basmati safrané, parsemé de raisins et de noix de cajou.", img: "Riz kashmiri 🥇 🔥.png", tags: ["veg", "star"] },
      { nom: "Peas Pulao", prix: 4.90, desc: "Riz basmati aux petits pois.", img: "Peas pulao.png", tags: ["veg"] },
      { nom: "Riz Chana Pulao", prix: 5.50, desc: "Riz basmati aux pois chiches.", img: "Riz chana pulao.png", tags: ["veg"] }
    ]
  },

  /* -----------------------------------------------------------------------
     15. Accompagnements & Sauces
  ----------------------------------------------------------------------- */
  {
    id: "accompagnements",
    nom: "Accompagnements & Sauces",
    intro: "Pour rafraîchir, relever ou tremper.",
    items: [
      { nom: "Raïta", prix: 6.50, desc: "Mélange onctueux de concombre et yaourt parfumé à la menthe fraîche.", img: "Raïta.png", tags: ["veg"] },
      { nom: "Sauce Menthe", prix: 1.00, desc: "Chutney de menthe fraîche (3 cl).", img: "Sauce Menthe 3cl.png", tags: ["veg"] },
      { nom: "Sauce Achar", prix: 1.00, desc: "Sauce de pickle épicée (3 cl).", img: "Sauce Achar 3cl.png", tags: ["veg", "heat"] },
      { nom: "Sauce Tamarin", prix: 1.50, desc: "Chutney aigre-doux au tamarin.", img: "Sauce Tamarins (sucré) 🥇.png", tags: ["veg", "star"] }
    ]
  },

  /* -----------------------------------------------------------------------
     16. Desserts
  ----------------------------------------------------------------------- */
  {
    id: "desserts",
    nom: "Desserts",
    intro: "Douceurs maison pour finir en beauté.",
    items: [
      { nom: "Gulab Jamun", prix: 4.50, desc: "Boulettes sucrées moelleuses, frites puis trempées dans un sirop parfumé à la rose et à la cardamome.", img: "Gulab Jamun.png", tags: ["veg"] },
      { nom: "Kheer", prix: 5.00, desc: "Riz au lait parfumé aux pistaches et à la cardamome.", img: "Kheer.png", tags: ["veg"] },
      { nom: "Kulfi", prix: 5.00, desc: "Glace maison au lait, noix de coco et amandes.", img: "Kulfi.png", tags: ["veg"] },
      { nom: "Halwa", prix: 5.00, desc: "Gâteau indien à la semoule, noix de coco et amandes.", img: "Halwa.png", tags: ["veg"] },
      { nom: "Tiramisu Spéculoos", prix: 4.90, desc: "Tiramisu crémeux au spéculoos.", img: "TIRAMISU SPECULOS.png", tags: ["veg"] },
      { nom: "Naan Nutella", prix: 6.00, desc: "Naan sucré généreusement garni de Nutella.", img: "Naan Nutella.png", tags: ["veg"] }
    ]
  },

  /* -----------------------------------------------------------------------
     17. Lassis
  ----------------------------------------------------------------------- */
  {
    id: "lassis",
    nom: "Lassis",
    intro: "Boisson au yaourt onctueuse, sucrée ou salée.",
    items: [
      { nom: "Lassi Sucré", prix: 4.50, desc: "Lassi traditionnel au yaourt, sucré.", img: "Lassi sucré.png", tags: ["veg"] },
      { nom: "Lassi Salé", prix: 4.50, desc: "Lassi traditionnel au yaourt, salé.", img: "Lassi salé.png", tags: ["veg"] },
      { nom: "Lassi Mangue", prix: 4.50, desc: "Lassi crémeux à la pulpe de mangue.", img: "Lassi mangue.png", tags: ["veg"] },
      { nom: "Lassi Fraise", prix: 4.50, desc: "Lassi crémeux à la fraise.", img: "Lassi fraise.jpg", tags: ["veg"] },
      { nom: "Lassi Banane", prix: 4.50, desc: "Lassi crémeux à la banane.", img: "Lassi banane.png", tags: ["veg"] },
      { nom: "Lassi Coco", prix: 4.50, desc: "Lassi crémeux à la noix de coco.", img: "Lassi coco.png", tags: ["veg"] },
      { nom: "Lassi Kiwi", prix: 4.50, desc: "Lassi crémeux au kiwi.", img: "Lassi kiwi.png", tags: ["veg"] },
      { nom: "Lassi Rose", prix: 4.50, desc: "Lassi parfumé à l'eau de rose.", img: "Lassi rose.png", tags: ["veg"] },
      { nom: "Lassi Épicé", prix: 4.50, desc: "Lassi relevé aux épices.", img: "Lassi épicé.png", tags: ["veg", "heat"] },
      { nom: "Lassi Vanille", prix: 4.50, desc: "Lassi onctueux à la vanille, crémeux et légèrement mousseux.", img: "Lassi Vanille 33cl 🌼.png", tags: ["veg", "new"] },
      { nom: "Lassi Passion", prix: 4.50, desc: "Lassi au fruit de la passion, frais et exotique, onctueux et légèrement mousseux.", img: "Lassi Passion 33cl.png", tags: ["veg", "new"] }
    ]
  },

  /* -----------------------------------------------------------------------
     18. Boissons
  ----------------------------------------------------------------------- */
  {
    id: "boissons",
    nom: "Boissons",
    intro: "Sodas, eaux et boissons fraîches.",
    items: [
      { nom: "Coca-Cola (33 cl)", prix: 2.90, desc: "33 cl.", img: "Coca-Cola 33cL.png", tags: [] },
      { nom: "Coca-Cola Zéro (33 cl)", prix: 2.90, desc: "33 cl.", img: "Coca-Cola zéro 33cl.png", tags: [] },
      { nom: "7 UP (33 cl)", prix: 2.90, desc: "33 cl.", img: "7 UP 33cl.png", tags: [] },
      { nom: "7 UP Mojito", prix: 2.20, desc: "Boisson pétillante saveur mojito, 33 cl.", img: "7 UP mojito.png", tags: [] },
      { nom: "Ice Tea Pêche (33 cl)", prix: 2.60, desc: "Thé glacé saveur pêche.", img: "Ice Tea pêche 33cl.png", tags: [] },
      { nom: "Capri-Sun (25 cl)", prix: 2.20, desc: "Boisson aux fruits, 25 cl.", img: "Capri-Sun 25cL.png", tags: [] },
      { nom: "Evian (50 cl)", prix: 2.50, desc: "Eau plate, 50 cl.", img: "Evian.png", tags: [] },
      { nom: "Perrier (33 cl)", prix: 2.50, desc: "Eau gazeuse, 33 cl.", img: "Perrier 33cl.png", tags: [] },
      { nom: "San Pellegrino (50 cl)", prix: 2.50, desc: "Eau gazeuse, 50 cl.", img: "San Pellegrino 50cl.png", tags: [] }
    ]
  }
];

/* Sélection best-sellers pour la section « Spécialités » de la page d'accueil */
window.KAYANI_SIGNATURES = [
  { nom: "Butter Chicken", desc: "Notre signature : sauce onctueuse tomate-beurre, un grand classique.", img: "Butter Chicken 🥇 🔥 ( Sans Riz).png" },
  { nom: "Biryani Tikka", desc: "Riz basmati safrané, poulet tikka grillé, noix de cajou et raisins.", img: "Biryani tikka 🥇.png" },
  { nom: "Naan au Fromage", desc: "Cuit minute au tandoor, cœur de fromage fondant.", img: "Naan au fromage 🥇 🔥.png" },
  { nom: "Poulet Tikka Massala", desc: "Le grand classique, sauce crémeuse tomate et garam masala.", img: "Poulet Tikka Massala 🥇 (Sans Riz).png" },
  { nom: "Mix Grillé", desc: "L'assortiment de nos grillades tandoori.", img: "Mix Grille.png" },
  { nom: "Sag Paneer", desc: "Spécialité maison : paneer et épinards frais.", img: "Sag panir ''spécialité maison''.png" }
];
