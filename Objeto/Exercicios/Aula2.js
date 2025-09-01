let nome, cargo, salario, tempoServico;
let funcionarios = [];

for (let i = 0; i < 6; i++) {
  let funcionario = {
    nome: prompt(`Informe o nome do ${i + 1}° funcionario:`),
    cargo: prompt(`Informe o cargo do ${i + 1}° funcionario:`).toLowerCase(),
    salario: Number(prompt(`Informe o salario do ${i + 1}° funcionario:`)),
    tempoServico: Number(
      prompt(`Informe o tempo de Serviço do ${i + 1}° funcionario:`)
    ),
  };

  funcionarios.push(funcionario);
}

maior = funcionarios[0];
soma = 0;
gerente = 0;
for (let i = 0; i < funcionarios.length; i++) {
  if (funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5) {
    console.log(
      `${funcionarios[i].nome} recebe mais de R$ 5000,00 e tem mais de 5 anos na empresa`
    );
  }

  if (funcionarios[i].salario > maior.salario) {
    maior = funcionarios[i];
  }

  if (funcionarios[i].cargo == "gerente") {
    gerente++;
  }

  soma += funcionarios[i].salario;
}

console.log(
  `Quem tem o maior salário é o ${maior.nome}, recebendo R$ ${maior.salario}`
);
console.log(`A média salarial é de R$ ${soma / funcionarios.length}`);
console.log(`Há no total ${gerente} gerente(s)`);
