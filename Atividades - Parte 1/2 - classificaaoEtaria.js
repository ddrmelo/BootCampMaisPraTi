const prompt = require("prompt-sync")();

const age = Number(prompt("Digite a idade desejada: "));

if (age < 0){
    console.log("Idade inválida")
} else if (age < 12) {
    console.log("Pela idade digitada, trata-se de uma CRIANÇA")
} else if (age < 18) {
    console.log("Pela idade digitada, trata-se de um ADOLESCENTE")
} else if (age < 65) {
    console.log("Pela idade digitada, trata-se de um ADULTO")
} else {
    console.log("Pela idade digitada, trata-se de um IDOSO")
}