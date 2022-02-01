/*
Lopez Gonzalo Javier - DIV I
InstruccionIF 06
*/


function mostrar()
{
	var edad

	edad = document.getElementById('txtIdEdad').value;

	edad < 13 ? alert("Es un niño") : edad >= 13  & edad <= 17 ? alert ("Es un adolescente") : alert("Es un adulto");
}