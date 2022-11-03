function edificio(calle,numero,codigo,plantas)
{
	// Propiedades
	this.calle			= calle;
	this.numero			= numero;
	this.codigo			= codigo;
	this.plantas		= plantas;

		// Métodos
		this.agregarPlantasYPuertas = function (numplantas, puertas)
		{
			this.numplantas	= this.numplantas + numplantas;
			this.puertas	= this.puertas + puertas;
			this.datos		= Array();


			//imprimir('<br>+ agregarPlantasYPuertas('+ numplantas +','+ puertas +')');

			// blucle plantas
			var num = 0;
			for(var i = 1; i<=numplantas; i++)
			{
				// bucle puertas por planta
				for(var p = 1; p<=puertas; p++)
				{
					//imprimir('<br>' + num + '- Creo datos: nombre: - planta: ' + i + ' - puerta: '+p);
					num ++;
				}
			}

			//imprimir("<br>Tamaño Array: "+this.datos.lenght);

		};

		this.modificarNumero = function (numero)
		{
			this.numero	= numero;
		};

		this.modificarCalle = function (calle)
		{
			this.calle	= calle;
		};

		this.modificarCodigoPostal = function (codigo)
		{
			this.codigo	= codigo;
		};

		this.imprimeCalle			= this.calle;
		this.imprimeNumero			= this.numero;
		this.imprimeCodigoPostal	= this.codigo;

		this.agregarPropietario = function (nombre,planta,puerta)
		{

			this.datos = [{"nombre":nombre,
							"planta":planta,
							"puerta":puerta}];
				imprimir('<br>' + nombre + ' es ahora el propietario de la puerta ' +  puerta + ' de la planta ' + planta);

			/*for(var i = 0; i<this.datos_array.length; i++)
			{
				if(this.datos_array[i]['puerta'] == puerta && this.datos_array[i]['planta'] == planta)
				{
					this.datos_array[i]['nombre'] = nombre;
				}
			}*/

		};

		this.imprimePlantas = function ()
		{
			imprimir("<br>Listado de propietarios del edificio "+ this.imprimeCalle +" número " + this.imprimeNumero);
			// Recorrerá el edificio e imprimirá todos los propietarios de cada puerta
			for(var i = 0; i<this.datos.length; i++)
			{
				imprimir('<br> - Propietario del piso ' +  this.datos[i]['puerta'] + ' de la planta ' + this.datos[i]['planta'] + ': '+ this.datos[i]['nombre']);
			}
		};

	imprimir('<br>Construido nuevo edificio en calle: ' + this.calle + ', nº: ' + this.numero + ', CP: ' + this.codigo);

}

function imprimir(texto)
{
	document.write(texto);
}

var edificioA = new edificio('Garcia Prieto','58','15706','0');
var edificioB = new edificio('Camino Caneiro','29','32004','0');
var edificioC = new edificio('San Clemente','s/n','15705','0');

imprimir('<br><br>El código postal del edificio A es: '+ edificioA.imprimeCodigoPostal);
imprimir('<br>La calle del edificio C es: '+ edificioC.imprimeCalle);
imprimir('<br>El edificio B está situado en la calle '+ edificioB.imprimeCodigoPostal + ' número ' + edificioB.imprimeNumero);
imprimir('<br>');
edificioA.agregarPlantasYPuertas("2","3");
imprimir('<br>');
edificioA.agregarPropietario('Jose Antonio Lopez','1','1');
edificioA.agregarPropietario('Luisa Martinez','1','2');
edificioA.agregarPropietario('Marta Castellón','1','3');
edificioA.agregarPropietario('Antonio Pereira','2','2');
imprimir('<br>');
edificioA.imprimePlantas();
imprimir('<br>');
edificioA.agregarPlantasYPuertas("1","3");
imprimir('<br>');
edificioA.agregarPropietario('Pedro Meijide','3','2');
imprimir('<br>');
edificioA.imprimePlantas();