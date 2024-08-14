// 10 - Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

const prompt = require("prompt-sync")();
const heigth = Number(prompt("Qual é a sua altura: "))
const weigth = Number(prompt("E qual é o seu peso:  "))

let imc = weigth/Math.pow(heigth, 2)

console.log(`O seu IMC é de ${imc}`)
if (imc < 18.5){
    console.log("Isso indica que você está ABAIXO DO PESO")
} else if (imc < 25) {
    console.log("Isso indica que você está no PESO NORMAL")
} else if(imc < 30) {
    console.log("Isso indica que você está com SOBREPESO")
} else if (imc < 35) {
    console.log("Isso indica que você está com OBESIDADE GRAU I")
} else if (imc < 40) {
    console.log("Isso indica que você está com OBESIDADE GRAU II")
} else {
    console.log("Isso indica que você está com OBESIDADE GRAU III")
}