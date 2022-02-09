/*
Lopez Gonzalo Javier
TP 4


4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var canLamp;
    var empresa;
    var ingresosBrutos;
    var precio = 35;

    canLamp = document.getElementById("txtIdCantidad").value;
    canLamp = parseInt(canLamp);
    
    empresa = document.getElementById("Marca").value;

    //A
    if(canLamp >= 6)
    {
        precio = precio * canLamp * 0.5;
    }
    else
    {
       //B
        if(canLamp == 5)
        {
            if(empresa == "ArgentinaLuz")
            {
                precio = precio * canLamp * 0.60;
            }
            else
            {
                precio = precio * canLamp * 0.70;
            }
        }
        //C
        if(canLamp == 4)
        {
            if(empresa == "ArgentinaLuz" || empresa == "FelipeLamparas")
            {
                precio = precio * canLamp * 0.75;
            }
            else
            {
                precio = precio * canLamp * 0.80;
            }
        }
        //D
        if(canLamp == 3)
        {
            if(empresa == "ArgentinaLuz")
            {
                precio = precio * canLamp * 0.85;
            }
            else
            {
                if(empresa == "FelipeLamparas")
                {
                    precio = precio * canLamp * 0.90;
                }
                else
                {
                    precio = precio * canLamp * 0.95;
                }
            }
        }
        if(canLamp < 3)
        {
            precio = precio * canLamp;
        }
    }
   //E
    if(precio > 120)
    {
        ingresosBrutos = precio * 0.10;
        precio = precio + ingresosBrutos;

        alert("IIBB : Usted Pago $" + ingresosBrutos.toFixed(2));
    }
    document.getElementById("txtIdprecioDescuento").value = precio.toFixed(2);
}