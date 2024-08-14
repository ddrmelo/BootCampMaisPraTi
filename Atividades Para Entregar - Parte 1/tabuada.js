// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.


const prompt = require("prompt-sync")()

const tab = Number(prompt("Qual a tabuada que deseja saber? "))

console.log(`A tabuada de ${tab} é:`)
console.log("-------------------")
for (let i = 0; i <= 10; i++) {
    console.log(`${tab} x ${i} = ${tab*i}`)
}
console.log("-------------------")