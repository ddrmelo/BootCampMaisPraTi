// Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.



const filmes = [
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'Matrix', diretor: 'Lana Wachowski', anoLancamento: 1999 },
    {titulo: 'Dogville', diretor: 'Lars von Trier', anoLancamento: 2003}
];


const titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);  