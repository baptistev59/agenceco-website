const urlApi = "http://localhost:3000";
const urlGetArtById = urlApi + "/articles/";

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});

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

function recupIdAct() {
    const url = window.location;
    console.log(url.search);
    const sp = new URLSearchParams(url.search)
    const id = sp.get('id');
    console.log(id);
    return id;
}

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
displayArticle();
function displayArticle() {
    getArticleById(urlGetArtById, recupIdAct())
        .then(article => {
            console.log(article);
            const titleActu = document.getElementById('titleActu');
            titleActu.textContent = article.title;

            const descriptActu = document.getElementById('descriptActu');
            descriptActu.textContent = article.description;

            const contentActu = document.getElementById('contentActu');
            contentActu.textContent = article.content;

            const dateActu = document.getElementById('dateActu');
            let myDate = new Date(article.publicationDate);
            let dateFr = myDate.toLocaleDateString("fr");
            dateActu.textContent = "Publié le "+dateFr;
        }
        )
}