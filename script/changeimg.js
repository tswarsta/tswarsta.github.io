var onScrollHandler = function() {
  var newImageUrl = "images/PTP/PTP_1.png".src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
     newImageUrl = "images/PTP/PTP_1.png"
  }
  if (scrollTop > 200) {
     newImageUrl = "images/PTP/PTP_2.png"
  }
  if (scrollTop > 300) {
     newImageUrl = "images/PTP/PTP_3.png"
  }
  "images/PTP/PTP_1.png".src = newImageUrl;
};
object.addEventListener ("scroll", onScrollHandler);