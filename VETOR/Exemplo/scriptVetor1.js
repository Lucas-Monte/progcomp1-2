//Declara vetor
let vet = []
//Solicita a entrada de dados
for (let i = 0; i < 10; i++) {
    vet.push(Number(prompt(`Informe o ${i+1} elemento`)))
}

//Calcula a media

let soma = 0

for (let i = 0; i < vet.length; i++) {
    soma += vet[i]
    console.log(vet[i])
}


console.log(`A media dos numeros informados é igual a ${soma / vet.length}`)