"use strict";

var lista = [1, 2, 3, 4, 5];
var test = [].concat(lista);
console.log(test);
lista.map(function (numero) {
  return numero * numero;
}).forEach(function (numeroMultiplicado) {
  return console.log(numeroMultiplicado);
});
