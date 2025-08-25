const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.getElementById('slides');
const nbSlides = slides.children.length;
let slide = 0;


burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});

prev.addEventListener('click', () => {
    console.log("gauche");
    slide = slide - 1;
    if (slide < 0) {
        slide = nbSlides - 1;
    }
    changerSlide();
})

next.addEventListener('click', () => {
    console.log("droite");
    slide = slide + 1;
    if (slide >= nbSlides) {
        slide = 0;
    }
    changerSlide();
})

function changerSlide(params) {
    slides.style.transform = 'translateX(-' + (slide * 100) + '%)';
}

setInterval(() => {
    slide = slide + 1;
    if (slide >= nbSlides) {
        slide = 0;
    }
    changerSlide();
}
    , 3000);


const urlApi = "http://localhost:3000";
const urlGetListArt = urlApi + "/articles";

const section = document.getElementById('new-list');
const div = document.getElementById('articles');

async function getListArt() {
    fetch(urlGetListArt)
        .then(response => response.json())
        .then(articles => {
            articles.sort(classer);
            for (let i = 0; i < articles.length; i++) {
                if (i <= 2) {
                    const article = articles[i];
                    console.log(article, " " + i);
                    displayArticleAccueil(article);
                } else {
                    return;
                }

            }
        })
};

function classer(a, b) {
    return (a.publicationDate < b.publicationDate) ? 1 : -1;
}

function displayArticleAccueil(article) {
    const artAccueil = document.getElementById('artAccueil');

    const div = document.createElement('div');
    div.classList = 'actu';

    const h3 = document.createElement('h3');
    h3.textContent = article.title;

    const date = document.createElement('date');
    let myDate = new Date(article.publicationDate);
    let dateFr = myDate.toLocaleDateString("fr");
    date.textContent = dateFr;

    const p1 = document.createElement('p');
    p1.textContent = article.description;

    const p2 = document.createElement('p');
    p2.textContent = article.content;

    div.appendChild(h3);
    div.appendChild(date);
    div.appendChild(p1);
    div.appendChild(p2);
    artAccueil.appendChild(div);
}

getListArt();

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

btDeconnect.addEventListener('click', () => {
    localStorage.clear();
})