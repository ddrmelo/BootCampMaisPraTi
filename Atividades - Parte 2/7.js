// Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
    { nome: 'Camisa', preco: 50, desconto: 0 },
    { nome: 'Calça', preco: 100, desconto: 0 },
    { nome: 'Sapato', preco: 150, desconto: 0 }
];

produtos.forEach(produto => {
    produto.preco *= 0.9;  
    console.log(`Produto: ${produto.nome}, Novo Preço: R$ ${produto.preco.toFixed(2)}`);
});
