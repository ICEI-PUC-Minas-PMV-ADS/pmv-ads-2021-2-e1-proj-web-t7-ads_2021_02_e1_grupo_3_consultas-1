import { Validate, setFieldError } from './validators.js';
import doctor from '../db/doctor.js';
import specialty from '../db/specialty.js';
import {redirectIfRoleIsNot} from '../helpers/redirect.js';

redirectIfRoleIsNot('clinic');

let registerForm = document.querySelector("[data-register]");

let phoneMask = registerForm.querySelector('input[name=phone]') ? IMask(registerForm.querySelector('input[name=phone]'), { mask: '(00) 00000-0000' }) : null;

let specialtySelect = registerForm.querySelector('select[name=specialty]');
let documentMask = IMask(registerForm.querySelector('input[name=document]'), { mask: 'aa{ }0000', prepare: str => str.toUpperCase() });
specialty.listSpecialties().map(specialty => {
    specialtySelect.insertAdjacentHTML('beforeend',`<option value="${specialty.id}">${specialty.name}</option>`)
});

let rqeMask = IMask(registerForm.querySelector('input[name=rqe]'), { mask: '0000' });

const doctorSchema = (field) => {
    switch (field.getAttribute('name').toLowerCase()) {
        case 'name':
            return new Validate(field).required().min(5).max(50);
        case 'email':
            return new Validate(field).required().email();
        case 'phone':
            return new Validate(field).required().transform(() => phoneMask.unmaskedValue).digits(11, 'Número de celular inválido.');
        case 'gender':
            return new Validate(field).required().transform(value => value.toLowerCase()).regex(/^(f|m|o)$/, 'Escolha seu gênero.');
        case 'specialty':
            return new Validate(field).required().ensure(id => specialty.getSpecialty(id), 'Selecione uma especialidade válida.');
        case 'document':
            return new Validate(field).required().transform(() => documentMask.unmaskedValue.toUpperCase()).document('crm');
        case 'rqe':
            return new Validate(field).required().transform(() => rqeMask.unmaskedValue).digits(4, 'RQE Inválido');
        case 'degree':
            return new Validate(field).required().min(3).max(100);
        default:
            return;
    }
}

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = registerForm.querySelectorAll('input[name], select[name]');
    let errors = false;
    let validatedInputs = {};
    inputs.forEach((input) => {
        try {
            let inputName = input.getAttribute('name');
            let validatedInput = doctorSchema(input).getField();
            if (inputName !== 'password-confirm') {
                Object.assign(validatedInputs, validatedInput);
            }
        } catch (e) {
            errors = true;
        }
    });
    if (!errors) {
        // if (auth.userExists(validatedInputs.email, validatedInputs.document)) {
        //     return setFieldError(registerForm.querySelector('input[name=email]'), 'Já existe uma conta cadastrada com este e-mail ou documento.');
        // }
        // let newUser = auth.registerUser(validatedInputs, formType === 'clinic' ? 'clinic' : 'patient');
        // auth.signIn(newUser);
        document.location.reload(true);
    }
})
