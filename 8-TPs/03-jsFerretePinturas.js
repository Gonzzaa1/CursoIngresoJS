/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempF;
    var tempC;
    var mensaje;

    tempF = document.getElementById("txtIdTemperatura").value;
    tempF = parseFloat(tempF);

    tempC = (tempF - 32) / 1.8;

    mensaje = tempF + " grados Fahrenheit son "+ tempC.toFixed(2) + " grados Centigrados";

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var tempF;
    var tempC;
    var mensaje;

    tempC = document.getElementById("txtIdTemperatura").value;
    tempC = parseFloat(tempC);

    tempF = tempC * 1.8 + 32;

    mensaje = tempC + " grados Centigrados son "+ tempF.toFixed(2) + " grados Farenheit";

    alert(mensaje);
}
