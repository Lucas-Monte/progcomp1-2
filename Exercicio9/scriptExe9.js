let idade;
let altura;
let peso;
let pesoSup90AltInf150 = 0;
let Mais190 = 0;
let entre10E30 = 0;
let somaIdade = 0;

for (let i = 1; i <= 10; i++) {
  idade = Number(prompt(`Qual a idade da ${i}° pessoa?`));
  while (isNaN(idade) || idade < 0 || idade > 120) {
    alert("Idade inválida");
    idade = Number(prompt(`Qual a idade da ${i}° pessoa?`));
  }
  somaIdade += idade;
  if (idade > 10 && idade < 30) {
    entre10E30 += 1;
  }

  peso = Number(prompt(`Qual o peso da ${i}° pessoa?`));
  while (isNaN(peso) || peso < 0 || peso > 800) {
    alert("Peso inválido");
    peso = Number(prompt(`Qual o peso da ${i}° pessoa?`));
  }

  altura = Number(prompt(`Qual a altura da ${i}° pessoa em centimetros?`));
  while (isNaN(altura) || altura < 0 || altura > 300) {
    alert("Peso inválido");
    altura = Number(prompt(`Qual a altura da ${i}° pessoa em centimetros?`));
  }
  if (peso > 90 && altura < 150) {
    pesoSup90AltInf150 += 1;
  }
  if (altura > 190) {
    Mais190 += 1;
  }
}

let media = somaIdade / 10;
alert(`A média das idades é igual a ${media}`);
alert(
  `A quantidade de pessoas com mais de 90kg e menores que 1,50m é igual a ${pesoSup90AltInf150}`
);
if (Mais190 == 0) {
  alert(
    `A porcentagem de pessoas entre 10 e 30 anos entre as pessoas com mais de 1,90m é incalculavel`
  );
} else {
  alert(
    `A porcentagem de pessoas entre 10 e 30 anos entre as pessoas com mais de 1,90m é igual a ${
      (entre10E30 * 100) / Mais190
    }`
  );
}
