// Implementando um Carrinho de Compras
// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const carrinho = {
    itens: [
    { nome: 'Camisa', quantidade: 2, precoUnitario: 50 },
    { nome: 'Calça', quantidade: 1, precoUnitario: 100 },
    { nome: 'Sapato', quantidade: 1, precoUnitario: 150 }
    ]
};

let valorTotal = 0;
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`O carrinho está com um valor total de: R$ ${valorTotal}`);
