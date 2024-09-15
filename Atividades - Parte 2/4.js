// Iterando Sobre Arrays de Objetos
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
    { nome: 'Diego', idade: 34, cidade: 'Maceió' },
    { nome: 'Joelson', idade: 25, cidade: 'Arapiraca' },
    { nome: 'Ronny', idade: 35, cidade: 'Feira de Santana' }
];


for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}