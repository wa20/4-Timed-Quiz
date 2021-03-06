let question = [
  {
    question:
      "If soccer is called football in England, what is American football called in England?",
    answer: ["Combball", "Handball", "American football", "Touchdown"],
    correctAnswer: "American football",
  },

  {
    question: "What is the largest country in the world?",
    answer: ["Canada", "China", "Russia", "United States"],
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
    answer: ["4", "7", "2", "9"],
    correctAnswer: "9",
  },

  {
    question: "A doctor with a PhD is a doctor of what?",
    answer: ["Pschology", "Philosophy", "Phrenology", "Physical Therapy"],
    correctAnswer: "Philosophy",
  },

  {
    question: "What year did World War I begin?",
    answer: ["1905", "1919", "1925", "1914"],
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
      "Mont Tremblant",
      "Mount Logan",
      "Whistler Mountain",
      "Blue Mountain",
    ],
    correctAnswer: "Mount Logan",
  },

  {
    question: "Which of these is a stop codon in DNA?",
    answer: ["ACT", "ACA", "TAA", "GTA"],
    correctAnswer: "TAA",
  },

  {
    question: "Which of these countries is NOT a part of the Asian continent?",
    answer: ["Georgia", "Russia", "Singapore", "Suriname"],
    correctAnswer: "Suriname",
  },

  {
    question: "What is the unit of currency in Laos?",
    answer: ["Kip", "Ruble", "Konra", "Dollar"],
    correctAnswer: "Kip",
  },

  {
    question: "Which of these is a stop codon in DNA?",
    answer: ["ACT", "TAA", "ACA", "GTA"],
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
      "O Red Maple",
      "Leaf-Spangled Banner",
      "March of the Puck Drop",
      "O Canada",
    ],
    correctAnswer: "O Canada",
  },

  {
    question: "Which of these is NOT an Australian state or territory?",
    answer: ["New South Wales", "Victoria", "Albera", "Queensland"],
    correctAnswer: "Alberta",
  },

  {
    question: "Where is the Luxor Hotel & Casino located?",
    answer: [
      "Las Vegas, Nevada",
      "Paradise, Nevada",
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
    answer: ["Red", "Green", "Purple", "Blue"],
    correctAnswer: "Blue",
  },

  {
    question: "Which of these species is not extinct?",
    answer: [
      "Japanese sea lion",
      "Tasmanian tiger",
      "Komodo dragon",
      "Saudi gazelle",
    ],
    correctAnswer: "Komodo dragon",
  },

  {
    question:
      "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
    answer: ["Bird", "Sickle", "Crown", "Tree"],
    correctAnswer: "Crown",
  },

  {
    question: "Which ocean borders the west coast of the United States?",
    answer: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correctAnswer: "Pacific",
  },

  {
    question:
      "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
    answer: ["India", "United States of America", "Soviet Union", "Poland"],
    correctAnswer: "India",
  },

  {
    question: "How many manned moon landings have there been?",
    answer: ["3", "6", "5", "9"],
    correctAnswer: "6",
  },

  {
    question: "Which is the largest freshwater lake in the world?",
    answer: ["Lake Superior", "Caspian Sea", "Lake Michigan", "Lake Huron"],

    correctAnswer: "Lake Superior",
  },

  {
    question: "What name was historically used for the Turkish city currently known as Istanbul?",
    answer: ["Hudavendigar", "Constaninople", "Sogut", "Adrianople"],

    correctAnswer: "Constaninople",
  },

  {
    question: "How many legs is it biologically impossible for a centipede to have?",
    answer: ["26", "50", "75", "100"],
    correctAnswer: "100",
  },

  {
    question: "What is the scientific name of the knee cap?",
    answer: ["Patella", "Femur", "Foramen Magnum", "Scapula"],
    correctAnswer: "Patella",
  },

  {
    question: "What physics principle relates the net electric flux out of a closed surface to the charge enclosed by that surface?",
    answer: ["Faraday's Law", "Ampere's Law", "Gauss's Law", "Biot-Savart Law"],
    correctAnswer: "Gauss's Law",
  },

  {
    question: "What is the fastest land animal?",
    answer: ["Cheetah", "Pronghorn Antelope", "Puma", "Thomson Gazelle"],
    correctAnswer: "Cheetah",
  },

  {
    question: "What is the Italian word for 'tomato'?",
    answer: ["Agilo", "pomodoro", "Cipolla", "Peperoncino"],
    correctAnswer: "Agilo",
  },

  {
    question: "Botanically speaking, which of these fruits is NOT a berry?",
    answer: ["Blueberry", "Banana", "Concord Grape", "Strawberry"],
    correctAnswer: "Strawberry",
  },


  

];

let currentQsIndex = 0; //shows which question we are displaying
const displayQs = document.getElementById("Qs");

