




//============================================
// light and Dark Theme Function.

// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const htmlEl = document.querySelector("html");
const headerEl = document.querySelector("aside");
const buttonEL = document.querySelectorAll("section > button");
const screenEl = document.getElementById("screen");


let mode = "light";

themeSwitcher.addEventListener("click", function() {

  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    htmlEl.setAttribute("class", "dark");
    headerEl.setAttribute("class", "header-bar-dark")
    screenEl.setAttribute("class", "screen-black")
    
    for(i = 0; i < buttonEL.length; i++) {
    buttonEL[i].setAttribute("class", "ans-btn-dark") 

    }
  }
  // If mode is light, apply dark background 
  else {
    mode = "light"
    htmlEl.setAttribute("class", "light");
    headerEl.setAttribute("class", "header-bar")
    screenEl.setAttribute("class", "screen")
    
    for(i = 0; i < buttonEL.length; i++) {
    buttonEL[i].setAttribute("class", "ans-btn")   

    }
  }
});

// ============================================



