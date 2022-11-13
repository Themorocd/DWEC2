function cambiocolor(){
    var x=document.getElementById("primera").value;
    var x1=document.getElementById("primera").value;

    x=x.toUpperCase();
    x1=x1.toLowerCase();

    document.getElementById("segunda").value=x;
    document.getElementById("tercera").value=x1;
}