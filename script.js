'use strict'


import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/d-PTb-A2fzaQHw3h/scene.splinecode');


//const { title } = require("process");

const tdApiKey = '344207-MovieGen-7ZJ76CWA';
const tasteDive = 'https://tastedive.com/api/similar';

const omdbKey = '3e8e016d';
const omdb = "http://www.omdbapi.com/?apikey='3e8e016d'&"

//SPLASH SCREEN TO DISAPPEAR ON BUTTON CLICK
$('.entrance').on('click', function () {
    $('.dashboard').removeClass('hidden');
    $('.introduction').addClass('hidden');

})

//DASH SEARCH BAR CLICKED
$('.dash-search-butt').on('click', function () {
    $('.dashboard').addClass('hidden');
    $('.user-search').removeClass('hidden');
    //$('.continous-search').removeClass('hidden');
})

$('.close').on('click', function() {
    $('.user-results-screen').addClass('hidden');
    $('.continous-search').addClass('hidden');
    $('.dashboard').removeClass('hidden');
    $('.search-bar').val("");
    $('.search-bar-header').val("");
    $('.user-results-screen').empty();
    $('.error').addClass('hidden');
})

// $('.genre').on('click', function() {
//     $('.dashboard').addClass('hidden');
//     $('.scifi-page').removeClass('hidden');
// })


$('.start-over').on('click', function () {
    $('.restart').removeClass('hidden');
    $('.movie-title-screen').removeClass('hidden');
    $('.search-bar').val("");
    $('.user-results-screen').addClass('hidden');
    $('.user-results-screen').empty();
    $('.restart-footer').addClass('hidden');
    $('.continous-search').addClass('hidden');
})


$('.hide').on('click', function () {
    $('.snackbar').addClass('hidden');
})

function watchTitleForm() {
    $('.user-title-form').submit(event => {
        event.preventDefault();
        $('.loader').removeClass('hidden')
        let title = $('.search-bar').val();
        $('.dashboard').addClass('hidden');
        $('.movie-title-screen').addClass('hidden');
        $('.continous-search').removeClass('hidden');
        $('.restart').addClass('hidden');
        getMovies(title);
    });
    $('.header-form').submit(event => {
        event.preventDefault();
        let title = $('.search-bar-header').val();
        $('.restart-footer').addClass('hidden');
        $('.loader').removeClass('hidden')
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
                $('.loader').addClass('hidden');
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
            $('.loader').addClass('hidden')
            displayResults(data)
        })
}

function displayResults(data) {
    $('.user-results-screen').append(`
        <section class="single-result">
            <div class="poster-container">
                <img id="poster" src="${data.Poster}" alt="Movie Poster">
            </div>
            <div class="main-container">
                <div class="title-container">
                    <h2  id="title">${data.Title}</h2>
                </div>
            <div class="sub-container">
                <div class="rating-container">
                    <p id="rating">${data.Rated}</p>
                </div>

                <div class="score-container">
                <img src="IMG/rotten-tomatoes-rating-icons-3@2x 1.png">
                    <p id="score">${data.Metascore}</p>
                </div>

                <div class="year-container">
                    <p id="year">${data.Year}</p>
                </div>
            </div>
            <div class="actors-container">
                    <p id="actors">${data.Genre}</p>
                </div>
            </a>
        </section>
    `);
    $('.snackbar').removeClass('hidden');
    $('.user-results-screen').removeClass('hidden');
    $('.restart-footer').removeClass('hidden');
    $('.movie-title-screen').addClass('hidden');
}

$(watchTitleForm);
