var opciones="left=100,top=100,width=250,height=150", i=0;
mi_ventana=window.open("","",opciones);
mi_ventana.document.write("Una prueba de abrir ventanas");
mi_ventana.moveTo(400,100);
moverVentana();

function moverVentana(){
    mi_ventana.moveBy(5,5);
    i++;
    if(i<20){
        setTimeout('moverVentana()',100);
    }else{
        mi_ventana.close();
    }
}