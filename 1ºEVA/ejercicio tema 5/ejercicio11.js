window.onload = iniciar;
/*
window.onload:
El evento onload se usa para ejecutar una función de 
JavaScript tan pronto como una página haya cargado
*/
/*
nota:¿Qué es Blur en javascript?
El evento blur es disparado cuando un elemento ha perdido su foco.
La diferencia principal entre este evento 
y focusout es que sólo el último se propaga (bubbles).
*/
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

function iniciar(){
    document.getElementById("nombre").addEventListener("blur",compruebo)
    document.getElementById("apellidos").addEventListener("blur",compruebo)
    document.getElementById("edad").addEventListener("blur",compruebo)
    document.getElementById("matricula").addEventListener("blur",compruebo)
    document.getElementById("enviar").addEventListener("click",pasoformu)

}

let nombre=false,apellidos=false,edad=false,matricula=false;

function compruebo(){

    let pasomayusculas = this.value;//hace referencia a este objeto,en este caso a la opcion que este escribiendo

    pasomayusculas=pasomayusculas.toUpperCase();
    this.value=pasomayusculas;//paso los campos a mayusculas

    if(this.name=="nombre"){
        let esnombre=/^\D+$/;

        /*
        ¿Qué es test en JS?
        El método test() ejecuta la búsqueda de una ocurrencia entre una 
        expresión regular y una cadena especificada. 
        Devuelve true o false
        */
       if(!esnombre.test(pasomayusculas)){
        document.getElementById("nombre").focus();
        /*
        ¿Qué hace focus ()?
        La pseudo-clase :focus CSS representa un elemento (como una entrada de formulario)
        que ha recibido el foco. 
        Generalmente se activa cuando el usuario hace clic
        */
        document.getElementById("errores").innerHTML="ERROR EN NOMBRE";
        /*
        InnerHTML es una propiedad que nos permite leer un dato o asignarlo al 
        contenido de un div o bien, del mismo control. Nos facilita la asignación
         de valores a controles. En el ejemplo utilizamos la propiedad
         document. getElementById para tomar la referencia del id del contenedor.
        */
       }else if((document.getElementById("nombre").value.length<3)||(document.getElementById("nombre").value.length>15)){
        document.getElementById("errores").innerHTML="ERROR EN LONGITUD";
       }else{
        document.getElementById("errores").innerHTML="";
        nombre=true;
       }
    } else if(this.name =="apellidos"){
        
        let esapellido = /^\D+\s[a-zA-Z]+$/;

        if(!esapellido.test(pasomayusculas)){

            document.getElementById("apellidos").focus();
            document.getElementById("errores").innerHTML="ERROR EN APELLIDO";
        }else{
            document.getElementById("errores").innerHTML="";
            apellidos=true;
        }

    }else if(this.name=="edad"){
        let compruebaEDAD= /^(1[89])|(2[0-9])|(3[0-9])|(4[0-9])|(5[0-9])|(6[0-9])|(7[0-9])|(8[0-5])$/;

        if(!compruebaEDAD.test(pasomayusculas)){
            document.getElementById("edad").focus();
            document.getElementById("errores").innerHTML="ERROR EN EDAD";

        }else{
            document.getElementById("errores").innerHTML="";
            edad=true;
        }
    }else if(this.name=="matricula"){
        
        let commatricula=/^\d{4}\s?([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;

        if(!commatricula.test(pasomayusculas)){

            document.getElementById("matricula").focus();//esto sirve para que no pierda el foco al salir un error y me impida salir de el hasta que no se arregle el error
            document.getElementById("errores").innerHTML="ERROR EN MATRICULA";

        }else{
            document.getElementById("errores").innerHTML="";
            matricula=true;
        }

    }
}//termina funcion

function pasoformu(){

    let confirmo = confirm("ESTAS SEGURO DE ENVIARLO??");

    if(confirmo && nombre && apellidos && edad && matricula){

        alert("DATOS ENVIADOS CORRECTAMENTE");
        document.getElementById("formulario").onsubmit;
        /*
        El atributo onSubmit permite asociar una función de test en el formulario. 
        Si la función retorna falso, les datos del formulario no se envían, 
        quedan en la página. Se trata de un simple botón y no de envío, 
        es necesario asociarle
        código JavaScript que se ejecuta con el evento onclick.
        */
    }else{
        alert("NO SE HAN ENVIADO LOS DATOS");
    }

}