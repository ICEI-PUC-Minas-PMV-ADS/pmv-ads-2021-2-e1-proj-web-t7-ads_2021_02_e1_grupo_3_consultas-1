import db from './db.js';
import {authBootstrap} from './auth.js';
import {doctorBootstrap} from './doctor.js';

const APP_VERSION = '0.0.2';

const seeder = {
    seed: () => {
        if (db.get('APP_VERSION') === APP_VERSION) {
            return;
        }
        db.clearAll();
        db.set('APP_VERSION', APP_VERSION);
        authBootstrap();
        doctorBootstrap();
    },
};

export default seeder;
