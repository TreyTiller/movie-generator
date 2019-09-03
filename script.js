'use strict'

const tdApiKey = '344207-MovieGen-7ZJ76CWA';
const tasteDive = 'https://tastedive.com/api/similar';

const omdbKey = '3e8e016d';
const omdb = "http://www.omdbapi.com/?apikey='3e8e016d'&"

$('.start-over').on('click', function () {
    $('.restart').removeClass('hidden');
    $('.movie-title-screen').removeClass('hidden');
    $('.search-bar').val("");
    $('.user-results-screen').addClass('hidden');
    $('.user-results-screen').empty();
    $('.restart-footer').addClass('hidden');
    $('.continous-search').addClass('hidden');
})

function watchTitleForm() {
    $('.user-title-form').submit(event => {
        event.preventDefault();
        let title = $('.search-bar').val();
        $('.introduction').addClass('hidden');
        $('.user-title-form').addClass('hidden');
        $('.continous-search').removeClass('hidden');
        $('.restart').addClass('hidden');
        getMovies(title);
    });
    $('.header-form').submit(event => {
        event.preventDefault();
        let title = $('.search-bar-header').val();
        $('.error').addClass('hidden');
        $('.user-results-screen').empty();
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
                for (let i = 0; i < output.Similar.Results.length; i++) {
                    titleInfo(output.Similar.Results[i].Name);
                }

            }
        })
};

function titleInfo(title) {

    fetch(`https://www.omdbapi.com/?apikey=3e8e016d&t=${title}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            displayResults(data);

        })

}

function displayResults(data) {
    $('.user-results-screen').append(`
        <section class="single-result">
        <a class="full-link" href="https://www.imdb.com" target="_blank">
            <div class="poster-container">
                <img id="poster" src="${data.Poster}" alt="Movie Poster">
            </div>
            <div class="main-container">
                <div class="title-container">
                    <h2 id="title">${data.Title}</h2>
                </div>

                <hr class="first"></hr>

                <div class="director-container">
                    <h4 id="director">Director: ${data.Director}</h4>
                </div>

                <div class="actors-container">
                    <h4 id="actors">${data.Actors}</h4>
                </div>

                <div class="rating-container">
                    <img class="imdb-symbol" src="IMG/icons8-imdb-100.png" alt=""><h5 id="rating">${data.imdbRating}</h5>
                </div>


                <hr class="second"></hr>
        
                <div class="description-container">
                    <h3 id="description">${data.Plot}</h3>
                </div>
            </a>
        </section>
    `);
    $('.user-results-screen').removeClass('hidden');
    $('.restart-footer').removeClass('hidden');
    $('.movie-title-screen').addClass('hidden');
}



$(watchTitleForm)