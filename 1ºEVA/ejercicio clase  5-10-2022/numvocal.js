var frase = prompt("Introduce una cadena de texto:");
var numletras = frase.length;    //Devuelve la longitud del string.
frase = frase.toUpperCase();  //Devuelve el string en mayúsculas.
var vocal;
var contador = 0;
var x;
    for (x = 0; x < numletras; x++) {
        vocal = frase.charAt(x);    //recupera el caracter i del string.
        if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");
