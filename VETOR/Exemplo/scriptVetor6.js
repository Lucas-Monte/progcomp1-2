let num = []

for (let i = 0; i < 12; i++) {
    num.push(Number(prompt(`Digite o ${i+1}° numero:`)))
}

let procura = Number(prompt(`Digite um número para ver se foi digitado:`))

let acm = 0
for (let i = 0; i < num.length; i++) {
    if (procura == num[i]) {
        console.log(`Numero procurado: ${procura} --> índice correspondente: ${i}`)
        acm += 1
    }
}

if (acm == 0) {
    console.log("Número procurado não esta no vetor")
} else {
    console.log(`O numero aparece ${acm} vezes`)
}