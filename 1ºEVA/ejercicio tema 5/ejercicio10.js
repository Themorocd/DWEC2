
function cambiofuente(){
    document.getElementById("idtext").style.fontFamily=document.getElementById("fuentes").value;

}
function cambioestilo(){
    if(document.getElementById("estilos").value=="bold"){
        document.getElementById("idtext").style.fontWeight=document.getElementById("estilos").value;
    } else{
        document.getElementById("idtext").style.fontStyle=document.getElementById("estilos").value;
        document.getElementById("idtext").style.fontWeight="lighter";
    }
}

function cambiocolor(){
    document.getElementById("idtext").style.color=document.getElementById("colores").value;
}

function cambiotamaño(){
    document.getElementById("idtext").style.fontSize=document.getElementById("sizes").value;
}

