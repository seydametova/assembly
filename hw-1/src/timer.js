const numberTime = document.getElementById('userTime');
const startButton = document.getElementById('startClick');
const stopButton = document.getElementById('stopClick');
startButton.addEventListener('click', startTime);
stopButton.addEventListener('click', stopTime);

let interval;

function startTime(event) {
    let value = +numberTime.value;

    if (value <= 0) {
        return;
    }

    clearInterval(interval);

    interval = setInterval(() => {
        let intervalValue = +numberTime.value;
        intervalValue = intervalValue - 1;
        numberTime.value = intervalValue;

        if (intervalValue === 0) {
            clearInterval(interval);
        }
    }, 1000);


}

function stopTime(event) {
    clearInterval(interval);
}