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
    }
};

export default faqs;
