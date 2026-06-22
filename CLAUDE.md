# Kayani Kitchen — Site vitrine

> ⚠️ Ce fichier remplace l'ancien `CLAUDE.md` (qui décrivait par erreur un projet
> « Cyan Food / Chicken Story »). Le projet réel est **Kayani Kitchen**.

## Contexte du projet
Site vitrine premium pour **Kayani Kitchen**, restaurant de cuisine
**indo-pakistanaise** authentique (halal, fait maison) situé à **Sannois
(Val-d'Oise, 95)**. Service en **livraison et à emporter uniquement** (pas de
service sur place). Le site doit donner faim, inspirer confiance et pousser à
commander, avec un niveau de finition « agence premium ».

Refonte complète à partir d'un ancien gabarit React obsolète : seule la matière
(structure des pages, contenus) a été reprise ; la direction artistique est
entièrement nouvelle.

## Identité de marque (source : dossier `images/`)
- Logo : « KAYANI » serif romain noir + « Kitchen » script or
  (`images/logo kayani kitchen fond transparent.png`).
- Couleurs officielles (`images/couleurs a utiliser sur le site.txt`) :
  - noir `#010101`
  - or chaud `#cfa264`
  - blanc / fond clair `#ffffff` (fond clair pour la lisibilité du logo)
- DA retenue : canevas ivoire chaud + or, moments sombres assumés via la
  photographie. Un seul accent (or). Typo Fraunces (display) + Hanken Grotesk (UI).

## Stack technique
- Site **statique** : HTML + CSS sur-mesure (`assets/css/style.css`) + JS vanilla
  (`assets/js/`). Aucune dépendance de build, pas de base de données.
- Smooth scroll : Lenis (CDN, dégradation gracieuse). Reveals : IntersectionObserver.
- Polices : Google Fonts (Fraunces, Hanken Grotesk). Icônes : SVG inline.
- Responsive mobile-first obligatoire.

## Pages
1. `index.html` — Accueil (hero, marquee, histoire, chiffres, spécialités,
   commander, avis, footer)
2. `menu.html` — Menu complet par catégories (données : `assets/js/menu-data.js`)
   avec navigation de catégories et filtres (végé / épicé / best-seller)
3. `notre-histoire.html` — Storytelling (héritage, épices, fait maison)
4. `contact.html` — Formulaire QCM interactif (validation client) + infos + FAQ
5. `nous-trouver.html` — Adresse, horaires, carte, zones de livraison
6. `404.html` — Page d'erreur de marque

## Données business (à confirmer avant mise en prod — voir README)
- Adresse : 68 Rue du Poirier Baron, 95110 Sannois ⚠️
- Téléphone : 01 80 87 41 40 ⚠️ · WhatsApp +33 6 63 29 78 91 ⚠️
- Email : gestion@kayani.kitchen ⚠️
- Horaires : Lun/Jeu/Ven/Sam/Dim 11h30–14h15 & 18h00–23h00 ; Mar/Mer 18h00–23h00 ⚠️
- Commande : Uber Eats, marketplace dood · Instagram @kayanii.kitchen
- Les **prix du menu** sont des estimations réalistes à confirmer sur Uber Eats. ⚠️

## Conventions de code
- Indentation : 2 espaces
- Langue du code et commentaires : français
- Nommage fichiers : kebab-case
- Images : dossier `images/` (assets existants) ; visuels d'ambiance et logos inclus

## Règles importantes
- Texte du site en français
- Avis clients authentiques, **jamais le nombre total d'avis**
- CTA = « Commander » / « Appeler » — jamais « Réserver » (pas de sur place)
- Or `#cfa264` jamais en petit texte sur fond clair (contraste) → variante
  `--gold-ink` pour le texte
- Construire une section à la fois, valider avant de continuer

## Commandes
- `npm start` (ou `npm run dev`) — serveur statique local `server.js`
  (zéro dépendance) sur http://localhost:3000
- `npm run autostart:install` — démarrage automatique 24/7 (tâche planifiée
  Windows). Lancer dans un terminal **administrateur** pour le mode « 24/7 même
  hors session ». `npm run autostart:uninstall` pour retirer et arrêter.

> Note : `server.js` (serveur HTTP statique Node, sans dépendance) pilote le
> service local 24/7 — le modifier change le comportement du serveur.
