/*
Lopez Gonzalo Javier - DIV I
E/S 06

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno;
	var numDos;
	var suma;

	numUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	suma = numUno +	 numDos;

	alert("La suma es de " + suma);

}
