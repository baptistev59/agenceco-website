const urlApi = "http://localhost:3000";
const urlGetListArt = urlApi + "/articles";

const section = document.getElementById('new-list');
const div = document.getElementById('articles');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});

async function getListArt() {
    fetch(urlGetListArt)
        .then(response => response.json())
        .then(articles => {   
            console.log(articles);
            articles.sort(classer);         
            articles.forEach(article => {
                console.log("fonction article fetch" , article);
                displayArticle(article);
            });
        })
        .catch(error => {
            console.error('Erreur : ', error.message);
            displayErreur(error.message);
        });

};

function classer(a, b) {
    return (a.publicationDate < b.publicationDate) ? 1 : -1;
}

getListArt();

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

function displayArticle(article) {
    console.log("fonction displayArticle");

    const articles = document.getElementById('articles');

    const div = document.createElement('div');
    div.classList = 'actu blog';

    const h3 = document.createElement('h3');
    h3.textContent = article.title;

    const p1 = document.createElement('p');
    p1.textContent = article.description;

    const p2 = document.createElement('p');
    p2.textContent = article.content;

    const divDate = document.createElement('div');
    divDate.classList = 'bott';

    const date = document.createElement('p');
    let myDate = new Date(article.publicationDate);
    console.log("myDate : ", myDate.toDateString());
    let dateFr = myDate.toLocaleDateString("fr");
    console.log("datefr : ", dateFr);
    date.textContent = "Publié le " + dateFr;

    const divButt = document.createElement('div');

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
}

function triDateFrAsc(a, b) {
    let dateA = new Date(a.date.split("/").reverse().join('-'));
    let dateB = new Date(b.date.split("/").reverse().join('-'));
    return (dateA > dateB) ? 1 : -1;
}
