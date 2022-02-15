/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 2

al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	var meses;
	var mensaje = "";

	meses = document.getElementById("txtIdMes").value;

	switch(meses)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
			break;

		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio";
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahoa calor";
			break;				
	}
	alert(mensaje);
}