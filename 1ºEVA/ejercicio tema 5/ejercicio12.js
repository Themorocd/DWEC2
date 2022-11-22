/*
Primero declaro las coordenadas, en este caso x e y
*/
let x=0;//esta se mueve por left
let y=0;//esta se mueve por top
var ancho = outerWidth;
var alto = outerHeight;
/*
enganchamos el id del elemento a mover
*/
var caja=document.getElementById("caja");
/*
Creamos la funcion que se va a encargar de mover el objeto
*/
function muevo(event){
/*
el codigo numero de las teclas derecha:39,izq:37,arriba:38,abajo:49
*/
    if(event.keyCode=='39'){//derecha
        if(x>=ancho){
        
        }else{
            x=x+20;
        caja.style.left=x+'px';
        }
        
    }
    if(event.keyCode=='37'){//izq
        if(x==0){
            
        }else{
            x=x-20;
            caja.style.left=x+'px';
        }
        
    }
    if(event.keyCode=='38'){//arriba
        if(y==0){
            
        }else{
            y=y+20;
        caja.style.top=(-y)+'px';
        }
        
    }
    if(event.keyCode=='40'){//abajo
        if(y>alto-200){
           
        }else{
            y=y-20;
            caja.style.top=(-y)+'px';
        }
        
    }
}
/*
onkeydown sirve para dectetar la tecla que pulsamos y la comprobamos con las de arriba para mover en la direccion indicada con los if
*/
window.onkeydown=muevo;