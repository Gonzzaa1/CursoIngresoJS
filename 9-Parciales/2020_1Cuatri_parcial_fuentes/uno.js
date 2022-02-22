/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var tipoProducto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var controlador;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var cantidadAlcohol;
	var fabricanteAlcohol;
	var cantidadJabon;
	var contadorUnidades;

	controlador = 0;
	alcoholBarato = 0;
	cantidadJabon = 0;
	contadorUnidades = 0;


	
	while(controlador < 5)
	{
		tipoProducto = prompt("Ingrese el producto : barbijo / jabon / alcohol");

		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			alert("Producto ingresado incorrecto");
			tipoProducto = prompt("Reingrese el Producto");
		}

		precio = prompt("Ingrese el precio del producto");
		precio = parseInt(precio);

		while(precio < 100 || precio > 300)
		{
			alert("Precio ingresado fuera del rango valido");
			precio =  prompt("Por favor reingrese un precio valido del producto");
		}

		cantidad = prompt("Ingrese la cantidad del producto");
		cantidad = parseInt(cantidad);

		while(cantidad < 0 || cantidad > 1000)
		{
			alert("Cantidad de unidades invalidas");
			cantidad = prompt("Por favor reingrese una cantidad valida");
			cantidad = parseInt(cantidad);
		}
		
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");

		switch(tipoProducto)
		{
			case "alcohol":
				if(precio < alcoholBarato || controlador == 0)
				{
					alcoholBarato = precio;
					cantidadAlcohol = cantidad;
					fabricanteAlcohol = fabricante;
				}
				break;
			case "jabon":
				if(cantidad > 0)
					cantidadJabon += cantidad;
					break;	
			}
			
			
			controlador++;
		}
		mensajeA = "El precio del alcohol mas barato fue de $" + alcoholBarato;
		mensajeA += " la cantidad fue " + cantidadAlcohol + " y el fabricante es  " + fabricanteAlcohol;
		
		if(cantidadJabon>0)
		{
			mensajeC = "La cantidad de jabones en total es de: " + cantidadJabon;
		}
		else
		{
			mensajeC = "No ingreso ningun jabon";
		}

	alert(mensajeA);
	alert(mensajeC)
	//alert(alcoholBarato);
	/*while(controlador < 5)
	{
		tipoProducto = prompt("Ingrese el tipo de producto: ");

		while(tipoProducto != "barbijo" || tipoProducto != "jabon" || tipoProducto != "alcohol")
		{
			console.log(tipoProducto);
		}

	/*	precio = prompt("Ingrese el precio");
		precio = parseInt(precio);

		while(precio < 100 || precio > 300 )
		{
			precio = prompt("Reingrese el precio");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese la cantidad de unidades");
		cantidad = parseInt(cantidad);

		while(cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt("Reingrese la cantidad de unidades");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante");

		controlador++;
	}*/

}
