function upperCase(vet) {
  let copyVet = [...vet];
  for (let i = 0; i < copyVet.length; i++) {
    copyVet[i] = copyVet[i].toUpperCase();
  }
  console.log(copyVet);
}

function anonymous(vet) {
  let copyVet = [...vet];
  for (let i = 0; i < vet.length; i++) {
    if (copyVet[i][0] == "A") {
      copyVet[i] = "ANÔNIMO";
    }
  }
  console.log(copyVet);
}

function show(vet) {
  console.log(vet);
}

function main() {
  let names = ["Lucas", "Pedro", "Matheus", "Miguel", "João", "Ana"];
  upperCase(names);
  anonymous(names);
  show(names);
}

main();
