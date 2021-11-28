import specialties from '../health/specialties.js';

const lastNames = [
    'Cunha',
    'Silva',
    'Barros',
    'Torres',
    'Melo',
    'Cavalcante',
    'Sarmento'
];

const firstNamesFemale = [
    'Ana',
    'Beatriz',
    'Carla',
    'Denise',
    'Estela',
    'Fátima',
    'Gabriela',
    'Helena'
];

const firstNamesMale = [
    'André',
    'Breno',
    'Carlos',
    'Davi',
    'Expedito',
    'Fábio',
    'Gustavo',
    'Herculano'
];

const genders = [
    'f',
    'm',
    'o'
];

const generateDoctor = (id, specialtyId) => {
    let doctorGender = genders[Math.floor(Math.random() * genders.length)];
    let doctorFirstName;
    if (doctorGender === 'f') {
        doctorFirstName = firstNamesFemale[Math.floor(Math.random() * firstNamesFemale.length)];
    } else if (doctorGender === 'm') {
        doctorFirstName = firstNamesMale[Math.floor(Math.random() * firstNamesMale.length)];
    } else {
        let allFirstNames = [...firstNamesFemale, ...firstNamesMale];
        doctorFirstName = allFirstNames[Math.floor(Math.random() * allFirstNames.length)];

    }
    let doctorLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let doctorUser = {
        "id": id,
        "name": doctorFirstName + ' ' + doctorLastName,
        "document": "MG " + Math.floor(Math.random() * (9999 - 1000) + 1000),
        "role": "doctor",
        "picture": null,
        "phone": "319" + Math.floor(Math.random() * (99999999 - 10000000) + 10000000),
        "email": "medico-" + id + "@teste.com",
        "password": "299fbb455c42239c86d2ee3b15403ed1b468259ecaedf0c3527451e1f0d63d59"
    };
    let doctorClinic = {
        "clinicId": 2,
        "doctorId": id,
        "gender": doctorGender,
        "specialtyId": specialtyId
    };
    let doctorBio = {
        "doctorId": id,
        "rqe": String(Math.floor(Math.random() * (9999 - 1000) + 1000)),
        "degree": "PUC-MG - Mestrado",
        "bio": "Lorem..."
    };
    let doctorSchedule = [];
    for (let days = 0; days <= 30; days++) {
        let today = new Date();
        let schedule = [];
        let aux = 8
        for (let hour = 0; hour <= 20; hour++){
            if(hour%2 === 0){
                schedule.push({
                    'hour':`${aux}:00`,
                    'appointmentId':null
                });
            }else{
                schedule.push({
                    'hour':`${aux}:30`,
                    'appointmentId':null
                });
                aux++;
            }
        };

            // {
            //     "hour": "20:00",
            //     "appointmentId": null
            // },
            // {
            //     "hour": "11:00",
            //     "appointmentId": 1
            // }
            doctorSchedule.push({
                "doctorId": id,
                "date": new Date(today.setDate(today.getDate() + days)).toISOString().substring(0, 10),
                "schedule": schedule
            })
    }
    return {
        doctorUser,
        doctorClinic,
        doctorBio,
        doctorSchedule
    }
};

const defaultDoctors = () => {
    const doctors = [];
    let doctorId = 3;
    specialties.map(specialty => {
        for (let i = 0; i < 2; i++) {
            doctors.push(generateDoctor(doctorId, specialty.id));
            doctorId++;
        }
    })
    return doctors;
};

export default defaultDoctors;
