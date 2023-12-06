let precioEfectivo=1000, interes=15/100, precioTarjeta, cuotas, precioDescuento, continuar, formaDePago;

function calcularPrecio(cuotas) {
    if (cuotas === 3){
        precioTarjeta = precioEfectivo + precioEfectivo*interes;
        alert(`el precio final en 3 cuotas seria de: ${precioTarjeta} y el valor de cada cuota seria de: ${precioTarjeta/3}`);
    }else if (cuotas === 6) {
        precioTarjeta = precioEfectivo + precioEfectivo*interes;
        alert(`el precio final en 6 cuotas seria de: ${precioTarjeta} y el valor de cada cuota seria de: ${precioTarjeta/6}`);
    }else if (cuotas === 12) {
        precioTarjeta = precioEfectivo + precioEfectivo*interes;
        alert(`el precio final en 12 cuotas seria de: ${precioTarjeta} y el valor de cada cuota seria de: ${precioTarjeta/12}`);
    }else {
        alert("el numero de cuotas es invalido, intente nuevamente");
    }
}

do{
    formaDePago = prompt("Abonaria con tarjeta de credito?(responda si o no)").toLowerCase();
    if (formaDePago === "si"){
        cuotas = parseInt (prompt("ingrese la cantidad de cuotas con que desea abonar (3, 6 o 12"));
        calcularPrecio(cuotas);
    }else {
        precioDescuento = precioEfectivo - precioEfectivo*interes;
        alert(`si abona en efectivo el precio final es de : ${precioDescuento}`);
    }
    continuar = prompt("desea consultar por otras opciones de pago?(responda si o no)");
}while(continuar === "si");
alert("gracias por tu consulta");

