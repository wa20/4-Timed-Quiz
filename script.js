//============================================
// light and Dark Theme Function.




//============================================
// light and Dark Theme Function.

// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const htmlEl = document.querySelector("html");
const headerEl = document.querySelector("aside");
const buttonEL = document.querySelectorAll("section > button");
const screenEl = document.getElementById("screen");
let startbtnEl = document.getElementById("start-btn");
let restartbtnEl = document.getElementById("restart-btn");


let mode = "light";

themeSwitcher.addEventListener("click", function() {

  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    htmlEl.setAttribute("class", "dark");
    headerEl.setAttribute("class", "header-bar-dark")
    screenEl.setAttribute("class", "screen-black hide")
    startbtnEl.setAttribute("class","start-btn-dark")
    restartbtnEl.setAttribute("class", "restart-btn-dark hide")
    
    for(i = 0; i < buttonEL.length; i++) {
    buttonEL[i].setAttribute("class", "ans-btn-dark") 

    }
  }
  // If mode is light, apply dark background 
  else {
    mode = "light"
    htmlEl.setAttribute("class", "light");
    headerEl.setAttribute("class", "header-bar")
    screenEl.setAttribute("class", "screen hide")
    startbtnEl.setAttribute("class","start-btn")
    restartbtnEl.setAttribute("class", "restart-btn hide")
    
    for(i = 0; i < buttonEL.length; i++) {
    buttonEL[i].setAttribute("class", "ans-btn")   

    }
  }
});

// ============================================


// -1 funtion to start the game with start button - this also starts the timer



//-2 function to set the next question
//  set an array of questions


//- function to select answer


// funtion to take you to the next question or previous question



