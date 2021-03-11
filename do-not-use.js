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
    screenEl.setAttribute("class", "screen-black hide") // needs to be fixed
    startbtnEl.setAttribute("class","start-btn-dark") // needs to be fixed
    restartbtnEl.setAttribute("class", "restart-btn-dark hide") // needs to be fixed
    
    for(i = 0; i < buttonEL.length; i++) {
    buttonEL[i].setAttribute("class", "ans-btn-dark") 

    }
  }
  // If mode is light, apply dark background 
  else {
    mode = "light"
    htmlEl.setAttribute("class", "light");
    headerEl.setAttribute("class", "header-bar") 
    screenEl.setAttribute("class", "screen hide") // needs to be fixed
    startbtnEl.setAttribute("class","start-btn") // needs to be fixed
    restartbtnEl.setAttribute("class", "restart-btn hide")  // needs to be fixed
    
    for(i = 0; i < buttonEL.length; i++) {
    buttonEL[i].setAttribute("class", "ans-btn")   

    }
  }
});

//============================================



// timer element
let startGameEl = document.querySelector(".start-btn");
let timerEl = document.querySelector(".timer");




startGameEl.addEventListener("click", function setTimer(startGame){

    var seconds = 20;

    var timerInterval = setInterval(function() {
        seconds--;
        timerEl.textContent = "Time:" + " " + seconds;

        // if(correct answer is clicekd){

            // then restart the timer and move to the next question 
            // return timerInterval

        // } else 
    
        if(seconds === 0) {

          timerEl.textContent = 'Time: 0';  
         
          clearInterval(timerInterval);
          
          endGame();
        }
    
      }, 1000);

        // new function ( )
        // 
        // 
        //     
})







// ============================================

// startGameEl.addEventListener("click", function setTimer(){

    

// }




// -1 funtion to start the game with start button - this also starts the timer
// you press the start button and it kick starts the timer.
// at same time the start button is hidden
// then the hidden functions are unhidden except for the restart and submit form button.
// the screen shows the first question
// the answer choices are shown 



//-2 function to set the next question
//  set an array of questions


//- function to select answer


// funtion to take you to the next question or previous question


//-3 results page and submit button



