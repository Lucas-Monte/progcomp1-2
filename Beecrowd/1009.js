var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const fixo = parseFloat(lines[1]);
let vendas = parseFloat(lines[2]);
let total = fixo + vendas * 0.15;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
