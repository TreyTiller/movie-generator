'use strict'

const tdApiKey = '344207-MovieGen-7ZJ76CWA';
const tasteDive = 'https://tastedive.com/api/similar';

/*SCRIPT FOR ALL FUNCTIONING BUTTONS*/

$('.title').on('click', function() {
    //alert('it worked');
    $('.home-screen').addClass('hidden');
    $('.movie-title-screen').removeClass('hidden');
});

$('.genre').on('click', function() {
    $('.home-screen').addClass('hidden');
    $('.genre-screen').removeClass('hidden');
});

$('.start-over').on('click', function () {
    $('.home-screen').removeClass('hidden');
    $('.genre-screen').addClass('hidden');
});

$('.start-over').on('click', function () {
    $('.home-screen').removeClass('hidden');
    $('.movie-title-screen').addClass('hidden');
});

/*TITLE FETCH REQUEST*/

function watchTitleForm() {
    $('.user-title-form').submit(event => {
        event.preventDefault();
        let title = $('.search-bar').val();
        console.log(`Im Working: ${title}`);
        getMovies(title);
    });
}

function getMovies(title){
    //fetch("https://tastedive.com/api/similar?callback=?" + `q=${encodeURIComponent(title)}` + '&' + 'type=movies' + '&' + `k=344207-MovieGen-7ZJ76CWA`, {mode: 'no-cors'})
    fetch("https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?callback=&" + `q=${encodeURIComponent(title)}` + '&' + 'type=movies' + '&' + 'info=1' + '&' + `k=344207-MovieGen-7ZJ76CWA`) 
    .then(results => results.json())
    .then(responseJson => console.log(responseJson))
}




$(watchTitleForm)




