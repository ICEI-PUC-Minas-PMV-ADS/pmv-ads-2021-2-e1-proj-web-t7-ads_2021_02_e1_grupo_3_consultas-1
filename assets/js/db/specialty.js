import specialties from './static/health/specialties.js';

const specialty = {
    listSpecialties: (qs = '') => {
        if (qs.length > 0) {
            return specialties.filter(specialty => {
                return specialty.name.toLowerCase().startsWith(qs);
            })
        }
        return specialties;
    },
    getSpecialty: id => {
        id = parseInt(id);
        let specialty = specialties.filter(specialty => {
            return specialty.id === id;
        });
        return specialty[0] ?? null;
    }
};

export default specialty;
