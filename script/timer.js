// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
  autoPlay: 1000
});

$('.play-button').on( 'click', function() {
  $carousel.flickity('playPlayer');
});

$('.stop-button').on( 'click', function() {
  $carousel.flickity('stopPlayer');
});

$('.pause-button').on( 'click', function() {
  $carousel.flickity('pausePlayer');
});

$('.unpause-button').on( 'click', function() {
  $carousel.flickity('unpausePlayer');
});