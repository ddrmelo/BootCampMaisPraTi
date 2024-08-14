//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

const apples = Number(prompt("Quantas maçãs vocÊ comprou? "))

if (apples < 12) {
    console.log("Por ter comprado menos de um dúzia, cada maçã custou 30 centavos.")
    console.log(`Sua compra deu R$ ${apples*0.3}`)
} else {
    console.log("Por ter comprado pelo menos de um dúzia, cada maçã custou 25 centavos.")
    console.log(`Sua compra deu R$ ${apples*0.25}`)
}