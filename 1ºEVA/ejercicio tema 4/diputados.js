function diputados(nombre,apellidos,dni,edad,partido){
    
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.edad = edad;
    this.partido = partido;
    
    
    this.getNombre = function(){
        return this.nombre;
    };

    this.setNombre = function(nombre){
        this.nombre = nombre;
    };
    this.setNombre(nombre);

    this.getApellidos = function(){
        return this.apellidos;
    };

    this.setApellidos = function(apellidos){
        this.apellidos = apellidos;
    };
    this.setApellidos(apellidos);

    this.getDni = function(){
        return this.dni;
    };

    this.setDni = function(dni){
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        
        dni=dni.replaceAll(" ","");

        let numerodni=0;
        numerodni=dni.substr(0,8);

        let letradni = dni.charAt(8);

        let resto = numerodni%23;
        
        if(letras[resto] != letradni){
            this.dni="error en dni";
        }else{
            this.dni=dni;
        }
    };
    this.setDni(dni);

    this.getEdad = function(){
        return this.edad;
    };

    this.setEdad = function(edad){
        if(edad>0 && edad<40){
            this.edad=edad;
        }else{
            this.edad="incorrecto";
        }
    };
    this.setEdad(edad);

    this.getPartido = function(){
        return this.partido;
    };

    this.setPartido = function(partido){
        this.partido = partido;
    };
    this.setPartido(partido);
}

    diputados.prototype.toString=function(){

        return("Nombre: "+this.getNombre()+", Apellidos: "+this.getApellidos()+", Dni: "+this.getDni()+
        ", Edad: "+this.getEdad()+", Partido: "+this.getPartido());
        
    }

var Parlamento = new Array();
var diputados1 = new diputados("Manolo", "Lopez", "52334295B", 60,"Azul");
var diputados2 = new diputados("Jacobo", "Albertos", "31665729L", 18,"Amarillo");
Parlamento[0]= diputados1;
Parlamento[1] = diputados2;
for(var x=0; x<Parlamento.length;x++){
    document.write(Parlamento[x].toString()+"<br>");
}





