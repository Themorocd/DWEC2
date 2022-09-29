function inicializar(){
    document.getElementById("Crear-ventana").onclick=crearventana;
    
}
var nuevaVentana;
let opciones="left=100,top=100,width=250,height=150";

function crearventana(){

    for(x=1;x<6;x++){
        nuevaVentana=window.open("","",opciones);
        nuevaVentana.document.write("<button onClick=window.close()>Cerrar Ventana</button>");
        
    }
    

}