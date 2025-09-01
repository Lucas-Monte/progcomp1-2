let matriz = [];
let nomes = [];
let soma;

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  nomes[i] = prompt(`Digite o nome do ${i + 1}° vendedor:`);
  for (let j = 0; j < 7; j++) {
    matriz[i][j] = parseInt(Math.random() * 1000);
  }
}

console.log(matriz);

for (let i = 0; i < matriz.length; i++) {
  soma = 0;
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
  console.log(`A soma das vendas do(a) ${nomes[i]} é R$ ${soma}`);
}

for (let j = 0; j < 7; j++) {
  soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][j];
  }
  console.log(`A soma das vendas do ${j + 1}° dia é R$ ${soma}`);
}

let maiorVenda = matriz[0][0];
let posição = "[0] [0]";
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > maiorVenda) {
      maiorVenda = matriz[i][j];
      posição = `[${i}] [${j}]`;
    }
  }
}

console.log(`A maior venda foi de R$ ${maiorVenda} na posição ${posição}`);

soma = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}
console.log(
  `A média das vendas foi de R$ ${(
    (soma / matriz.length) *
    matriz[0].length
  ).toFixed(2)}`
);
