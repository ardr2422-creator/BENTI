# Dr Wings — Site vitrine

Site vitrine premium pour **Dr Wings**, la « clinique du poulet » à **Franconville (95)**.
Spécialité : chicken wings, tenders, sauces signatures. **Livraison uniquement** via Uber Eats.

Direction artistique : carrelage clinique blanc + blush, barquettes kraft, encre brune, mascotte
poulet-à-lunettes. Ton « médecin fou de wings » — ordonnances, posologie, prescriptions.

---

## Stack

Site **statique** (HTML/CSS/JS vanilla), zéro build, pensé pour la performance et un déploiement
Vercel instantané. Pas de framework : contrôle total du design, LCP minimal, aucune dépendance front
à installer.

- **Animations on-scroll** : IntersectionObserver (reveals) + [Lenis](https://github.com/darkroomengineering/lenis) (smooth scroll), via CDN.
- **Typographie** : Bricolage Grotesque (display) · Caveat (manuscrit « ordonnance ») · Hanken Grotesk (texte) · mono système (données cliniques).
- **Formulaire de contact** : fonction serverless `api/contact.js` (Resend) + repli Instagram.

### Palette de marque

| Rôle | Couleur |
|------|---------|
| Brun espresso (encre, texte, fonds sombres) | `#5C3A2E` |
| Blush (sections alternées) | `#FFE3DF` |
| Blush soutenu (accents, puces) | `#FCCCC8` |
| Blanc (canevas) | `#FFFFFF` |
| Terracotta « épice » (accent fonctionnel) | dérivée — `#D2603F` |

Tout est piloté par des CSS custom properties dans `assets/css/style.css` (`:root`).

---

## Structure

```
index.html               Accueil (hero clinique, ordonnances signature, protocole)
menu.html                La carte (« l'ordonnance », filtres + posologie)
notre-histoire.html      La clinique (concept, méthode, serment)
nous-trouver.html        Franconville + zone de livraison
contact.html             Formulaire + FAQ
404.html                 Page « patient introuvable »
mentions-legales.html    /  politique-confidentialite.html
assets/css/style.css     Design system + composants
assets/js/main.js        Nav, reveals, smooth scroll, marquee, FAQ
assets/js/menu-data.js   Données du menu (source : Uber Eats Franconville)
assets/js/menu.js        Rendu de la carte + filtres + scrollspy
api/contact.js           Fonction serverless (envoi via Resend)
images/                  Logo, illustrations, visuels
```

---

## Développement

```bash
npm install        # @vercel/analytics uniquement (optionnel)
npm run dev        # serveur local sur http://localhost:3000 (sert le statique + /api/contact)
```

> Le serveur de dev (`server.js`) est local uniquement. En production, Vercel sert les fichiers
> statiques et exécute `api/contact.js` comme fonction serverless.

---

## Déploiement (Vercel)

1. Connecter le dépôt à Vercel (framework : *Other*, output : racine — déjà dans `vercel.json`).
2. Définir les variables d'environnement (onglet *Settings → Environment Variables*) :
   - `RESEND_API_KEY` — clé API [Resend](https://resend.com) (sinon le formulaire renvoie « non configuré » proprement).
   - `CONTACT_TO_EMAIL` — adresse de réception.
   - `CONTACT_FROM_EMAIL` — expéditeur vérifié sur Resend.
3. `vercel.json` configure : `cleanUrls`, en-têtes de sécurité (CSP, HSTS, X-Frame-Options…), cache des assets.
4. `.vercelignore` exclut du déploiement les résidus et notes internes.

---

## À compléter par l'exploitant

Ces éléments nécessitent des informations réelles que le site signale sans les inventer :

- **Mentions légales** : raison sociale, SIRET, directeur de publication (`mentions-legales.html`).
- **Email de contact** : configurer `CONTACT_TO_EMAIL` / `RESEND_API_KEY`.
- **Horaires** : affichés en temps réel via Uber Eats (pas de tableau figé).
- **Prix / disponibilité** : la source de vérité reste la fiche Uber Eats.

---

## Liens

- Commander : [Uber Eats — Dr Wings Franconville](https://www.ubereats.com/fr/store/dr-wings-franconville/v0p42CWaU-2kR9s5SoUDvw)
- Instagram : [@doctor.wings](https://www.instagram.com/doctor.wings/)
