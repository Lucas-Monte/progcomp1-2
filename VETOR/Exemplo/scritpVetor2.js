//Fazer um programa que solicita 6 numeros
//Calcular e exibir:
//Os numeros pares e a quantidade de pares
//Os numeros impares e a quantidade impares

let numeros = []

for (let i = 0; i < 6; i++) {
    numeros.push(Number(prompt(`Digite o ${i+1}° numero:`)))
}

let qtdImpares = 0
let qtdPares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        qtdPares += 1
        console.log(`Par -> ${numeros[i]}`)
    } else {
        qtdImpares += 1
        console.log(`Impar -> ${numeros[i]}`)

    }
}

console.log(`A quantidade de numeros pares é ${qtdPares} e os impares é ${qtdImpares}`)
