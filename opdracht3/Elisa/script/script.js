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


/**OVERZICHTSPAGINA ALLE FILM */
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



/**DETAILPAGINA FILM */
function showMovie(movie) {
  console.log(movie);
  const movieInfo = document.createElement('main');

  const movieCoverElement = document.createElement('img');
  movieCoverElement.src = movie.cover;
  movieInfo.appendChild(movieCoverElement);

  const releaseDateElement = document.createElement('p');
  releaseDateElement.textContent = movie.release_date;
  movieInfo.appendChild(releaseDateElement);

  const genreElement = document.createElement('p');
  genreElement.textContent = movie.genres;
  movieInfo.appendChild(genreElement);

  const movieTitleElement = document.createElement('h2');
  movieTitleElement.textContent = movie.title;
  movieInfo.appendChild(movieTitleElement);

  const plotElement = document.createElement('p');
  plotElement.textContent = 'Description: ' + movie.plot;
  movieInfo.appendChild(plotElement);

  const buttonViewElement = document.createElement('button');
  buttonViewElement.innerHTML = 'Bekijk de film';
  movieInfo.appendChild(buttonViewElement);



  const actorsElement = document.createElement('div');

  const actorsTitelElement = document.createElement('h3');
  actorsTitelElement.innerHTML = 'Acteurs';
  actorsElement.appendChild(actorsTitelElement);

  for (let i = 0; i < movie.actors.length; i++) {
    const actorElement = generateActorElement (movie.actors[i]);
    actorsElement.appendChild(actorElement);
  }

  movieInfo.appendChild(actorsElement);

  // while(section.firstChild){
  //   section.removeChild(section.firstChild);
  // }
  
  // section.appendChild(movieInfo);




  const reviewsElement = document.createElement('div');
  // reviewsElement.innerHTML = 'Reviews';

  const reviewTitelElement = document.createElement('h3');
  reviewTitelElement.innerHTML = 'Reviews';
  reviewsElement.appendChild(reviewTitelElement);

  for (let i = 0; i < movie.reviews.length; i++) {
    const reviewElement = generateReviewElement (movie.reviews[i]);
    reviewsElement.appendChild(reviewElement);
  }

  movieInfo.appendChild(reviewsElement);

  while(section.firstChild){
    section.removeChild(section.firstChild);
  }
  
  section.appendChild(movieInfo);
}

function generateActorElement (actor) {
  const actorContainer = document.createElement('div')
  
  // const actorsTitelElement = document.createElement('h3');
  // actorsTitelElement.innerHTML = 'Acteurs';
  // actorContainer.appendChild(actorsTitelElement);
  
  const actorNameElement = document.createElement('h4');
  actorNameElement.textContent = actor.actor_name;
  actorContainer.appendChild(actorNameElement);

  const actorcharacterElement = document.createElement('p');
  actorcharacterElement.textContent = actor.character;
  actorContainer.appendChild(actorcharacterElement);

  /*Opmaka voor 1 actor, return actorElement*/
  return actorContainer;
}

function generateReviewElement (review) {
  const reviewContainer = document.createElement('div')
  
  const reviewScoreElement = document.createElement('p');
  reviewScoreElement.textContent = review.score;
  reviewContainer.appendChild(reviewScoreElement);

  const reviewTextElement = document.createElement('p');
  reviewTextElement.textContent = review.review_text;
  reviewContainer.appendChild(reviewTextElement);

  /*Opmaka voor 1 actor, return actorElement*/
  return reviewContainer;
}


