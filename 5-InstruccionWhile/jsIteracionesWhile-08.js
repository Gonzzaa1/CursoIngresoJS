/*
Lopez Gonzalo Javier - DIV I
Iteraciones While - 8


Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(numeroIngresado > 100 || numeroIngresado < -100)
		{
			numeroIngresado = prompt("Reingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado<0)
		{
			multiplicacionNegativos *= numeroIngresado;
		}
		else
		{
			sumaPositivos += numeroIngresado;
		}
	
		respuesta = confirm("Desea ingresar otro numero?");

	}while(respuesta == true)


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}