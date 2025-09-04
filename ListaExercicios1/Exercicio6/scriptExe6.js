let i = 1;
let valor;
let v = 0;
let p = 0;

while (i <= 15) {
  let codigo = prompt(
    `Qual o código da ${i}° trasação? ('V' para a vista e 'P' para a prazo)`
  );
  while (codigo !== "p" && codigo !== "v") {
    alert("Valor inválido");
    codigo = prompt(
      `Qual o código da ${i}° trasação? ('V' para a vista e 'P' para a prazo)`
    );
  }

  valor = Number(prompt(`Qual o valor dessa transação?`));
  if (codigo == "v") {
    v += valor;
  } else if (codigo == "p") {
    p += valor;
  }
  i++;
}

alert(`O valor das compras à vista foi de R$ ${v}`);
alert(`O valor das compras a prazo foi de R$ ${p}`);
alert(`O valor total das compras efetuados foi de R$ ${v + p}`);
alert(
  `O valor da primeira prestação das compras a prazo juntas é de R$ ${p / 3}`
);
