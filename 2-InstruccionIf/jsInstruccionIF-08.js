/*
Lopez Gonzalo Javier - DIV I
InstruccionIF 08
*/


function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;

	estadoCivil = document.getElementById('estadoCivil').value;

	edad < 18 & estadoCivil != "soltero" ? null : alert("Es soltero y no es menor") ;
}