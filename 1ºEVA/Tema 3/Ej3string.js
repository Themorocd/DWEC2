/*String*/

let cadena = "Hola mundo";
/*Propiedades
length -> devuelve la longitud de la cadena 
*/
console.log(cadena.length);

/*Metodos
todos los metodos devuelven una cadena nueva, la cadena toUppercase() -> devuelve la cadena a mayuscula*/
console.log(cadena.length);
let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);
/*toLowerCase() la devuelve a minusculas*/
console.log(cadena.toLowerCase());


/*
indexof() sino encuentra la letra devolvera -1 sino devuelve la posicion de la letra 
*/

console.log(cadena.indexOf('o'));
console.log(cadena.indexOf('hola'));
console.log(cadena.indexOf('z'));

/*subString()
extrae los caracteres entre los indices indicados o si pongo un solo indice me muestra solo a partir de ese indice
*/
console.log(cadena.substring(0,5));

/*slice()
extrae una parte de una cadena y devuelve una cadena nueva
si no se incluye el final extrae hasta el final
*/

console.log(cadena.slice(-3));
console.log(cadena.slice(2));
console.log(cadena.slice(0,-2));

/*startsWith()
sirve para saber si la cadena empieza por un caracter o no con un true o false
No aparece en los apuntes
*/
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M',5));

/*endsWith() 
sirve para saber si la cadena termina por un caracter o no, devuelve un true o false
No aparece en los apuntes
*/

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('n',8));
console.log(cadena.endsWith('Mundo'));


/* includes()->igual que el indexof pero devuelve true o false
No aparece en los apuntes
*/
console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2));

/*repeat(valor) 
repite el string el numero de veces indicadas en el indice
No aparece en los apuntes
*/

let cadena3='hola';
console.log(cadena3.repeat(3));
console.log('f'.repeat(10));


