import {Validate, setFieldError} from './validators.js';
import auth from "../db/auth.js";

let loginForm = document.querySelector('#user-login');

const loginSchema = (field) => {
    switch (field.getAttribute('name').toLowerCase()) {
        case 'email':
            return new Validate(field).required().email();
        case 'password':
            return new Validate(field).required();
        default:
            return;
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputs = loginForm.querySelectorAll('input[name]');
    let errors = false;
    let validatedInputs = {};
    inputs.forEach((input) => {
        try {
            let validatedInput = loginSchema(input).getField();
            Object.assign(validatedInputs, validatedInput);
        } catch (e) {
            errors = true;
        }
    });
    if (!errors) {
        let checkUser = auth.validateUser(validatedInputs.email, CryptoJS.SHA256(validatedInputs.password).toString());
        if (!checkUser) {
            return setFieldError(loginForm.querySelector('input[name=email]'), 'E-mail ou senha incorretos.');
        }
        auth.signIn(checkUser);
        document.location.reload(true);
    }
})
