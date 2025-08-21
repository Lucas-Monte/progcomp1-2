let projetos = [];

for (let i = 0; i < 7; i++) {
    let projeto = {
        nome: prompt(`Informe o nome do ${i+1}° projeto`),
        empresa: prompt(`Informe o nome da ${i+1}° empresa`).toLowerCase(),
        duracao: Number(prompt(`Informe a duração do ${i+1}° projeto`)),
        orcamento: Number(prompt(`Informe o orçamento do ${i+1}° projeto`))
    }

    projetos.push(projeto)
}

maior = projetos[0];
soma = 0
inovaTech = 0
somaOrcamento = 0
for (let i = 0; i < projetos.length; i++) {
    if(projetos[i].duracao > 12 && projetos[i].orcamento > 1000000) {
        console.log(`O projeto ${projetos[i].nome} tem duração maior de 12 meses e orçamento maior que R$ 1.000.000,00`)
    }

    if(projetos[i].orcamento > maior.orcamento) {
        maior = projetos[i]
    }

    if(projetos[i].empresa == "inovatech") {
        inovaTech ++
    }

    if(projetos[i].duracao < 6) {
        somaOrcamento += projetos[i].orcamento
    }
    soma += projetos[i].duracao
}

console.log(`A média de duração dos projetos é de ${soma/projetos.length} meses`)
console.log(`Foi realizado ao todo ${inovaTech} projeto(s) pela InovaTech`)
console.log(`O total gasto por projetos com menos de 6 meses foi de R$ ${somaOrcamento}`)