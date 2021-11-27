import auth from '../db/auth.js';

let user = auth.getUser();

export const redirectTo = (path = './index.html') => {
    window.location.href = path;
}

export const redirectIfLogged = (path = './index.html') => {
    if (!user) {
        return;
    }
    redirectTo(path);
}

export const redirectIfNotLogged = (path = './index.html') => {
    if (user) {
        return;
    }
    redirectTo(path);
}

export const redirectIfRoleIs = (role, path = './index.html') => {
    if (user && user.role !== role) {
        return;
    }
    redirectTo(path);
}

export const redirectIfRoleIsNot = (role, path = './index.html') => {
    if (user && user.role === role) {
        return;
    }
    redirectTo(path);
}
