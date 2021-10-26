import auth from "./db/auth.js";

let user = auth.getUser();

document.querySelectorAll('[data-username]').forEach((node) => {
    node.textContent = user.name;
});

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    document.location.reload(true);
});

