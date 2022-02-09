/*
Lopez Gonzalo Javier - DIV I
TP 2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;
    var mensaje;


    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    alambre = ((largo + ancho) * 2) * 3;

    mensaje = "Se necesitan comprar " + alambre + " metros de alambre";

    alert(mensaje);
   
}
function Circulo () 
{
	var radio;
    var alambre;
    var mensaje;

    radio = document.getElementById('txtIdRadio').value;

    radio = parseInt(radio);

    alambre = (radio * Math.PI * 2) * 3;

    mensaje = "Se necesitan comprar " + alambre + " metros de alambre";

    alert(mensaje);


}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    var mensaje;


    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    cemento = 2 * area;
    cal = 3 * area;

    mensaje = "Para un contrapiso de " + area +"m2 se necesitan " + cemento + " bolsas de cemento y " + cal +" bolsas de cal";

    alert(mensaje);


}