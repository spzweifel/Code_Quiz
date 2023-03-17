//this is the timer function. leave it alone except to move it to the top right corner
function countdown() {
 
  var seconds = 60;
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

countdown();