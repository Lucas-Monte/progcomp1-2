let y = 1;

while (y <= 10) {
  let aux = `Tabuada do ${y}`;
  let i = 0;
  while (i <= 10) {
    aux += "\n" + `${y} x ${i} = ${y * i}`;
    i++;
  }
  console.log(`\n` + aux);
  y++;
}
