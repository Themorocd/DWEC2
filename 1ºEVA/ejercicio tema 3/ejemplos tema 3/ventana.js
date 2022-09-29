
    function inicializar(){
        document.getElementById("Crear-ventana").onclick=crearventana;
        document.getElementById("Cerrar-ventana").onclick=cerrarventana;
    }
    var nuevaVentana;
    function crearventana(){
        nuevaVentana= window.open("http://www.google.es","","height=400, width=800");
    }
    function cerrarventana(){
        if(nuevaVentana){
            nuevaVentana.close();nuevaVentana=null;
        }
    }    
