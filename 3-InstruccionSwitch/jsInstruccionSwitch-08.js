/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 8

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
*/



function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace Frio";
			break;
		default:
			mensaje = "Hace Calor";	
	}
	alert(mensaje);

}