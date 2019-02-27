/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var body = document.querySelector('body');

var blauwKnop = document.querySelector('form input[name=blue]');

var bruinKnop = document.querySelector('form input[name=brown]');

var groenKnop = document.querySelector('form input[name=green]');

var roodKnop = document.querySelector('form input[name=red]');



//Met deze functie zorg je ervoor dat de kleuren bruin, groen en rood worden weggehaald. Dit heb je in css geregeld.//
blauwKnop.onclick = function () {
    body.classList.toggle('brown');
    body.classList.toggle('green');
    body.classList.toggle('red');
};

bruinKnop.onclick = function () {
    body.classList.toggle('blue');
    body.classList.toggle('green');
    body.classList.toggle('red');
};

groenKnop.onclick = function () {
    body.classList.toggle('blue');
    body.classList.toggle('brown');
    body.classList.toggle('red');
};

roodKnop.onclick = function () {
   body.classList.toggle('blue');
    body.classList.toggle('green');
    body.classList.toggle('brown');
};
