function mostrar()
{
	var meses;

	meses = document.getElementById("txtIdMes").value;

	switch(meses)
	{
		case "Febrero":
			alert("Tiene 28 días");
			break;

		case "Enero":
		case "Marzo":	
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 días");
			break;

		default:
			alert("Tiene 30 días");
				
	}


}//FIN DE LA FUNCIÓN