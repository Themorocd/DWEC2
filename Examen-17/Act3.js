window.onload=iniciar;

let enlace1=true;
let enlace2=true;
let enlace3=true;

function iniciar(){

    document.getElementById("enlace_1").addEventListener("click",ocultar);
    document.getElementById("enlace_2").addEventListener("click",ocultar);
    document.getElementById("enlace_3").addEventListener("click",ocultar);

}

function ocultar(){



    switch (this.id) {
        case "enlace_1":
            
            if(enlace1){

                document.getElementById("contenidos_1").style.display="none";
                document.getElementById(this.id).innerHTML="Mostrar contenido";

                enlace1=false;

            }else{

                document.getElementById("contenidos_1").style.display="block";
                document.getElementById(this.id).innerHTML="Ocultar Contenido";

                enlace1=true;

            }

            break;

        case "enlace_2":

        if(enlace2){

            document.getElementById("contenidos_2").style.display="none";
            document.getElementById(this.id).innerHTML="Mostrar Contenido";

            enlace2=false;

        }else{

            document.getElementById("contenidos_2").style.display="block";
            document.getElementById(this.id).innerHTML="Ocultar Contenido";

            enlace2=true;

        }

        break;

        case "enlace_3":

        if(enlace3){

            document.getElementById("contenidos_3").style.display="none";
            document.getElementById(this.id).innerHTML="Mostrar Contenido";

            enlace3=false;

        }else{

            document.getElementById("contenidos_3").style.display="block";
            document.getElementById(this.id).innerHTML="Ocultar Contenido";

            enlace3=true;

        }

        break;
      
    }

}