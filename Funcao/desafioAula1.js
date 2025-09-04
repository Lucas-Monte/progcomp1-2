let palavra = " reVer        ";

verificaPalindromo(palavra);

function verificaPalindromo(palavra) {
  let palavraCerta = palavra.trim().toLowerCase();
  let vetor = palavraCerta.split("");
  let palavraInvertida = vetor.reverse().join("");
  if (palavraCerta === palavraInvertida) {
    return console.log(`Palavra é Palindroma`);
  } else {
    return console.log(`A palavra não é um palindromo`);
  }
}
