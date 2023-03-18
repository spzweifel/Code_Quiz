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
      "false",
      "false",
      "false"
    ],
    answer: "A true or false statement"
  }
  ,
  {
    question: "What is an attribute?",
    choices: [
      "true",
      "false",
      "false",
      "false"
    ],
    answer: "true"
  }
  ,
  // {
  //   question: "What is pseudocode?",
  //   choices: [
  //     "false",
  //     "false",
  //     "true",
  //     "false"
  //   ],
  //   answer: "true"
  // }
  // ,
  // {
  //   question: "What is an attribute?",
  //   choices: [
  //     "false",
  //     "false",
  //     "false",
  //     "true"
  //   ],
  //   answer: "true"
  // }
];

function endgame() {
  question.setAttribute("class", "hide")
  initialsinput.classList.remove("hide")
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