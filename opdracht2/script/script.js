/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var afbeeldingGrootEen = document.getElementById('slide-1');
var afbeeldingGrootTwee = document.getElementById('slide-2');
var afbeeldingGrootDrie = document.getElementById('slide-3');
var afbeeldingGrootVier = document.getElementById('slide-4');
var afbeeldingGrootVijf = document.getElementById('slide-5');




function tekstEen(event) {
    event.preventDefault();
    document.getElementById('beschrijving').textContent = 'In Dublin heb je heel veel kerken. Dit is er een van. Hier kwamen wij elke dag langs omdat het vlakbij onze hostel lag. Het lag boven op een helling waardoor je het van ver kon zien.';

    afbeeldingGrootEen.style.filter = 'brightness(100%)';
    afbeeldingGrootTwee.style.filter = 'brightness(40%)';
    afbeeldingGrootDrie.style.filter = 'brightness(40%)';
    afbeeldingGrootVier.style.filter = 'brightness(40%)';
    afbeeldingGrootVijf.style.filter = 'brightness(40%)';
}

document.getElementById('afbeeldingEen').addEventListener('click', tekstEen, false);





function tekstTwee(event) {
    event.preventDefault();
    document.getElementById('beschrijving').textContent = 'Hier zie je een gedeelte van de grootste begraafplaats van Dublin. We hadden busrit waar we ook konden uitstappen. Dit was hiervan een gedeelte. Het was heel erg groot en heel erg indrukwekkend. Er stonden ook graven van ongeveer een eeuw oud. Hoe Bizar!';

    afbeeldingGrootEen.style.filter = 'brightness(40%)';
    afbeeldingGrootTwee.style.filter = 'brightness(100%)';
    afbeeldingGrootDrie.style.filter = 'brightness(40%)';
    afbeeldingGrootVier.style.filter = 'brightness(40%)';
    afbeeldingGrootVijf.style.filter = 'brightness(40%)';
}

document.getElementById('afbeeldingTwee').addEventListener('click', tekstTwee, false);




function tekstDrie(event) {
    event.preventDefault();
    document.getElementById('beschrijving').textContent = 'Dit is een groot gebouw. Ik weet niet wat het precies is maar dit kwamen we ook tegen tijdens de busrit.';

    afbeeldingGrootEen.style.filter = 'brightness(40%)';
    afbeeldingGrootTwee.style.filter = 'brightness(40%)';
    afbeeldingGrootDrie.style.filter = 'brightness(100%)';
    afbeeldingGrootVier.style.filter = 'brightness(40%)';
    afbeeldingGrootVijf.style.filter = 'brightness(40%)';
}

document.getElementById('afbeeldingDrie').addEventListener('click', tekstDrie, false);




function tekstVier(event) {
    event.preventDefault();
    document.getElementById('beschrijving').textContent = 'Deze foto is ook genomen toen we bezig waren met de busrit. We stapten ergens uit en gingen toen chillen. De paal die je ziet is volgens mij een monument. Het was heerlijk om hier te zitten. Het was zonnig en er stond weinig wind.';
    afbeeldingGrootEen.style.filter = 'brightness(40%)';
    afbeeldingGrootTwee.style.filter = 'brightness(40%)';
    afbeeldingGrootDrie.style.filter = 'brightness(40%)';
    afbeeldingGrootVier.style.filter = 'brightness(100%)';
    afbeeldingGrootVijf.style.filter = 'brightness(40%)';
}

document.getElementById('afbeeldingVier').addEventListener('click', tekstVier, false);




function tekstVijf(event) {
    event.preventDefault();
    document.getElementById('beschrijving').textContent = 'Dit was een winkeltje waar je allemaal Quinness (bier uit Dublin) kan kopen. Daarna kregen we een hele leuke rondleiding. En natuurlijk niet te vergeten een biertje!';
    afbeeldingGrootEen.style.filter = 'brightness(40%)';
    afbeeldingGrootTwee.style.filter = 'brightness(40%)';
    afbeeldingGrootDrie.style.filter = 'brightness(40%)';
    afbeeldingGrootVier.style.filter = 'brightness(40%)';
    afbeeldingGrootVijf.style.filter = 'brightness(100%)';
}

document.getElementById('afbeeldingVijf').addEventListener('click', tekstVijf, false);






