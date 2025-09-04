function exe3() {
  let i = 1;
  let f1 = 0,
    f2 = 0,
    f3 = 0,
    f4 = 0,
    f5 = 0;
  let idade;

  while (i <= 8) {
    idade = Number(prompt(`Digite a idade da ${i}° pessoa:`));
    if (idade >= 0 && idade <= 15) {
      f1++;
    } else if (idade >= 16 && idade <= 30) {
      f2++;
    } else if (idade >= 31 && idade <= 45) {
      f3++;
    } else if (idade >= 46 && idade <= 60) {
      f4++;
    } else if (idade > 60 && idade <= 120) {
      f5++;
    } else {
      alert("Idade inválida");
      continue;
    }

    i++;
  }

  alert(`f1: ${f1} f2: ${f2} f3:${f3} f4:${f4} f5:${f5}`);
  alert(`%f1: ${(f1 / 8) * 100}%`);
  alert(`%f5: ${(f5 / 8) * 100}%`);
}
