/*
Lopez Gonzalo Javier - DIV I
E/S 09

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo = parseInt(document.getElementById('txtIdSueldo').value);
	
	resultado = sueldo * 1.10 ;
	
	document.getElementById('txtIdResultado').value = resultado;
	
}
