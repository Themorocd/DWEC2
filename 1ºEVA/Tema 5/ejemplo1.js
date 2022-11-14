// ejemplo de var re = //;

var cadena ="esto es una cadena de ejemplo para dwec";
var patron = /dwec/;
var rtdo = patron.test(cadena);
console.log(rtdo);

if(patron.test(cadena)==true){
    alert("true");

}else{
    alert("false");
}