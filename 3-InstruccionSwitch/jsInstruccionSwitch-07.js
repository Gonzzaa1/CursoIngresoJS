/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 7

Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/


function mostrar()
{
	var destino;
	var mensaje = "";

	destino = document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "OESTE";
			break;

		case "Cataratas":
			mensaje = "NORTE";
			break;

		case "Mar del plata":
			mensaje = "ESTE";
			break;

		case "Ushuaia":
			mensaje = "SUR";
			break;
	}
	alert(mensaje);
}