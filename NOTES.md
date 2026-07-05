# Benti — état du projet (démo spéculative)

Refonte complète du site Benti (restaurant tunisien, Paris 11 & 3) en **Next.js 15
(App Router) + TypeScript + Tailwind**, prête pour Vercel. Objectif : remplacer le
template Partoo/CentralApp actuel par un vrai site à fort craft.

Branche de travail : **`benti-site`**. Build vérifié **propre** (`npm run build`, 26 routes).

---

## ✅ Corrections appliquées (2e passe, retours client)

- **Héros** : nouvelle bannière Sidi Bou Saïd (`/images/hero/sidi-bou.jpg`), repère « Défiler » retiré.
- **Nav** : barre en **glassmorphism arrondie** (visible en permanence, même sur le héros).
- **Bannières défilantes** : `@keyframes marquee` déclarée en dur (Tailwind la purgeait) → toutes les marquees défilent (accueil, footer, strip traiteur, stories).
- **Notre histoire** : badge « ma fille » + photo fondateurs **à l'intérieur** de l'image.
- **Makloubs** : hover d'ombre corrigé (plus de découpe), `scroll-snap-stop`, **clic = recentrage** sur PC, cartes latérales floutées ; 3 bulles catégories en **texte blanc** + arrondis nets.
- **Avis** : **vrais avis Google** (fichier `avis_benti.txt`, avatars réels, badge Google), **sans guillemets**, slider en **peek flouté** (voisines floues, centre net). Note réelle **4,8/5 · 669 avis**.
- **Instagram / stories** : sélection **curée** (visuels lumineux, on écarte les captures sombres) + **défilement auto**.
- **Traiteur (bloc accueil)** : arrondis de la grille d'images corrigés.
- **Adresses** : **bonnes photos** de devanture (Paris 11 bleu / Paris 3 orange) + **horaires affichés sur les deux** cartes.
- **Footer** : bandeau défilant « Benti » au-dessus.
- **Page carte** : filtres « Sans gluten / Vegan / Version piquante » retirés (+ mentions « version piquante » nettoyées dans les textes) ; filtres **centrés, sous le bloc téléphone**, espacés du menu quand ils se collent.
- **Page traiteur** : citation sur **fond couleur unie**, galerie **bento** (tailles variées), strip d'images qui défile.
- **Ombres** globalement adoucies (fin du « fond gris » sur les arrondis).

> ⚠️ Vérif mobile 375 px toujours non concluante via l'outil navigateur (la fenêtre Chrome reste bloquée à 1920 px de large, impossible d'émuler un viewport mobile). Code responsive revu à la main (mobile-first, `sm/md/lg`) : nav→drawer, coverflow scroll-snap, slider avis `peek` 86 %, bento 2 colonnes, adresses 1 colonne. **À re-checker dans les devtools.**

---

## Déploiement — état au 5 juillet 2026

- ✅ `.vercel/` **relié au bon projet Vercel `benti`** (plus `cmd`) :
  `prj_afl2gqQssXeXhA6ND7BWNf8fkKrr`, équipe `ardr2422-3225s-projects`.
- ✅ **Next.js 15.1.6 → 15.5.20** : Vercel refusait tout déploiement
  (« Vulnerable version of Next.js detected », CVE-2025-29927). Build local revérifié
  propre après mise à jour.
- ✅ **Déploiement preview réussi** (build distant Ready, 44 s) :
  `https://benti-61vij279n-ardr2422-3225s-projects.vercel.app` (302 → login Vercel :
  protection des previews, ouvrir connecté au compte Vercel).
- ⏳ **Production non déployée** et **rien poussé sur GitHub** : les deux actions ont été
  bloquées par le mode auto (confirmation explicite requise). À faire :
  ```bash
  git remote add benti https://github.com/ardr2422-creator/BENTI.git  # repo existant et VIDE
  git push benti benti-site:main
  vercel deploy --prod
  ```
