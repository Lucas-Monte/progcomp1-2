let idade
let altura
let peso
let olho
let cabelo
let pessoasMaior50EMenos60 = 0
let inferior150 = 0
let pessoasInferior150 = 0
let olhosAzuis = 0
let ruivoMenosAzul = 0

for(let i = 1; i<=6; i++){
    idade = Number(prompt(`Qual a idade da ${i}° pessoa?`))
    while(isNaN(idade) || idade < 0 || idade > 120){
        alert("Digite um numero válido!")
        idade = Number(prompt(`Qual a idade da ${i}° pessoa?`))
    }
    
    altura = Number(prompt(`Qual a altura da ${i}° pessoa em centimetros?`))
    while(isNaN(altura) || altura < 0 || altura > 300){
        alert("Digite um numero válido!")
        altura = Number(prompt(`Qual a altura da ${i}° pessoa em centimetros?`))
    }
    if(altura < 150){
        inferior150 += idade
        pessoasInferior150 += 1
    }
    
    peso = Number(prompt(`Qual o peso da ${i}° pessoa?`))
    while(isNaN(peso) || peso < 0 || peso > 800){
        alert("Digite um numero válido!")
        peso = Number(prompt(`Qual o peso da ${i}° pessoa?`))
    }
    if(idade > 50 && peso < 60){
        pessoasMaior50EMenos60 += 1
    }

    olho = prompt(`Qual a cor do olho da ${i}° pessoa? (a-azul; p-preto; v-verde; c-castanho)`)
    while(olho != 'a' && olho != 'p' && olho != 'v' && olho != 'c'){
        alert("Digite uma cor válida!")
        olho = prompt(`Qual a cor do olho da ${i}° pessoa? (a-azul; p-preto; v-verde; c-castanho)`)
    }
    if(olho == 'a'){
        olhosAzuis += 1
    }

    cabelo = prompt(`Qual a cor do cabelo da ${i}° pessoa? (l-loiro; p-preto; r-ruivo; c-castanho)`)
    while(cabelo != 'l' && cabelo != 'p' && cabelo != 'r' && cabelo != 'c'){
        alert("Digite uma cor válida!")
        cabelo = prompt(`Qual a cor do cabelo da ${i}° pessoa? (l-loiro; p-preto; r-ruivo; c-castanho)`)
    }
    if(cabelo == 'r' && olho != 'a'){
        ruivoMenosAzul += 1
    }
}
let palavraPessoa = pessoasMaior50 > 1 ? 'pessoas' : 'pessoa'
alert(`Teve ${pessoasMaior50EMenos60} ${palavraPessoa} com mais de 50 anos e menos de 60 kg`)
let media = inferior150/pessoasInferior150
if(inferior150 == 0){
    alert(`A média das idades das pessoas com menos de 1,50 m é igual a 0`)
}
else{    
    alert(`A média das idades das pessoas com menos de 1,50 m é igual a ${media.toFixed(2)}`)
}
alert(`A porcentagem das pessoas com olhos azuis é ${(olhosAzuis*100)/6}%`)
alert(`A quantidade de pessoas ruivas e que não possuem olhos azuis é ${ruivoMenosAzul}`)