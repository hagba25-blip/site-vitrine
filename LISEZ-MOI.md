# WebPro Lomé — Site vitrine + 5 démos

## Contenu du dossier

```
site-vitrine/
├── index.html          ← ta page de présentation (services, exemples, tarifs, contact)
├── css/style.css       ← styles de la page de présentation
├── js/main.js          ← menu mobile, formulaire → WhatsApp, animations
└── demos/
    ├── ecole.html        ← école (cycles, résultats, pré-inscription)
    ├── boutique.html     ← commerçante (catalogue, panier, commande WhatsApp)
    ├── restaurant.html   ← restaurant (menu, ouvert/fermé en direct, réservation)
    ├── particulier.html  ← photographe (galerie avec visionneuse, services, contact)
    └── mariage.html      ← invitation (compte à rebours, programme, RSVP)
```

Chaque démo est un seul fichier HTML (CSS et JS à l'intérieur) : facile à copier pour un vrai client.

## Mettre en ligne gratuitement (Netlify, 5 minutes)

1. Crée un compte sur https://app.netlify.com (avec ton compte GitHub ou e-mail).
2. Va dans **Sites → Add new site → Deploy manually**.
3. Glisse-dépose le dossier `site-vitrine` entier.
4. Netlify te donne une adresse du type `xxxx.netlify.app`.
   Change-la dans **Site configuration → Change site name** (ex : `webpro-lome.netlify.app`).

Autre option : mettre le dossier sur GitHub et l'importer sur Vercel ou GitHub Pages.

## À personnaliser avant de partager

- **Le nom « WebPro Lomé »** : remplace-le par ton nom ou le nom de ta marque
  (dans `index.html` et en bas de chaque démo). Astuce : dans VS Code, `Ctrl+Shift+H`
  pour remplacer dans tous les fichiers.
- **Les prix** : section `id="tarifs"` dans `index.html`.
- **Le numéro WhatsApp principal** : `WHATSAPP_NUMBER` dans `js/main.js`
  et `const WA = '...'` dans chaque démo (format `228XXXXXXXX`, sans + ni espaces).
- **Ta photo** (facultatif) : tu peux ajouter une section « Qui suis-je » avec ta photo.

## Astuces de vente

- Les formulaires des démos envoient un vrai message sur **ton** WhatsApp :
  fais tester le client devant toi, il verra que ça marche.
- **Invitation personnalisée** : ajoute `?invite=Nom%20Prénom` à la fin du lien,
  par exemple `mariage.html?invite=Ama%20Koffi`. L'invité voit son nom à l'ouverture.
  C'est un argument fort pour vendre les invitations.
- **Produits, menu, photos** : dans chaque démo, la liste est en haut du `<script>`
  (`PRODUCTS`, `MENU`, `PHOTOS`). Tu modifies juste ces listes pour un nouveau client.
- **Horaires du restaurant** : tableau `HOURS` dans `restaurant.html`.
- **Date du mariage** : `const WEDDING` dans `mariage.html`.

## Images

Les photos viennent d'Unsplash (gratuites). Pour un vrai client, remplace-les par
ses propres photos : mets-les dans un dossier `images/` et change les liens `src="..."`.
Réduis leur poids avant (https://squoosh.app) pour que le site reste rapide sur mobile.
