let now = new Date();

var dia = now.getDay();
var mes = now.getMonth();
var año = now.getFullYear();
var hora = now.getHours();
var minutos= now.getMinutes();
var segundos = now.getSeconds();


alert( "fecha: "+`${dia}/${mes}/${año}`+" hora: "+`${hora}/${minutos}/${segundos}`);


