const switchingDate = document.getElementById('buttonDate');
const switchingTimer = document.getElementById('buttonTimer');
const switchingDataForm = document.getElementById('calcForm');
const switchingTimerForm = document.getElementById('timerForm');
switchingDate.addEventListener('click', showCalc);
switchingTimer.addEventListener('click', showTimer);

function showCalc() {
    switchingDataForm.classList.remove('hide');
    switchingTimerForm.classList.add('hide');
}

function showTimer() {
    switchingDataForm.classList.add('hide');
    switchingTimerForm.classList.remove('hide');
}