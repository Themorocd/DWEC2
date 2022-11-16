window.onload=iniciar;

function iniciar(){
    //inicio el foco de nombre y apellidos y el click en enviar y limpiar
    document.getElementById("nombre").addEventListener("blur",pasomayus);
    document.getElementById("apellidos").addEventListener("blur",pasomayus);
    document.getElementById("enviar").addEventListener("click",validar);
    document.getElementById("button").addEventListener("click",limpiar);
}

function pasomayus(){
    //paso a mayusculas el value que le mande
    let variable = "";

    variable = this.value;

    variable = variable.toUpperCase();

    this.value = variable;

}

function limpiar(){
    //limpio todos los errores (reseteo como tal la pagina)
    document.getElementById("nombre").classList.remove("error");
    document.getElementById("apellidos").classList.remove("error");
    document.getElementById("nif").classList.remove("error");
    document.getElementById("telefono").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("marca").classList.remove("error");
    document.getElementById("modelo").classList.remove("error");
    document.getElementById("matricula").classList.remove("error");
    document.getElementById("fecha").classList.remove("error");
    document.getElementById("hora").classList.remove("error");
    document.getElementById("entidad").classList.remove("error");
    document.getElementById("iban").classList.remove("error");
    document.getElementById("errores").innerHTML="";


}

function compruebonombre(){
    document.getElementById("errores").innerHTML="";
    document.getElementById("nombre").classList.remove("error");

    let pater=/^[a-zA-Z\sáéíóúÁÉÍÓÚª]{3,15}$/;//para validar que solo sean letras

    let nombre="";
    nombre=document.getElementById("nombre").value;

    if(nombre.length<3||nombre.length>15){
        document.getElementById("errores").innerHTML="ERROR:longitud nombre no valida";
        document.getElementById("nombre").focus();
        document.getElementById("nombre").classList.add("error");
        return false;

    }else if(nombre.length==0){
        document.getElementById("errores").innerHTML="ERROR:nombre vacio";
        document.getElementById("nombre").focus();
        document.getElementById("nombre").classList.add("error");
        return false;
    }else if(!pater.test(nombre)){
        document.getElementById("errores").innerHTML="ERROR:No puede contener numeros";
        document.getElementById("nombre").focus();
        document.getElementById("nombre").classList.add("error");
        return false;

    }
    return true;
}

function comprueboapellido(){
    document.getElementById("errores").innerHTML="";
    document.getElementById("apellidos").classList.remove("error");

    let pater=/^[a-zA-Z\sáéíóúÁÉÍÓÚª]{3,30}$/;//para validar que solo sean letras

    let apellidos="";
    apellidos=document.getElementById("apellidos").value;

    if(apellidos.length<3||apellidos.length>30){
        document.getElementById("errores").innerHTML="ERROR:longitud apellidos no valida";
        document.getElementById("apellidos").focus();
        document.getElementById("apellidos").classList.add("error");
        return false;

    }else if(apellidos.length==0){
        document.getElementById("errores").innerHTML="ERROR:apellidos vacio";
        document.getElementById("apellidos").focus();
        document.getElementById("apellidos").classList.add("error");
        return false;
    }else if(!pater.test(apellidos)){
        document.getElementById("errores").innerHTML="ERROR:No puede contener numeros";
        document.getElementById("apellidos").focus();
        document.getElementById("apellidos").classList.add("error");
        return false;

    }
    return true;
}

function compruebodni(){

    let paterdni=/^\d{2}[.]\d{3}[.]\d{3}[-][A-Z]$/;
    document.getElementById("nif").classList.remove("error");
    let dni="";
    dni=document.getElementById("nif").value;

    if(dni.length==0){
        document.getElementById("errores").innerHTML="ERROR:No puede estar vacio";
        document.getElementById("nif").focus();
        document.getElementById("nif").classList.add("error");
        return false;
    }else if(!paterdni.test(dni)){
        document.getElementById("errores").innerHTML="ERROR:No cumple requisitos";
        document.getElementById("nif").focus();
        document.getElementById("nif").classList.add("error");
        return false;

    }else{
        for(let index=0;index<dni.length;index++){

            dni=dni.replace(".","");
            dni=dni.replace("-","");

        }

        let letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        let numdni=0;
        numdni=dni.substring(0,8);
        let letradni=dni.charAt(8);
        let resto=numdni%23;
        if(letras[resto]!=letradni){
            document.getElementById("errores").innerHTML="ERROR:No Valido";
            document.getElementById("nif").focus();
            document.getElementById("nif").classList.add("error");
            return false;


        }else{
            return true;
        }
    }

}

function compruebotfl(){
    let patertfl=/^(\(\+34\))?\d{9}$/;

    let numtfl=document.getElementById("telefono").value;
    document.getElementById("telefono").classList.remove("error");

    if(!patertfl.test(numtfl)||numtfl.length==0){
        document.getElementById("errores").innerHTML="ERROR: TELEFONO INCORRECTO";
        document.getElementById("telefono").focus();
        document.getElementById("telefono").classList.add("error");
        return false;
    }else{
        return true;
    }

}

