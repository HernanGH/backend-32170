var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var lista = [1, 2, 3, 4, 5];
var test = __spreadArray([], lista, true);
console.log(test);
lista
    .map(function (numero) { return numero * numero; })
    .forEach(function (numeroMultiplicado) { return console.log(numeroMultiplicado); });
