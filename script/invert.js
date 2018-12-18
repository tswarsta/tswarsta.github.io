function setStyleSheet() {
  var stylesheet = document.getElementById("stylesheet");
  var currentSheet = stylesheet.getAttribute("href");
  var a = document.getElementById("toggle");
  
  if (currentSheet === "css/style.css") {
    stylesheet.setAttribute("href", "css/style2.css");
    a.innerHTML = "INVERT";
  } else {
    stylesheet.setAttribute("href", "css/style.css");
    a.innerHTML = 
"INVERT";
  }
}