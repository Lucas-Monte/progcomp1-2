var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(/\s+/);
let i = 0;
while (i < lines.length) {
  let XEmpresa = parseInt(lines[i++]); //le o valor, depois atribui o valor.
  let yEmpresa = parseInt(lines[i++]);
  let pedidos = parseInt(lines[i++]);
  for (let j = 0; j < pedidos; j++) {
    let xCliente = parseInt(lines[i++]);
    let yCliente = parseInt(lines[i++]);
    if (
      (xCliente <= XEmpresa && yCliente <= yEmpresa) ||
      (xCliente <= yEmpresa && yCliente <= XEmpresa)
    ) {
      console.log("Sim");
    } else {
      console.log("Nao");
    }
  }
}
