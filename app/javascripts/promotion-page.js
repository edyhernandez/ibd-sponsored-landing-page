$(document).ready(function() {

    // hide our element on page load
    $('#animated-1').css('opacity', '0');
    $('#animated-2').css('opacity', '0');
    $('#animated-3').css('opacity', '0');
    $('#animated-4').css('opacity', '0');
    $('#animated-5').css('opacity', '0');
    $('#animated-6').css('opacity', '0');


    $('#animated-1').waypoint(function() {
        $('#animated-1').addClass('fadeInRight');
    }, { offset: '75%' });

    $('#animated-2').waypoint(function() {
        $('#animated-2').addClass('fadeInLeft');
    }, { offset: '80%' });

    $('#animated-3').waypoint(function() {
        $('#animated-3').addClass('fadeInLeft');
    }, { offset: '80%' });

    $('#animated-4').waypoint(function() {
        $('#animated-4').addClass('fadeInLeft');
    }, { offset: '80%' });

    $('#animated-5').waypoint(function() {
        $('#animated-5').addClass('fadeInRight');
    }, { offset: '75%' });

    $('#animated-6').waypoint(function() {
        $('#animated-6').addClass('fadeInLeft');
    }, { offset: '75%' });

});

