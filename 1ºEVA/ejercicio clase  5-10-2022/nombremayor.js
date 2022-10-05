var nom1 =prompt ("Nombre 1: ");
var num1 = Number(prompt ("Edad 1: "));
var nom2 = prompt ("Nombre 2: ");
var num2 = Number(prompt ("Edad 2: "));
var nom3 = prompt ("Nombre 3: ");
var num3 = Number(prompt ("Edad 3: "));

var max = Math.max(num1,num2,num3);

if(max==num1){
    document.write("El mayor es: " + nom1);
}
if(max==num2){
    document.write("El mayor es: " + nom2);
}
if(max==num3){
    document.write("El mayor es: " + nom3);
}




