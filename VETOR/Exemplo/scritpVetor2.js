//Fazer um programa que solicita 6 numeros
//Calcular e exibir:
//Os numeros pares e a quantidade de pares
//Os numeros impares e a quantidade impares

let numeros = []
let pares = []
let impares = []

//Não fazer ifs no for de obtenção de dados, separar as funções de cada
for (let i = 0; i < 6; i++) {
    numeros.push(Number(prompt(`Digite o ${i+1}° numero:`)))
}

let qtdImpares = 0
let qtdPares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i])
    } else {
        impares.push(numeros[i])
    }
}

if (pares != ""){
    console.log("Par(es):")
}     
for (let i = 0; i < pares.length; i++) {
    console.log(pares[i])
}


if (impares != "") {
    console.log("Impar(es):")
}
for (let i = 0; i < impares.length; i++) {
    console.log(impares[i])
}

console.log(`Quantidade de pares = ${pares.length}`)
console.log(`Quantidade de impares = ${impares.length}`)
