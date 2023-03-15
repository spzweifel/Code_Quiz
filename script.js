var timeEl = document.querySelector(".timer");

var secondsLeft = 60;


//work on the timer check web APIs lesson 10
function countdown() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = "Times up!";
  }

  setTime();