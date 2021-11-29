import doctor from '../db/doctor.js';
import qs from '../helpers/qs.js';
import {redirectTo} from '../helpers/redirect.js';
import calendar from '../helpers/calendar.js';
import {getLocaleWeekDay, getLocaleMonth} from '../helpers/dates.js';

let doctorProfileElement = document.getElementById('doctorProfile');
let workingHoursElement = document.getElementById('doctorWorkingHours');

document.addEventListener('DOMContentLoaded', async () => {
    let profile = await doctor.getDoctor(qs.get('id'));
    if (!profile) {
        redirectTo('./busca.html');
    }
    doctorProfileElement.innerHTML = `<p class="card-text">
                                        <h4 class="text-primary mb-0">${profile.name}</h4>
                                        <small>CRM: ${profile.crm}</small>
                                        </p>
                                        <p class="card-text">
                                            <b class="d-block mb-2">${profile.clinic.billing.city}, ${profile.clinic.billing.state}</b>
                                            <i class="d-block mb-1">${profile.clinic.billing.address}, ${profile.clinic.billing.addressNumber}, ${profile.clinic.billing.neigh}, ${profile.clinic.billing.zipcode}</i>
                                            <i class="d-block">Tel: ${profile.clinic.phone}</i>
                                        </p>
                                        <div class="d-flex flex-row-reverse">
                                            <a href="perfil-medico.html?id=${profile.id}">
                                                <button class="btn btn-primary" type="button">Ver perfil</button>
                                            </a>
                                        </div>`;
    const getSchedule = (date) => {
        document.getElementById('calendarDate').innerText = `${date.getDate()} de ${getLocaleMonth(date.getMonth()).toLowerCase()} de ${date.getFullYear()}`;
        document.getElementById('calendarWeekDay').innerText = getLocaleWeekDay(date.getDay());
        let workingHours = profile.schedule.filter(schedule => {
            return schedule.date === date.toISOString().substring(0, 10)
        });
        workingHoursElement.innerHTML = '';
        if (!workingHours.length) {
            return workingHoursElement.innerHTML = '<span class="text-muted">Nenhum horário disponível para este dia.</span>'
        }
        workingHours = workingHours[0];
        workingHours.schedule.map(hour => {
            let hourElement = document.createElement('div');
            hourElement.classList.add('col-3');
            hourElement.innerHTML = `<button type="button" class="btn btn-primary w-100">${hour.hour}</button>`
            workingHoursElement.insertAdjacentElement('beforeend', hourElement);
        })
    }
    calendar('calendar', getSchedule, getSchedule);
});
