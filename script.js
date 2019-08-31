'use strict'

const tdApiKey = '344207-MovieGen-7ZJ76CWA';
const tasteDive = 'https://tastedive.com/api/similar';

const omdbKey = '3e8e016d';
const omdb = "http://www.omdbapi.com/?apikey='3e8e016d'&"

/*SCRIPT FOR ALL FUNCTIONING BUTTONS*/

$('.start-over').on('click', function () {
    $('.restart').removeClass('hidden');
    $('.user-title-form').removeClass('hidden');
    $('.search-bar').val("");
    $('.user-results-screen').addClass('hidden');
    $('.user-results-screen').empty();
    $('.start-over').addClass('hidden');
    $('.continous-search').addClass('hidden');
})



/*TITLE FETCH REQUEST*/

function watchTitleForm() {
    $('.user-title-form').submit(event => {
        event.preventDefault();
        let title = $('.search-bar').val();
        $('.introduction').addClass('hidden');
        $('.user-title-form').addClass('hidden');
        $('.continous-search').removeClass('hidden');
        console.log(`Im Working: ${title}`);
        getMovies(title);
    });
    $('.header-form').submit(event => {
        event.preventDefault();
        let title = $('.search-bar-header').val();
        $('.error').addClass('hidden');
        console.log(`Im Working 2: ${title}`);
        getMovies(title);
    })
}

function getMovies(title) {
    var params = {
        q: title,
        type: 'movies',
        info: 0,
        limit: 20,
        k: '344207-MovieGen-7ZJ76CWA',
        callback: 'result'
    };
    var results = $.ajax({
        url: "https://tastedive.com/api/similar",
        data: params,
        dataType: "jsonp",
        type: "GET"
    })
    .done(function (output) {
        if (output.Similar.Results.length == 0) {
            $('.error').removeClass('hidden');
            $('.movie-title-screen').addClass('hidden');
            $('.search-bar').val("");
            $('.continous-search').removeClass('hidden');
            $('.restart').addClass('hidden');
            $('.search-bar-header').val("");
        } else {
            for(let i = 0; i < output.Similar.Results.length; i++) {
                titleInfo(output.Similar.Results[i].Name);
            }
            
        }
    })
};

function titleInfo(title) {
    
    fetch(`https://www.omdbapi.com/?apikey=3e8e016d&t=${title}`)
    .then(res => res.json())
    .then(data => {console.log(data)
    
        displayResults(data);
    
})
    
}
/*WHAT NEEDS TO HAPPEN IS THE RESULTS OF THIS GETMOVIE FUNCTION GET FED INTO AND CALL
    A FUNCTION CALLED GETTITLEINFO WHICH REACHES OUT TO OMDB AND THEN WE USE THEIR RESPONSE
    TO DISPLAY SUGGESTION DATA*/

function displayResults(data) {
    /*$('.user-results-screen').empty();
    for(let i = 0; i < data.length; i++) {*/
    $('.user-results-screen').append(`
        <section class="single-result">
            <div class="poster-container">
                <img id="poster" src="${data.Poster}" alt="Movie Poster">
            </div>
            
            <div class="title-container">
                <h2>${data.Title}</h2>
            </div>

            <div class="description-container">
                <h3 id="description">${data.Plot}</h3>
            </div>

            <div class="rating-container">
                <h5 id="rating">${data.Metascore}</h5>
            </div>

            <div class="learn-more-container">
                <a id="learn-more" href="${data.Website}" target="_blank">Learn More</a>
            </div>
        </section>
    `);
    $('.user-results-screen').removeClass('hidden');
    $('.restart-footer').removeClass('hidden');
    $('.movie-title-screen').addClass('hidden');
}

$(watchTitleForm)