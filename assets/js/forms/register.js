import {Validate, setFieldError} from './validators.js';
import auth from '../db/auth.js';

if (auth.getUser()) {
    window.location.href = './index.html';
}

let registerForm = document.querySelector("[data-register]");

const formType = registerForm.getAttribute('data-register');

let phoneMask = IMask(registerForm.querySelector('input[name=phone]'), {mask: '(00) 00000-0000'});
let documentMask = formType === 'patient' ?
    IMask(registerForm.querySelector('input[name=document]'), {mask: '000.000.000-00'}) :
    IMask(registerForm.querySelector('input[name=document]'), {mask: '000.000.000/0000-00'})
;

const patientSchema = (field) => {
    switch (field.getAttribute('name').toLowerCase()) {
        case 'name':
            return new Validate(field).required().min(5).max(50);
        case 'document':
            return new Validate(field).required().transform(() => documentMask.unmaskedValue).document('cpf');
        case 'phone':
            return new Validate(field).required().transform(() => phoneMask.unmaskedValue).digits(11, 'Número de celular inválido.');
        case 'email':
            return new Validate(field).required().email();
        case 'password':
            return new Validate(field).required().min(8).transform(value => CryptoJS.SHA256(value).toString());
        case 'password-confirm':
            return new Validate(field).required().equals(field.parentElement.parentElement.querySelector('input[name=password]').value);
        default:
            return;
    }
}

const clinicSchema = (field) => {
    switch (field.getAttribute('name').toLowerCase()) {
        case 'name':
            return new Validate(field).required().min(5).max(50);
        case 'document':
            return new Validate(field).required().transform(() => documentMask.unmaskedValue).document('cnpj');
        case 'phone':
            return new Validate(field).required().transform(() => phoneMask.unmaskedValue).digits(11, 'Número de celular inválido.');
        case 'email':
            return new Validate(field).required().email();
        case 'password':
            return new Validate(field).required().min(8).transform(value => CryptoJS.SHA256(value).toString());
        case 'password-confirm':
            return new Validate(field).required().equals(field.parentElement.parentElement.querySelector('input[name=password]').value);
        default:
            return;
    }
}

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = registerForm.querySelectorAll('input[name]');
    let errors = false;
    let validatedInputs = {};
    const validationSchema = formType === 'patient' ? patientSchema : clinicSchema;
    inputs.forEach((input) => {
        try {
            let inputName = input.getAttribute('name');
            let validatedInput = validationSchema(input).getField();
            if (inputName !== 'password-confirm') {
                Object.assign(validatedInputs, validatedInput);
            }
        } catch (e) {
            errors = true;
        }
    });
    if (!errors) {
        if (auth.userExists(validatedInputs.email, validatedInputs.document)) {
            return setFieldError(registerForm.querySelector('input[name=email]'), 'Já existe uma conta cadastrada com este e-mail ou documento.');
        }
        let newUser = auth.registerUser(validatedInputs, formType === 'clinic' ? 'clinic' : 'patient');
        auth.signIn(newUser);
        document.location.reload(true);
    }
})
