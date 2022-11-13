function redi(){
    let url="https://cdpjosecabrera.es/"
    var nombre="";

    nombre=document.getElementById("text").value;
    alert(nombre+" se va a dirigir a: "+url);

    setTimeout(location.href=url,2000);
}