var timeIsRunning = false;
var timeOnClock = 0;

document.getElementById('start').addEventListener('click', function (){
  timeIsRunning = true;
  incrementTime();
});

var incrementTime = function(){
  if (timeIsRunning){
  setTimeout(function (){
    timeOnClock += 0.1;
    update_time();
    incrementTime();
  }, 100);
  }
};

var updateTime = function () {
  document.getElementById("currentTime").innerHTML = timeOnClock;
};
