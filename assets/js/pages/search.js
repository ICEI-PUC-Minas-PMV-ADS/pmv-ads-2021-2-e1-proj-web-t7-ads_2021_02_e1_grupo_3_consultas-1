import doctor from '../db/doctor.js';
import specialty from '../db/specialty.js';
import qs from '../helpers/qs.js';

let doctorsElement = document.getElementById('doctors');

document.addEventListener('DOMContentLoaded', async () => {
    doctorsElement.innerHTML = '';
    const doctors = await doctor.listDoctors(qs.get('specialty'));
    doctors.map(doctor => {
        let doctorCard = document.createElement('a');
        doctorCard.classList.add('card', 'rounded-10', 'mb-3');
        doctorCard.setAttribute('href', `./perfil-medico.html?id=${doctor.id}`);
        doctorCard.innerHTML = `<div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-3 pe-sm-0 pe-md-4 my-auto">
                                <img class="img-fluid rounded-5 mx-auto mx-md-0 d-block" src="./media/profile/default.png">
                            </div>
                            <div class="col-12 col-md-9">
                                <p class="card-text">
                                    <h4 class="text-primary mb-0">${doctor.name}</h4>
                                    <small>${specialty.getSpecialty(doctor.specialtyId).name} - CRM: ${doctor.crm}</small>
                                </p>
                                <p class="card-text">
                                    <b class="d-block mb-2">${doctor.clinic.billing.city}, ${doctor.clinic.billing.state}</b>
                                    <i class="d-block mb-1">${doctor.clinic.billing.address}, ${doctor.clinic.billing.addressNumber}, ${doctor.clinic.billing.neigh}, ${doctor.clinic.billing.zipcode}</i>
                                </p>
                                <div class="d-flex flex-row-reverse">
                                    <button class="btn btn-primary" type="button">Agendar</button>
                                </div>
                            </div>
                        </div>
                    </div>`
        doctorsElement.insertAdjacentElement('beforeend', doctorCard);
    })
});
