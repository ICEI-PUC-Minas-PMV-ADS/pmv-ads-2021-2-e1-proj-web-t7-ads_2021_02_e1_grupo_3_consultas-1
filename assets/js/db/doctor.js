import defaultDoctor from './static/bootstrap/defaultDoctors.js';
import idb from './idb.js';

const doctor = {
    listDoctors: async (specialtyId = 0) => {
        specialtyId = Number(specialtyId);
        const store = await idb.getStore('doctors');
        return new Promise(async (resolve, reject) => {
            try {
                let doctorsRequest = !specialtyId ? store.getAll() : store.index('specialty').getAll(specialtyId);
                doctorsRequest.onerror = event => reject(event);
                doctorsRequest.onsuccess = async event => {
                    let doctors = event.target.result;
                    await Promise.all(doctors.map(async doctor => {
                        doctor.clinic = await idb.getItem('users', doctor.clinicId);
                    }));
                    return resolve(doctors);
                };
            } catch (e) {
                reject();
            }
        });
    },
    getDoctor: async id => {
        let doctor = await idb.getItem('doctors', Number(id));
        if (!doctor) {
            return null;
        }
        doctor.clinic = await idb.getItem('users', doctor.clinicId);
        doctor.schedule = await idb.getAllItemsFromIndex('schedules', 'doctor', doctor.id);
        return doctor;
    }
};

const createSchema = dbInstance => {
    let doctorStore = dbInstance.createObjectStore('doctors', {keyPath: 'id', autoIncrement: true});
    doctorStore.createIndex('specialty', 'specialtyId', {unique: false});
    doctorStore.createIndex('gender', 'gender', {unique: false})
    let scheduleStore = dbInstance.createObjectStore('schedules', {keyPath: 'id', autoIncrement: true});
    scheduleStore.createIndex('date', 'date', {unique: false});
    scheduleStore.createIndex('doctor', 'doctorId', {unique: false});
    defaultDoctor().map(({doctor, doctorSchedule}) => {
        let doctorRequest = doctorStore.add(doctor);
        doctorRequest.onsuccess = event => {
            let doctorId = event.target.result;
            doctorSchedule.map(schedule => {
               scheduleStore.add({doctorId, ...schedule});
            });
        }
    });
};

export const doctorBootstrap = dbInstance => {
    if (!(dbInstance instanceof IDBDatabase)) {
        return;
    }
    try {
        dbInstance.deleteObjectStore('doctors');
        dbInstance.deleteObjectStore('schedules');
        return createSchema(dbInstance);
    } catch (e) {
        return createSchema(dbInstance);
    }
};

export default doctor;
