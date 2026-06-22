# Kayani Kitchen — Site vitrine

Site vitrine premium pour **Kayani Kitchen**, restaurant de cuisine
**indo-pakistanaise** (halal, fait maison) à **Sannois (95)**.
Livraison & à emporter. Site **statique** (HTML/CSS/JS), sans build ni base de données.

## Lancer en local

```bash
npm run dev
# → http://localhost:3000
```

Alternative sans Node :

```bash
python -m http.server 3000
```

> Ouvrir directement les fichiers en `file://` fonctionne aussi, mais un petit
> serveur statique est recommandé (chemins relatifs, polices, iframe carte).

## Structure

```
index.html              Accueil (hero, histoire, spécialités, commander, avis)
menu.html               Menu complet (rendu dynamique + filtres)
notre-histoire.html     Storytelling de la marque
contact.html            Formulaire QCM + FAQ + infos
nous-trouver.html       Carte, horaires, zones de livraison
404.html                Page d'erreur
assets/css/style.css    Design system (tokens, composants, animations)
assets/js/main.js       Nav, smooth scroll, reveals on-scroll, compteurs, marquee
assets/js/menu-data.js  Données du menu (catégories, plats, prix, tags, images)
assets/js/menu.js       Rendu de la page menu + filtres + scrollspy
images/                 Logos, visuels d'ambiance et photos de plats
```

## Modifier le contenu

- **Le menu** : `assets/js/menu-data.js`. Chaque plat =
  `{ nom, prix, desc, img, tags }`.
  - `img` = nom de fichier exact dans `/images` (les espaces/accents/emojis sont
    gérés automatiquement à l'affichage). Si l'image est absente, une vignette de
    marque s'affiche à la place.
  - `tags` : `star` (best-seller), `heat` (épicé), `veg` (végétarien), `new` (nouveau).
- **Coordonnées, horaires, liens de commande** : présents dans le `<footer>` et les
  pages `contact.html` / `nous-trouver.html` (rechercher le numéro ou l'adresse).
- **Spécialités de l'accueil** : section « Nos spécialités signatures » dans
  `index.html`.

## Identité de marque

- Couleurs : noir `#010101`, or `#cfa264`, fond clair (ivoire). Variables dans
  `:root` de `style.css`.
- Polices : Fraunces (titres) + Hanken Grotesk (texte), via Google Fonts.
- Logo : `images/logo kayani kitchen fond transparent.png`.

## ⚠️ À confirmer avant mise en production

Ces données proviennent de sources publiques (site officiel, TripAdvisor) et
doivent être validées par le restaurant :

- **Adresse** : « 68 Rue du Poirier Baron, 95110 Sannois » (variante vue :
  « Place du Poirier Baron »).
- **Téléphone** : 01 80 87 41 40 — **WhatsApp** +33 6 63 29 78 91 (autre listing :
  +33 6 36 06 22 21).
- **Email** : gestion@kayani.kitchen.
- **Horaires** : Lun/Jeu/Ven/Sam/Dim 11h30–14h15 & 18h00–23h00 ; Mar/Mer soir uniquement.
- **Coordonnées GPS** du JSON-LD (`index.html`) : approximatives (centre de Sannois).
- **Prix du menu** : estimations réalistes — à aligner sur Uber Eats / dood.
- **Avis clients** : 2 sont repris de TripAdvisor ; remplacer les autres par de
  vrais avis Google/TripAdvisor (verbatim). Ne jamais afficher le nombre total d'avis.
- **Liens légaux** (mentions légales, confidentialité) : pages à créer.
- **Histoire** : rédigée de façon factuelle/évocatrice, sans inventer de fondateurs.
  À enrichir avec le vrai récit du restaurant.

## Pistes d'évolution (hors v0)

Commande en ligne intégrée, réservation, multilingue, blog, optimisation/rognage
des photos de plats, migration vers un CMS (ex. Astro/Next.js) si besoin.
