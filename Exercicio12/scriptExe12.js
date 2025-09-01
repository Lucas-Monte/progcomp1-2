let i = 1;
let numero;
let numPrimo = 0;

do {
  numero = Number(prompt(`Digite o ${i}° numero inteiro:`));
  if (primo(numero)) {
    numPrimo += 1;
  }
  i++;
} while (i <= 10);

function primo(n) {
  if (n < 2) {
    return false;
  }
  for (let y = 2; y <= Math.sqrt(n); y++) {
    if (n % y == 0) {
      return false;
    }
  }
  return true;
}

console.log(`A quantidade de numero primos digitados é igual a ${numPrimo}`);
