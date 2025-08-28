let matriz = []
let regiao = []
let dia = []
let soma
let maiorIndice
let maiorlinhaColuna
let maior300 = 0
let media = []
let menorRegiao
let menor

for (let i = 0; i < 5; i++) {
   regiao.push(prompt(`Informe a regiao no indice ${i}°`))
}
for (let i = 0; i < 5; i++) {
   dia.push(Number(prompt(`Informe o dia no indice ${i}°`)))
}


for (let i = 0; i < 5; i++) {
    matriz[i] = []
    for (let j = 0; j < 5; j++) {
        do{
            matriz[i][j] = Number(prompt(`Digite o indice da regiao ${regiao[i]} no dia ${dia[j]}:`))
        } while (matriz[i][j] > 500 || isNaN(matriz[i][j]))    
    }
}

console.log(matriz)

console.log("Diagonal principal da matriz:")
soma = 0
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][i])
    soma += matriz[i][i]

}
console.log(`A média da diagonal principal é ${soma/matriz.length}`)

console.log("Diagonal secundaria da matriz:")
soma = 0
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][4 - i])
    soma += matriz[i][4 - i]
}
console.log(`A média da diagonal secundaria é ${soma/matriz.length}`)

maior = matriz[0][0]
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j]
            maiorlinhaColuna = `Linha [i] coluna [j]`
        }
    }
}

console.log("Indices superior a 300")

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > 300) {
            maior300 += 1
        }
    }
}
console.log(`${maior300} indece(s) maior(s) que 300`)


for (let i = 0; i < 5; i++) {
    soma = 0
    for (let j = 0; j < 5; j++) {
        soma += matriz[i][j]
    }
    media[i] = soma/(matriz.length)
}
menor = media[0]
posicaoMenReg = 0
for (let i = 0; i < 5; i++) {
    if (media[i] < menor) {
        menor = media[i]
        posicaoMenReg = i
    }
}
console.log(`Médias por região: ${media}`)

console.log(`A regiao com a menor media dos 5 dias foi a região ${menorRegiao} com a media de indices em ${regiao[posicaoMenReg]}`)
