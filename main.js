let pomodoroBtn = document.querySelector("#pomodoro");
let shortBreakBtn = document.querySelector("#shortBreak");
let longBreakBtn = document.querySelector("#longBreak");
let startBtn = document.querySelector("#startBtn");
let timer = document.querySelector("#pomodoroTimer");
let restartTimerBtn = document.querySelector("#restartIcon");

let secondsToRun;
let minutesToRun;

let countdown;
let running = false;

function pomodoroTimerSetup () {
    pomodoroBtn.classList.add("button--active");
    shortBreakBtn.classList.remove("button--active");
    longBreakBtn.classList.remove("button--active");    
      
    timer.textContent = "25:00";
    minutesToRun = 25;
    secondsToRun = minutesToRun * 60;

}

function shortBreakTimerSetup () {
    pomodoroBtn.classList.remove("button--active");
    shortBreakBtn.classList.add("button--active");
    longBreakBtn.classList.remove("button--active");
    
    timer.textContent = "05:00";
    minutesToRun = 5;
    secondsToRun = minutesToRun * 60;

}

function longBreakTimerSetup () {
    pomodoroBtn.classList.remove("button--active");
    shortBreakBtn.classList.remove("button--active");
    longBreakBtn.classList.add("button--active");
    
    timer.textContent = "10:00";
    minutesToRun = 10;
    secondsToRun = minutesToRun * 60;
} 

restartTimerBtn.addEventListener("click", function() {
    restartTimerBtn.classList.add("rotateArrowAnimation");
    setTimeout(function() {
        restartTimerBtn.classList.remove("rotateArrowAnimation");
      }, 1000);
  });

function updateTimer(minutes, seconds) {    
const time = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
timer.textContent = time;
minutesToRun = minutes;
secondsToRun = seconds;
}

function startTimer(minutesLeft, secondsLeft) {
    if (secondsToRun) {
      secondsLeft = secondsToRun;
    } else {
      secondsLeft = minutesLeft * 60;
    }
    
    countdown = setInterval(() => {
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;
  
      updateTimer(minutes, seconds); 
  
      secondsLeft--; 
  
      if (secondsLeft < 0) {
        clearInterval(countdown); 
        timer.textContent = "00:00";
        running = false;
        startBtn.textContent = "Start"; 
      }
    }, 1000);
  
    running = true;
    startBtn.textContent = "Pause"; 
  }


function stopTimer() {
    clearInterval(countdown);
    running = false;
    startBtn.textContent = "Start";
    secondsToRun = secondsToRun + minutesToRun * 60;
    minutesToRun = 0;
}

function start() {
    if (!minutesToRun) {
        minutesToRun = 25;
    }
    if (isNaN(secondsToRun) || secondsToRun < 0) {
        secondsToRun = 0;
    }
    startTimer(minutesToRun, secondsToRun);
}

function toggleTimer() {
    if (running) {
        stopTimer();
    } else {
        start();
    }
}
startBtn.addEventListener("click", toggleTimer);
