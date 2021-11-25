import categorias from "./static/faqs/categorias.js";
import perguntas from "./static/faqs/perguntas.js";

const faqs = {
    pegarNomeDeCategoria: (id) => {
        id = parseInt(id);
        let categoria = categorias.filter(categoria => {
            return categoria.id === id
        });
        return categoria[0]?.name ?? 'Não existe';
    },
    listarCategorias: () => {
        return categorias;
    },
    listarPerguntas: () => {
        return perguntas;
    },
    listarPerguntasPorCategoria: idCategoria => {
        idCategoria = parseInt(idCategoria);
        return perguntas.filter(pergunta => {
            return pergunta.categoryId === idCategoria;
        });
    },
    listarPerguntasMaisFrequentes: () => {
        return perguntas.slice(0, 5);
    },
    //criar uma função para retornar o nome da categoria
};

export default faqs;
