function listarNomes(alunos) {
  for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
  }
}

function aumentarIdade(alunos) {
  for (let aluno of alunos) {
    aluno.idade += 1;
    console.log(aluno.nome + ": " + aluno.idade);
  }
}

function cadastraInicial(alunos) {
  alunos.push({
    nome: "Ana",
    idade: 20,
    curso: "ES",
  });
  alunos.push({
    nome: "Carlos",
    idade: 22,
    curso: "Engenharia",
  });
  alunos.push({
    nome: "Beatriz",
    idade: 19,
    curso: "Medicina",
  });
}

function cadastraNovo(alunos) {
  alunos.push({
    nome: prompt("Digite o nome do aluno:"),
    idade: Number(prompt("Digite a idade do aluno: ")),
    curso: prompt("Digite o curso"),
  });

  alert("Cadastro Realizado!");
}

function removeAluno(alunos) {
  let nomeRemove = prompt("Informe o nome do aluno para remoção");
  for (let i = 0; i < alunos.length; i++) {
    if (nomeRemove == alunos[i].nome) {
      alunos.splice(i, 1);
      alert(`Aluno removido!`);
      return;
    }
  }
  alert("Aluno não encontrado!");
}
function main() {
  let vetor = [];
  cadastraInicial(vetor);
  let opcao;
  do {
    opcao = Number(
      prompt(
        "1 - Cria Aluno / 2 - Lista nomes / 3 - Atualiza idade / 4 - Remove Aluno / 5 - Sair"
      )
    );
    switch (opcao) {
      case 1:
        cadastraNovo(vetor);
        break;
      case 2:
        listarNomes(vetor);
        break;
      case 3:
        aumentarIdade(vetor);
        break;
      case 4:
        removeAluno(vetor);
        break;
      case 5:
        alert("Programa finalizado!");
        break;
      default:
        alert("Opção inválida!!");
        break;
    }
  } while (opcao !== 5);

  console.log(vetor);
}

main();
