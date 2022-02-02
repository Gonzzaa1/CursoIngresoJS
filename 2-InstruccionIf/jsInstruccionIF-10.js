function mostrar()
{
	var nota;
	var min = 1;
	var max = 10;

	nota = Math.round(Math.random() * (max - min) + min);


	nota >= 9 ? alert(nota + " EXCELENTE") : nota >= 4 ? alert(nota + " APROBO") : alert(nota + " Vamos la proxima se puede") ;

	//alert(num);
}