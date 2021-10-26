import db from './db.js';

const auth = {
    registeredUsers: () => {
        return db.get('registeredUsers', true) ?? db.set('registeredUsers', [], true);
    },
    userExists: (email, doc) => {
        let filteredUsers = auth.registeredUsers().filter((user) => {
            return user.email === email || user.document === doc;
        });
        return !!filteredUsers.length;
    },
    registerUser: (user, role = 'patient') => {
        let registeredUsers = auth.registeredUsers();
        let newUser = Object.assign({id: registeredUsers.length + 1}, {...user, picture: null, role});
        registeredUsers.push(newUser);
        db.set('registeredUsers', registeredUsers, true);
        return newUser;
    },
    getUser: (id = null) => {
        id = id ?? db.get('loggedUser');
        if (!id) {
            return null;
        }
        let user = auth.registeredUsers().filter((user) => {
            return user.id === Number(id);
        });
        return user.length ? user[0] : null;
    },
    validateUser: (email, password) => {
        let checkUser = auth.registeredUsers().filter((user) => {
            return user.email === email && user.password === password;
        });
        return checkUser.length ? checkUser[0] : false;
    },
    signIn: ({id}) => {
        db.set('loggedUser', id);
        return auth.getUser(id);
    },
    signOut: () => {
        db.remove('loggedUser');
    }
};

export default auth;
