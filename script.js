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

startGameEl.addEventListener("click", function (){ //game start button

    var startButton = startbtnEl.classList.add("hide");
    var screen =  screenEl.classList.remove("hide");
    var navigation = navEl.classList.remove("hide");
    var answerButton = answerBtnEl.classList.remove("hide");
    
    let mode = "light";

    themeSwitcher.addEventListener("click", function(){
        if(mode === "light"){
            mode = "dark";
            htmlEl.setAttribute("class", "dark"); 
            headerEl.setAttribute("class", "header-bar-dark"); 
            screen.setAttribute("class", "screen-black hide");
            
            for(i = 0; i < buttonEL.length; i++) {
                buttonEl[i].setAttribute("class", "ans-btn-dark") 
            
                }

        } else {
            mode = "light";
            htmlEl.setAttribute("class", "light");
            headerEl.setAttribute("class", "header-bar") 
            screen.setAttribute("class", "screen")
            
            for(i = 0; i < buttonEl.length; i++) {
                buttonEl[i].setAttribute("class", "ans-btn")   
            
                }

        }

    })

});


startGameEl.addEventListener("click", function setTimer(){

    var seconds = 20;

    var timerInterval = setInterval(function() {
        seconds--;
        timerEl.textContent = "Time:" + " " + seconds;

        // if(correct answer is clicekd){

            // then restart the timer and move to the next question 
            // return timerInterval
            // nextQuestion

        // } else 
    
        if(seconds === 0) {

          timerEl.textContent = 'Time: 0';  
         
          clearInterval(timerInterval);
          
          endGame();
        }
    
      }, 1000);
         
})




// ============================================

let mode = "light";

//theme switching before the game starts
themeSwitcher.addEventListener("click", function() {

  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    htmlEl.setAttribute("class", "dark"); 
    headerEl.setAttribute("class", "header-bar-dark"); 
    startbtnEl.setAttribute("class","start-btn-dark");
  }
  // If mode is light, apply dark background 
  else {
    mode = "light";
    htmlEl.setAttribute("class", "light");
    headerEl.setAttribute("class", "header-bar");
    startbtnEl.setAttribute("class","start-btn");
   
  }
});

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



