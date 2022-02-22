function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador++;
		acumulador += numeroIngresado;
	}
	
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}