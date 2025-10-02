//Aspectos positivos da função -> Reutilização de código
//Executam tarefas especificas
//Podem receber parametros e retornar um resultado
//Facilita manutenebilidade
//Deixa o código mais organizado
//Melhora a legibilidade
//Divisão de tarefas

function main() {
  mensagem("Bom dia");
  mensagem("Boa tarde");
  mensagem("Boa noite");
  mensagem("Ola");
  console.log(soma(5, 10));
  console.log(multiplicacao(5, 10));

  let a = 5;
  alterar(a);
  console.log(a);

  let numero = [1, 2, 3];
  alterarVet(numero);
  console.log(numero);
}
//função que recebe parametro
//Não retorna valor
function mensagem(saudacao) {
  console.log(saudacao);
}

main();

//função que recebe parametro
//Retorna valor
function soma(a, b) {
  return a + b;
}

function multiplicacao(a, b) {
  return a * b;
}

function alterar(x) {
  x = 10;
}

function alterarVet(vetor) {
  vetor[0] = 99;
}
