/*
Lopez Gonzalo Javier - DIV I
E/S 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var numUno;
	var numDos;
	var resultado;

	numUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	resultado = numUno +	numDos;

	alert("La suma es " + resultado);	
}

function restar()
{

	var numUno;
	var numDos;
	var resultado;

	numUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	resultado = numUno - numDos;

	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var resultado;

	numUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	resultado = numUno * numDos;

	alert("La multiplicacion es " + resultado);
}

function dividir()
{
	var numUno;
	var numDos;
	var resultado;

	numUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	resultado = numUno / numDos;

	alert("La division es " + resultado);
}

