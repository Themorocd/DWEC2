

function Instituto (nombre,poblacion,codigoPostal){
    this.nombre=nombre;
    this.poblacion=poblacion;
    this.codigoPostal=codigoPostal;
    this.tutores = new Array();//es un array bidimensional
}
var institutoA = new Instituto("CDP Jose Cabrera","trebujena","15706");

//agregarOfertaycurso(curso,oferta)

this.agregarCursoYoferta= function(curso,oferta){
    var ofertaforma = ["ENFERMERIA","COCINA","RAYOS","WEB"];
    if((curso<=0) || (curso>2)){
        document.write("No se permite ese curso"+ curso + " o esa oferta formativa"+ oferta +"<br/>");
    }else{
        if(this.tutores.length == 0 ){
            for(var x = 0;x<curso;x++){
                this.tutores[x] = new Array();
                for(var z = 0;z<ofertaforma.length;z++);
                this.tutores[x].push("sin tutor");
            }
        }
    }
}

//agregatutor

this.agregartutor = function(nombre,curso,oferta){
    var ofertaforma = ["ENFERMERIA","COCINA","RAYOS","WEB"];
    if((curso<=0) || (curso>2)){
        document.write("No se permite ese curso"+ curso + " o esa oferta formativa"+ oferta +
        "por tanto no se puede asignar tutor <br/>");
    }else{
        if(oferta=="ENFERMERIA")oferta_ele=0;
        if(oferta=="COCINA")oferta_ele=1;
        if(oferta=="RAYOS")oferta_ele=2;
        if(oferta=="WEB")oferta_ele=3;

        this.tutores[(curso-1)][oferta_ele]=nombre;
        document.write("<li>"+this.tutores[curso-1][oferta_ele]+" es ahora el tutor/a del curso"+(curso)+" de "+ (oferta)+ "</li>");
    }
};

//imprimirtutores()

this.imprimotutores=function(){
    var ofertaforma = ["ENFERMERIA","COCINA","RAYOS","WEB"];
    document.write("<h2>Listado de tutores del instituto"+ institutoA.imprimeNombre()+"</h2>");
    for(var x = 0;x<this.tutores.length;x++){
        for(var z = 0;z<this.tutores[x].length;z++){
            document.write("<li>El tutor del curso"+(x+1)+ " de "+ ofertaforma[z] +": "+this.tutores[x][z]+"</li>");
        }
    }
};

this.imprimotablatutor=function(){
    var ofertaforma = ["ENFERMERIA","COCINA","RAYOS","WEB"];
    document.write("<table border='1'>");
    document.write("<tr> Listado de tutores del instituto "+ institutoA.imprimeNombre()+"</tr>");
    for(var x=0;x<this.tutores.length;x++){
        document.write("<tr>");
        for(var z = 0;z<this.tutores[x].length;z++){
            document.write("<td>"+ this.tutores[x][z]+"</td>");
        }
        document.write("<tr>");
    }
    document.write("</table>");
};
/*
//imprime nombre(devuelve nombre del insti)
this.imprimeNombre = function(){
    return (this.nombre);
};
//imprimePoblacion(devuelve la poblacion del instituto)
this.imprimepoblacion=function(){
    return (this.poblacion);
};
//imprime codigo postal ( devuelve el codigo postal)
this.imprimeCodigoPostal = function(){
    return (this.codigoPostal);
};

//document.write("El instituto A se llama "+institutoA.imprimeNombre()+ "esta en"+ institutoA.imprimepoblacion()+"<br>");
console.log("El instituto A se llama "+institutoA.imprimeNombre()+"esta en "+institutoA.imprimepoblacion()+"<br>");*/