//============================================
// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const htmlEl = document.querySelector("html");
const headerEl = document.querySelector("aside");
const viewScoreEl = document.getElementById("viewScore-btn");
let buttonEl = document.querySelectorAll("section > button");
let startbtnEl = document.getElementById("start-btn");

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
// light and Dark Theme Function.
let mode = "light";
//theme switching before the game starts
themeSwitcher.addEventListener("click", function (event) {
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
// function startQuiz() {

startGameEl.addEventListener("click", function startGame(event) {
  //game start button

  var startButton = startbtnEl.classList.add("hide");
  var viewScore = viewScoreEl.classList.add("hide");
  var screen = screenEl.classList.remove("hide");
  var navigation = navEl.classList.remove("hide");
  var answerButton = answerBtnEl.classList.remove("hide");

  let mode = "light";

  themeSwitcher.addEventListener("click", function () {
    if (mode === "light") {
      mode = "dark";
      htmlEl.setAttribute("class", "dark");
      headerEl.setAttribute("class", "header-bar-dark");
    } else {
      mode = "light";
      htmlEl.setAttribute("class", "light");
      headerEl.setAttribute("class", "header-bar");
    }
  });

  questions();
});
// }

//============================================================
// questions function

function questions() {
  // question section, to input question onto display screen

  console.log("questions"); //test
  displayQs.textContent = question[currentQsIndex].question; //this calls the question to the display screen
  // buttonA.textContent =
  var buttonArea = document.getElementById("ans-btn"); // varaible created from ans-btn section
  buttonArea.innerHTML = "";
  for (var i = 0; i < question[currentQsIndex].answer.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "ans-btn");
    button.textContent = question[currentQsIndex].answer[i];
    button.onclick = checkAnswer;
    buttonArea.appendChild(button); // creates the buttons in the space
  }
}

//=============================================
//check question function
let seconds = 60;
let score = 0;
let incorrect = 0;

function checkAnswer() {
  // check if answer is correct
  console.log(this.textContent);
  if (this.textContent === question[currentQsIndex].correctAnswer) {
    // button.setAttribute("class", "correct");
    alert("Correct");
    score += 1;
    console.log(score); // testing score

    // setTimer()
  } else {
    alert("Incorrect");
    incorrect += 1;
    console.log(incorrect); // testing incorrect score
    // second -= 3;
    timerEl.textContent = "Time:" + " " + seconds; //test section
  }
  currentQsIndex++;
  if (currentQsIndex === question.length) {
    endGame();
  } else {
    questions();
  }
}

startGameEl.addEventListener("click", function setTimer() {
  var timerInterval = setInterval(function () {
    seconds--;
    timerEl.textContent = "Time:" + " " + seconds;

    if (seconds === 0) {
      timerEl.textContent = "Time: 0";

      clearInterval(timerInterval);

      endGame();
    }
  }, 1000);
});

// ============================================


let submitNameEl = document.getElementById("submit-name");
let submitButtonEl = document.getElementById("submit");

// ============================================
// save user score
const userNameEl = document.getElementById("name");


function saveScore() {
  var highScore = {
    Name: "Name: " + userNameEl.value.trim(),
    Correct: "Correct: " + score,
    Wrong: "Incorrect: " + incorrect,
  };

  localStorage.setItem("highScore", JSON.stringify(highScore));
}

// ============================================
// retrieve user score

function renderResults() {
  var highScore = {
    Name: "Name: " + userNameEl.value.trim(),
    Correct: "Correct: " + score,
    Wrong: "Incorrect: " + incorrect,
  };

  var lastScore = JSON.parse(localStorage.getItem("highScore"));

  if (lastScore !== null) {
    document.getElementById("userName").innerHTML = lastScore.Name;
    document.getElementById("correctAns").innerHTML = lastScore.Correct;
    document.getElementById("wrongAns").innerHTML = lastScore.Wrong;
  } else {
    return "No Scores";
  }
}
// console.log(renderResults());

// ============================================



submitButtonEl.addEventListener("click", function submit(event) {
    event.preventDefault();
    
    saveScore();
   
    // stops from refreshing
    screenEl.classList.remove("hide");
    submitNameEl.classList.add("hide");
    restartbtnEl.classList.remove("hide");

  });



  submitButtonEl.addEventListener("click", function submit(event) {
    // event.preventDefault();

     renderResults();


  });


// =====================================================================
viewScoreEl.addEventListener("click", function viewscore(event) {
  event.preventDefault();

  viewScoreEl.classList.add("hide");

  screenEl.classList.remove("hide");
  //   saveScore();
  renderResults();
});

// ============================================

function endGame() {
  displayQs.textContent = "Game Over";
  submitNameEl.classList.remove("hide");
  navEl.classList.add("hide");
  answerBtnEl.classList.add("hide");
}

let restartbtnEl = document.getElementById("restart-btn");

//==============================================

let playAgainEl = document.getElementById("restart-btn");

playAgainEl.addEventListener("click", function playAgain() {
  startbtnEl.classList.remove("hide");
  viewScoreEl.classList.remove("hide");
  screenEl.classList.add("hide");
  restartbtnEl.classList.add("hide");
  // var navigation = navEl.classList.remove("hide");
  // var answerButton = answerBtnEl.classList.remove("hide");
});
