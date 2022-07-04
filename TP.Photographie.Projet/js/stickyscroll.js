//Le principe est de fixer le menu en haut de l’écran lorsque l’on ‘scrolle’ vers le bas//
// detecter lorsqu'on scroll
window.onscroll = function() { sticky() };/*....declanche une fontion */

// recuperer les elements sticky header.
let header = document.getElementById('sticky-header');
//recupere la position du header quand en scrole
let stickycomponent = header.offsetTop;//.....offsetTop la position de sticky par rapport a la hauer

// faire la fonction pour faire se changement
function sticky() { // condition si en scolant -->arrive au menu on donne la class sticky
    console.log(window.pageYOffset);// pour recuperer a quelle nombre de pixel on est sur la page 
    if (window.pageYOffset > stickycomponent) { // si on arrive a la classe sticky on l'ajoute a header
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}
