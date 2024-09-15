// Filtrando e Somando Valores
// Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saída', valor: 500 },
    { tipo: 'saída', valor: 900 },
    { tipo: 'entrada', valor: 300 }
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
        saldoFinal -= transacao.valor;
    }
});

if (saldoFinal > 0) {
    console.log(`Superávit de R$${saldoFinal}`);
} else {
    console.log(`Déficit de R$${Math.abs(saldoFinal)}`);
}
