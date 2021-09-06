import { formatError } from "./common.js";
import { playHustyBaDumTss, playPercussion } from "./audio.js"

const numberTime = document.getElementById('userTime');
const startButton = document.getElementById('startClick');
const stopButton = document.getElementById('stopClick');
const resultElement = document.getElementById('timer-result');
startButton.addEventListener('click', startTime);
stopButton.addEventListener('click', stopTime);

let interval;
let started = false;

function startTime(event) {
    resultElement.innerHTML = '';

    if (!numberTime.value) {
        resultElement.innerHTML = formatError('Заполните поле');
        return;
    }

    let value = +numberTime.value;

    if (value <= 0) {
        resultElement.innerHTML = formatError('Значение должно быть больше 0');
        return;
    }

    stopInterval();

    interval = setInterval(() => {
        let intervalValue = +numberTime.value;
        intervalValue = intervalValue - 1;
        numberTime.value = intervalValue;

        if (intervalValue > 0 && intervalValue <= 3) {
            playPercussion();
        }

        if (intervalValue === 0) {
            stopInterval()
            playHustyBaDumTss()
        }
    }, 1000);
    started = true;

}

function stopTime(event) {
    if (!started) {
        resultElement.innerHTML = formatError('Таймер должен быть запущен');
        return;
    }

    stopInterval()
}

function stopInterval() {
    clearInterval(interval);
    started = false;
}