# Dr Wings — Site vitrine

## Contexte du projet

Site vitrine premium pour **Dr Wings**, restaurant spécialisé dans les **chicken wings** basé à **Franconville**. Service en **livraison uniquement** via Uber Eats (pas de service sur place). Le site doit donner faim, instaurer une identité de marque forte et décalée, et pousser à commander — avec un niveau de finition agence premium.

Refonte complète avec une direction artistique entièrement nouvelle autour du concept **"docteur des wings"** : personnages en blouse blanche, univers médical détourné, ton absurde et percutant.

---

## Stack technique — À choisir par Claude

**Tu choisis toi-même le stack le plus adapté à ce projet.** Critères de sélection :
- Animations complexes, fluides, on-scroll (GSAP, Framer Motion, Motion One, etc.)
- Performance maximale (LCP < 2s, pas de layout shift)
- Facilité de déploiement statique ou SSG
- Responsive mobile-first irréprochable

Stacks recommandés à évaluer : Next.js + GSAP, Astro + Motion, Vite + GSAP, Nuxt. Choisis et justifie ton choix dans ta to-do list avant de commencer.

---

## Dossier `images/` — Lecture obligatoire et complète

**Lis TOUS les fichiers du dossier `images/` sans exception, dans leur intégralité, avant toute action.**

Ce dossier contient :
- Les assets visuels existants (logo, mascottes, photos)
- Des fichiers `.txt` contenant des informations critiques : URL Uber Eats, Instagram, liens, données business, palette couleurs, etc.
- Toutes les informations dont tu as besoin pour la suite

**Ne cherche rien sur le web avant d'avoir tout lu dans ce dossier.** Les liens et URLs dont tu as besoin sont dedans.

---

## Récupération des assets — Via Firecrawl obligatoirement

### Images des plats (priorité absolue)
Une fois l'URL Uber Eats trouvée dans le dossier `images/`, utilise **Firecrawl** pour :
- Scraper la page Uber Eats complète du restaurant
- Extraire **l'image individuelle de chaque plat** du menu
- Récupérer les noms, descriptions et prix exacts
- Récupérer les catégories dans leur ordre d'affichage

Utilise `firecrawl_scrape` avec rendu JS activé — Uber Eats est une SPA, le fetch natif ne fonctionnera pas.

### Visuels d'illustration (Instagram + web)
Une fois le compte Instagram trouvé dans le dossier `images/` :
- Scrape le feed Instagram via Firecrawl pour récupérer les visuels de marque
- Cherche des images d'illustration complémentaires (wings, ambiance street food, univers médical décalé) via `firecrawl_search`
- Récupère également tout asset disponible sur le site existant `https://dr-wings.com/`

### Règle générale
Tout site qui bloque (Uber Eats, Instagram, SPAs, sites avec JS dynamique) → **Firecrawl uniquement**. Jamais de fetch natif sur ces cibles.

---

## Identité de marque

**Nom :** Dr Wings
**Concept :** Chicken wings premium avec une identité "docteur" décalée et absurde
**Localisation :** Franconville (livraison Uber Eats uniquement)
**Positionnement :** Street food américain, épicé, fun, premium

**Personnages / Mascottes :** Petits personnages en blouse blanche de médecin, stéthoscope, attitude street food. Ils prescrivent des wings comme des ordonnances. Ce sont les héros visuels du site — pas de la déco secondaire.

**Palette :** À définir à partir des assets trouvés dans `images/`. Direction générale : rouge (urgence, épices, chaleur), noir, blanc médical, accents chauds (orange brûlé, jaune moutarde). Construis les CSS custom properties à partir de ce que tu trouves.

**Typographie :** Contraste entre univers médical (serif clinique, froid) et street food américain (condensed bold, chaud). À choisir en cohérence avec les assets existants.

**Ton éditorial :** Sérieux dans la forme, absurde dans le fond. Prescriptions de wings. Ordonnances pour les menus. Diagnostic : tu as faim. Traitement : Atomic Red. Chaque mot est choisi pour Dr Wings — aucune formule générique.

---

## Structure des pages

Tu définis toi-même la structure qui correspond le mieux au projet après avoir analysé les assets et références. À titre indicatif :

- **Accueil** — Hero fort, identité immédiate, menu highlights, CTA commander
- **Menu** — Toutes les catégories avec images des plats (récupérées sur Uber Eats), filtres
- **Notre histoire / Concept** — Si des éléments de storytelling existent dans les assets ou sur Instagram, construis cette page. **Si rien n'existe, cette page est optionnelle — ne l'invente pas.**
- **Nous trouver** — Adresse, horaires, zones de livraison, lien Uber Eats
- **404** — Page d'erreur dans l'univers Dr Wings

Adapte, ajoute ou supprime des pages selon ce que tu trouves. Tu as carte blanche sur la structure tant que l'UX est irréprochable.

---

## Données business

Toutes les données business (adresse, téléphone, horaires, URL de commande, réseaux sociaux) se trouvent dans les fichiers `.txt` du dossier `images/`. Lis-les avant toute chose. Ne hardcode rien de mémoire.

Les **prix et descriptions du menu** sont à récupérer directement sur Uber Eats via Firecrawl — c'est la source de vérité.

---

## Conventions de code

- Indentation : 2 espaces
- Langue du code et commentaires : français
- Nommage fichiers : kebab-case
- Zéro credential, clé API ou secret en dur dans le code
- Les images récupérées via Firecrawl sont téléchargées localement dans `images/plats/` et `images/illustrations/`

---

## Règles importantes

- **CTA = "Commander" / "Voir le menu"** — jamais "Réserver" (pas de service sur place)
- **Jamais de faux avis** — uniquement des avis authentiques si trouvés sur Uber Eats ou Google
- **Mobile-first absolu** — la clientèle principale commande depuis son téléphone
- **Aucune formule IA générique** dans le copy — chaque phrase est écrite pour Dr Wings
- **Construire une section à la fois**, valider avant de continuer
- **Boucle sécurité** après chaque composant majeur — voir instructions dans le prompt principal

---

## Commandes de développement

À définir selon le stack choisi. Documente les commandes dans un `README.md` à la racine du projet :
- Commande de dev local
- Commande de build
- Commande de preview du build
- Instructions de déploiement