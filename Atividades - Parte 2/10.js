// Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    { produto: 'Camisa', quantidade: 10, valor: 50 },
    { produto: 'Calça', quantidade: 5, valor: 100 },
    { produto: 'Sapato', quantidade: 2, valor: 150 }
];

let totalVendas = 0;
vendas.forEach(venda => {
    totalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$ ${totalVendas}`);
