// Play Sounds
function playSound(sound) {
    stopAllSounds();

    const soundElement = document.getElementById(`${sound}-sound`);
    if (soundElement) {
        soundElement.play();
    }
}

// Stop all sounds when a new one starts
function stopAllSounds() {
    const sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => sound.pause());
    sounds.forEach(sound => sound.currentTime = 0);
}

// Meditation Timer
function startTimer(minutes) {
    let timeLeft = minutes * 60;
    const timerElement = document.getElementById('timer');

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerElement.textContent = 'Meditation Complete';
        }

        timeLeft--;
    }, 1000);
}
