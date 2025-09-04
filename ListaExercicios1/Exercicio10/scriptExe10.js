let num;
let somaPares = 0;
let somaPrimos = 0;

for (let i = 1; i <= 10; i++) {
  num = Number(prompt(`Digite o ${i}° numero:`));
  while (isNaN(num)) {
    alert("Digite um numero!");
    num = Number(prompt(`Digite o ${i}° numero:`));
  }
  if (num % 2 == 0) {
    somaPares += num;
  }
  if (primo(num)) {
    somaPrimos += num;
    console.log(`O ${num} é primo`);
  } else {
    console.log(`O ${num} não é primo`);
  }
}

function primo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

alert(
  `A soma dos numeros pares é igual a ${somaPares} e a soma dos numeros primos é igual a ${somaPrimos}`
);
