

function now(){

    let dia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let now = new Date();

    if (now.getHours()>12) {
       horaimprimida=(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" PM"+" "+
        dia[now.getDay()-1]+" "+now.getDate()+" de "+mes[now.getMonth()]+" de "+now.getFullYear());
        
    }else{
        horaimprimida=(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" AM"+" "+
        dia[now.getDay()-1]+" "+now.getDate()+" de "+mes[now.getMonth()]+" de "+now.getFullYear());
    }

        //document.write(dia[now.getDay()-1]+" "+now.getDate()+" de "+mes[now.getMonth()]+" de "+now.getFullYear());*/
        //setTimeout("now()",1000)
        document.forms_fecha.fecha.value = horaimprimida;
        setInterval("now()",1000);
    
    }
    
    
        
        


