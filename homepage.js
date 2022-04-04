//select input and search button abd movies parent container


const moviesParentContainer = document.querySelector('#suggestions'); 


//create function that when the button is clicked the the fetch happens

//fetch function

//Create movies divs.suggested movies
const createMoviesDiv = () => {
    //create container for movie information
    const movieInfoContainer = document.createElement('div'); 
    moviesParentContainer.appendChild(movieInfoContainer);
    //give movieInfoContainer Class of 'suggested-movies'
    movieInfoContainer.classList = 'suggested-movies'; 
    

    const suggestedMovie = document.createElement('div');
    suggestedMovie.classList = 'suggested-movie'; 

    movieInfoContainer.appendChild(suggestedMovie); 

    const movieImg = document.createElement('img'); 
    suggestedMovie.appendChild(movieImg); 

    const movieDetails = document.createElement('div'); 
    suggestedMovie.appendChild(movieDetails);
    movieDetails.classList = 'movie-details'

    const movieHeader = document.createElement('h3');
    suggestedMovie.appendChild(movieHeader); 

    const movieSummary = document.createElement('p');
    suggestedMovie.appendChild(movieSummary);

}