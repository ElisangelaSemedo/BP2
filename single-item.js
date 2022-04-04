// declare all variables
const movieSection = document.querySelector('div')
const imageContainer = document.querySelector('img')
const textContainer = document.querySelector('div')
const movieTitle = document.querySelector('h2')
const movieType = document.querySelector('h3')
const movieDesc = document.querySelector('#summary')

//const searchBtn = document.querySelector('.btn')

/**const anchor = document.getElementsByClassName('btn')*/

const detailMovie = (elementData) => {
    imageContainer.src= elementData.image.medium
    movieTitle.textContent = elementData.name
    movieDesc.innerHTML = elementData.summary
    movieType.textContent = elementData.genres[0]
}

//function to add event listener to the movie title header



const showid = document.location.search.split('=') [1]


    
    //function fetch the tv show by id 
    fetch (`https://api.tvmaze.com/shows/${showid}`)
    .then((response) => response.json())
    .then((data) => {
        detailMovie(data)
        console.log(data);
    })




