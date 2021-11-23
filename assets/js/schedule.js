import {getLocaleWeekDay, getLocaleMonth} from './helpers/dates.js';

document.addEventListener('DOMContentLoaded', function() {
    const handleDateClick = info => {
        let today = new Date().setHours(0, 0, 0);
        if (info.date.getTime() < today) {
            return;
        }
        calendar.gotoDate(info.date);
        getSchedule(info.date);
    };
    const getSchedule = (date = null) => {
        if (!date || !date instanceof Date) {
            date = new Date();
        }
        document.getElementById('calendarDate').innerText = `${date.getDate()} de ${getLocaleMonth(date.getMonth()).toLowerCase()} de ${date.getFullYear()}`;
        document.getElementById('calendarWeekDay').innerText = getLocaleWeekDay(date.getDay());
    }
    let calendarElement = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'title', // will normally be on the left. if RTL, will be on the right
            center: '',
            end: 'prev today next' // will normally be on the right. if RTL, will be on the left
        },
        locale: 'pt-br',
        dateClick: handleDateClick,
        dayCellClassNames: ({isPast}) => {
            return isPast ? 'disabled' : '';
        },
    });
    calendar.render();
    getSchedule();
});
