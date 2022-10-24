function Producto_alimenticio(codigo,nombre,precio){
    this.codigo=codigo;
    this.nombre=nombre;
    this.precio=precio;
}

Producto_alimenticio.prototype.imprimeDatos= function (){
    return "Código: "+this.codigo + " <br> " + "Nombre: "+this.nombre + " <br> " + "Precio: "+this.precio;
} 

var prod = new Array(3);

prod[0]=new Producto_alimenticio("6","Melon","1.75");
prod[1]=new Producto_alimenticio("1","Sandia","1.25");
prod[2]=new Producto_alimenticio("9","Banana","1.50");

for(let x=0;x<prod.length;x++){
    document.write(prod[x].imprimeDatos()+"<br><br>");
}
