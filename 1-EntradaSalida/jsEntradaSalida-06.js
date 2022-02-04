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

	numUno = document.getElementById('txtIdNumeroUno').value;
	numDos = document.getElementById('txtIdNumeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	suma = numUno +	 numDos;

	alert("La suma es de " + suma);

}
