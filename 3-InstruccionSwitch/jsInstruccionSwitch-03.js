function mostrar()
{
	var meses;

	meses = document.getElementById("txtIdMes").value;
	
	switch(meses)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		
		default :
			alert("Este mes tiene 30 o más días");	
	}


}