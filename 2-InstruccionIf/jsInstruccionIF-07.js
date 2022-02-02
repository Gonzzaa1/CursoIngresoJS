/*
Lopez Gonzalo Javier - DIV I
InstruccionIF 07
*/


function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	
	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad < 18 & estadoCivil != "Soltero") alert("Es muy pequeño para No ser soltero");

}