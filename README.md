# T-ENT-500-MAR-5-1-portfolio-6

# Portfolio – Lilou Tibbaut

Portfolio de Lilou Tibbaut, étudiante à Epitech Marseille (année préparatoire au MSc Pro, parcours IA & Data visé), à la recherche d'une alternance de 30 mois en IA, data ou développement web à partir de janvier 2027.

**Site en ligne :** https://liloutbbt.github.io/Mon-Portfolio/

## Technologies

- HTML et CSS écrits à la main, sans framework
- JavaScript pour les éléments communs (en-tête, pied de page, séparateurs) et la traduction français / anglais
- Hébergement avec GitHub Pages, mis à jour automatiquement à chaque push sur la branche `main`

## Structure

```
Mon-Portfolio/
├── index.html          Accueil : positionnement, photo, projets phares, compétences
├── projets.html        Projets à Epitech et avant Epitech, bilan de l'année
├── cv.html             Formations, compétences, expériences, centres d'intérêt
├── contact.html        Coordonnées et formulaire de contact
├── README.md
└── assets/
    ├── css/
    │   └── style.css       Styles de tout le site (variables de couleurs, responsive)
    ├── js/
    │   ├── script.js       Génère l'en-tête, le pied de page et gère la langue
    │   └── traductions.js  Textes anglais, associés aux attributs data-i18n
    ├── img/                Photo de profil et images des centres d'intérêt
    └── docs/
        └── cv-lilou-tibbaut.pdf
```

## Fonctionnement

- **Éléments communs :** chaque page contient un `<header class="entete">` et un `<footer class="footer">` vides, remplis par `script.js`. Le menu met en évidence la page active (`aria-current="page"`).
- **Couleurs :** toutes les couleurs sont définies une seule fois en variables au début de `style.css` (`--rose`, `--jaune`, `--bleu`…).
- **Traduction :** le français est écrit directement dans le HTML. Les éléments à traduire portent un attribut `data-i18n` (ou `data-i18n-alt`, `data-i18n-content`, `data-i18n-aria`) dont la valeur est une clé de `traductions.js`. Le drapeau du menu change de langue ; le choix est mémorisé dans le navigateur. Si le navigateur du visiteur est en anglais, le site s'affiche en anglais.
- **Ajouter un texte traduit :** écrire le texte français dans le HTML avec `data-i18n="section.cle"`, puis ajouter `"section.cle": "English text"` dans `traductions.js`.

## Accessibilité et responsive

- Contour de focus visible sur les liens, boutons, champs du formulaire et cartes retournables
- Barre de défilement toujours visible, aux couleurs du site
- Texte alternatif sur chaque image et hiérarchie de titres respectée
- Trois mises en page : mobile (moins de 768 px), tablette (768 à 1023 px) et ordinateur

## Ressources et crédits

- Icônes : [Font Awesome](https://fontawesome.com) (licence gratuite)
- Photo de profil et images des centres d'intérêt : personnelles