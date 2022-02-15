/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 1
*/


function mostrar()
{
	var meses;
	var mensaje = "";

	meses = document.getElementById("txtIdMes").value;

	switch(meses)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!!";
			break;
		case "Marzo":
			mensaje = "A clases!!!";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!!";
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!";
			break;		
	}
	alert(mensaje);
}