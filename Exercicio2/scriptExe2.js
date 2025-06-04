let i = 5
let ingressos = 120
const custo = 200
let lucro
let aux = ""
let maiorLucro = 0
let aux2
while(i>=1){
    lucro = (i*ingressos) - custo
    aux += '\n' + (`${i} - ${ingressos} - ${custo} - ${lucro}`)
    if(lucro > maiorLucro){
        maiorLucro = lucro
    }
    ingressos += 26
    i -= 0.5
}
alert(aux)
alert(`O melhor lucro é ${maiorLucro}`)
