let num = Number(prompt("Qual numero deseja ver a tabuada?"))
let i = 0
let aux = ""

while(isNaN(num)){
    alert("Coloque um numero")
    num = Number(prompt("Qual numero deseja ver a tabuada?"))
}

while(i <= 10){
    aux += '\n' + (`${num} x ${i} = ${num*i}`)
    i++
}

alert(aux)