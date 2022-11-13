function mostrar(objeto){

        if(objeto.value=="Mostrar"){
            document.getElementById("Ocultar").removeAttribute("hidden");
        }else{
            document.getElementById("Ocultar").setAttribute("hidden",true);
        }
}