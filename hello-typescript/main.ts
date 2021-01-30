import { CLIENT_RENEG_LIMIT } from "tls";

//declaração de variável em JavaScript
var minhaVar = "minha variavel";

function minhaFunc(x,y){
    return x+y;
}

//ES6
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor*2;
});

numeros.map(valor => valor*2); //arrow function - ES6
console.log(numeros.map(valor => valor*2));

class Matematica{
    soma(x,y){
        return x+y;
    }
}

//tipagem de variaveis
var n1: string ="blabla";