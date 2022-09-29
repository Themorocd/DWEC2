var nuevaVentana;
        function ampliarVentana(b){

            nuevaVentana=window.open("","","width=500,heigth=150")
            nuevaVentana.document.write("<img src='"+b.src+"' alt='teemo' width='500' height='500'><button onclick='window.close()'>Cerrar</button>");
        }