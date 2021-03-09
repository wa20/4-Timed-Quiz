
// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var htmlEl = document.querySelector("html");
var headerEl = document.querySelector("aside");
var buttonEL = document.querySelectorAll("button");


var mode = "light";

themeSwitcher.addEventListener("click", function() {

  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    htmlEl.setAttribute("class", "dark");
    headerEl.setAttribute("class", "header-bar-dark")
    buttonEL.setAttribute("class", "ans-btn-dark")
  }
  // If mode is light, apply dark background 
  else {
    mode ="light"
    htmlEl.setAttribute("class", "light");
    headerEl.setAttribute("class", "header-bar")
    buttonEL.setAttribute("class", "ans-btn")
  }
});

