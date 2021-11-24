import qs from "../helpers/qs.js";
import faqs from "../db/faqs.js";

// 1- Usar qs.has para verificar se existe o id no url, senao retornar para faqs.html
// 2- Verificar se o qs.get (querystring) do id existe na faqs.getQuestion id, senao redirecionar para faqs.html
// 3- Salvar o resultado de faqs.getQuestion e injetar nome e resposta da pergunta no DOM
// faqs.getQuestion deve ser criada e fazer o parse do id para int pois o qs vai retornar uma string


if(!qs.has('id')){
    //redirecionar para o faqs.html
}
//Redirecionar
let idQuestion = qs.get('id') 
//Verificar se o id ta na pergunta