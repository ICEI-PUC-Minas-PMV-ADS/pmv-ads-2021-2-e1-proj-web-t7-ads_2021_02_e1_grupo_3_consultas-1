import calendar from './helpers/calendar.js';
import {getLocaleWeekDay, getLocaleMonth} from './helpers/dates.js';

document.addEventListener('DOMContentLoaded', () => {
    const getSchedule = (date) => {
        document.getElementById('calendarDate').innerText = `${date.getDate()} de ${getLocaleMonth(date.getMonth()).toLowerCase()} de ${date.getFullYear()}`;
        document.getElementById('calendarWeekDay').innerText = getLocaleWeekDay(date.getDay());
    }
    calendar('calendar', getSchedule, getSchedule);
});
