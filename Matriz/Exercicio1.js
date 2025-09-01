let matriz = [];
let pares = 0;

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = parseInt(Math.random() * 10);
  }
}

console.log(matriz);

let soma = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    soma += matriz[i][j];
    verificaPar(matriz[i][j]);
  }
}

console.log(`A soma da matriz é ${soma}`);
console.log(`A quantidade de pares é ${pares}`);

console.log(`Diagonal secundaria: `);
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][2 - i]);
}

function verificaPar(numero) {
  if (numero % 2 == 0) {
    pares += 1;
  }
}
