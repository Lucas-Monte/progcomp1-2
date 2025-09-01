let nija = {
  nome: "Naruto Uzumaki",
  aldeia: "Vila da Folha",
  titulo: "Hokage",
  cla: "Uzumaki",
};

let ninjas = [
  {
    nome: "Naruto Uzumaki",
    aldeia: "Vila da Folha",
    titulo: "Hokage",
    cla: "Uzumaki",
  },

  {
    nome: "Sasuke Uchiha",
    aldeia: "Vila da Folha",
    titulo: "Jounin",
    cla: "Uchiha",
  },

  {
    nome: "Itachi Uchiha",
    aldeia: "Vila da Folha",
    titulo: "Ninja Renegado",
    cla: "Uchiha",
  },

  {
    nome: "Sakura Haruno",
    aldeia: "Vila da Folha",
    titulo: "Ninja Médica",
    cla: " ",
  },
];

console.log(ninjas.length);
console.log(ninjas[3].nome);

//nome de todos os ninjas
for (let i = 0; i < ninjas.length; i++) {
  console.log(ninjas[i].nome);
  console.log(ninjas[i].aldeia);
}

let ninjasLista = [];

for (let i = 0; i < 3; i++) {
  let nome = prompt(`Informe o nome do ${i + 1}° ninja:`);
  let aldeia = prompt(`Informe a aldeia do ${i + 1}° ninja:`);
  let titulo = prompt(`Informe o titulo do ${i + 1}° ninja:`);
  let cla = prompt(`Informe o clã do ${i + 1}° ninja:`);

  let ninja = {
    nome: nome,
    aldeia: aldeia,
    titulo: titulo,
    cla: cla,
  };
  ninjasLista.push(ninja);
}

console.log(ninjasLista);
