// const urlApi = "http://localhost:3000";
const urlApi ="https://agencecobackend.vercel.app";
const urlGetListArt = urlApi + "/articles";
const urlDelArt = urlApi + "/articles/";

const urlAddActu = './addactu.html';
const urlLogin = './connexion.html';
const urlModifActu = './modifactu.html';
const urlBlog = './blog.html';
const urlDetail = "./detailactu.html"

const messSuppr = "Voulez-vous supprimer l'article ?";


const section = document.getElementById('new-list');
const div = document.getElementById('articles');

// Ouverture et fermeture du menu Burger
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});

// Gestion de l'affichage de la liste des articles
// Gestion de l'appel à l'API pour la récup des articles
async function getListArt(url) {
    const response = await fetch(url, { method: 'GET' });
    return response.json();
};

// Gestion de la response de l'appel à l'API
getListArt(urlGetListArt)
    .then(articles => {
        console.log(articles);
        articles.sort(classer);
        articles.forEach(article => {
            console.log("fonction article fetch", article);
            displayArticle(article);
        });
    })
    .catch(error => {
        console.error('Erreur : ', error.message);
        displayErreur(error.message);
    });

function classer(a, b) {
    return (a.publicationDate < b.publicationDate) ? 1 : -1;
}
// Affichage de l'erreur
function displayErreur(error) {
    console.log("fonction displayErreur");
    const articles = document.getElementById('articles');

    const div = document.createElement('div');
    div.classList = 'actu erreur';

    const h3 = document.createElement('h3');
    if (error === 'Failed to fetch') {
        h3.textContent = "Le serveur ne répond pas !";
    } else {
        h3.textContent = "Il y a une erreur : " + error;
    }
    div.appendChild(h3);
    articles.appendChild(div);
}
// Affichage de la liste des articles
function displayArticle(article) {
    console.log("fonction displayArticle");

    const articles = document.getElementById('articles');

    const div = document.createElement('div');
    div.classList = 'actu blog';

    const h3 = document.createElement('h3');
    h3.textContent = article.title;
    h3.style.cursor = "pointer";

    const p1 = document.createElement('p');
    p1.textContent = article.description;

    const p2 = document.createElement('p');
    p2.textContent = article.content;

    const divDate = document.createElement('div');
    divDate.classList = 'bott';

    const date = document.createElement('p');
    let myDate = new Date(article.publicationDate);
    let dateFr = myDate.toLocaleDateString("fr");
    date.textContent = "Publié le " + dateFr;

    const divButt = document.createElement('div');
    if (localStorage.getItem('token')) {
        divButt.classList = 'undisplayConnect';
    } else {
        divButt.classList = 'displayConnect';
    }

    const buttModif = document.createElement('a');
    buttModif.textContent = "Modifier";
    buttModif.classList = 'modif';

    const buttSuppr = document.createElement('a');
    buttSuppr.textContent = "Supprimer";
    buttSuppr.classList = 'suppr';

    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    divDate.appendChild(date);
    divButt.appendChild(buttModif);
    divButt.appendChild(buttSuppr);
    divDate.appendChild(divButt);
    div.appendChild(divDate);
    articles.appendChild(div);

    buttModif.addEventListener('click', () => {
        sessionStorage.setItem('idArticle', article.id);
        document.location.href = urlModifActu;
    })

    buttSuppr.addEventListener('click', () => {
        demConfirmSuppr(messSuppr, article.id);
    })

    h3.addEventListener('click', () => {
        console.log("click sur actu identifiée n°", article.id, " effectué !");
        document.location.href = constUrlDetail(article);

    })
}
// Construction de l'URL pour le détail de l'article
function constUrlDetail(article) {
    const url = new URL(window.location.origin);
    url.origin = window.location.origin;
    url.pathname = urlDetail;
    url.searchParams.append('id', article.id);
    console.log("New URL détail : ", url.href);
    return url.href;
}
// tri des articles par date
function triDateFrAsc(a, b) {
    let dateA = new Date(a.date.split("/").reverse().join('-'));
    let dateB = new Date(b.date.split("/").reverse().join('-'));
    return (dateA > dateB) ? 1 : -1;
}
// Fin Gestion de l'affichage de la liste des articles

// Affichage des bouton si connecter
cacherBtCnx();

function cacherBtCnx() {
    console.log("fonction cacherBtCnx !");
    if (localStorage.getItem('token')) {
        console.log("connexion ok !");

        const displayConnects = document.getElementsByClassName('displayConnect');
        const undisplayConnects = document.getElementsByClassName('undisplayConnect');
        console.log('displayConnect : ', displayConnects);
        console.log('undisplayConnect : ', undisplayConnects);

        for (let index = 0; index < displayConnects.length; index++) {
            const displayConnect = displayConnects[index];
            displayConnect.style.display = "block";
        }

        for (let index = 0; index < undisplayConnects.length; index++) {
            const undisplayConnect = undisplayConnects[index];
            undisplayConnect.style.display = "none";
        }
    }
}
// Fin Affichage des bouton si connecter

btDeconnect.addEventListener('click', () => {
    localStorage.clear();
})

// Gestion de l'ajout d'une actualité
// Bouton d'Ajout d'une actu
const btAjoutActu = document.getElementById('btAjoutActu');
// Ecoute du bouton d'ajout
btAjoutActu.addEventListener('click', () => {
    if (localStorage.getItem('token')) {
        document.location.href = urlAddActu;
    } else {
        document.location.href = urlLogin;
    }
})
// Fin Gestion de l'ajout d'une actualité

// Gestion de la suppression d'article
// appel  à l'API pour la suppr de l'article
async function delArticleById(url, id) {
    url = url + id
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        const resultat = await response.json();
        console.log("suppr réussi : ", resultat.title);
        return resultat;
    } catch (error) {
        console.error("Erreur : ", error);
    }
};
// Message de demande de confimation de suppr
function demConfirmSuppr(message, idArticle) {
    var confirmation = confirm(message); // Affiche le message de confirmation
    if (confirmation) {
        // L'utilisateur a cliqué sur "OK", on peut procéder à la suppression
        delArticleById(urlDelArt, idArticle),
            document.location.href = urlBlog;
        console.log("L'élément a été supprimé.");
    } else {
        // L'utilisateur a cliqué sur "Annuler", l'action est annulée
        console.log("Suppression annulée.");
    }
}
// Fin Gestion de la suppression d'article