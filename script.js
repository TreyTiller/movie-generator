'use strict'

const tdApiKey = '344207-MovieGen-7ZJ76CWA';
const tasteDive = 'https://tastedive.com/api/similar';

const omdbKey = '3e8e016d';
const omdb = "http://www.omdbapi.com/?apikey='3e8e016d'&"

/*SCRIPT FOR ALL FUNCTIONING BUTTONS*/

$('.start-over').on('click', function () {
    $('.introduction').removeClass('hidden');
    $('.user-title-form').removeClass('hidden');
    $('.search-bar').val("");
    $('.user-results-screen').addClass('hidden');
    $('.user-results-screen').empty();
    $('.start-over').addClass('hidden');
    
})

/*TITLE FETCH REQUEST*/

function watchTitleForm() {
    $('.user-title-form').submit(event => {
        event.preventDefault();
        let title = $('.search-bar').val();
        $('.introduction').addClass('hidden');
        $('.start-over').removeClass('hidden');
        $('.user-title-form').addClass('hidden');
        console.log(`Im Working: ${title}`);
        getMovies(title);
    });
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
            alert("Something smells fishy... we can't seem to find a movie quite like " + title);
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
                <img id="poster" src="" alt="">
            </div>
            
            <div class="title-container">
                <h2>${data.Title}</h2>
            </div>

            <div class="description-container">
                <h3 id="description"></h3>
            </div>

            <div class="trailer-container">
                <a id="trailer" href=""></a>
            </div>

            <div class="learn-more-container">
                <a id="learn-more" href=""></a>
            </div>
        </section>
    `);
    $('.user-results-screen').removeClass('hidden');
}

$(watchTitleForm)