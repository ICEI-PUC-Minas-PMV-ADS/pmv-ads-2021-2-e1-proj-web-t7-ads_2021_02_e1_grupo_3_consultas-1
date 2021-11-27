import qs from '../helpers/qs.js';
import calendar from '../helpers/calendar.js';

let dateOffCanvas = document.getElementById('offcanvasDate');
let bsDateOffCanvas = new bootstrap.Offcanvas(dateOffCanvas);

let dateInput = document.querySelector('input[name=date]');
let dateInputTrigger = document.getElementById('date');

if (qs.get('date')) {
    console.log(qs.get('date'));
}

dateInputTrigger.addEventListener('focus', () => {
    bsDateOffCanvas.show();
});

const selectDate = (date) => {
    console.log(date);
}
calendar('calendar-date', selectDate);
