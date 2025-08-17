const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
// const barrelogo = document.getElementById('barre-logo');


burger.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
    // barrelogo.classList.toggle('logo-color');
    // if (navlinks.style.display==='block') {
    //     navlinks.style.display ='none';
    // }else{
    //     navlinks.style.display ='block';
    // }

});