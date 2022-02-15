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
	var descuento = 0;
	var aumento = 0;
	var precioFinal;
	var tarifa = 15000;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	

	switch(estacion)
	{
		case "Invierno":
			if(destino  == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if(destino == "Mar del plata")
				{
					descuento = 20;
				}
				else
				{
					descuento = 10
				}
			}
			break;
		case "Verano":
			if(destino  == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destino == "Mar del plata")
				{
					aumento = 20;
				}
				else
				{
					descuento = 10
				}
			}
			break;
		case "Otoño":
		case "Primavera":
			if( destino != "Cordoba")
			{
				aumento = 10;
			}
			break;
	}

	if( aumento != 0)
	{
		precioFinal = tarifa + tarifa * aumento / 100;
	}
	else
	{
		precioFinal = tarifa;

		if ( descuento != 0)
		{
			precioFinal = tarifa - tarifa * descuento / 100;
		}
	}
	mensaje = "El precio es de $" + precioFinal;
	alert(mensaje);
}

/*
	var estacion ;
	var destino;
	var tarifa = 15000;
	var porcentaje;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
				{
					case "Bariloche":
						porcentaje = 20;
						precio = tarifa + tarifa * porcentaje / 100;
						break;
					case "Cataratas":
					case "Cordoba":
						porcentaje = 10;
						precio = tarifa - tarifa * porcentaje / 100;	
						break;
					case "Mar del plata":
						porcentaje = 20;
						precio = tarifa - tarifa * porcentaje / 100;
						break;
				}
		break;
		case "Verano":
			switch(destino)
				{
					case "Bariloche":
						porcentaje = 20;
						precio = tarifa - tarifa * porcentaje / 100;
						break;
					case "Cataratas":
					case "Cordoba":
						porcentaje = 10;
						precio = tarifa + tarifa * porcentaje / 100;	
						break;
					case "Mar del plata":
						porcentaje = 20;
						precio = tarifa - tarifa * porcentaje / 100;
						break;
				}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						porcentaje = 10;
						precio = tarifa + tarifa * porcentaje / 100;	
						break;
					case "Cordoba":
						precio = tarifa;
						break;
				}
			break;
	}
	alert(precio);
*/