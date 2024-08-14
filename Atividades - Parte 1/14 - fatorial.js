// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.


const prompt = require("prompt-sync")()

let fac = Number(prompt("Qual fatorial deseja saber? "))
let aux = fac
for (let i = fac-1; i > 0; i--) {
    fac = fac*i
    
}
console.log(`O fatorial de ${aux}! é ${fac}`)

fac = aux
let x = fac - 1
while (true) {
    fac = fac*x
    x--
    if (x === 1) {
        break
    }
}
console.log(`O fatorial de ${aux}! é ${fac}`)
