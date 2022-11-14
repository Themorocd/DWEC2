window.onload = iniciar;
/*
nota:¿Qué es Blur en javascript?
El evento blur es disparado cuando un elemento ha perdido su foco.
La diferencia principal entre este evento 
y focusout es que sólo el último se propaga (bubbles).
*/
function iniciar(){
    document.getElementById("nombre").addEventListener("blur",compruebo)
    document.getElementById("apellido").addEventListener("blur",compruebo)
    document.getElementById("edad").addEventListener("blur",compruebo)
    document.getElementById("matricula").addEventListener("blur",compruebo)
    document.getElementById("enviar").addEventListener("click",compruebo)

}
/*
document.getelementById:
El método getElementById permite, como su nombre indica,
 seleccionar un elemento del documento
 por medio del valor del atributo id que se le haya asignado.
*/
/*
addEventListener:
El método addEventlistener, es un escuchador que indica al navegador que este 
atento a la interacción del usuario. 
La ventaja es que se escribe totalmente en el JS,
 sin necesidad de tocar el HTML. Su sintaxis es muy sencilla: target.
*/