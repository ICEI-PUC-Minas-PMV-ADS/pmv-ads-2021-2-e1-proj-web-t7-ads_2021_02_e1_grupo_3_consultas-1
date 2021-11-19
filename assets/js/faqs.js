import faqs from './db/faqs.js';

let categoriasElemento = document.getElementById('categorias-faq');

function selecionarCategoria({target}) {
    categoriasElemento.querySelectorAll('button').forEach(button => button.classList.remove('active'));
    target.classList.add('active');
    document.getElementById('categoria-titulo').innerText = faqs.pegarNomeDeCategoria(target.dataset.category);
    // Alterar perguntas
}

function inserirCategorias() {
    let categorias = faqs.listarCategorias();
    categorias.map(categoria => {
        categoriasElemento.insertAdjacentHTML('beforeend', `<div class="col"><button data-category="${categoria.id}" type="button" class="btn btn-primary">${categoria.name}</button></div>`)
    });

}

inserirCategorias();

let buttons = categoriasElemento.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', selecionarCategoria);
});

