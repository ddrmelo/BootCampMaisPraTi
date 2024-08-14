const prompt = require("prompt-sync")();
const caso = Number(prompt("Digite um número de 1 a 3: "));


switch (caso) {
    case 1:
        console.log("Você escolheu a opção 1")
        break
    
    case 2:
        console.log("Você escolheu a opção 2")
        break
    
    default:
        console.log("Você escolheu a última opção")
}