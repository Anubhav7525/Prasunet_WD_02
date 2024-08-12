let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = '00:00:00';
    laps.innerHTML = '';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function recordLap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.innerHTML = display.innerHTML;
        laps.appendChild(lapTime);
    }
}
