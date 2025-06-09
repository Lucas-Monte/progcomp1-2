//Pesquisa de opniao de um determinado evento
//Ler resposta de 10 pessoas, onde cada resposta é um numero:
//1 = Gostou muito
//2 = Gostou
//3 = Não gostou
//Armazenar as resposta em um vetor
//Ao final, exibir:
//Quantas pessoas responderam cada opção (1, 2 e 3)
//A porcentagem de pessoas que não gostaram (responderam 3)

let pesquisa = []
let pesquisa1 = 0
let pesquisa2 = 0
let pesquisa3 = 0

for (let i = 0; i < 10; i++) {
    do {
        pesquisa[i] = (Number(prompt(`${i+1}° pessoa \nDigite uma das opções: \n1 - Gostou muito \n2 - Gostou \n3 - Não gostou`)))
    } while(pesquisa[i] != 1 && pesquisa[i] != 2 && pesquisa[i] != 3)
}

for (let i = 0; i < pesquisa.length; i++) {
    if (pesquisa[i] == 1) {
        pesquisa1 += 1
    } else if (pesquisa[i] == 2) {
        pesquisa2 += 1
    } else {
        pesquisa3 += 1
    }
}

console.log(`Responderam com '1 - Gostou muito' -> ${pesquisa1}`)
console.log(`Responderam com '2 - Gostou' -> ${pesquisa2}`)
console.log(`Responderam com '3 - Não gostou' -> ${pesquisa3}`)
console.log(`A porcentagem das pessoas que responderam que não gostaram é ${(pesquisa3 / pesquisa.length)*100}%`)
