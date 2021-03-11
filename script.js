//============================================
// light and Dark Theme Function.

// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const htmlEl = document.querySelector("html");
const headerEl = document.querySelector("aside");
let buttonEl = document.querySelectorAll("section > button");
let startbtnEl = document.getElementById("start-btn");
let restartbtnEl = document.getElementById("restart-btn");

//============================================
// start game button
const startGameEl = document.querySelector(".start-btn");
const answerBtnEl = document.getElementById("ans-btn"); //needed to unhide buttons
// container elements
const screenEl = document.getElementById("screen");
let navEl = document.getElementById("bottom-nav");
// timer function
let timerEl = document.querySelector(".timer");

//============================================

let mode = "light";

//theme switching before the game starts
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    htmlEl.setAttribute("class", "dark");
    headerEl.setAttribute("class", "header-bar-dark");
    // startbtnEl.setAttribute("class", "start-btn-dark");
  }
  // If mode is light, apply dark background
  else {
    mode = "light";
    htmlEl.setAttribute("class", "light");
    headerEl.setAttribute("class", "header-bar");
    // startbtnEl.setAttribute("class", "start-btn");
  }
});

//=======================================

startGameEl.addEventListener("click", function () {
  //game start button

  var startButton = startbtnEl.classList.add("hide");
  var restartbtn = restartbtnEl.classList.add("hide");
  var screen = screenEl.classList.remove("hide");
  var navigation = navEl.classList.remove("hide");
  var answerButton = answerBtnEl.classList.remove("hide");

  let mode = "light";

  themeSwitcher.addEventListener("click", function () {
    //is there anythin i can add here?
    if (mode === "light") {
      mode = "dark";
      htmlEl.setAttribute("class", "dark");
      headerEl.setAttribute("class", "header-bar-dark");
      screen.setAttribute("class", "screen-black hide"); //remove
      startbtnEl.setAttribute("class", "hide"); // remove

      for (i = 0; i < buttonEL.length; i++) {
        buttonEl[i].setAttribute("class", "ans-btn-dark");
      }
    } else {
      mode = "light";
      htmlEl.setAttribute("class", "light");
      headerEl.setAttribute("class", "header-bar");
      screen.setAttribute("class", "screen"); //remove
      startbtnEl.setAttribute("class", "hide"); // remove

      for (i = 0; i < buttonEl.length; i++) {
        buttonEl[i].setAttribute("class", "ans-btn");
      }
    }
  });
});

startGameEl.addEventListener("click", function setTimer() {
  var seconds = 20;

  var timerInterval = setInterval(function () {
    seconds--;
    timerEl.textContent = "Time:" + " " + seconds;

    // if(correct answer or next/ previous button is clicekd){

    // then restart the timer and move to the next question
    // return timerInterval
    // nextQuestion

    // } else

    if (seconds === 0) {
      timerEl.textContent = "Time: 0";

      clearInterval(timerInterval);

      endGame();
    }
  }, 1000);
});

// ============================================

// startGameEl.addEventListener("click", function setTimer(){

// }




function endGame() {


}


submitButtonEl.addEventListener("click", function submit(){


})


playAgainEl.addEventListener("click", function playAgain(){

    
})