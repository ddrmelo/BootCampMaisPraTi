const prompt = require("prompt-sync")()

const l1 = Number(prompt("Digite o primeiro lado do triângulo: "))
const l2 = Number(prompt("Digite o segundo lado do triângulo: "))
const l3 = Number(prompt("Digite o teceiro lado do triângulo: "))


if (l1 < l2 + l3 || l2 < l1 + l3 || l3 < l1 + l2) {
    if (l1 === l2 && l1 === l3) {
        console.log(`O triângulo de lados ${l1}, ${l2}, e ${l3} é equilátero`)
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        console.log(`O triângulo de lados ${l1}, ${l2}, e ${l3} é isósceles`)
    } else {
        console.log(`O triângulo de lados ${l1}, ${l2}, e ${l3} é escaleno`)
    }
        
} else {
    console.log(`Os lados digitados ${l1}, ${l2}, e ${l3} não formam um triângulo`)
}