import qs from "../helpers/qs.js";
import faqs from "../db/faqs.js";

// 1- Usar qs.has para verificar se existe o id no url, senao retornar para faqs.html
// 2- Verificar se o qs.get (querystring) do id existe na faqs.getQuestion id, senao redirecionar para faqs.html
// 3- Salvar o resultado de faqs.getQuestion e injetar nome e resposta da pergunta no DOM
// faqs.getQuestion deve ser criada e fazer o parse do id para int pois o qs vai retornar uma string


if (!qs.has('id')) {
    //redirecionar para o faqs.html
    window.location.href = "./faq.html"
}
//Redirecionar
let idQuestion = qs.get('id')
let perguntaObject = faqs.listarCategoriaID(idQuestion)

let frame = document.getElementById('inserirPergunta')

perguntaObject.map(pergunta => {
    frame.insertAdjacentHTML('afterend', `<div class="container-fluid page-header header-bg mb-3 mb-md-5">
    <div class="container">
        <h2>${pergunta.title}</h2>
    </div>
</div>
<div class="container my-5">
    <div class="row">
        <div class="col-12">
            <p class="texto-faq">
                ${pergunta.answer}
            </p>
        </div>
    </div>
</div>
    
    `)
})

let button = document.getElementById('voltarFaq')
button.addEventListener('click', () => {
    window.location.href = "./faq.html"
})
