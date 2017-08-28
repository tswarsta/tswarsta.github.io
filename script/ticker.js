var tickerId="#tickerText";
function tickify(e) {
    var text=$(e).text().split("");
    var newText="";
    for (var i=0;i<text.length;i++) {
        newText+="<span class='tickerChar'>" + text[i] + "</span>";
    }
    $(e).html(newText);
}
tickify(tickerId);
function tick(){
    $(tickerId + " span.tickerChar:first").hide("slide",{direction:"left"},50,function(){$(this).appendTo($(tickerId)).show("slide",{direction:"right"},50);});
}
setInterval(function(){tick()},200);