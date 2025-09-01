let idade;
let altura;
let peso;
let pessoasMaior50 = 0;
let alturaEntre10E20Anos = 0;
let pessoasEntre10E20Anos = 0;
let inferior40 = 0;

for (let i = 1; i <= 5; i++) {
  idade = Number(prompt(`Qual a idade da ${i}° pessoa?`));
  while (isNaN(idade) || idade < 0 || idade > 120) {
    alert("Digite um numero válido!");
    idade = Number(prompt(`Qual a idade da ${i}° pessoa?`));
  }
  if (idade > 50) {
    pessoasMaior50 += 1;
  }

  altura = Number(prompt(`Qual a altura da ${i}° pessoa em centimetros?`));
  while (isNaN(altura) || altura < 0 || altura > 300) {
    alert("Digite um numero válido!");
    altura = Number(prompt(`Qual a altura da ${i}° pessoa em centimetros?`));
  }
  if (idade > 10 && idade < 20) {
    alturaEntre10E20Anos += altura;
    pessoasEntre10E20Anos += 1;
  }

  peso = Number(prompt(`Qual o peso da ${i}° pessoa?`));
  while (isNaN(peso) || peso < 0 || peso > 800) {
    alert("Digite um numero válido!");
    peso = Number(prompt(`Qual o peso da ${i}° pessoa?`));
  }
  if (peso < 40) {
    inferior40 += 1;
  }
}
let palavraPessoa = pessoasMaior50 > 1 ? "pessoas" : "pessoa";
alert(`Teve ${pessoasMaior50} ${palavraPessoa} com mais de 50 anos`);
if (pessoasEntre10E20Anos == 0) {
  alert(`A média das alturas da pessoas entre 10 e 20 anos é igual a 0`);
} else {
  alert(
    `A média das alturas da pessoas entre 10 e 20 anos é igual a ${
      alturaEntre10E20Anos / pessoasEntre10E20Anos
    }`
  );
}
alert(
  `A porcentagem das pessoas com menos de 40 kg é ${(inferior40 * 100) / 5}%`
);
