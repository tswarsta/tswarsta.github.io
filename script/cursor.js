$(document).ready(function() {
  // Setup our variables
  var cH = $('#crosshair-h'),
      cV = $('#crosshair-v');
  
  $(this).on('mousemove', function(e) {
//    var x = e.pageX - 1;
//    var y = e.pageY - 1;
    cH.css('top', e.pageY);
    cV.css('left', e.pageX);
    
//    $('#mousepos').css({
//      top: e.pageY + 'px',
//      left: e.pageX + 'px'
//    }, 800);
//    $('#mousepos').text( "X: " + x + "px, Y: " + y + "px");
//    e.stopPropagation();
  });
  
  // Anchor Hover Effects
//  $("a").hover(function() {
//    $(".hair").stop().css({borderColor: "#fff"}, 800)},
//     function() {
//    $(".hair").stop().css({borderColor: "black"},800)
//  });
//  e.stopPropagation();
});