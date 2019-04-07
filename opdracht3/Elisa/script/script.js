/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*const betekent dat je hem niet mag aanpassen */

const jsonUrl = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //json file op github
const button = document.querySelector('button');
// var evilDeadPage = window.location="../evildead/evildead.html";
// var evilDeadPage = document.getElementById('1');
const loaderElement = document.querySelector('span');
const section = document.querySelector('section');
// console.log("loaderElement",loaderElement);

function showData(movies) {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieContainer = document.createElement('article');
    movieContainer.id = movie.id;

    const movieCoverElement = document.createElement('img');
    movieCoverElement.src = movie.cover;
    movieContainer.appendChild(movieCoverElement);

    const releaseDateElement = document.createElement('p');
    releaseDateElement.textContent = movie.release_date;
    movieContainer.appendChild(releaseDateElement);

    const genreElement = document.createElement('p');
    genreElement.textContent = movie.genres;
    movieContainer.appendChild(genreElement);

    const movieTitleElement = document.createElement('h2');
    movieTitleElement.textContent = movie.title;
    movieContainer.appendChild(movieTitleElement);

    const simplePlotElement = document.createElement('p');
    simplePlotElement.textContent = 'Description: ' + movie.simple_plot;
    movieContainer.appendChild(simplePlotElement);

    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = 'Meer informatie';
    movieContainer.appendChild(buttonElement);

    section.appendChild(movieContainer);

    document.getElementById(movie.id).addEventListener('click', () => {
      showMovie(movie);
    });
  }
}

function loadMoviesFromJson() {
  fetch(jsonUrl).then((response) => {
    response.json().then((movies) => {
      showData(movies);
    })
  })
}
loadMoviesFromJson();

function showMovie(movie) {
  console.log(movie);
  const movieInfo = document.createElement('article');

  const movieCoverElement = document.createElement('img');
  movieCoverElement.src = movie.cover;
  movieInfo.appendChild(movieCoverElement);

  const releaseDateElement = document.createElement('p');
  releaseDateElement.textContent = movie.release_date;
  movieInfo.appendChild(releaseDateElement);

  const movieTitleElement = document.createElement('h2');
  movieTitleElement.textContent = movie.title;
  movieInfo.appendChild(movieTitleElement);

  const plotElement = document.createElement('p');
  plotElement.textContent = 'Description: ' + movie.plot;
  movieInfo.appendChild(plotElement);

  for (let i = 0; i < movie.actors.length; i++) {
    const ActorElement = generateActorElement (movie.actors[i]);
    movieInfo.appendChild(ActorElement);
  }

  while(section.firstChild){
    section.removeChild(section.firstChild);
  }
  
  section.appendChild(movieInfo);
}

function generateActorElement (actor) {
  const actorContainer = document.createElement('article')

  const actorNameElement = document.createElement('h3');
  actorNameElement.textContent = actor.actor_name;
  actorContainer .appendChild(actorNameElement);
  /*Opmaka voor 1 actor, return actorElement*/
  return actorContainer;
}


