function expandingMenu(num) {
  var speed = 500;

  var item_title = $("#menu ul").eq(num).children(":first");
  var items = $("#menu ul").eq(num).children().filter(function (index) { return index > 0; });

  /* hide items if not active */
  if (items.is(".active") == false) {
    items.hide();
  }

  /* add click functions + pointer to title */
  item_title.css({cursor: "pointer"}).click(function() {
    if (!item_title.hasClass("clicked")) {
      items.show(speed);
      items.addClass("iclicked");
      item_title.addClass("clicked");

      $(".iclicked").not(items).hide(speed);
      $(".iclicked").not(items).removeClass("iclicked");
      $(".clicked").not(item_title).removeClass("clicked");
    } else {
      items.hide(speed);
      item_title.removeClass("clicked");
    }
  });
}