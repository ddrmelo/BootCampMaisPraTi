const prompt = require("prompt-sync")();
const grade = Number(prompt("Digite a nota: "));

if (grade < 0 || grade > 10) {
    console.log("Nota inválida")
} else if (grade < 3){
    console.log("REPROVADO")
} else if (grade < 7) {
    console.log("RECUPERAÇÃO")
} else {
    console.log("APROVADO")
} 
