window.onload=iniciar;

let totalFilas=0;
    
function iniciar(){
    nodotabla= document.getElementById("tabla");
    document.getElementById("eliminar").disabled=true;
    document.getElementById("leer").disabled=true;
    document.getElementById("aumentar").disabled=true;
    document.getElementById("disminuir").disabled=true;
    document.getElementById("agregar").addEventListener("click",agregar);
    document.getElementById("eliminar").addEventListener("click",eliminar);
    document.getElementById("leer").addEventListener("click",leer);
    document.getElementById("aumentar").addEventListener("click",aumentar);
    document.getElementById("disminuir").addEventListener("click",disminuir);
    
}

function agregar(){
    document.getElementById("eliminar").disabled=false;
    document.getElementById("leer").disabled=false;
    document.getElementById("aumentar").disabled=false;
    document.getElementById("disminuir").disabled=false;

    if(totalFilas<5){

        totalFilas+=1;
        nodofila=document.createElement("tr");//crea un elemento tr
        nodotabla=document.appendChild(nodofila);//añada el elemento creado
        for(celdas=0;celdas<=2;celdas++){

            nodoCelda=document.createElement("td");//crea un td
            nodofila.appendChild  (nodoCelda);//lo añade
            valorTexto = document.createTextNode("Fila" + totalFilas+ "Celda"+ (celdas+1));//
            nodoCelda.appendChild (valorTexto);//añade ese balor

        }

    }

    if(totalFilas==5){

        document.getElementById('agregar').disabled=true;

    } if(totalFilas==1){
        document.getElementById('eliminar').disabled=true;
    }



}

function aumentar(){

    if(parseInt(nodotabla.border)<10){
        nodotabla.border = parseInt(nodotabla.border)+1;
    }else{
        alert("Ha superado el limite del tamaño permitido="+ parseInt(nodotabla.border));
    }

}

function disminuir(){
    if(nodotabla.border > 1){
        nodotabla.border -=1;
    }
}