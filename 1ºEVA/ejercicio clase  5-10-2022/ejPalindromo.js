var pali =prompt ("Introduce la frase o palabra");
var paliminusculas = pali.toLowerCase().replace(' ', '').replace('.','')
var palidelreves = paliminusculas.split('').reverse().join(''); 
if(palidelreves===paliminusculas){
    alert("Es palindromo");
}else{
    alert("No lo es");
}
