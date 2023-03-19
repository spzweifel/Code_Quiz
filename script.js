var startbutton= document.querySelector(".start")
var question = document.querySelector(".question1")
var initialsinput = document.querySelector(".initialsinput")
var answers = document.querySelector(".answers")
var submit = document.querySelector(".submit")
var currentquestion = 0
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

function endgame() {
  question.setAttribute("class", "hide")
  redirect()
  //initialsinput.classList.remove("hide")
}

function redirect () {
  return window.location = "./highscores.html"
}

function submitinitials() {
  initialsinput.addEventListener()
  //initialsinput.setAttribute("type", "submit")
}

function checksanswer() {
  console.log(this.dataset.val)
  if (this.dataset.val === questions[currentquestion].answer) {
    currentquestion++
  } else {
    seconds = seconds - 10
    if (seconds < 0) {
      seconds === 0
    }
  }
  if (seconds <= 0 || currentquestion === questions.length) {
    endgame()
  } else {
    showquestion()
  } 
}

function showquestion() {
  question.textContent = questions[currentquestion].question 
  answers.textContent = ""
  for (let index = 0; index < questions[currentquestion].choices.length; index++) {
    var li = document.createElement("li")
    li.textContent = questions[currentquestion].choices[index]
    li.setAttribute("data-val", questions[currentquestion].choices[index])
    li.addEventListener("click", checksanswer)
    answers.appendChild(li)
  }
}

function startquiz() {
  countdown()
  showquestion()
}

//this is the timer function. leave it alone except to move it to the top right corner
function countdown() {
  function tick() {
      var counter = document.getElementById("countdown");
      seconds--;
      counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      }
  }
  tick();
}

startbutton.addEventListener("click", startquiz)


function results() {
  var button = document.getElementById("button2")
  button.addEventListener("click", save)
  display()
}

function save() {
  var value = document.getElementById("initials").value
  sessionStorage.setItem(initials)
  display()
}

function display() {
  var display_data = document.getElementById("display_data")
  display_data.innerHTML = "initials"
  for (var i = 0; i < sessionStorage.length; i++) {
    var a = sessionStorage.initials(i)
    var b = sessionStorage.getItem(a)
  }
}

window.addEventListener("load", results)