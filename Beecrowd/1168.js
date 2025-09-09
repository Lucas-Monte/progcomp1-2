var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
const leds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

/*let leds = {
  "0": 6,
  "1": 2,
  "2": 5,
  "3": 5,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 3,
  "8": 7,
  "9": 6,
}*/

let n = parseInt(lines.shift()); //remove o primeiro termo da array, transformando em um numero inteiro

for (let i = 0; i < n; i++) {
  let num = lines
    .shift()
    .trim()
    .split("")
    .map((d) => parseInt(d));
  let total = num.reduce((acc, cur) => acc + leds[cur], 0);

  console.log(`${total} leds`);
}

/*function numeroLed(numero) {
  //1 = 2 / 2, 3, 5 = 5 / 4, 7 = 4 / 0, 6, 9 = 6 / 8 = 7
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] === 1) {
      numero[i] = 2;
    } else if (numero[i] === 2 || numero[i] === 3 || numero[i] === 5) {
      numero[i] = 5;
    } else if (numero[i] === 4 || numero[i] === 7) {
      numero[i] = 4;
    } else if (numero[i] === 0 || numero[i] === 6 || numero[i] === 9) {
      numero[i] = 6;
    } else {
      numero[i] = 7;
    }
  }
  return numero;
}

function somaVet(numero) {
  let soma = 0;
  for (let i = 0; i < numero.length; i++) {
    soma += numero[i];
  }
  return soma;
}*/

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const leds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

let N = parseInt(lines.shift());

for(let i = 0; i < N; ++i){
    let V = lines.shift().trim().split('').map((x) => parseInt(x));

    let resposta = V.reduce((acc, cur) => acc + leds[cur], 0);

    console.log(`${resposta} leds`);
}*/
