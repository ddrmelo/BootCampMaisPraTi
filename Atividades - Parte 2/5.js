// Calculando Valores em Arrays de Objetos
// Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.


const alunos = [
    { nome: 'Diego', nota1: 9, nota2: 10 },
    { nome: 'Carlos', nota1: 1, nota2: 2 },
    { nome: 'Beatriz', nota1: 9, nota2: 6 }
];

for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`O aluno ${aluno.nome} teve média ${media}`);
}