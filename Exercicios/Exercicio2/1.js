let precosUSD = [10, 25.5, 8, 100, 35.25];
let cotacao = 5;

let precosRS = precosUSD.map((elemento) => elemento * cotacao);

console.log(precosUSD);
console.log(precosRS);
