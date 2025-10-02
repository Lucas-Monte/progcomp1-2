function addCity(vet) {
  vet.push("São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba");
}

function defaultNames(vet) {
  for (let i = 0; i < vet.length; i++) {
    vet[i] = vet[i].toUpperCase();
  }
}

function markInterior(vet) {
  for (let i = 0; i < vet.length; i++) {
    if (vet[i][0] == "C") {
      vet[i] = `INTERIOR - ${vet[i].split(" ").join("_")}`;
    }
  }
}

function show(vet) {
  console.log(vet);
}

function main() {
  let city = [];
  addCity(city);
  defaultNames(city);
  markInterior(city);
  show(city);
}

main();
