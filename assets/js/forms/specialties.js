import specialty from '../db/specialty.js';
import qs from '../helpers/qs.js';

let specialtiesElement = document.getElementById('specialties');
let specialtiesOffCanvas = document.getElementById('offcanvasSpecialty');
let bsSpecialtiesOffCanvas = new bootstrap.Offcanvas(specialtiesOffCanvas);

let specialtyInput = document.querySelector('input[name=specialty]');
let specialtiesSearchInputTrigger = document.getElementById('specialty');
let specialtiesSearchInput = specialtiesOffCanvas.querySelector('.offcanvas-header > input');

if (qs.get('specialty')) {
    let activeSpecialty = specialty.getSpecialty(qs.get('specialty'));
    specialtiesSearchInputTrigger.value = activeSpecialty ? activeSpecialty.name : '';
    specialtyInput.value = activeSpecialty ? activeSpecialty.id : 0;
}

specialtiesSearchInputTrigger.addEventListener('focus', () => {
    bsSpecialtiesOffCanvas.show();
});

specialtiesOffCanvas.addEventListener('show.bs.offcanvas', () => {
    specialtiesSearchInput.value = specialtiesSearchInputTrigger.value;
    insertSpecialties(specialtiesSearchInput.value.toLowerCase());
});

specialtiesOffCanvas.addEventListener('shown.bs.offcanvas', () => {
    specialtiesSearchInput.focus();
});

function insertSpecialties(qs = '') {
    specialtiesElement.innerHTML = '';
    specialty.listSpecialties(qs ).map(item => {
        let specialtyElement = document.createElement('a');
        specialtyElement.setAttribute('href', '#');
        specialtyElement.dataset.specialty = item.id;
        specialtyElement.innerHTML = `<li class="mb-2">${item.name}</li>`;
        specialtiesElement.insertAdjacentElement('beforeend', specialtyElement);
        specialtyElement.addEventListener('click', e => {
            specialtyInput.value = e.target.parentElement.dataset.specialty;
            specialtiesSearchInputTrigger.value = e.target.innerText;
            bsSpecialtiesOffCanvas.hide();
        })
    })
}

specialtiesSearchInput.addEventListener('keyup', e => {
    insertSpecialties(e.target.value.toLowerCase());
    if (e.target.value.trim() === '') {
        specialtyInput.value = 0;
        specialtiesSearchInputTrigger.value = '';
    }
});
