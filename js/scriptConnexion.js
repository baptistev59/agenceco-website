const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});

const urlApi = "http://localhost:3000";
const urlGetListArt = urlApi + "/articles";

const section = document.getElementById('new-list');
const div = document.getElementById('articles');

// async function getListArt() {
//     fetch(urlGetListArt)
//         .then(response => response.json())
//         .then(articles => {
//             articles.forEach(article => {
//                 console.log(article);
//                 displayArticleAccueil(article);
//             });
//         })
// };

// function displayArticleAccueil(article) {
//     const artAccueil = document.getElementById('artAccueil');

//     const div = document.createElement('div');
//     div.classList = 'actu';

//     const h3 = document.createElement('h3');
//     h3.textContent = article.title;

//     const date = document.createElement('date');
//     console.log(article.publicationDate);
    
//     date.textContent = article.publicationDate;

//     const p1 = document.createElement('p');
//     p1.textContent = article.description;

//     const p2 = document.createElement('p');
//     p2.textContent = article.content;

//     div.appendChild(h3);
//     div.appendChild(date);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     artAccueil.appendChild(div);
// }

// getListArt();