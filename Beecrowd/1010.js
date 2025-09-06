var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
let [codigo1, quantidade1, valor1] = lines[0].split(" ");
codigo1 = parseInt(codigo1);
quantidade1 = parseInt(quantidade1);
valor1 = parseFloat(valor1);

let [codigo2, quantidade2, valor2] = lines[1].split(" ");
codigo2 = parseInt(codigo2);
quantidade2 = parseInt(quantidade2);
valor2 = parseFloat(valor2);

let total = quantidade1 * valor1 + quantidade2 * valor2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
