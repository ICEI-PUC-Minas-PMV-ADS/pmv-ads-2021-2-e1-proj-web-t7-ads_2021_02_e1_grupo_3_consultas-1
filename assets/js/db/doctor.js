import db from './db.js';
import auth from './auth.js';
import defaultDoctor from './static/bootstrap/defaultDoctors.js';

const doctor = {
    registerDoctor: info => {
        let user = auth.registerUser({}, 'doctor');
    },
};

export const doctorBootstrap = () => {
    return defaultDoctor();
};

export default doctor;
