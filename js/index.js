let interes=15/100, precioTarjeta, cuotas, precioDescuento, continuar, formaDePago;

function calcularPrecio(precioEfectivo, cuotas) {
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

function comprarProducto(precioEfectivo) {
    do{
        formaDePago = prompt("Abonaria con tarjeta de credito?(responda si o no)").toLowerCase();
        if (formaDePago === "si"){
            cuotas = parseInt (prompt("ingrese la cantidad de cuotas con que desea abonar (3, 6 o 12"));
            calcularPrecio(precioEfectivo, cuotas);
        }else {
            precioDescuento = precioEfectivo - precioEfectivo*interes;
            alert(`si abona en efectivo el precio final es de : ${precioDescuento}`);
        }
        continuar = prompt("desea consultar por otras opciones de pago?(responda si o no)");
    }while(continuar === "si");
    alert("gracias por tu consulta");
}

let productos= [
    {
        nombre: "Bicicleta urbana electrica Devron" ,
        precio: 2750,
        categoria: "Bicicleta urbana",
        stock: 5
    },
    {
        nombre: "Bicicleta urbana electrica Ecobike" ,
        precio: 3215,
        categoria: "Bicicleta urbana",
        stock: 8
    },
    {
        nombre: "Bicicleta urbana RoadForce" ,
        precio: 4800,
        categoria: "Bicicleta urbana",
        stock: 6
    },
    {
        nombre: "Bicicleta urbana electrica KTM" ,
        precio: 3450,
        categoria: "Bicicleta urbana",
        stock: 3
    },
    {
        nombre: "Bicicleta ROAD Berria" ,
        precio: 4600,
        categoria: "Bicicleta de ruta",
        stock: 4
    },
    {
        nombre: "Bicicleta Road Kross" ,
        precio: 5400,
        categoria: "Bicicleta de ruta",
        stock: 6
    },
    {
        nombre: "Bicicleta Road Moser" ,
        precio: 5760,
        categoria: "Bicicleta de ruta",
        stock: 3
    },
    {
        nombre: "Bicicleta urbana Monty" ,
        precio: 2100,
        categoria: "Bicicleta urbana",
        stock: 7
    },
    {
        nombre: "Bicicleta urbana Merida" ,
        precio: 2630,
        categoria: "Bicicleta urbana",
        stock: 2
    }
];

function filtrarPosicionPorNombre(array, nombreBuscado) {
    let posicion = [];
    array.forEach(function(producto, indice) {
        if (producto.nombre.toLowerCase().includes(nombreBuscado)) {
            posicion.push(indice);
            console.log(posicion)
        }
    });
    return posicion;
}

let nombreBuscado = prompt( "BIENVENIDO A BIKEMARKET\n que modelo de bicicleta está buscando? Seleccione el modelo de bicicleta que desea comprar: \n 1: bicicleta urbana electrica Devron - $2750 \n 2: Bicicleta urbana electrica Ecobike - $3215 \n 3: Bicicleta urbana RoadForce - $4800 \n 4: Bicicleta urbana electrica KTM - $3450 \n 5: Bicicleta ROAD Berria - 4600 \n 6: Bicicleta Road Kross - $5400 \n 7: Bicicleta Road Moser - $5760 \n 8: Bicicleta urbana Monty - $2100 \n 9: Bicicleta urbana Merida - $2630 ").toLowerCase();
let f = filtrarPosicionPorNombre(productos, nombreBuscado);

if (f === 999){
    alert ("el modelo ingresado no es correcto");
}else {
    alert(`el modelo disponible de la bicicleta es: ${productos[f].nombre} su valor es de: ${productos[f].precio}`);
comprarSi = prompt(`Desea comprar ${productos[f].nombre} responda si o no`).toLowerCase();
if (comprarSi === "si"){
    comprarProducto(productos[f].precio);
}else {
    alert ("Gracias por tu visita");
}
}