- Reste à vérifier le domaine (`benti-paris.fr`) côté Vercel après la mise en prod.
- ⚠️ **Disque C: quasi plein** (0 Go libre au moment du déploiement ; ~1,3 Go récupérés
  en purgeant le cache npm). À nettoyer sérieusement.

---

## Ce qui est construit

**Stack & fondations**
- App Router, TS strict, Tailwind (tokens palette Sidi Bou Saïd : bleu `#2DA5C3`,
  harissa `#AC4066`, terracotta `#B46A35`, olive `#417A6E` + jaune soleil).
- Typo : **Fraunces** (display), **Hanken Grotesk** (corps), **Caveat** (accent manuscrit).
- Motion global (`components/SiteMotion.tsx`) : Lenis smooth scroll, reveal au scroll,
  stagger, parallax, coverflow, marquees. **Animations forcées** (on ignore
  `prefers-reduced-motion`, comme demandé).
- Favicon / app icon depuis le logo. OG image dynamique (`app/opengraph-image.tsx`,
  runtime edge).

**Pages FR** : `/` (home complète), `/carte`, `/traiteur`, `/adresses`,
`/adresses/paris-11`, `/adresses/paris-3`, `/contact`, `/mentions-legales`,
`/politique-confidentialite`, `/cookies`.

**Version EN complète** (site bilingue) : `/en`, `/en/menu`, `/en/catering`,
`/en/locations`, `/en/locations/paris-11|paris-3`, `/en/contact`, `/en/legal-notice`,
`/en/privacy-policy`, `/en/cookies`. Sélecteur de langue FR/EN dans la nav (desktop +
drawer), `hreflang` alternates par page, `og:locale`, `<html lang>` dynamique.

**Home** : héros vidéo/photo makloub (parallax) → histoire Abir & Yassine (Benti = « ma
fille », Sidi Bou Saïd, makloub) → highlights carte (coverflow des 6 makloubs + Bols /
Batatas / Boissons) → **slider vidéo** (VideoShowcase) → **slider avis** + note réelle
4,8/5 · 665 avis → **stories/presse** (strip Instagram + mentions presse) → bloc traiteur
+ CTA devis → 2 adresses → bloc Instagram → footer complet.

**Extras démo**
- Barre d'action **sticky mobile** (Voir la carte / Commander).
- **404** soignée, **loading** animé, **transitions de page** (fade/slide).
- Nav mobile en **drawer** latéral.
- Cookie banner + pages légales.
- Formulaires contact & devis (validation, état de succès).

**SEO / technique**
- Metadata par page (title/description/canonical/OpenGraph).
- **JSON-LD** : `Restaurant` + `FoodEstablishment`/LocalBusiness par adresse (NAP
  cohérent, horaires réels, `aggregateRating` 4,8/665), `Menu`, `Organization`,
  `WebSite`, fils d'Ariane (`BreadcrumbList`).
- `sitemap.xml` (FR + EN avec alternates), `robots.txt`.
- Alt text + HTML sémantique (header/main/footer, `dl` horaires, `figure`, aria).

**Données réelles récupérées (crawl benti-paris.fr / RestaurantGuru)**
- Horaires : **Lun–Ven 11:45–15:00, Sam 12:00–16:00, Dim fermé** (spot du **midi**,
  sur place & à emporter). Copie ajustée en conséquence (pas de service du soir).
- Note : **4,8/5, 665 avis Google** (+ 5/5 TripAdvisor) — affichée + dans le schema.
- Téléphones : Paris 11 `01 42 72 12 01`, Paris 3 `01 86 04 19 15`.
- Textes EN calqués sur le ton du site officiel bilingue.

