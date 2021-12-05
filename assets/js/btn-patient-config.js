//Pacientes
let agenda = document.getElementById('agenda-paciente');
let perfil = document.getElementById('perfil-paciente');
let historico = document.getElementById('historico-paciente');

agenda.addEventListener('click', () => {
    window.location.href = './consultas-paciente.html'
});
perfil.addEventListener('click', () => {
    window.location.href = './perfil-paciente.html'
});
historico.addEventListener('click', () => {
    window.location.href = './paciente-historico.html'
});




