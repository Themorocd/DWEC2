window.onload=iniciar;

function iniciar(){
    let imagenes=document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseover",grande,true);
        imagenes[i].addEventListener("mouseout",pequeño,true);

    }
}
function grande(){
    this.style.width="300px";
}
function pequeño(){
    this.style.width="100px";
}