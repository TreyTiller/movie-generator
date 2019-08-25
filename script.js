'use strict'

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