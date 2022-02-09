/*
Lopez Gonzalo Javier - DIV I
Instruccion IF 02

Al ingresar una edad debemos informar solo si la persona es mayor de edad.
*/


function mostrar()
{
	
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad >= 18) 
	{
		alert("Es mayor de edad");
	}
}