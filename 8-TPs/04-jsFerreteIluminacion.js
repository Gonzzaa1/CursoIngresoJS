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
    var precioFinal;
    var descuento;
    var precio = 35;

    canLamp = document.getElementById("txtIdCantidad").value;
    canLamp = parseInt(canLamp);
    
    empresa = document.getElementById("Marca").value;

    precioFinal = precio * canLamp;

    if(canLamp > 0 && canLamp < 3)
    {
        descuento;
    }
    else
    {
        if(canLamp == 3)
        {
            switch(empresa)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;    
            }

        }
        else
        {
            if(canLamp == 4)
            {
                switch(empresa)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                        break;
                    default:
                        descuento = 20;    
                }
            }
            else
            {
                if(canLamp == 5)
                {
                    switch(empresa)
                    {
                        case "ArgentinaLuz":
                            descuento = 40;
                            break;
                        default:
                            descuento = 30;    
                    }
                }
                else
                {                 
                    descuento = 50;
                }
            }
        }
    }
       
    precioFinal -= precioFinal * descuento / 100;
    //E
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 0.10;
        precioFinal += ingresosBrutos;
        alert("IIBB : Usted Pago $" + ingresosBrutos.toFixed(2));
    }
   
    document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);

   
}
/* Con swith/IF
    switch(canLamp)
    {
        case 1:
        case 2:
            descuento;
            break;
        case 3:
            descuento = 5;
            if(empresa == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if(empresa == "FelipeLamparas")
                {
                    descuento = 10;
                }
            }
        break; 
        case  4:
            descuento = 20;
            if(empresa == "ArgentinaLuz" || empresa == "FelipeLamparas")
            {
                descuento = 25;
            }
            break; 
        case  5:
            descuento = 30;
            if(empresa == "ArgentinaLuz")
            {
                descuento = 40;
            }
            break;
        default:
            descuento = 50;
    }
    */
/* CON IF
    //A
    if(canLamp >= 6)
    {
        descuento = 50;
    }
    else
    {
       //B
        if(canLamp == 5)
        {
            descuento = 30;

            if(empresa == "ArgentinaLuz")
            {
                descuento = 40;
            }
        }
        //C
        if(canLamp == 4)
        {
            descuento = 20;

            if(empresa == "ArgentinaLuz" || empresa == "FelipeLamparas")
            {
                descuento = 25;
            }
        }
        //D
        if(canLamp == 3)
        {
            descuento = 5;

            if(empresa == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if(empresa == "FelipeLamparas")
                {
                    descuento = 10;
                }
            }
        }
    }
 */
/* Con switch

 if(canLamp > 0)
    {
        switch(canLamp)
        {
            case 1:
            case 2:
                descuento;
                break;
            case 3:
                switch(empresa)
                {
                    case "ArgentinaLuz":
                        descuento = 15;
                        break;
                    case "FelipeLamparas":
                        descuento = 10;
                        break;
                    default:
                        descuento = 5;    
                }
                break; 
            case  4:
                switch(empresa)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                        break;
                    default:
                        descuento = 20;    
                }
                break;
            case  5:
                switch(empresa)
                {
                    case "ArgentinaLuz":
                        descuento = 40;
                        break;
                    default:
                        descuento = 30;    
                }
                break;
            default:
                descuento = 50;
        }
    }
*/
