const lista:Array<number> = [1, 2, 3, 4, 5];
// const lista:number[] = [1, 2, 3, 4, 5];

// const test:Array<number> = [...lista];
// const test:number[] =  [...lista];

// console.log(test);
lista
  .map((numero:number) => numero * numero)
  .forEach((numeroMultiplicado:number) => console.log(numeroMultiplicado));