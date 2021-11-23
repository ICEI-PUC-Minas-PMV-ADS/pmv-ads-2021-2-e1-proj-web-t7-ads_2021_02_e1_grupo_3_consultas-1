import { Validate, setFieldError } from './validators.js';
import auth from '../db/auth.js';

if (auth.getUser()) {
    window.location.href = './index.html';
}

let registerForm = document.querySelector("[data-register]");

const formType = registerForm.getAttribute('data-register');

let phoneMask = registerForm.querySelector('input[name=phone]') ? IMask(registerForm.querySelector('input[name=phone]'), { mask: '(00) 00000-0000' }) : null;

let documentMask;

if (formType === 'patient') {
    documentMask = IMask(registerForm.querySelector('input[name=document]'), { mask: '000.000.000-00' });
} else if (formType === 'clinic') {
    documentMask = IMask(registerForm.querySelector('input[name=document]'), { mask: '000.000.000/0000-00' });
} else {
    documentMask = IMask(registerForm.querySelector('input[name=document]'), { mask: 'aa{ }0000', prepare: str => str.toUpperCase() });
}

let rqeMask = IMask(registerForm.querySelector('input[name=rqe]'), { mask: '0000' });

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

const doctorSchema = (field) => {
    switch (field.getAttribute('name').toLowerCase()) {
        case 'name':
            return new Validate(field).required().min(5).max(50);
        case 'email':
            return new Validate(field).required().email();
        case 'especialidade':
            return new Validate(field).required().min(5).max(50);
        case 'document':
            return new Validate(field).required().transform(() => documentMask.unmaskedValue.toUpperCase()).document('crm');
        case 'rqe':
            return new Validate(field).required().transform(() => rqeMask.unmaskedValue).digits(4, 'RQE Inválido');
        case 'formacao':
            new Validate(field).required().min(5).max(100);
        default:
            return;
    }
}
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = registerForm.querySelectorAll('input[name]');
    let errors = false;
    let validatedInputs = {};
    let validationSchema = formType === 'patient' ? patientSchema : clinicSchema;
    if (formType === 'doctor') {
        validationSchema = doctorSchema;
    }
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
