/*
Lopez Gonzalo Javier - DIV I
Instruccion switch 9

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion 
del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacion ;
	var destino;
	var porciento = 0;
	var precioFinal;
	var tarifa = 15000;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porciento = 20;
					break;
				case "Mar de plata":
					porciento = -20;
					break;
				default:
					porciento = -10;	
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porciento = -20;
					break;
				case "Mar de plata":
					porciento = 20;
					break;
				default:
					porciento = -10;	
			}
			break;
		default:
			if( destino != "Cordoba")
			{
				porciento = 10;
			}
	}

	precioFinal = tarifa + tarifa * porciento / 100;

	mensaje = "El precio es de $" + precioFinal;
	alert(mensaje);
}
	
/*if(destino  == "Bariloche")
{
	porciento = -20;
}
else
{
	porciento = -10;
	
	if(destino == "Mar del plata")
	{
		porciento = 20;
	}
}*/
/*if(destino  == "Bariloche")
{
	porciento = 20;
}
else
{
	porciento = -10;

	if(destino == "Mar del plata")
	{
		porciento = -20;
	}
}*/
