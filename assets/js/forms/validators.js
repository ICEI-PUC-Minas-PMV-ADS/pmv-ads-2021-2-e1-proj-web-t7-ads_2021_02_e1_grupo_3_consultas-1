function validateRequired(value) {
    return Boolean(value.trim().length);
}

function validateLength(value, length) {
    return value.length >= length;
}

function validateEqual(value, secondValue) {
    return value === secondValue;
}

function validateByInputName(input) {
    let inputName = input.getAttribute("name");
    switch (inputName) {
        case "name":
            return validateRequired(input.value) && validateLength(input.value, 2);
        default:
            return true;
    }
}

function validate(inputs) {
    let hasErrors = false;
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        input.classList.remove('is-invalid');
        if (!validateByInputName(input)) {
            hasErrors = true;
            input.classList.add('is-invalid');
        }
    }
    return !hasErrors;
}
