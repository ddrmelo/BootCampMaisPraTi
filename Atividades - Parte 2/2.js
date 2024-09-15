// Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
titulo: '1984',
autor: 'George Owen',
anoPublicacao: 1949,
genero: 'Romance'
};


let propriedadeExiste = false;

for (let propriedade in livro) {
    if (propriedade === 'editora') {
        propriedadeExiste = true;
    break;
    }
}

if (!propriedadeExiste) {
    livro.editora = 'Editora Desconhecida';
}

for (let propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}