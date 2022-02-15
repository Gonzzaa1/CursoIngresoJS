/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 10

una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	var estacion;
	var destino;
	var mensaje;
	var viaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;



	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				viaje = true;
			}
			break;
		case "Verano":
			if(destino == "Mar del plata" && destino == "Cataratas")
			{
				viaje = true;
			}
			break;
		case "Primavera":
			if(destino == "Bariloche")
			{
				viaje = false;
			}
			break;
		default:
			viaje = true;			
	}
	if(viaje == true)
	{
		mensaje = "Se viaja"
	}
	else
	{
		mensaje = "No se viaja";
	}
	alert(mensaje);
}