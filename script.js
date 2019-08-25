'use strict'

/*SCRIPT FOR ALL FUNCTIONING BUTTONS*/

/*HOME SCREEN*/

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




