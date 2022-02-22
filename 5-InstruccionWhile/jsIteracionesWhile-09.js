/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero = false;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > numeroMaximo || banderaDelPrimero == false )
		{
			numeroMaximo = numeroIngresado; 
		}
		if(numeroIngresado < numeroMinimo || banderaDelPrimero == false )
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = true;
		}

		respuesta = confirm("Desea ingresar otro numero?");

	}while(respuesta == true)

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}