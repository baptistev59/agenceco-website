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
            articles.forEach(article => {
                console.log("fonction article fetch");
                displayArticle(article);
            });
        })
};
getListArt();

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
    date.textContent = "Publié le " + article.publicationDate;

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
    div.appendChild(divDate)
    articles.appendChild(div);
}
