document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let isRunning = false;
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const timeDisplay = document.querySelector('.time');
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const resetButton = document.getElementById('reset');

    function updateDisplay() {
        timeDisplay.textContent = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${formatTime(milliseconds, 3)}`;
    }

    function formatTime(value, length = 2) {
        return value.toString().padStart(length, '0');
    }

    function startTimer() 
    {
        if (!isRunning) 
        {
            timer = setInterval(function () 
            {
                milliseconds += 10;

                if (milliseconds === 1000) 
                {
                    milliseconds = 0;
                    seconds++;

                    if (seconds === 60) 
                    {
                        seconds = 0;
                        minutes++;

                        if (minutes === 60) 
                        {
                            minutes = 0;
                            hours++;
                        }
                    }
                }
                updateDisplay();
            }, 10);

            isRunning = true;
        }
    }

    function pauseTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        milliseconds = seconds = minutes = hours = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
});