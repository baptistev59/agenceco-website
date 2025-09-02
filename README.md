# agenceco-website (branche `sass`)

**Site statique de formation** — une vitrine construite avec HTML, CSS et JavaScript, avec une gestion des styles via Sass (préprocesseur CSS).

---

##  Démo en ligne (https://baptistev59.alwaysdata.net)
Utilisateur :  email: "john@example.com" password: "password123"
---

##  Branche actuelle

Ce README correspond à la **branche `sass`**, qui inclut une version du projet utilisant Sass pour une meilleure organisation et modularité des styles.

---

##  Structure du projet (branche `sass`)

.

├── index.html # Page d'accueil

├── blog.html # Page du blog / actualités

├── connexion.html # Page de connexion

├── addactu.html # Ajouter une actualité

├── detailactu.html # Détail d'une actualité

├── modifactu.html # Modifier une actualité

├── assets/

├── js/ # Scripts JavaScript

└── sass/ # Fichiers Sass (styles source)

└── README.md # Documentation (ce fichier)


→ Le projet est principalement structuré en **HTML (≈53 %)**, **CSS (≈45 %)** (via Sass), et un peu de **JavaScript (≈2 %)**.

---

##  Installation & usage

1. Cloner le dépôt et basculer sur la branche `sass` :
   git clone https://github.com/baptistev59/agenceco-website.git
   cd agenceco-website
   git checkout sass
   
2. Compiler les fichiers Sass en CSS (ex. avec Sass CLI) :
   sass assets/sass/:assets/css/
   Ou avec Live Sass Compiler sous VS Code.

4. Ouvrir index.html dans ton navigateur (par clic ou Ctrl+O),
   ou lancer un serveur de développement (ex. Live Server pour VS Code) pour un rafraîchissement automatique.

## Technologies utilisées

- HTML5
- Sass pour les styles (préprocesseur CSS)
- CSS3 (généré depuis Sass)
- JavaScript (fonctionnalités dynamiques éventuelles)

## Fonctionnalités / Pages

Le site comprend plusieurs pages distinctes :

- index.html — accueil
- blog.html — liste d’actualités ou articles
- connexion.html — page de connexion
- addactu.html, detailactu.html, modifactu.html — fonctionnalités CRUD pour les actualités (ajout, détail, modification)

## Backend (API)

Le projet utilise une API dédiée, disponible dans un dépôt séparé :  
👉 [AgencEcoBackend](https://github.com/gducampus/AgencEcoBackend)

Toutes les instructions d’installation et d’exécution du backend sont détaillées directement dans le README de ce dépôt.
Pour la version de démo en ligne, l'API' est déployée sur Vercel à l'adresse "https://agencecobackend.vercel.app/".

##  Contributions

Contributions bienvenues ! Voici comment procéder :
1. Forke ce dépôt
2. Crée une branche pour ta fonctionnalité : git checkout -b feature/nom-de-ta-fonctionnalité
3. Modifie, puis commite : git commit -m "Ajout : description de la fonctionnalité"
4. Pousse ta branche sur ton fork : git push origin feature/nom-de-ta-fonctionnalité
5. Ouvre une Pull Request sur la branche sass du dépôt original.

##  Licence

Ce projet est sous licence MIT (voir le fichier LICENSE s’il existe, sinon envisager de l’ajouter).
