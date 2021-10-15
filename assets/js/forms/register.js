let patientForm = document.querySelector("#patient-register");

patientForm.addEventListener("click", (e) => {
    e.preventDefault();
    let inputs = patientForm.querySelectorAll("input[name]");
    if (!validate(inputs)) {
        return;
    }
    alert('Tudo certo!');
})
