var startButton= document.querySelector(".start")
var question = document.querySelector(".question1")
var initialsInput = document.querySelector(".initialsinput")
var answers = document.querySelector(".answers")
var submit = document.querySelector(".submit")
var currentQuestion = 0
var seconds = 60;


var questions = [
  {
    question: "What is a boolean value?",
    choices: [
      "A true or false statement",
      "An if statement",
      "A for loop",
      "The basis of javascript"
    ],
    answer: "A true or false statement"
  }
  ,
  {
    question: "What is an attribute?",
    choices: [
      "Provides additional information about elements",
      "A personal characteristic",
      "Establishes a title",
      "It runs a function"
    ],
    answer: "Provides additional information about elements"
  }
  ,
  {
    question: "What is pseudocode?",
    choices: [
      "Fake writing",
      "It ties together the code",
      "An artificial and informal language that helps programmers develop    algorithms",
      "The building blocks of computers"
    ],
    answer: "An artificial and informal language that helps programmers develop    algorithms"
  }
  ,
  {
    question: "What is a wireframe?",
    choices: [
      "Glasses",
      "A bunch of boxes that give a false sense of ambition",
      "Scaffolding around a building",
      "a schematic or blueprint that is useful for helping you think about the structure you're building"
    ],
    answer: "a schematic or blueprint that is useful for helping you think about the structure you're building"
  }
];

function endGame() {
  question.setAttribute("class", "hide")
  redirect()
  //initialsinput.classList.remove("hide")
}

function redirect () {
  return window.location = "./highscores.html"
}

function submitInitials() {
  var initialsInput = document.querySelector(".initials");
  initialsInput.addEventListener("click", submit);
}


function checksAnswer() {
  console.log(this.dataset.val)
  if (this.dataset.val === questions[currentQuestion].answer) {
    currentQuestion++
  } else {
    seconds = seconds - 10
    if (seconds < 0) {
      seconds === 0
    }
  }
  if (seconds <= 0 || currentQuestion === questions.length) {
    endGame()
  } else {
    showQuestion()
  } 
}

function showQuestion() {
  question.textContent = questions[currentQuestion].question 
  answers.textContent = ""
  for (let index = 0; index < questions[currentQuestion].choices.length; index++) {
    var li = document.createElement("li")
    li.textContent = questions[currentQuestion].choices[index]
    li.setAttribute("data-val", questions[currentQuestion].choices[index])
    li.addEventListener("click", checksAnswer)
    answers.appendChild(li)
  }
}

function startQuiz() {
  //this is supposed to hide the start button after the code starts
  startButton.classList.add("hide");
  countDown()
  showQuestion()
}

//this is the timer function. leave it alone except to move it to the top right corner
function countDown() {
  function tick() {
      var counter = document.getElementById("countdown");
      seconds--;

      if (seconds <= 0) {
        window.location.assign("./highscores.html");
        return;
      }

      counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      }
  }
  tick();
}

startButton.addEventListener("click", startQuiz)

//there is no button2 variable
function results() {
  var button = document.querySelector(".button2");
  button.addEventListener("click", save)
  display()
}

function save() {
  var initials = document.getElementById("initials").value
  sessionStorage.setItem("userInitials", initials)
  display()
}

function display() {
  console.log("Display function is running");
  var displaydata = document.getElementById("display_data")
  displaydata.innerHTML = "";
  for (var i = 0; i < sessionStorage.length; i++) {
    var initials = sessionStorage.key(i)
    var score = sessionStorage.getItem(initials)

    var scoreEntry = document.createElement("div");
    scoreEntry.textContent = "Initials: " + initials + " - Score: " + score;

    displaydata.appendChild(scoreEntry);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  display();
  submitInitials();
  results();
});
