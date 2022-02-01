/*
Lopez Gonzalo Javier - DIV I
E/S 05

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresado;

	nombreIngresado = document.getElementById('txtIdNombre').value;
	edadIngresado = document.getElementById('txtIdEdad').value;

	alert("usted se llama " + nombreIngresado + " y tiene " + edadIngresado + " años");
}

