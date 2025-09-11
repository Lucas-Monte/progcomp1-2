var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let figurinhas = parseInt(lines.shift());
let compradas = parseInt(lines.shift());
let figCompradas = new Set(); //objeto de valores unicos, que não aceita duplicados
for (let i = 0; i < compradas; i++) {
  figCompradas.add(parseInt(lines[i]));
}
console.log(figurinhas - figCompradas.size);
