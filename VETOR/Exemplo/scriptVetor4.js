let numeros = []
let soma = 0
for (let i = 0; i < 8; i++) {
    numeros.push(Number(prompt(`Digite o ${i+1}° numero`)))
    soma += numeros[i]
}

let media = soma / 8

let numerosMaiores = []
let qtd = 0
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
        numerosMaiores.push(numeros[i])
        qtd += 1
    }
}

console.log(`A média é ${media} e tem ${qtd} numero(s) maiores que a media, sendo eles: `)

for (let i = 0; i < numerosMaiores.length; i++) {
    console.log(numerosMaiores[i])
}