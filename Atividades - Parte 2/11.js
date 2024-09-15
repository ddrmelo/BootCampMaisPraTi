// Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: 'João', produto: 'Camisa', quantidade: 2 },
    { cliente: 'Maria', produto: 'Calça', quantidade: 1 },
    { cliente: 'João', produto: 'Sapato', quantidade: 1 },
    { cliente: 'Pedro', produto: 'Tênis', quantidade: 3 },
    { cliente: 'João Marcos', produto: 'Chuteira', quantidade: 1},
    { cliente: 'Lebron James', produto: 'Basqueteira', quantidade: 1}
];

const totalPorCliente = {};

pedidos.forEach(pedido => {
    if (!totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] = 0;
    }

    totalPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(totalPorCliente); 
