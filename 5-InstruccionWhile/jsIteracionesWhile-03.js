/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	clave = prompt("ingrese el número clave.");

	while(clave != "utn750")
	{
		alert("Clave incorrecta");
		clave = prompt("ingrese el número clave.");
	}
	alert("Clave correcta");
	
}
