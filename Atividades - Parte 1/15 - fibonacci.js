// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require("prompt-sync")()

let t1 = 1
let t2 = 1
let t3

console.log(`Os 10 primeiros termos da sequência de Fibonacci são: `)
console.log(t1)
console.log(t2)

for (let i = 0; i < 8; i++) {
    t3 = t1 + t2
    console.log(t3)
    t1 = t2
    t2 = t3
}

t1 = 1
t2 = 1
const num = Number(prompt("Quantos termos de fibonacci deseja saber? "))

console.log(t1)
console.log(t2)
for (i = 0; i < num-2; i++) {
    t3 = t1 + t2
    console.log(t3)
    t1 = t2
    t2 = t3
}