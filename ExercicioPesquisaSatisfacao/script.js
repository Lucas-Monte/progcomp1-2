// let i = 1
// while(i <= 10){
//     alert(`Oi!, ${i}`)
//     i++
// }

function exe0(){
    let i = 1
    let soma = 0
    let nota
    let media
    while(i<=6){
        nota = Number(prompt(`Qual a nota do ${i}° aluno?`))
        soma = soma + nota
        i++
    }
    media = soma / 6
    alert(`A média é ${media.toFixed(1)}`)
}

function pesquisaSatisfacao(){
    let nota
    let i = 1
    let soma = 0
    let satisfeito = 0
    let insatisfeito = 0
    while(i <= 10){
        nota = Number(prompt(`Qual a nota do ${i}° participante?`))
        if(nota < 0 || nota > 10 || isNaN(nota)){
            alert("Nota Inválida")
            continue // volta para o inicio do loop
        }
        else if(nota >= 8){
            satisfeito ++
        }
        else if(nota <= 5){
            insatisfeito ++
        }
        soma += nota
        i++
    }
    let media = soma / 10
    alert(`A média das notas é igual a ${media.toFixed(1)}`)
    alert(`Tiveram ${insatisfeito} notas insatisfeitas`)
    alert(`Tiveram ${satisfeito} notas satisfeitas`)
}


