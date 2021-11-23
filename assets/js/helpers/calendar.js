const calendar = (elementId, onDateChange) => {
    let today = new Date().setHours(0, 0, 0, 0);
    let currentDate = today;
    const handleDateClick = info => {
        if (info.date.getTime() < today) {
            return;
        }
        currentDate = info.date.getTime();
        calendar.gotoDate(info.date);
        if (!onDateChange) {
            return;
        }
        onDateChange(info.date);
    };
    let calendarElement = document.getElementById(elementId);
    let calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'prev', // will normally be on the left. if RTL, will be on the right
            center: 'title',
            end: 'next' // will normally be on the right. if RTL, will be on the left
        },
        locale: 'pt-br',
        dateClick: handleDateClick,
        dayCellClassNames: ({date, isPast}) => {
            let classes = [];
            if (isPast) {
                classes.push('disabled');
            }
            if (date.getTime() === currentDate) {
                classes.push('selected');
            }
            return classes;
        },
    });
    calendar.render();
    onDateChange(new Date());
}

export default calendar;
