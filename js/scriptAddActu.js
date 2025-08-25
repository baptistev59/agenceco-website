
const urlApi = "http://localhost:3000";
const urlAddArticle = urlApi + "/articles";
const urlBlog = "./blog.html";

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

const btSubmitArticle = document.getElementById('submitActu');


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

function redirect(url) {
        window.location.href = url;   
}