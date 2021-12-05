//Clinicas
let painel = document.getElementById('painel-clinica');
let agendaClinica = document.getElementById('agenda-clinica');
let notificacao = document.getElementById('notificacao-clinica');
let agendamentos = document.getElementById('agendamentos-clinica');
let especialistas = document.getElementById('especialistas-clinica');
let planos = document.getElementById('planos-clinica');

painel.addEventListener('click', () => {
    window.location.href = './dashboard.html'
});

agendaClinica.addEventListener('click', () => {
    window.location.href = './consultas-clinicas.html'
});
notificacao.addEventListener('click', () => {
    window.location.href = './notificacoes.html'
});
especialistas.addEventListener('click', () => {
    window.location.href = './gerenciar-medicos.html'
});


