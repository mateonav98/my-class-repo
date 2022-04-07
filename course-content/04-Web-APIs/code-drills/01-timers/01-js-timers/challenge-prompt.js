// Practice with timers

// const can be used interchangeably with var 
// let is used when you think the value will change in the future 



// const timer = startButton.addEventListener(click, "startButton")

// Create a timer that creates an alert that says "Question 1" after 5 seconds

// function myTimer() {

//   var questionOne = alert("Question1");
//   setInterval(timer, 5000);
//   console.log(questionOne);
// }

const startButton = document.getElementById('startButton');
var currentIndex = 0;
var timerId;
var time = 60;
var timerEl = document.getElementById("time");

function start() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    console.log(timerId)
}

startButton.onclick = start()

function clockTick() {
    time--;
    timerEl.textContent = time;
}

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds



// Remove the timer you just made for Question 2



console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds



// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds



console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1



console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"


