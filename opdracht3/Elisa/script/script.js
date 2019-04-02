/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var jsonUrl = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //json file op github
var button = document.querySelector('button');
// var evilDeadPage = window.location="../evildead/evildead.html";
// var evilDeadPage = document.getElementById('1');
var loaderElement = document.querySelector('span');
var section = document.querySelector('section');
// console.log("loaderElement",loaderElement);

function showData(movies) {
  for (var i = 0; i < movies.length; i++) {
    var movieContainer = document.createElement('article');

    var movieCoverElement = document.createElement('img');
    movieCoverElement.src = movies[i].cover;
    movieContainer.appendChild(movieCoverElement);

    var releaseDateElement = document.createElement('p');
    releaseDateElement.textContent = movies[i].release_date;
    movieContainer.appendChild(releaseDateElement);

    var movieTitleElement = document.createElement('h2');
    movieTitleElement.textContent = movies[i].title;
    movieContainer.appendChild(movieTitleElement);

    var simplePlotElement = document.createElement('p');
    simplePlotElement.textContent = 'Description: ' + movies[i].simple_plot;
    movieContainer.appendChild(simplePlotElement);

    // var evilDeadId = movies[i].id;
    // var evilDead = window.location.href="../evildead/evildead.html";

    // evilDeadId.onclick = function () {
    //   evilDead.classList.add('show');
    // }

    section.appendChild(movieContainer)
  }
}

function loadMoviesFromJson(){
  fetch(jsonUrl).then((response) => {
    response.json().then((movies) => {
      showData(movies);
    })
  })
}
loadMoviesFromJson();

// button.onclick = function (event) {
//   event.preventDefault();
//   var evilDeadPage = document.getElementById('1');
//   // window.location = "../evildead/evildead.html";
// }

button.onclick = function (event) {
  event.preventDefault();
  var evilDeadPage = document.getElementById('1');
  // window.location = "../evildead/evildead.html";
}


