//quitar el primer elemento y mostrarlo
let numeros = new Array();
numeros=[1,2,3,4,5];
console.log(numeros);
let elementoeliminado=numeros.shift();
console.log(numeros);
console.log(elementoeliminado)
//quitar el ultimo elemento y mostrarlo
let num = new Array();
num=[1,2,3,4,5];
console.log(num);
let borroelemento=num.pop();
console.log(num);
console.log(borroelemento);

//añadir un elemento al final del array

let num1 = new Array();
num1=[1,2,3,4,5];
console.log(num1);
let agrego=num1.push(6);
console.log(num1);
console.log(agrego);

//añadir un elemento al principio del array

let num2 = new Array();
num2=[1,2,3,4,5];
console.log(num2);
let agreg=num2.unshift(0);
console.log(num2);
console.log(agreg);

//cambiar el contenido de un array, se tiene que poner la posicion donde empieza, el numero de contenido del array que quieres sustituir y el valor 
//por el que se sustituye
//ej: num3.splice(0,2,9,9) el 0 es donde inicia, el 2 el numero de valores que quiero cambiar y el 9,9 el valor nuevo por el que sustituyo los viejos

let num3 = new Array();
num3=[1,2,3,4,5];
console.log(num3);
let cambio=num3.splice(0,2,9,9);
console.log(num3);
console.log(cambio);
cambio = num3.splice(0,3,8,8,8);
console.log(num3);
console.log(cambio);

