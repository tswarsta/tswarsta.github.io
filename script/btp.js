$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.bottomMenu').fadeIn(0);
    } else {
        $('.bottomMenu').fadeOut(0);
    }

});