/*
Denne funksjonen bruker jeg for å velge et tilfeldig 
dekningsvalg og vise det som anbefalt
*/
function randomRecomended() {
    const divs = document.querySelectorAll('.Toppkasko, .Kasko_med_leiebil, .Kasko, .Minikasko, .Ansvar');
    const randomIndex = Math.floor(Math.random() * divs.length);
    const selectedDiv = divs[randomIndex];
    const recomendedSpan = selectedDiv.querySelector('.anbefalt');
    recomendedSpan.style.display = 'inline';
}

randomRecomended();
