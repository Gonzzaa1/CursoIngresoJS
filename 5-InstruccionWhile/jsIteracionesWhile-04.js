/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado <= 0 && numeroIngresado >= 9)
	{
		alert("Dato no valido");
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
	}
	document.getElementById("txtIdNumero").value = "numero : "+ numeroIngresado + " dato valido";
}