const prompt = require("prompt-sync")()

let sum = 0
let tot = 0
while (true) {
    const num = Number(prompt("Digite um número (digite 0 para encerrar): "))
    if (num === 0) {
        break
    }
    sum += num
    tot++
}
let average = sum/tot

console.log(`Foram digitados ${tot} números, e a média deles foi de ${average}`)
