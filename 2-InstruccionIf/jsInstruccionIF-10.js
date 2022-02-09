/*
Lopez Gonzalo Javier - DIV I
Instruccion IF 10


Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/


function mostrar()
{
	var nota;
	var min = 1;
	var max = 10;

	nota = Math.round(Math.random() * (max - min) + min);


	if(nota >= 9)
	{
		alert(nota + " = EXCELENTE")
	}
	else
	{
		if(nota >= 4)
		{
			alert(nota + " = APROBO")
		}
		else
		{
			alert(nota + " = Vamos la proxima se puede") ;
		} 
	}  

}