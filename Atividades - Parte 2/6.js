// Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.


const funcionarios = [
    { nome: 'Diego', cargo: 'Desenvolvedor FullStack', salario: 5000 },
    { nome: 'Mariana', cargo: 'Designer', salario: 4000 },
    { nome: 'Roberto', cargo: 'QA', salario: 7000 }
];

const salarioMinimo = 3000;

console.log(`Funcionários que ganham mais que ${salarioMinimo}: \n`)
for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
    }
}
