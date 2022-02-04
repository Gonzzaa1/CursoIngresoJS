function mostrar()
{
	var destino;

	destino = document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Bariloche":
			alert("OESTE");
			break;

		case "Cataratas":
			alert("NORTE");
			break;

		case "Mar del plata":
			alert("ESTE");
			break;

		case "Ushuaia":
			alert("SUR");
			break;
	}

}