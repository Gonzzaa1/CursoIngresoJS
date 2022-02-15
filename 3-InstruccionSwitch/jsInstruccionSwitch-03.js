/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 3

al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	var meses;
	var mensaje;

	meses = document.getElementById("txtIdMes").value;
	
	switch(meses)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días";
			break;
		
		default :
			mensaje = "Este mes tiene 30 o más días";	
	}
	alert(mensaje);
}