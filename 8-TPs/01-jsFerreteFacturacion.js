/*
Lopez Gonzalo Javier - DIV I
E/S TP1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
    var producto2;
    var producto3;
    var resultado;

    producto1 = document.getElementById('txtIdPrecioUno').value;
    producto2 = document.getElementById('txtIdPrecioDos').value;
    producto3 = document.getElementById('txtIdPrecioTres').value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    resultado = producto1 + producto2 + producto3;

    alert("El precio total es de $" + resultado);
    

}
function Promedio () 
{
	var producto1;
    var producto2;
    var producto3;
    var resultado;

    producto1 = document.getElementById('txtIdPrecioUno').value;
    producto2 = document.getElementById('txtIdPrecioDos').value;
    producto3 = document.getElementById('txtIdPrecioTres').value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    resultado = (producto1 + producto2 + producto3) / 3;

    alert("El promedio es de $" + resultado);
}
function PrecioFinal () 
{
	var producto1;
    var producto2;
    var producto3;
    var resultado;

    producto1 = document.getElementById('txtIdPrecioUno').value;
    producto2 = document.getElementById('txtIdPrecioDos').value;
    producto3 = document.getElementById('txtIdPrecioTres').value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    resultado = (producto1 + producto2 + producto3) * 1.21;

    alert("El precio final es de $" + resultado);
}