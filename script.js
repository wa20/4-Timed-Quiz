let question = [
  {
    question:
      "If soccer is called football in England, what is American football called in England?",
    answer: ["American football", "Combball", "Handball", "Touchdown"],
    correctAnswer: "American football",
  },

  {
    question: "What is the largest country in the world?",
    answer: ["Russia", "Canada", "China", "United States"],
    correctAnswer: "Russia",
  },

  {
    question:
      "An organic compound is considered an alcohol if it has what functional group?",
    answer: ["Hydroxyl", "Carbonyl", "Alkyl", "Aldehyde"],
    correctAnswer: "Hydroxyl",
  },

  {
    question: "What is the 100th digit of Pi?",
    answer: ["9", "4", "7", "2"],
    correctAnswer: "9",
  },

  {
    question: "A doctor with a PhD is a doctor of what?",
    answer: ["Philosophy", "Pschology", "Phrenology", "Physical Therapy"],
    correctAnswer: "Philosophy",
  },

  {
    question: "What year did World War I begin?",
    answer: ["1914", "1905", "1919", "1925"],
    correctAnswer: "1914",
  },

  {
    question: "What is isobutylphenylpropanoic acid more commonly known as?",
    answer: ["Ibuprofen", "Morphine", "Ketamine", "Aspirin"],
    correctAnswer: "Ibuprofen",
  },

  {
    question:
      "What state is the largest state of the United States of America?",
    answer: ["Alaska", "California", "Texas", "Washington"],
    correctAnswer: "Alaska",
  },

  {
    question: "What is the tallest mountain in Canada?",
    answer: [
      "Mount Logan",
      "Mont Tremblant",
      "Whistler Mountain",
      "Blue Mountain",
    ],
    correctAnswer: "Mount Logan",
  },

  {
    question: "Which of these is a stop codon in DNA?",
    answer: ["TAA", "ACT", "ACA", "GTA"],
    correctAnswer: "TAA",
  },

  {
    question: "Which of these countries is NOT a part of the Asian continent?",
    answer: ["Suriname", "Georgia", "Russia", "Singapore"],
    correctAnswer: "Suriname",
  },

  {
    question: "What is the unit of currency in Laos?",
    answer: ["Kip", "Ruble", "Konra", "Dollar"],
    correctAnswer: "Kip",
  },

  {
    question: "Which of these is a stop codon in DNA?",
    answer: ["TAA", "ACT", "ACA", "GTA"],
    correctAnswer: "TAA",
  },

  {
    question: "Which of these animals belongs in class Chondrichthyes?",
    answer: ["Great white Shark", "Octopus", "Killer whale", "Catfish"],
    correctAnswer: "Great white shark",
  },

  {
    question: "What is the name of the Canadian national anthem?",
    answer: [
      "O Canada",
      "O Red Maple",
      "Leaf-Spangled Banner",
      "March of the Puck Drop",
    ],
    correctAnswer: "O Canada",
  },

  {
    question: "Which of these is NOT an Australian state or territory?",
    answer: ["Albera", "New South Wales", "Victoria", "Queensland"],
    correctAnswer: "Alberta",
  },

  {
    question: "Where is the Luxor Hotel & Casino located?",
    answer: [
      "Paradise, Nevada",
      "Las Vegas, Nevada",
      "Winchester, Nevada",
      "Jackpot, Nevada",
    ],
    correctAnswer: "Paradise, Nevada",
  },

  {
    question: "In what year did the Wall Street Crash take place?",
    answer: ["1929", "1932", "1930", "1925"],
    correctAnswer: "1929",
  },

  {
    question: "What is considered the rarist form of color blindness?",
    answer: ["Blue", "Red", "Green", "Purple"],
    correctAnswer: "Blue",
  },
];

let currentQsIndex = 0; //shows whatever qs we are displaying

//===========================================

// const buttonA = document.getElementById("a"); not needed
// const buttonB = document.getElementById("b");
// const buttonC = document.getElementById("c");
// const buttonD = document.getElementById("d");
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
themeSwitcher.addEventListener("click", function () {
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

      //   for (i = 0; i < buttonEL.length; i++) {
      //     buttonEl[i].setAttribute("class", "ans-btn-dark");
      //   }
    } else {
      mode = "light";
      htmlEl.setAttribute("class", "light");
      headerEl.setAttribute("class", "header-bar");
      //   screen.setAttribute("class", "screen"); //remove
      //   startbtnEl.setAttribute("class", "hide"); // remove

      //   for (i = 0; i < buttonEl.length; i++) {
      //     buttonEl[i].setAttribute("class", "ans-btn");
      //   }
    }
  });

  questions();
});

function questions() {
  // question section, to input question onto display screen

  console.log("questions");
  displayQs.textContent = question[currentQsIndex].question; //this calls the question to the display screen
  // buttonA.textContent =
  var buttonArea = document.getElementById("ans-btn"); // varaible created from ans-btn section
  buttonArea.innerHTML = "";
  for (var i = 0; i < question[currentQsIndex].answer.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "ans-btn");
    button.textContent = question[currentQsIndex].answer[i];
    button.onclick = checkAnswer;
    buttonArea.appendChild(button);
  }
}

function checkAnswer() {
  // check if answer is correct
  console.log(this.textContent);
  if (this.textContent === question[currentQsIndex].correctAnswer) {
    button.setAttribute("class", "correct");

    alert("Correct");
    // setTimer()
  } else {
    alert("Incorrect");
    second -= 3;
    timerEl.textContent = "Time:" + " " + seconds;
  }
  currentQsIndex++;
  if (currentQsIndex === question.length) {
    endGame();
  } else {
    questions();
  }
}

var seconds;
startGameEl.addEventListener("click", function setTimer() {
  seconds = 20;

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

function endGame() {}

// submitButtonEl.addEventListener("click", function submit(){

// })

// playAgainEl.addEventListener("click", function playAgain(){

// })
