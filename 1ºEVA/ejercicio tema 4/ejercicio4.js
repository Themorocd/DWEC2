String.prototype.trun=function(str){
   
   return prueba.slice(0,str-2)+"...";
}

var prueba="Hola mundo";
document.write(prueba.trun(5));
