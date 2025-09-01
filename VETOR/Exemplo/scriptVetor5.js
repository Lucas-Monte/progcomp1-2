let num = [];

for (let i = 0; i < 10; i++) {
  num.push(Number(prompt(`Digite o ${i + 1}° numero:`)));
}

let maior = 0;
let menor = 0;
let igual = 0;
for (let i = 1; i < 10; i++) {
  if (num[0] < num[i]) {
    maior += 1;
  } else if (num[0] > num[i]) {
    menor += 1;
  } else {
    igual += 1;
  }
}
console.log(
  `Tem ${maior} numeros maiores que o primeiro (${num[0]}), ${menor} numeros menores que o primeiro (${num[0]}) e ${igual} iguais.`
);

if (maior > 0 || menor > 0 || igual > 0) {
  console.log(`Sendo os eles: `);
  for (let i = 1; i < num.length; i++) {
    if (num[0] < num[i]) {
      console.log(num[0] + " --> " + num[i]);
    } else if (num[0] > num[i]) {
      console.log(num[0] + " --> " + num[i]);
    } else {
      console.log(num[0] + " --> " + num[i]);
    }
  }
}
