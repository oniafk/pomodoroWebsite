let pomodoroBtn = document.querySelector("#pomodoro");
let shortBreakBtn = document.querySelector("#shortBreak");
let longBreakBtn = document.querySelector("#longBreak");
let startBtn = document.querySelector("#startBtn");
let timer = document.querySelector("#timer");
let restartTimerBtn = document.querySelector("#restartIcon");

let pomodoroTimer;

function pomodoroTimerSetup () {
    pomodoroBtn.classList.add("button--active");
    shortBreakBtn.classList.remove("button--active");
    longBreakBtn.classList.remove("button--active");
}

function shortBreakTimerSetup () {
    pomodoroBtn.classList.remove("button--active");
    shortBreakBtn.classList.add("button--active");
    longBreakBtn.classList.remove("button--active");
}

function longBreakTimerSetup () {
    pomodoroBtn.classList.remove("button--active");
    shortBreakBtn.classList.remove("button--active");
    longBreakBtn.classList.add("button--active");
}   

function stratBtnSetup () {
    startBtn.textContent = (startBtn.textContent === "Start") ? "Pause" : "Start";
}