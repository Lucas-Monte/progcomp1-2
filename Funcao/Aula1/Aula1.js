let palavra = "   A noite esta bela";

console.log(palavra);
console.log(palavra.trim());

console.log(palavra.split(" ").length);
console.log(palavra.length);

let aprovados = "Lucas, João, Pedro, Rafael, Miguel, Felipe, Matheus";

console.log(aprovados.split(", "));
console.log(aprovados.split(", ").length);
let vetor = aprovados.split(", ");
console.log(vetor);

let vetor1 = ["a", "b", "c"];
let vetor1Inverso = vetor1.reverse();
console.log(vetor1Inverso);

let time = "francana";
console.log(time);
let timeVet = time.split(""); //transforma string em vetor
console.log(timeVet);
let timeSting = timeVet.join(""); //transforma vetor em string
console.log(timeSting);
