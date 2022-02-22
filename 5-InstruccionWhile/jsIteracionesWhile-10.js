/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-De los positivos el mas grande
11-De los negativos el mas chico
*/
function mostrar()
{
	
	var numeroIngresado;
	var respuesta;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var difPosNeg;
	var maximoPositivo;
	var minimoNegativo;

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			contadorPositivos++;

			if(numeroIngresado>maximoPositivo || contadorPositivos == 1)
			{
				maximoPositivo = numeroIngresado;
			}
		}
		else
		{
			if(numeroIngresado < 0)
			{
				sumaNegativos += numeroIngresado;
				contadorNegativos++;

				if(numeroIngresado>minimoNegativo || contadorNegativos == 1)
				{
					minimoNegativo = numeroIngresado;
				}
			}
			else
			{
				contadorCeros++;
			}
		}
		if(numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}

		respuesta = confirm("Desea ingresar otro numero?");

	}while(respuesta == true)

	difPosNeg = contadorPositivos - contadorNegativos;

	document.write("La suma de los negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de los positivos es: " + contadorPositivos + "<br>");
	document.write("La cantidad de los Negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de los Ceros es: " + contadorCeros + "<br>");
	document.write("La cantidad de numeros pares es: " + contadorPares + "<br>");
	
	if(contadorPositivos > 0)
	{
		promedioPositivos = sumaPositivos / contadorNegativos;
		document.write("El promedio de los numeros positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de los positivos <br>");
	}
	if(contadorNegativos > 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
		document.write("El promedio de los numeros negativos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de los negativos <br>");
	}

	document.write("La diferencia entre cantidad de positivos y negativos es: " + difPosNeg + "<br>");
	document.write("El maximo de los numeros positivos es: " + maximoPositivo + "<br>");
	document.write("El minimo de los numeros negativos es: " + minimoNegativo + "<br>");
}