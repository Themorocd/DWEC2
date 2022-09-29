
    function inicializar(){
        document.getElementById("Crear-ventana").onclick=crearventana;
        document.getElementById("Cerrar-ventana").onclick=cerrarventana;
    }
    var nuevaVentana;
    function crearventana(){
        nuevaVentana= window.open("http://www.google.es","","height=800, width=600");
    }
    function cerrarventana(){
        if(nuevaVentana){
            nuevaVentana.close();nuevaVentana=null;
        }
    }    