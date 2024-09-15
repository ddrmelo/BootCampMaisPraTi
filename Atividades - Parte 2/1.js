// Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

const carro = {
marca: 'Fiat',
modelo: 'Uno',
ano: 1997,
cor: 'Prata'
};

console.log("As propriedades do carro são: \n")
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}