 function infor(){
    var x = document.getElementById("comidad");
    var texto = x.options[x.selectedIndex].text;
    var valor = x.options[x.selectedIndex].value;
    alert("Datos de la opcion seleccionada: Texto:"+texto+" Valor: "+valor);
    
}