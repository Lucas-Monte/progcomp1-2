//Faça um programa que solicite 10 numeros
//calcular e mostrar o vetor alterado da seguinte forma:
//Nas posições pares, somar 10 elementos
//Nas posições impares, multiplicar por 3

let numeros = [];
let numerosAlterados = [];

for (let i = 0; i < 10; i++) {
  numeros.push(Number(prompt(`Digite o ${i + 1}° termo:`)));
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    numerosAlterados[i] = numeros[i] + 10;
  } else {
    numerosAlterados[i] = numeros[i] * 3;
  }
  console.log(i + " -> " + numeros[i] + " --> " + numerosAlterados[i]);
}
