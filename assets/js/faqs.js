import faqs from './db/faqs.js';

let categoriasElemento = document.getElementById('categorias-faq');
let perguntasElemento = document.getElementById('perguntas');
let search = document.getElementById('buscaInput');

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
        document.getElementById('perguntasmaisfrequentes').insertAdjacentHTML('beforeend', `<a href="./faq-pergunta.html?id=${pergunta.id}" class="list-group-item list-group-item-action">${pergunta.title}</a>`)
    });

}

function inserirPerguntas(idCategoria = null) {
    perguntasElemento.innerHTML = '';
    let perguntas = idCategoria ? faqs.listarPerguntasPorCategoria(idCategoria) : faqs.listarPerguntasMaisFrequentes();
    perguntas.map(pergunta => {
        let perguntaCard = ` 
        <div class="card rounded-5 my-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <h4 class="text-primary">${pergunta.title}</h4>
                        <p class="card-text text-truncate">
                            ${pergunta.answer.slice(0, 50)}...
                        </p>
                        <div class="d-flex flex-row-reverse">
                            <a href="./faq-pergunta.html?id=${pergunta.id}"><button class="btn btn-primary id="btn-leitura" type="button">Continuar leitura</button></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        `;
        perguntasElemento.insertAdjacentHTML('beforeend', perguntaCard);
    })
}

function listaTitulos() {
    let perguntas = faqs.listarPerguntas();
    let titulos = [];
    perguntas.map(pergunta => {
        titulos.push(pergunta.title);
    });
    return titulos;
}

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        let a, b, val = this.value, lista = [];
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        lista = arr.filter(titulos => titulos.toLowerCase().includes(val));
        lista.map(titulo => {
            b = document.createElement("DIV");
            b.innerHTML = `<a class="list-group-item list-group-item-action menu-autocompletar">${titulo}</a>`
            b.innerHTML += "<input type='hidden' value='" + titulo + "'>";
            b.addEventListener("click", function (e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
        });
    });
    inp.addEventListener("keydown", function (e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

function enviarPergunta(){
    let index, lista = listaTitulos(), inputPergunta = search;
    index = lista.findIndex(i => {
        return inputPergunta.value === i;
    })
    if(index === -1){
        window.location.href = "./faq.html"
    }
    else{
        window.location.href = `./faq-pergunta.html?id=${index+1}`
    }
    
}

const perguntaInput = listaTitulos();

inserirCategorias();
inserirPerguntas();
inserirPerguntasMaisFrequentes();

autocomplete(search, perguntaInput);

let buttons = categoriasElemento.querySelectorAll('button');
let searchButton = document.getElementById('search-button');

buttons.forEach(button => {
    button.addEventListener('click', selecionarCategoria);
});

searchButton.addEventListener('click',enviarPergunta)