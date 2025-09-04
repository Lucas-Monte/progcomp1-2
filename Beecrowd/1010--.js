var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let quantidade1 = parseInt(lines[0][1]);
let valorUnitario1 = parseFloat(lines[0][2]);
let quantidade2 = parseInt(lines[1][1]);
let valorUnitario2 = parseFloat(lines[1][2]);

let total = quantidade1 * valorUnitario1 + quantidade2 * valorUnitario2;

console.log(`VALOR A PAGAR: R$ ${total}`);
