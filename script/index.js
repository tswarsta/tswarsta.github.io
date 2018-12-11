// external js: flickity.pkgd.js

var $carouselStatus = $('.carousel-status');
var flkty = $carousel.data('flickity');

function updateStatus() {
  var cellNumber = flkty.selectedIndex + 1;
  if (cellNumber < 10){
    $carouselStatus.text( '0' + cellNumber + '/' + flkty.slides.length );
}else{$carouselStatus.text( cellNumber + '/' + flkty.slides.length );
    
}}
updateStatus();
$carousel.on( 'change.flickity', updateStatus );