**Assets utilisés (depuis `/infos`)**
- Logo, photo makloub (héros), intérieur bleu Sidi Bou, devanture (file d'attente),
  photo fondateurs Abir & Yassine, 57 stories clients Instagram (preuve sociale réelle),
  22 photos traiteur, vidéo de présentation d'Abir.

---

## Placeholders / à remplacer avec leurs vrais éléments

- **Avis (slider témoignages)** : ✅ désormais de **vrais avis Google** (extraits de
  `infos/benti_avis_google/avis_benti.txt`, avatars réels, note **4,8/5 · 669 avis**).
- **Mentions presse** (Le Bonbon, Enlarge your Paris…) : **illustratives** → à confirmer
  ou remplacer par de vraies retombées.
- **Photos par recette de makloub** : aucune photo par recette dans `/infos`. Les cartes
  makloub sont des **cartes couleur** (design assumé, honnête). → Fournir des photos par
  recette pour basculer en cartes photo (le composant `MakloubCard` gère déjà `image`).
- **Livraison** : aucun lien Uber Eats / Deliveroo public trouvé au crawl. « Commander »
  pointe vers la carte + **clic-pour-appeler** (les deux numéros). → Brancher les liens
  livraison dans `SITE.delivery` (`lib/site.ts`) s'ils existent.
- **Formulaires** contact & devis : pas de backend. Ils ouvrent un **mailto** de secours
  (`contact@benti-paris.fr`, à confirmer) et affichent une confirmation. → Brancher un
  endpoint (`/api/inquiry`, Resend/Formspree…) au lancement.
- **Email** `contact@benti-paris.fr` : supposé, à confirmer.
- **Mentions légales** : SIRET, forme juridique, capital, assurance = « à compléter ».
- **Vidéo** : une seule vidéo fournie. Le slider est prêt pour plusieurs — déposer
  d'autres fichiers dans `/public/video` et compléter `VIDEOS` (`lib/site.ts`).
- **OG image** : générée dynamiquement (typo système). Peut être remplacée par une image
  fixe brandée si besoin.
- **Horaires** : source publique (le widget officiel affichait « ouvre mercredi » ;
  RestaurantGuru donne le détail par jour). → À confirmer par Benti.

---

## Vérifications effectuées

- `npm run build` : **propre**, 26 routes (0 erreur de type).
- Test navigateur (desktop 1440) : home (héros, histoire, coverflow), `/carte`
  (scrollspy + CTA téléphone), `/en` (traduction complète + sélecteur de langue) —
  **aucune erreur console**, toutes les routes en 200 (curl : `/`, `/en`, `/carte`,
  `/en/menu`, `/traiteur`, `/adresses/paris-11`, `/contact`, `/sitemap.xml`,
  `/robots.txt`).
- Mobile : layout responsive (Tailwind `lg:`), drawer, sticky bar, coverflow scroll-snap
  implémentés. Vérif visuelle 375px non concluante via l'outil navigateur (la fenêtre
  Chrome n'a pas voulu descendre sous sa largeur min pendant l'automatisation) → à
  re-checker à la main dans les devtools ; le code responsive est en place.

## Détails d'implémentation utiles

- Source de vérité contenu/marque : `lib/site.ts` (NAP, carte, adresses, vidéos),
  `lib/i18n.ts` (dictionnaire FR/EN typé), `lib/localized.ts` (carte/avis EN),
  `lib/schema.ts` (JSON-LD), `lib/reviews.ts`.
- Pages = fines routes FR + `/en` rendant des composants partagés
  (`components/pages/*Content.tsx`) pilotés par `lang` → une seule implémentation
  bilingue.
- Anciens fichiers de l'ancien projet supprimés (serveur Express `server.js`, `api/`,
  `vercel.json`, etc.). Un **serveur statique tiers tourne encore sur le port 3000**
  (projet « Kayani Kitchen », PID externe) — pas lié à Benti, laissé intact. J'ai testé
  Benti sur le **port 3100**.

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:3000
# ou build prod :
npm run build && npm run start -- -p 3100
```
