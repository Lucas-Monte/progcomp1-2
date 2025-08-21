let titulo, autor, ano, paginas;
let livros = [];
for (let i = 0; i < 5; i++ ) {
    titulo = prompt(`Informe o titulo do ${i + 1}° livro: `)
    autor = prompt(`Informe o autor do ${i + 1}° livro: `)
    ano = prompt(`Informe o ano do ${i + 1}° livro: `)
    paginas = Number(prompt(`Informe a quantidade de páginas do ${i + 1}° livro: `))

    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas    
    };

    livros.push(livro)
}

let maior = livros[0]
let somaPagina = 0
console.log("Livros com mais de 300 pagias")
for (let i = 0; i < livros.length; i++) {
    if (livros[i].paginas > 300) {
        console.log(livros[i].titulo)
    }
    if (livros[i].paginas > maior.paginas) {
        maior = livros[i]
    }
    somaPagina += livros[i].paginas
}
console.log(`O livro com mais páginas é o ${maior.titulo}`)
console.log(`A media das paginas dos livros é de ${somaPagina / livros.length}`)