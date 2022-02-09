/*
Lopez Gonzalo Javier - DIV I
Instruccion IF 06

Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/


function mostrar()
{
	var edad

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad < 13)
	{
		alert("Es un niño");
	} 
	else 
	{
		if(edad >= 13  && edad <= 17)
		{
			alert ("Es un adolescente");
		}
		else
		{
			alert("Es un adulto");
		}  
	}
}

