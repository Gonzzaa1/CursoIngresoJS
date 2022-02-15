/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 4

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	var meses;
	var mensaje;

	meses = document.getElementById("txtIdMes").value;

	switch(meses)
	{
		case "Febrero":
			mensaje = "Tiene 28 días";
			break;

		case "Abril":
		case "Junio":	
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 días";
			break;

		default:
			mensaje = "Tiene 31 días";
				
	}
	alert(mensaje);
}