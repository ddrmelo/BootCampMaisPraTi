// Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produto = {
    nome: 'Notebook LeNovo IdeaPad',
    preco: 3200,
    garantia: 1,
    placaVideo: 'Sim',
    ram: 8
    
};

// Função para filtrar propriedades com valores maiores que um valor específico
function filtrarPropriedades(obj, valorMinimo) {
    const novoObjeto = {};

    for (let propriedade in obj) {
        if (obj[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = obj[propriedade];
        }
    }

    return novoObjeto;
}

const propriedadesFiltradas = filtrarPropriedades(produto, 5);
console.log("Encontramos as seguintes propriedades do item:");
console.log(propriedadesFiltradas)
