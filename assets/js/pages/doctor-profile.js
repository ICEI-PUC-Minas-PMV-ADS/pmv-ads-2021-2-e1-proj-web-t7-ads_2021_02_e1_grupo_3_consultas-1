import doctor from '../db/doctor.js';
import qs from '../helpers/qs.js';
import {redirectTo} from '../helpers/redirect.js';

let doctorProfileElement = document.getElementById('doctorProfile');
let doctorBioElement = document.getElementById('doctorBio');

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
                                            <a href="perfil-medico-agenda.html?id=${profile.id}">
                                                <button class="btn btn-primary" type="button">Consultar a agenda</button>
                                            </a>
                                        </div>`;
    doctorBioElement.innerHTML = `<h3 class="text-primary">Formação</h3>
                    <p>Graduação: ${profile.bio.degree}</p>
                    <p>RQE: ${profile.bio.rqe}</p>

                    <h3 class="text-primary">Experiência</h3>
                    <p>${profile.bio.bio}</p>`;
});
