import db from './db.js';
import idb from './idb.js';
import defaultUsers from './static/bootstrap/defaultUsers.js';

const auth = {
    registeredUsers: () => {
        return db.get('registeredUsers', true);
    },
    userExists: async (email, document) => {
        const store = await idb.getStore('users');
        return new Promise((resolve, reject) => {
            try {
                let emailRequest = store.index('email').get(email);
                emailRequest.onerror = () => reject();
                emailRequest.onsuccess = event => {
                    if (event.target.result) {
                        resolve(event.target.result);
                    }
                    let documentRequest = store.index('document').get(document);
                    documentRequest.onerror = () => reject();
                    documentRequest.onsuccess = event => resolve(event.target.result);
                };
            } catch (e) {
                reject();
            }
        });
    },
    registerUser: async (user, role = 'patient') => {
        const store = await idb.getStore('users', 'readwrite');
        return new Promise((resolve, reject) => {
            try {
                let userRequest = store.add({...user, picture: null, role});
                userRequest.onerror = () => reject();
                userRequest.onsuccess = event => resolve(event.target.result);
            } catch (e) {
                reject();
            }
        });
    },
    getUser: async (id = null) => {
        id = id ?? db.get('loggedUser');
        if (!id) {
            return null;
        }
        const store = await idb.getStore('users');
        return new Promise((resolve) => {
            try {
                let userRequest = store.get(Number(id));
                userRequest.onerror = () => resolve(null);
                userRequest.onsuccess = event => resolve(event.target.result);
            } catch (e) {
                resolve(null);
            }
        });
    },
    validateUser: async (email, password) => {
        const store = await idb.getStore('users');
        return new Promise((resolve, reject) => {
            try {
                let userRequest = store.index('email').get(email);
                userRequest.onerror = () => resolve(false);
                userRequest.onsuccess = event => {
                    if (!event.target.result) {
                        resolve(false);
                    }
                    if (event.target.result.password !== password) {
                        resolve(false);
                    }
                    resolve(event.target.result);
                };
            } catch (e) {
                reject();
            }
        });
    },
    signIn: ({id}) => {
        db.set('loggedUser', id);
    },
    signOut: () => {
        db.remove('loggedUser');
    }
};

const createSchema = dbInstance => {
    let userStore = dbInstance.createObjectStore('users', {keyPath: 'id', autoIncrement: true});
    userStore.createIndex('email', 'email', {unique: true});
    userStore.createIndex('document', 'document', {unique: true});
    defaultUsers.map(user => userStore.add(user));
}

export const authBootstrap = dbInstance => {
    if (!(dbInstance instanceof IDBDatabase)) {
        return;
    }
    try {
        dbInstance.deleteObjectStore('users');
        return createSchema(dbInstance);
    } catch (e) {
        return createSchema(dbInstance);
    }
};

export default auth;
