let vendas = [
  { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
  { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
  { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
  { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
  { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
  { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 },
];

const categorias = [
  { categoria: "Informática", soma: 0 },
  { categoria: "Moda", soma: 0 },
  { categoria: "Educação", soma: 0 },
  { categoria: "Esporte", soma: 0 },
  { categoria: "Decoração", soma: 0 },
];

vendas.forEach((e) => {
  categorias.forEach((e2) => {
    e.categoria == e2.categoria ? (e2.soma += e.valor * e.quantidade) : "";
  });
});

console.log(`Valor total de vendas por categoria:`);
for (let i = 0; i < categorias.length; i++) {
  console.log(`${categorias[i].categoria}: R$ ${categorias[i].soma}`);
}

let maiorCategoria = categorias[0].categoria;
let maiorValor = categorias[0].soma;
for (let i = 0; i < categorias.length; i++) {
  if (categorias[i].soma > maiorValor) {
    maiorValor = categorias[i].soma;
    maiorCategoria = categorias[i].categoria;
  }
}

console.log(
  `A categoria com mais vendas foi ${maiorCategoria}, com o valor de R$ ${maiorValor}`
);
