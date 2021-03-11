



let question = [
 
    { question : "who won the premier league last year",
      answer: [ "Liverpool", "Man United", "Man City", "Chelsea"],
      correctAnswer : "Liverpool"
    },

    { question : "who came second in the premier league last year",
      answer: [ "Liverpool", "Man United", "Man City", "Chelsea"],
      correctAnswer : "Man City"
    }

];

let currentQsIndex = 0; //shows whatever qs we are displaying


const buttonA = document.getElementById("a");
const buttonB = document.getElementById("b");
const buttonC = document.getElementById("c");
const buttonD = document.getElementById("d");
const displayQs = document.getElementById("Qs");


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
    //   screen.setAttribute("class", "screen-black hide"); //remove
    //   startbtnEl.setAttribute("class", "hide"); // remove

      for (i = 0; i < buttonEL.length; i++) {
        buttonEl[i].setAttribute("class", "ans-btn-dark");
      }
    } else {
      mode = "light";
      htmlEl.setAttribute("class", "light");
      headerEl.setAttribute("class", "header-bar");
    //   screen.setAttribute("class", "screen"); //remove
    //   startbtnEl.setAttribute("class", "hide"); // remove

      for (i = 0; i < buttonEl.length; i++) {
        buttonEl[i].setAttribute("class", "ans-btn");
      }
    }
  });
  
  questions();

});


function questions(){

    console.log("questions")
    displayQs.textContent = question[currentQsIndex].question //this calls the question to the display screen
    // buttonA.textContent =
    var buttonArea = document.getElementById("ans-btn"); 
buttonArea.innerHTML = "";
    for (var i = 0; i < question[currentQsIndex].answer.length; i++){
        var button = document.createElement("button");
        button.setAttribute("class", "ans-btn");
        button.textContent = question[currentQsIndex].answer[i];
        button.onclick = checkAnswer;
        buttonArea.appendChild(button); 
    }





}
function checkAnswer(){
    console.log(this.textContent); 
    if(this.textContent === question[currentQsIndex].correctAnswer){
        alert("Correct")
    } else {
        alert("Incorrect")
    }
    currentQsIndex++;
    if(currentQsIndex === question.length){
        endGame()
    }else {
        questions();
    }
}


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





// submitButtonEl.addEventListener("click", function submit(){


// })


// playAgainEl.addEventListener("click", function playAgain(){

    
// })