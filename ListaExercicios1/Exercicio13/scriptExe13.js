let idade;
let peso;
let faixa1 = 0;
let acm1 = 0;
let faixa2 = 0;
let acm2 = 0;
let faixa3 = 0;
let acm3 = 0;
let faixa4 = 0;
let acm4 = 0;

for (let i = 0; i < 15; i++) {
  idade = Number(prompt(`Qual a ${i + 1}° idade?`));
  while (idade < 0 && idade > 120) {
    idade = Number(prompt(`Idade inválida! Digite novamente:`));
  }
  peso = Number(prompt(`Qual o ${i + 1}° peso?`));
  if (idade >= 1 || idade <= 10) {
    faixa1 += peso;
    acm1 += 1;
  } else if (idade >= 11 || idade <= 20) {
    faixa2 += peso;
    acm2 += 1;
  } else if (idade >= 21 || idade <= 30) {
    faixa3 += peso;
    acm3 += 1;
  } else {
    faixa4 += peso;
    acm4 += 1;
  }
}
if (acm1 == 0) {
  console.log("Nenhuma idade na faixa etaria 1");
} else {
  let media1 = faixa1 / acm1;
  console.log(`A média dos pesos da faixa etaria 1 é ${media1} kg`);
}

if (acm2 == 0) {
  console.log("Nenhuma idade na faixa etaria 2");
} else {
  let media2 = faixa2 / acm2;
  console.log(`A média dos pesos da faixa etaria 1 é ${media2} kg`);
}

if (acm3 == 0) {
  console.log("Nenhuma idade na faixa etaria 3");
} else {
  let media3 = faixa3 / acm3;
  console.log(`A média dos pesos da faixa etaria 1 é ${media3} kg`);
}

if (acm4 == 0) {
  console.log("Nenhuma idade na faixa etaria 4");
} else {
  let media4 = faixa4 / acm4;
  console.log(`A média dos pesos da faixa etaria 1 é ${media4} kg`);
}
