function exe1() {
  let a, b, c, d, aux, i, primeiro;
  let grupo = 1;
  while (grupo <= 5) {
    a = Number(prompt(`Informe o valor de a`));
    b = Number(prompt(`Informe o valor de b`));
    c = Number(prompt(`Informe o valor de c`));
    d = Number(prompt(`Informe o valor de d`));
    //poderia fazer com objeto tbm
    primeiro = [a, b, c, d];
    i = 1;
    //o codigo sempre devera repetir um numero a menos da quantidade total de numero, exemplo: se tivesse 200 numeros, deveria repetir 199 vezes
    while (i < 4) {
      if (a > b) {
        aux = a;
        a = b;
        b = aux;
      }
      if (b > c) {
        aux = b;
        b = c;
        c = aux;
      }
      if (c > d) {
        aux = c;
        c = d;
        d = aux;
      }
      i++;
    }
    alert(
      `A ordem crescente é [${a} ${b} ${c} ${d}], a ordem decrescente é [${d} ${c} ${b} ${a}] e a ordem digitada é [${primeiro}]`
    );
    grupo++;
  }
}
