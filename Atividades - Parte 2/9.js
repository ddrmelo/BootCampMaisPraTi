// Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
    { nome: 'Diego', idade: 34, cidade: 'Maceió' },
    { nome: 'Joelson', idade: 35, cidade: 'Arapiraca' },
    { nome: 'Pedro', idade: 40, cidade: 'Aracaju' }
];

let count = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        count++;
    }
});

console.log(`Ao todo, temos um total de ${count} clientes acima dos 30 anos.`);
