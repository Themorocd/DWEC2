
function coche(codigo, nombre, precio){
    this.codigo=codigo;
    this.nombre=nombre;
    this.precio=precio;
}

coche.prototype.imprimedatos=function(){
    return("codigo: "+this.codigo+", nombre:" +this.nombre+", precio:"+this.precio);
}
var coche = new coche(40,"Volkswagen",1500);
document.write(coche.imprimedatos());