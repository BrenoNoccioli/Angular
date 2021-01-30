"use strict";
exports.__esModule = true;
//declaração de variável em JavaScript
var minhaVar = "minha variavel";
function minhaFunc(x, y) {
    return x + y;
}
//ES6
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //arrow function - ES6
console.log(numeros.map(function (valor) { return valor * 2; }));
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//tipagem de variaveis
var n1 = "blabla";
n1 = 4;
