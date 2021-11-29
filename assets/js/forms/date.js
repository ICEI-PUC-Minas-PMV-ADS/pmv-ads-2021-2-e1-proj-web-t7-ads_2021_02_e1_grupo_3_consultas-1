import qs from '../helpers/qs.js';
import calendar from '../helpers/calendar.js';

let dateOffCanvas = document.getElementById('offcanvasDate');
let bsDateOffCanvas = new bootstrap.Offcanvas(dateOffCanvas);

let dateInput = document.querySelector('input[name=date]');
let dateInputTrigger = document.getElementById('date');

const parseDateToInput = date => {
    date = date.split('-');
    if (date.length !== 3) {
        return;
    }
    dateInputTrigger.value = date[2] + '/' + date[1] + '/' + date[0];
}

if (qs.get('date')) {
    parseDateToInput(qs.get('date'));
}

dateInputTrigger.addEventListener('focus', () => {
    bsDateOffCanvas.show();
});

const selectDate = (date) => {
    dateInput.value = date.toISOString().substring(0, 10);
    parseDateToInput(dateInput.value);
    bsDateOffCanvas.hide();
}
calendar('calendar-date', selectDate);
