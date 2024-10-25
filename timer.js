// Timer Variables
let countdown;
let isPaused = false;
let remainingTime = 0;

// Select elements from DOM
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const setMinutesInput = document.getElementById('set-minutes');
const setSecondsInput = document.getElementById('set-seconds');
const setTimerButton = document.getElementById('set-timer-btn');

// Function to format time with leading zeros
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Function to display time
function displayTime(minutes, seconds) {
    minutesDisplay.textContent = formatTimeUnit(minutes);
    secondsDisplay.textContent = formatTimeUnit(seconds);
}

// Set timer based on user input
function setTimer() {
    let minutes = parseInt(setMinutesInput.value) || 0;
    let seconds = parseInt(setSecondsInput.value) || 0;
    
    // Calculate total time in seconds
    remainingTime = minutes * 60 + seconds;
    
    displayTime(minutes, seconds);
}

// Start the timer
function startTimer() {
    if (!isPaused) {
        const startTime = Date.now();
        const endTime = startTime + remainingTime * 1000;

        countdown = setInterval(() => {
            remainingTime = Math.round((endTime - Date.now()) / 1000);

            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;

            if (remainingTime <= 0) {
                clearInterval(countdown);
                displayTime(0, 0);
                alert('Time is up!');
            } else {
                displayTime(minutes, seconds);
            }
        }, 1000);
    } else {
        isPaused = false;
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(countdown);
    isPaused = true;
}

// Reset the timer
function resetTimer() {
    clearInterval(countdown);
    remainingTime = 0;
    isPaused = false;
    displayTime(0, 0);
    setMinutesInput.value = '';
    setSecondsInput.value = '';
}

// Event Listeners
setTimerButton.addEventListener('click', setTimer);
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
