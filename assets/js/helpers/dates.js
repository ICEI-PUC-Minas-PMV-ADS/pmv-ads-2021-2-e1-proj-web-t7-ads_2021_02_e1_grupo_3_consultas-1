export const getLocaleWeekDay = (weekDay = 0) => {
    switch (weekDay) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            return '-';
    }
}

export const getLocaleMonth = (month = 0) => {
    switch (month) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return '-';
    }
}

export const getParsedHourMinute = timestamp => {
    let time = new Date(timestamp);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
}

const getHourMinutePair = time => {
    time = String(time);
    let timeMinute = '00';
    let splitTime = time.split(':');
    if (splitTime.length > 1) {
        time = splitTime[0];
        timeMinute = splitTime[1];
    }
    return [
        parseInt(time),
        parseInt(timeMinute)
    ];
}

export const listHours = (firstHour, lastHour, minuteSpacing = 60) => {
    const [startingHour, startingMinute] = getHourMinutePair(firstHour);
    let startingTime = new Date().setHours(startingHour, startingMinute, 0, 0);
    const [endingHour, endingMinute] = getHourMinutePair(lastHour);
    let endingTime = new Date().setHours(endingHour, endingMinute, 0, 0);
    let hours = [getParsedHourMinute(startingTime)];
    let auxTime = startingTime;
    while (auxTime + (minuteSpacing * 60 * 1000) <= endingTime) {
        auxTime += (minuteSpacing * 60 * 1000);
        hours.push(getParsedHourMinute(auxTime));
    }
    return hours;
}
