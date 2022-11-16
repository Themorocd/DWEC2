/*
Primero declaro las coordenadas, en este caso x e y
*/
let x=0;//esta se mueve por left
let y=0;//esta se mueve por top
var ancho = window.screen.width;
var alto = window.screen.height;
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
        if(x==ancho-100){
        
        }else{
            x=x+10;
        caja.style.left=x+'px';
        }
        
    }
    if(event.keyCode=='37'){//izq
        if(x==0){
            
        }else{
            x=x-10;
            caja.style.left=x+'px';
        }
        
    }
    if(event.keyCode=='38'){//arriba
        if(y==0){
            
        }else{
            y=y+10;
        caja.style.top=(-y)+'px';
        }
        
    }
    if(event.keyCode=='40'){//abajo
        if(y==alto-240){
           
        }else{
            y=y-10;
            caja.style.top=(-y)+'px';
        }
        
    }
}
/*
onkeydown sirve para dectetar la tecla que pulsamos y la comprobamos con las de arriba para mover en la direccion indicada con los if
*/
window.onkeydown=muevo;