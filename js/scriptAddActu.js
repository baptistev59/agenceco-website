
// const urlApi = "http://localhost:3000";
const urlApi ="https://agencecobackend.vercel.app";
const urlAddArticle = urlApi + "/articles";
const urlBlog = "./blog.html";

// Ouverture du menu Burger
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});

// Gestion de l'affichage des boutons si connecter
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
// Fin Gestion de l'affichage des bouton si connecter

// Gestion de l'ajout d'un article
// Appel à l'API pour l'ajout d'un article
async function postAddArticle(url, article) {
    try {
        const response = await fetch(url, {
            method: 'Post',
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
// Bouton de soumission de l'ajout d'un article
const btSubmitArticle = document.getElementById('submitActu');
// Ecoute du bouton d'ajout d'un article
btSubmitArticle.addEventListener('click', () => {
    const titleActu = document.getElementById('titleActu').value;
    const descriptActu = document.getElementById('descriptActu').value;
    const contentActu = document.getElementById('contentActu').value;
    const publicationDateActu = new Date().toLocaleDateString('en-CA');

    const token = localStorage.getItem('token');

    let actu = {
        "title": titleActu,
        "description": descriptActu,
        "content": contentActu,
        "publicationDate": publicationDateActu
    }
    console.log(actu);

    postAddArticle(urlAddArticle, actu);
})
// Redirection après l'ajout d'un article
function redirect(url) {
    window.location.href = url;
}
// Fin Gestion de l'ajout d'un article