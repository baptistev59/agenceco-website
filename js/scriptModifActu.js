// const urlApi = "http://localhost:3000";
const urlApi ="https://agencecobackend.vercel.app";
const urlGetArticle = urlApi + "/articles/";
const urlBlog = "./blog.html";
const idArticle = sessionStorage.getItem('idArticle');
const messSuppr = "Voulez-vous supprimer l'article ?";

// Ouverture du menu burger
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});

// Gestion de l'affichage des boutons si connecté
btDeconnect.addEventListener('click', () => {
    localStorage.clear();
})

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
// Fin Gestion de l'affichage des boutons si connecté

// Gestion de l'a récupération de l'article à modifier ou supprimer
// Appel à l'API pour récupération de l'article
async function getArticleById(url, id) {
    url = url + id
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        const resultat = await response.json();
        console.log("Récup réussi : ", resultat.title);
        return resultat;
    } catch (error) {
        console.error("Erreur : ", error);
    }
};
// Gestion de l'affichage de l'article récupéré
function displayArticle() {
    getArticleById(urlGetArticle, idArticle)
        .then(article => {
            const titleActu = document.getElementById('titleActu');
            titleActu.value = article.title;
            const descriptActu = document.getElementById('descriptActu');
            descriptActu.value = article.description;
            const contentActu = document.getElementById('contentActu');
            contentActu.value = article.content;
        }
        )
}
displayArticle();
// Fin Gestion de l'a récupération de l'article à modifier

// Gestion de la suppression de l'article récupéré
// Appel à l'API pour supprimer l'article à suppr
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
// Bouton supprimer
const btDelActu = document.getElementById('delActu');
// Ecoute du bouton suppr
btDelActu.addEventListener('click', () => {
        demConfirmSuppr(messSuppr);
    })
function redirect(url) {
    window.location.href = url;
}
// Message de demande de confirmation de suppr de l'article
function demConfirmSuppr(message) {
  var confirmation = confirm(message); // Affiche le message de confirmation

  if (confirmation) {
    // L'utilisateur a cliqué sur "OK", on peut procéder à la suppression
    console.log("L'élément a été supprimé.");
    delArticleById(urlGetArticle, idArticle),
    document.location.href = urlBlog;
  } else {
    // L'utilisateur a cliqué sur "Annuler", l'action est annulée
    console.log("Suppression annulée.");
  }
}
// Fin Gestion de la suppression de l'article récupéré

//Gestion de la modification de l'article récupéré
async function putArticleById(url, article) {
    url = url + article.id;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article),
        });

        const resultat = await response.json();
        console.log("Ajout réussi : ", resultat);
        redirect(urlBlog);
        return resultat;
    } catch (error) {
        console.error("Erreur : ", error);
    }


};
// Bouton modifier
const btSubmitArticle = document.getElementById('submitActu');
// Ecoute du bouton modif
btSubmitArticle.addEventListener('click', () => {
    const idActu = sessionStorage.getItem('idArticle');
    const titleActu = document.getElementById('titleActu').value;
    const descriptActu = document.getElementById('descriptActu').value;
    const contentActu = document.getElementById('contentActu').value;
    const publicationDateActu = new Date().toLocaleDateString('en-CA');

    const token = localStorage.getItem('token');

    let actu = {
        'id':idActu,
        "title": titleActu,
        "description": descriptActu,
        "content": contentActu,
        "publicationDate": publicationDateActu
    }
    console.log(actu);

    putArticleById(urlGetArticle, actu);
})
// Fin Gestion de la modification de l'article récupéré