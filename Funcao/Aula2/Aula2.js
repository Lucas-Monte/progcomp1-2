function preencher(vet) {
  for (let i = 0; i < 5; i++) {
    vet[i] = Number(prompt(`Informe o valor ${i + 1}`));
  }
}
function exibe(vet) {
  console.log(vet);
}
function main() {
  let numeros = [];
  preencher(numeros);
  exibe(numeros);
}
main();

// function dobrar(vet) {
//     for (let i = 0; i < vet.length; i++) {
//         vet[i] = vet[i] * 2;
//     }
// }
// function exibe(vet){
// 	console.log(vet);
// }
// function main() {
// 	let numeros = [1, 2, 3, 4, 5]
// 	dobrar(numeros);
// 	exibe (numeros)
// }
// main()
