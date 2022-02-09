/*
Lopez Gonzalo Javier - DIV I
Instruccion IF 09

Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/


function mostrar()
{
	var num;
	var min = 1;
	var max = 10;

	num = Math.round(Math.random() * (max - min) + min);

	alert(num);

}