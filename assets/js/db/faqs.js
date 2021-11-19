import categorias from "./static/faqs/categorias.js";

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
    }
};

export default faqs;
