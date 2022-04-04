//select input and search button abd movies parent container
const userInputField = document.querySelector("#user-input");
const submitBtn = document.querySelector(".btn");
const moviesParentContainer = document.querySelector("#movies-list");

//create function that when the button is clicked the the fetch happens
const getUserInput = () => {
    let userInput = userInputField.value; 
    return userInput;
};

submitBtn.addEventListener('click', function() {
    moviesParentContainer.innerHTML = ""; 

    let userInput = getUserInput(); 
    console.log(userInput);
    fetchMovieData(userInput); 

    sendData(userInput)
})

//fetch function
const fetchMovieData = (userInput) => {
  fetch(new Request(`https://api.tvmaze.com/search/shows?q=${userInput}`), {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(body);
      body.forEach((element) => {
        console.log(element.show.name);
        createMoviesDiv(element)
      
      });
    });
};
// const sendData = (userInput) => {
//     window.location.search = 
// }


fetchMovieData('big bang');
//Create movies divs.suggested movies
const createMoviesDiv = (showData) => {
  //create container for movie information
  const movieInfoContainer = document.createElement("div");
  moviesParentContainer.appendChild(movieInfoContainer);
  //give movieInfoContainer Class of 'suggested-movies'
  movieInfoContainer.classList = "suggested-movies";

  const suggestedMovie = document.createElement("div");
  suggestedMovie.classList = "suggested-movie";

  movieInfoContainer.appendChild(suggestedMovie);

  const movieImg = document.createElement("img");
  suggestedMovie.appendChild(movieImg);
  movieImg.src = showData.show.image === null ? 'assets/images/poster-dune.jpg' : showData.show.image.medium

  const movieDetails = document.createElement("div");
  suggestedMovie.appendChild(movieDetails);
  movieDetails.classList = "movie-details";

  const movieHeader = document.createElement("a");
  const movieHeaderText = document.createTextNode(showData.show.name)
  movieDetails.appendChild(movieHeader);
  movieHeader.appendChild(movieHeaderText)
  movieHeader.title = 'Movie Header';
  movieHeader.href = `./single-item.html?showid=${showData.show.id}`
 
  const movieSummary = document.createElement("p");
  movieDetails.appendChild(movieSummary);
  movieSummary.innerHTML = showData.show.summary.length >= 50 ? showData.show.summary.substr(0, 100) + `...` : showData.show.summary; 
};


