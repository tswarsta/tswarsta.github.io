// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
  prevNextButtons: false,
  pageDots: false
});
// Flickity instance
var flkty = $carousel.data('flickity');
// elements
var $cellButtonGroup = $('.button-group--cells');
var $cellButtons = $cellButtonGroup.find('.button');

// update selected cellButtons
$carousel.on( 'select.flickity', function() {
  $cellButtons.filter('.is-selected')
    .removeClass('is-selected');
  $cellButtons.eq( flkty.selectedIndex )
    .addClass('is-selected');
});

// select cell on button click
$cellButtonGroup.on( 'click', '.button', function() {
  var index = $(this).index();
  $carousel.flickity( 'select', index );
});
// previous
$('.button--previous').on( 'click', function() {
  $carousel.flickity('previous');
});
// next
$('.button--next').on( 'click', function() {
  $carousel.flickity('next');
});


var autoPlayIntervals = [
  1500,
  1500,
  3000,
  3000,
  5000,

];

var $carousel = $('.carousel').flickity({
  autoPlay: autoPlayIntervals[0],
});
var flkty = $carousel.data('flickity');

$carousel.on( 'select.flickity', function() {
  // set custom autoPlay interval
  // default is 1500ms
  flkty.options.autoPlay = autoPlayIntervals[ flkty.selectedIndex ] || 1500;
});