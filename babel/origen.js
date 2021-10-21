const lista = [1, 2, 3, 4, 5];

const test = [...lista];

console.log(test);

lista
  .map((numero) => numero * numero)
  .forEach((numeroMultiplicado) => console.log(numeroMultiplicado));