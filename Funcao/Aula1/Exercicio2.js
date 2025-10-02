function alteraVetor(vet) {
  vet[0] = 100;
}

function main() {
  let vetor = [10, 20, 30];
  alteraVetor(vetor);
  console.log(vetor);
}

main();
