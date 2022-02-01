/*
Lopez Gonzalo Javier - DIV I
E/S  08

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numDividendo;
	var numDivisor;
	var resultado;

	numDividendo = parseInt(document.getElementById('txtIdNumeroDividendo').value);
	numDivisor = parseInt(document.getElementById('txtIdNumeroDivisor').value);

	resultado = numDividendo % numDivisor;

	alert("el resto es de " + resultado);
}
