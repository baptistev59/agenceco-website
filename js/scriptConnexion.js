const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

const urlApi = "http://localhost:3000";
const urlGetToken = urlApi + "/login";
const urlBlog = "./blog.html";
const urlConn = "connexion.html";

const form = document.getElementById('connectForm');
const submit = document.getElementById('submit');
const btDeconnect=document.getElementById('btDeconnect');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
});
btDeconnect.addEventListener('click', () => {
    localStorage.clear();
})
cacherForm();

submit.addEventListener('click', function () {

    const email = document.getElementById('ident').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email);

    let login = {
        "email": email,
        "password": password
    }
    supprErreur();
    getToken(login);
})

async function getToken(login) {
    fetch(urlGetToken, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(login)
    })
        .then(response => response.json())
        .then(response => {
            if (response.token) {
                console.log(response.token);
                localStorage.setItem('token', response.token);
                redirect(urlBlog);
            } else {
                console.log(response.message);
                displayErreur(response.message);
            }
        })
        .catch(error => {
            console.log('Erreur : ', error);
            displayErreur("Le serveur ne répond pas !");;
        })
};

function displayErreur(error) {
    console.log("fonction displayErreur");
    const message = document.getElementById('message');

    const div = document.createElement('div');
    div.classList = 'actu erreur';

    const h3 = document.createElement('h3');
    h3.textContent = error;


    div.appendChild(h3);
    message.appendChild(div);
}

function supprErreur() {
    console.log("fonction supprErreur");
    const message = document.getElementById('message');
    while (message.firstChild) {
        message.removeChild(message.firstChild);
    }
}

function redirect(url) {
    if (localStorage.getItem('token')) {
        window.location.href = url;
    } else {
        window.location.href = urlConn;
    }
    
}

function cacherForm(){
    console.log("fonction cacherForm !");
    
    const form = document.getElementById('connectForm');
    console.log();
    
    if(localStorage.getItem('token')){
        console.log("connexion ok !");
        document.getElementById('connectForm').style.display="none";      
        document.getElementById('connectOk').style.display="block";
        document.getElementById('btDeconnect').style.display="block";
        document.getElementById('btConnect').style.display="none";
    }
}

