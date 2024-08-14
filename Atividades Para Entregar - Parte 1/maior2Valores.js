// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")()

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

if (num1 > num2) {
    let aux = num1
    num1 = num2
    num2 = aux
}
console.log(`${num1} < ${num2}`)