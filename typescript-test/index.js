"use strict";
var lista = [1, 2, 3, 4, 5];
// const lista:number[] = [1, 2, 3, 4, 5];
// const test:Array<number> = [...lista];
// const test:number[] =  [...lista];
// console.log(test);
lista
    .map(function (numero) { return numero * numero; })
    .forEach(function (numeroMultiplicado) { return console.log(numeroMultiplicado); });