function comprueboemeil(){

    let pateremail=/^[^\.]+[@]cdpjosecabrera[.]es$/;

    let email=document.getElementById("email").value;
    document.getElementById("email").classList.remove("error");

    if(!pateremail.test(email)||email.length==0){

        document.getElementById("errores").innerHTML="ERROR:Email No Valido";
        document.getElementById("email").focus();
        document.getElementById("email").classList.add("error");
        return false;

    }else{
        return true;
    }

}

function compruebomarymodel(){

    let patern=/^[a-zA-Zá-úÁ-Ú\d]+$/;

    let marca=document.getElementById("marca").value;
    let modelo=document.getElementById("modelo").value;

    document.getElementById("marca").classList.remove("error");
    document.getElementById("modelo").classList.remove("error");

    if(!patern.test(marca)||marca.length==0){
        
        document.getElementById("errores").innerHTML="ERROR:Marca No Valido";
        document.getElementById("marca").focus();
        document.getElementById("marca").classList.add("error");
        return false;

    }else if(!patern.test(modelo)||modelo.length==0){

        document.getElementById("errores").innerHTML="ERROR:Modelo No Valido";
        document.getElementById("modelo").focus();
        document.getElementById("modelo").classList.add("error");
        return false;
    }else{
        return true;
    }

}

function compruebomatricula(){

    let patermatri=/^\d{4}\s?([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;

    let matricula = document.getElementById("matricula").value;
    document.getElementById("matricula").classList.remove("error");

    if(!patermatri.test(matricula)||matricula.length==0){
        document.getElementById("errores").innerHTML="ERROR:Matricula No Valido";
        document.getElementById("matricula").focus();
        document.getElementById("matricula").classList.add("error");
        return false;
    } else{
        return true;
    }

}

function compruebofecha(){

    let paterfecha=/^([1][5-9]|[2][0-9]|([3][0]))[\/]([1][1])[\/]2021$/;

    let fecha = document.getElementById("fecha").value;
    document.getElementById("fecha").classList.remove("error");

    if(!paterfecha.test(fecha)||fecha.length==0){
        document.getElementById("errores").innerHTML="ERROR:Fecha No Valida";
        document.getElementById("fecha").focus();
        document.getElementById("fecha").classList.add("error");
        return false;
    }else{
        return true;
    }

}

function compruebohora(){

    let paterhora=/^(((0?[8-9])|([1][04]))[:]\d{2})|(15:00)$/;

    let hora = document.getElementById("hora").value;
    document.getElementById("hora").classList.remove("error");

    if(!paterhora.test(hora)|hora.length==0){
        document.getElementById("errores").innerHTML="ERROR:Hora No Valida";
        document.getElementById("hora").focus();
        document.getElementById("hora").classList.add("error");
        return false;
    }else{
        return true;
    }

}

function comprueboentidad(){

    let entidad = document.getElementById("entidad").value;
    document.getElementById("entidad").classList.remove("error");

    if(entidad=="0"){
        document.getElementById("errores").innerHTML="ERROR:Entidad No Valida";
        document.getElementById("entidad").focus();
        document.getElementById("entidad").classList.add("error");
        return false;
    }else{
        return true;
    }

}

function comprueboIBAN(){

    let pateriban=/^ES\d{2}(2100|0049|2038)|d{16}$/;

    let iban = document.getElementById("iban").value;
    document.getElementById("iban").classList.remove("error");

    if(!pateriban.test(iban)||iban.length==0){
        document.getElementById("errores").innerHTML="ERROR:Iban No Valido";
        document.getElementById("iban").focus();
        document.getElementById("iban").classList.add("error");
        return false;
    }else{
       
        let enti=iban.substring(4,8);
        let enticorrecta="";
        let elegir=document.getElementById("entidad").value;

        switch(elegir){
            case "C":
                enticorrecta="2100";
                if(enti!=enticorrecta){
                    document.getElementById("errores").innerHTML="ERROR:Iban No Valido";
                    document.getElementById("iban").focus();
                    document.getElementById("iban").classList.add("error");
                    return false;
                }
                return true;

            case "BS":
                enticorrecta="0049";
                if(enti!=enticorrecta){
                    document.getElementById("errores").innerHTML="ERROR:Iban No Valido";
                    document.getElementById("iban").focus();
                    document.getElementById("iban").classList.add("error");
                    return false;
                }
                return true;

            case "BK":
                enticorrecta="2038";
                if(enti!=enticorrecta){
                    document.getElementById("errores").innerHTML="ERROR:Iban No Valido";
                    document.getElementById("iban").focus();
                    document.getElementById("iban").classList.add("error");
                    return false;
                }
                return true;
        }

    }

}

function validar(evento){

    if(compruebonombre()&&comprueboapellido()&&compruebodni()&&compruebotfl()&&comprueboemeil()&&compruebomarymodel()&&compruebomatricula()&&compruebofecha()&&compruebohora()&&comprueboentidad()&&comprueboIBAN()){
       
    }else{
        evento.preventDefault();
    }

}