/*
Lopez Gonzalo Javier - DIV I
Instruccion IF 01

Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

*/



function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad == 15) 
	{
		alert("Niña bonita");
	}
}