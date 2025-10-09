function novoCadastro(vetor) {
  vetor.push({
    nome: prompt("Digite o nome: "),
    cargo: prompt("Digite o cargo: "),
    salario: Number(prompt("Digite o salário: ")),
  });
  alert("Cadastro realizado com sucesso!");
}

function cadastroInicial(vetor) {
  vetor.push({
    nome: "Lucas",
    cargo: "Auxiliar Administrativo",
    salario: 1500,
  });
  vetor.push({
    nome: "Pedro",
    cargo: "Analista de Sistemas",
    salario: 1000,
  });
  vetor.push({
    nome: "Matheus",
    cargo: "DevOps Junior",
    salario: 3500,
  });
}

function listarNomes(vetor) {
  for (let funcionario of vetor) {
    console.log(funcionario.nome);
  }
}

function aumentarSalario(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    vetor[i].salario = vetor[i].salario * 1.1;
    console.log(vetor[i].nome + ": " + vetor[i].salario.toFixed(2));
  }
}

function buscarSalario(vetor, nomeBusca) {
  for (let funcionario of vetor) {
    if (funcionario.nome == nomeBusca) {
      alert(funcionario.nome + ": R$ " + funcionario.salario);
      return;
    }
  }
  alert("Pessoa não encontrada");
}

function alteraCargo(vetor, nomeBusca) {
  for (let funcionario of vetor) {
    if (funcionario.nome == nomeBusca) {
      let cargoAtual = prompt("Digite o cargo: ");
      funcionario.cargo = cargoAtual;
      alert(`Cargo de ${funcionario.nome} alterado com sucesso!`);
      console.log(funcionario.cargo);
      return;
    }
  }
  alert("Pessoa não encontrada");
}

function removeFuncionario(vetor, nomeBusca) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].nome == nomeBusca) {
      alert(`${vetor[i].nome} removido com sucesso!`);
      vetor.splice(i, 1);
      console.log(vetor);
      return;
    }
  }
  alert("Pessoa não encontrada");
}

function exibeMedia(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i].salario;
  }

  let media = soma / vetor.length;
  alert(`A média salarial é de R$ ${media}`);
  return media;
}

function promoveAbaixoMedia(vetor, media) {
  for (let funcionario of vetor) {
    if (funcionario.salario < media) {
      funcionario.salario = funcionario.salario * 1.15;
      funcionario.cargo = prompt(`Digite o novo cargo de ${funcionario.nome}:`);
    }
  }
  console.log(vetor);
}

function maiorSalario(vetor) {
  let maiorSalario = vetor[0].salario;
  let nomeMaior = vetor[0].nome;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].salario > maiorSalario) {
      maiorSalario = vetor[i].salario;
      nomeMaior = vetor[i].nome;
    }
  }
  alert(
    `O maior salario da empresa é do ${nomeMaior} sendo R$ ${maiorSalario}`
  );
}

function main() {
  let funcionarios = [];
  let opcao;
  cadastroInicial(funcionarios);
  do {
    opcao = Number(
      prompt(
        "Escolha uma opção: \n1 - Cadastrar novo funcionário \n2 - Listar nomes \n3 - Aumentar salários \n4 - Buscar salario específico \n5 - Atualizar cargo \n6 - Remover funcionário \n7 - Exibir média salarial \n8 - Promover funcionarios com salario abaixo da média \n9 - Exibe maior salário \n10 - Sair"
      )
    );

    let nomeBusca;
    let media;
    switch (opcao) {
      case 1:
        novoCadastro(funcionarios);
        break;
      case 2:
        listarNomes(funcionarios);
        break;
      case 3:
        aumentarSalario(funcionarios);
        break;
      case 4:
        nomeBusca = prompt("Digite o nome de quem quer buscar o salário:");
        buscarSalario(funcionarios, nomeBusca);
        break;
      case 5:
        nomeBusca = prompt("Digite o nome de quem quer atualizar o cargo:");
        alteraCargo(funcionarios, nomeBusca);
        break;
      case 6:
        nomeBusca = prompt("Digite o nome de quem quer remover:");
        removeFuncionario(funcionarios, nomeBusca);
        break;
      case 7:
        exibeMedia(funcionarios);
        break;
      case 8:
        promoveAbaixoMedia(funcionarios, exibeMedia(funcionarios));
        break;
      case 9:
        maiorSalario(funcionarios);
        break;
      case 10:
        alert("Programa encerrado!");
        break;
      default:
        alert("Opção inválida!");
        break;
    }
  } while (opcao !== 10);
}

main();
