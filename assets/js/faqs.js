import faqs from './db/faqs.js';

let categoriasElemento = document.getElementById('categorias-faq');
let perguntasElemento = document.getElementById('perguntas');

function selecionarCategoria({ target }) {
    categoriasElemento.querySelectorAll('button').forEach(button => button.classList.remove('active'));
    target.classList.add('active');
    let titulo = document.getElementById('categoria-titulo');
    titulo.innerText = faqs.pegarNomeDeCategoria(target.dataset.category);
    titulo.parentElement.classList.add('d-md-block');
    inserirPerguntas(target.dataset.category);
}

function inserirCategorias() {
    let categorias = faqs.listarCategorias();
    categorias.map(categoria => {
        categoriasElemento.insertAdjacentHTML('beforeend', `<div class="col"><button data-category="${categoria.id}" type="button" class="btn btn-primary">${categoria.name}</button></div>`)
    });

}

function inserirPerguntasMaisFrequentes() {
    let perguntas = faqs.listarPerguntasMaisFrequentes();
    perguntas.map(pergunta => {
        document.getElementById('perguntasmaisfrequentes').insertAdjacentHTML('beforeend', `<a href="#" class="list-group-item list-group-item-action">${pergunta.title}</a>`)
    });

}

function inserirPerguntas(idCategoria = null) {
    perguntasElemento.innerHTML = '';
    let perguntas = idCategoria ? faqs.listarPerguntasPorCategoria(idCategoria) : faqs.listarPerguntas();
    perguntas.map(pergunta => {
        let perguntaCard = ` 
        <div class="card rounded-5 my-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <h4 class="text-primary">${pergunta.title}</h4>
                                        <p class="card-text text-truncate">
                                            ${pergunta.answer}
                                        </p>
                                        <div class="d-flex flex-row-reverse">
                                            <button class="btn btn-primary" type="button">Continuar leitura</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
        perguntasElemento.insertAdjacentHTML('beforeend', perguntaCard);
    })
}

inserirCategorias();
inserirPerguntas();
inserirPerguntasMaisFrequentes();

let buttons = categoriasElemento.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', selecionarCategoria);
});

