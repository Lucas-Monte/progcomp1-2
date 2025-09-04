var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let r = parseFloat(lines[0]);
const pi = 3.14159;
let A = pi * (r * r);

console.log(`A=${A.toFixed(4)}`);
