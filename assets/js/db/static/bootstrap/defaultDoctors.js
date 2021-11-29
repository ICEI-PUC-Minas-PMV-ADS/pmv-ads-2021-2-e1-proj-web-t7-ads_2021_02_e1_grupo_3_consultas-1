import specialties from '../health/specialties.js';
import {listHours} from '../../../helpers/dates.js';

const lastNames = [
    'Almeida',
    'Alves',
    'Andrade',
    'Barbosa',
    'Barros',
    'Campos',
    'Cavalcante',
    'Silva',
    'Torres',
    'Medeiros',
    'Mendes',
    'Melo',
    'Ribeiro',
    'Santos',
    'Santana',
    'Sarmento',
    'Souza',
    'Teixeira',
    'Vieira'
];

const firstNamesFemale = [
    'Ana',
    'Beatriz',
    'Carla',
    'Denise',
    'Estela',
    'Fátima',
    'Gabriela',
    'Helena',
    'Inês',
    'Júlia',
    'Karen',
    'Luana',
    'Márcia',
    'Natália',
    'Olívia',
    'Paula',
    'Renata',
    'Sabrina',
    'Teresa',
    'Úrsula',
    'Vanessa'
];

const firstNamesMale = [
    'André',
    'Breno',
    'Carlos',
    'Davi',
    'Expedito',
    'Fábio',
    'Gustavo',
    'Herculano',
    'Igor',
    'Jonas',
    'Kefferson',
    'Lucas',
    'Marcelo',
    'Natanael',
    'Omar',
    'Pedro',
    'Rodrigo',
    'Saulo',
    'Tales',
    'Umberto',
    'Vinícius'
];

const genders = [
    'f',
    'm'
];

const generateDoctor = (specialtyId) => {
    let doctorGender = genders[Math.floor(Math.random() * genders.length)];
    let doctorFirstName;
    if (doctorGender === 'f') {
        doctorFirstName = firstNamesFemale[Math.floor(Math.random() * firstNamesFemale.length)];
    } else {
        doctorFirstName = firstNamesMale[Math.floor(Math.random() * firstNamesMale.length)];
    }
    let doctorLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let doctor = {
        "name": doctorFirstName + ' ' + doctorLastName,
        "crm": "MG " + Math.floor(Math.random() * (9999 - 1000) + 1000),
        "picture": null,
        "gender": doctorGender,
        "specialtyId": specialtyId,
        "clinicId": 2,
        "bio": {
            "rqe": String(Math.floor(Math.random() * (9999 - 1000) + 1000)),
            "degree": "PUC-MG - Mestrado",
            "bio": "Lorem..."
        },
    };
    let doctorSchedule = [];
    for (let days = 0; days <= 30; days++) {
        let today = new Date();
        let day = new Date(today.setDate(today.getDate() + days));
        // Médicos têm 50% de chance de estarem no turno da manhã ou da tarde.
        let [startingShift, endingShift] = Math.random() < 0.5 ? ['05:00', '11:59'] : ['12:00', '17:59'];
        if (Math.random() < 0.3) {
            // E uma chance de 30% para terem um turno norturno.
            startingShift = '18:00';
            endingShift = '23:59';
        }
        if (day.getDay() === 0 && (Math.random() < 0.8)) {
            // Se é um domingo, o médico vai ter 80% de chance de não trabalhar.
            continue;
        }
        let schedule = [];
        // Médicos têm 10% de chance de terem horários de hora em hora, o restante de 30 em 30 minutos.
        listHours(startingShift, endingShift, Math.random() < 0.1 ? 60 : 30).map(hour => schedule.push({hour, appointmentId: null}));
        doctorSchedule.push({
            "date": day.toISOString().substring(0, 10),
            "schedule": schedule
        });
    }
    return {
        doctor,
        doctorSchedule
    }
};

const defaultDoctors = () => {
    const doctors = [];
    specialties.map(specialty => {
        for (let i = 0; i <= 5; i++) {
            doctors.push(generateDoctor(specialty.id));
        }
    })
    return doctors;
};

export default defaultDoctors;
