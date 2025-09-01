let carro = Number(prompt(`Qual o valor do carro?`));
let aux = "";
let parcela = Number(
  prompt(
    `Em quantas vezes será parcelado? (6; 12; 18; 24; 30; 36; 42; 48; 54; 60)`
  )
);

console.log(`O valor a vista é igual a ${carro * 0.8}`);
console.log("As parcelas ficarâo da seguinte forma:");

while (
  parcela != 6 &&
  parcela != 12 &&
  parcela != 18 &&
  parcela != 24 &&
  parcela != 30 &&
  parcela != 36 &&
  parcela != 42 &&
  parcela != 48 &&
  parcela != 54 &&
  parcela != 60
) {
  alert("Parcela indisponivel!");
  parcela = Number(
    prompt(
      `Em quantas vezes será parcelado? (6; 12; 18; 24; 30; 36; 42; 48; 54; 60)`
    )
  );
}

while (
  parcela == 6 ||
  parcela == 12 ||
  parcela == 18 ||
  parcela == 24 ||
  parcela == 30 ||
  parcela == 36 ||
  parcela == 42 ||
  parcela == 48 ||
  parcela == 54 ||
  parcela == 60
) {
  switch (parcela) {
    case 6:
      carro = carro * 1.03;
      break;
    case 12:
      carro = carro * 1.06;
      break;
    case 18:
      carro = carro * 1.09;
      break;
    case 24:
      carro = carro * 1.12;
      break;
    case 30:
      carro = carro * 1.15;
      break;
    case 36:
      carro = carro * 1.18;
      break;
    case 42:
      carro = carro * 1.21;
      break;
    case 48:
      carro = carro * 1.24;
      break;
    case 54:
      carro = carro * 1.27;
      break;
    case 60:
      carro = carro * 1.3;
      break;
  }
  for (let i = 1; i <= parcela; i++) {
    aux += `\n A ${i} parcela é de R$ ${(carro / parcela).toFixed(2)}`;
  }
  console.log(aux);
  parcela++;
}
