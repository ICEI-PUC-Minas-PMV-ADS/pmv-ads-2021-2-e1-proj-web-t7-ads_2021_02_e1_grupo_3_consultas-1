import auth from '../db/auth.js';

export const redirectTo = (path = './index.html') => {
    window.location.href = path;
}

export const redirectIfLogged = async (path = './index.html') => {
    const user = await auth.getUser();
    if (!user) {
        return;
    }
    redirectTo(path);
}

export const redirectIfNotLogged = async (path = './index.html') => {
    const user = await auth.getUser();
    if (user) {
        return;
    }
    redirectTo(path);
}

export const redirectIfRoleIs = async (role, path = './index.html') => {
    const user = await auth.getUser();
    if (user && user.role !== role) {
        return;
    }
    redirectTo(path);
}

export const redirectIfRoleIsNot = async (role, path = './index.html') => {
    const user = await auth.getUser();
    if (user && user.role === role) {
        return;
    }
    redirectTo(path);
}
