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

function showMovie(movie) {
  console.log('hoi');
  
}

function showData(movies) {
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var movieContainer = document.createElement('article');

    movieContainer.onclick = showMovie(movie);

    var movieCoverElement = document.createElement('img');
    movieCoverElement.src = movie.cover;
    movieContainer.appendChild(movieCoverElement);

    var releaseDateElement = document.createElement('p');
    releaseDateElement.textContent = movie.release_date;
    movieContainer.appendChild(releaseDateElement);

    var movieTitleElement = document.createElement('h2');
    movieTitleElement.textContent = movie.title;
    movieContainer.appendChild(movieTitleElement);

    var simplePlotElement = document.createElement('p');
    simplePlotElement.textContent = 'Description: ' + movie.simple_plot;
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

