/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		alert("Usted no es humano")
		sexoIngresado = prompt("ingrese f ó m .");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
	alert("Dato correcto");
}