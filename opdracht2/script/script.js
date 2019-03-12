/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



var srcAfbeeldingen = [{
        klasse: "slide-staand",
        id: "slide-1",
        src: "images/1.jpg",
        alt: "kerk"
    },
    {
        klasse: "slide-staand",
        id: "slide-2",
        src: "images/2.jpg",
        alt: "begraafplaats"
    },
    {
        klasse: "slide-liggend",
        id: "slide-3",
        src: "images/3.jpg",
        alt: "gebouw"
    },
    {
        klasse: "slide-staand",
        id: "slide-4",
        src: "images/4.jpg",
        alt: "grasveld"
    },
    {
        klasse: "slide-staand",
        id: "slide-5",
        src: "images/5.jpg",
        alt: "museum"
    }];


/*Hiermee zorg je ervoor dat alle afbeeldingen die in de array srcAfbeeldingen staan in de div met class='slider' komen*/
function laadAfbeeldingen() {
    var html = '';
    var i;
    for (i = 0; i < srcAfbeeldingen.length; i++) {
        html += '<img class=' + srcAfbeeldingen[i].klasse + ' id=' + srcAfbeeldingen[i].id + ' src=' + srcAfbeeldingen[i].src + ' alt=' + srcAfbeeldingen[i].alt + '>';
    }

    document.querySelector(".slider").innerHTML += html;
}

laadAfbeeldingen();

var afbeeldingGrootEen = document.getElementById('slide-1');
var afbeeldingGrootTwee = document.getElementById('slide-2');
var afbeeldingGrootDrie = document.getElementById('slide-3');
var afbeeldingGrootVier = document.getElementById('slide-4');
var afbeeldingGrootVijf = document.getElementById('slide-5');

var groteAfbeeldingen = [afbeeldingGrootEen, afbeeldingGrootTwee, afbeeldingGrootDrie, afbeeldingGrootVier, afbeeldingGrootVijf];



/*De eerste loop reset de styling die eventueel gezet kan zijn. De swtich zorgt ervoor dat het juiste element wordt getoond. De laatste loop zorgt ervoor dat alle andere elementen een brightness van 40% hebben*/

function tekst(nummer) {
    var i;

    for (i = 0; i < groteAfbeeldingen.length; i++){
        groteAfbeeldingen[i].style.filter = null;
    }

    switch (nummer) {
        case 1:
            groteAfbeeldingen[0].style.filter = 'brightness(100%)';
            document.getElementById('beschrijving').textContent = 'In Dublin heb je heel veel kerken. Dit is er een van. Hier kwamen wij elke dag langs omdat het vlakbij onze hostel lag. Het lag boven op een helling waardoor je het van ver kon zien.';
            break;
        case 2:
            groteAfbeeldingen[1].style.filter = 'brightness(100%)';
            document.getElementById('beschrijving').textContent = 'Hier zie je een gedeelte van de grootste begraafplaats van Dublin. We hadden busrit waar we ook konden uitstappen. Dit was hiervan een gedeelte. Het was heel erg groot en heel erg indrukwekkend. Er stonden ook graven van ongeveer een eeuw oud. Hoe Bizar!';
            break;
        case 3:
            groteAfbeeldingen[2].style.filter = 'brightness(100%)';
            document.getElementById('beschrijving').textContent = 'Dit is een groot gebouw. Ik weet niet wat het precies is maar dit kwamen we ook tegen tijdens de busrit.';
            break;
        case 4:
            groteAfbeeldingen[3].style.filter = 'brightness(100%)';
            document.getElementById('beschrijving').textContent = 'Deze foto is ook genomen toen we bezig waren met de busrit. We stapten ergens uit en gingen toen chillen. De paal die je ziet is volgens mij een monument. Het was heerlijk om hier te zitten. Het was zonnig en er stond weinig wind.';
            break;
        case 5:
            groteAfbeeldingen[4].style.filter = 'brightness(100%)';
            document.getElementById('beschrijving').textContent = 'Dit was een winkeltje waar je allemaal Guinness (bier uit Dublin) kan kopen. Daarna kregen we een hele leuke rondleiding. En natuurlijk niet te vergeten een biertje!';
            break;
    }

    for (i = 0; i < groteAfbeeldingen.length; i++){
        if(groteAfbeeldingen[i].style.filter !== 'brightness(100%)') {
            groteAfbeeldingen[i].style.filter = 'brightness(40%)';
        }
    }
}


/*Aan de volgende elementen wordt een evenListener op klik gezet, deze roept tekst aan met als parameter de index van het element*/
document.getElementById('afbeeldingEen').addEventListener('click', function() {tekst(1);}, false);
document.getElementById('afbeeldingTwee').addEventListener('click', function() {tekst(2);}, false);
document.getElementById('afbeeldingDrie').addEventListener('click', function() {tekst(3);}, false);
document.getElementById('afbeeldingVier').addEventListener('click', function() {tekst(4);}, false);
document.getElementById('afbeeldingVijf').addEventListener('click', function() {tekst(5);}, false);
