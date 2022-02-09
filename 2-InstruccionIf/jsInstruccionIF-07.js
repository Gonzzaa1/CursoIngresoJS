/*
Lopez Gonzalo Javier - DIV I
Instruccion IF 07

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.
*/


function mostrar()
{
	var edad;
	var estadoC;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	estadoC = document.getElementById('estadoCivil').value;

	if(edad < 18 && estadoC != "Soltero")
	{
		alert("Es muy pequeño para No ser soltero");
	} 

}