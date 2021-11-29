import {authBootstrap} from './auth.js';
import {doctorBootstrap} from './doctor.js';

let dbInstance;

const seeder = db => {
    authBootstrap(db);
    doctorBootstrap(db);
}

function openConnection() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('appoint-db', 5);
        request.onerror = event => reject(event);
        request.onupgradeneeded = event => seeder(event.target.result);
        request.onsuccess = event => {
            dbInstance = event.target.result;
            resolve(dbInstance);
        }
    })
}

const idb = {
    getInstance: async () => {
        if (dbInstance) {
            return dbInstance;
        }
        try {
            return await openConnection();
        } catch (e) {
            alert('Ocorreu um erro ao iniciar a conexão com o banco de dados.');
        }
    },
    getStore: async (name, operation = 'readonly') => {
        try {
            const instance = await idb.getInstance();
            const transaction = instance.transaction([name], operation);
            const objectStore = transaction.objectStore(name);
            if (!(objectStore instanceof IDBObjectStore)) {
                throw new Error();
            }
            return objectStore;
        } catch (e) {
            console.error(e);
        }
    },
    getItem: async (name, key) => {
        const store = await idb.getStore(name);
        return new Promise((resolve, reject) => {
            let itemRequest = store.get(key);
            itemRequest.onerror = event => reject(event);
            itemRequest.onsuccess = event => resolve(event.target.result);
        });
    },
    getItemFromIndex: async (name, index, key) => {
        const store = await idb.getStore(name);
        return new Promise((resolve, reject) => {
            let itemRequest = store.index(index).get(key);
            itemRequest.onerror = event => reject(event);
            itemRequest.onsuccess = event => resolve(event.target.result);
        });
    },
    getAllItemsFromIndex: async (name, index, key) => {
        const store = await idb.getStore(name);
        return new Promise((resolve, reject) => {
            let itemRequest = store.index(index).getAll(key);
            itemRequest.onerror = event => reject(event);
            itemRequest.onsuccess = event => resolve(event.target.result);
        });
    }
}

export default idb;
