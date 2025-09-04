var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let A = parseFloat(lines[0]) * 3.5;
let B = parseFloat(lines[1]) * 7.5;
let MEDIA = (A + B) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
