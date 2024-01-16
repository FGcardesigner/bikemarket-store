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
    let posicion = 999;
    array.forEach(function(producto, indice) {
        if (producto.nombre.toLowerCase().includes(nombreBuscado)) {
            posicion = indice;
        }
    });
    return posicion;
}

let nombreBuscado = prompt( "BIENVENIDO A BIKEMARKET\n Indique la marca de bicicleta que desea comprar: \n - Bicicleta urbana electrica Devron - $2750 \n - Bicicleta urbana electrica Ecobike - $3215 \n - Bicicleta urbana RoadForce - $4800 \n - Bicicleta urbana electrica KTM - $3450 \n - Bicicleta ROAD Berria - 4600 \n - Bicicleta Road Kross - $5400 \n - Bicicleta Road Moser - $5760 \n - Bicicleta urbana Monty - $2100 \n - Bicicleta urbana Merida - $2630 ").toLowerCase();
let indice = filtrarPosicionPorNombre(productos, nombreBuscado);

if (indice === 999){
    alert ("el modelo ingresado no es correcto");
}else {
    alert(`el modelo disponible de la bicicleta es: ${productos[indice].nombre} su valor es de: ${productos[indice].precio}`);
comprarSi = prompt(`Desea comprar ${productos[indice].nombre} responda si o no`).toLowerCase();
if (comprarSi === "si"){
    comprarProducto(productos[indice].precio);
}else {
    alert ("Gracias por tu visita");
}
}

// const CONTAINER_CAJA = document.getElementById("sectionContenedor");

// CONTAINER_CAJA.innerHTML = `
//                         <div class="container caja">
//                             <div class="row size">
//                                 <div class="col-lg-4 col-md-6 col-sm-12">
//                                     <div class="card">
//                                         <img src="./assets/img/avenida.jpg" class="card-img-top" alt="bicicleta urbana">
//                                         <div class="cardBody">
//                                             <h5 class="cardTitle">Bicicleta Urbana</h5>
//                                             <p class="cardText text-dark">Bicicleta urbana electrica".</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="col-lg-4 col-md-6 col-sm-12">
//                                 <div class="card">
//                                     <img src="./assets/img/d2-city.jpg" alt="bicicleta electrica urbana" class="card-img-top" alt="bicicleta urbana electrica">
//                                     <div class="cardBody">
//                                         <h5 class="cardTitle">Urbana Retro</h5>
//                                         <p class="cardText text-dark">bicicleta electrica urbana retro.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12">
//                                 <div class="card">
//                                     <img src="./assets/img/belador-hybrid-ltd-1.jpg" class="card-img-top" alt="bici belador carrera">
//                                     <div class="cardBody">
//                                         <h5 class="cardTitle">bicicleta trekking berria</h5>
//                                         <p class="cardText text-dark">bicicleta de montaña Berria.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12">
//                                 <div class="card">
//                                     <img src="./assets/img/escultura-400.jpg" class="card-img-top" alt="Road bike Merida">
//                                     <div class="cardBody">
//                                         <h5 class="cardTitle">Road bike Merida</h5>
//                                         <p class="cardText text-dark">bicicleta de ruta Merida.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12">
//                                 <div class="card">
//                                     <img src="./assets/img/road-force.jpg" class="card-img-top" alt="Road force merida ">
//                                     <div class="cardBody">
//                                         <h5 class="cardTitle">Road Force Merida</h5>
//                                         <p class="cardText text-dark">Bicicleta Road Force Merida.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12 size">
//                                 <div class="card">
//                                     <img src="./assets/img/corsa.jpg" class="card-img-top" alt="Bicicleta de ciudad corsa">
//                                     <div class="cardBody">
//                                         <h5 class="cardTitle">corsa city</h5>
//                                         <p class="cardText text-dark">Bicicleta de ciudad Corsa.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12 size">
//                                 <div class="card">
//                                     <img src="./assets/img/crossway-l-10-v.jpg" class="card-img-top" alt="Bicicleta de ciudad crossway">
//                                     <div class="cardBody">
//                                         <h5 class="cardTitle">Bicicleta Crossway</h5>
//                                         <p class="cardText text-dark">Bicicleta de ciudad Crossway.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12 size">
//                                 <div class="card">
//                                     <img src="./assets/img/evado-4-0.jpg" class="card-img-top" alt="Bicicleta de ciudad">
//                                     <div class="cardBody">
//                                         <h5 class="cardTitle">Bicicleta city</h5>
//                                         <p class="cardText text-dark">Bicicleta de ciudad.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>`
class Producto{
    constructor(nombre, precio,caracteristicas,img){
        this.nombre = nombre;
        this.precio = precio;
        this.caracteristicas = caracteristicas;
        this.img = img;
    }
}

const PROD1 = new Producto("Bicicleta urbana electrica Devron" ,2750, "Bicicleta urbana", "avenida.jpg");
const PROD2 = new Producto("Bicicleta urbana electrica Ecobike" ,3215, "Bicicleta urbana", "d2-city.jpg");
const PROD3 = new Producto("Bicicleta urbana RoadForce" ,4800, "Bicicleta urbana", "road-force.jpg");
const PROD4 = new Producto("Bicicleta urbana electrica KTM" ,3450, "Bicicleta urbana", "belador-hybrid-ltd-1.jpg");
const PROD5 = new Producto("Bicicleta ROAD Berria" ,4600, "Bicicleta de ruta", "escultura-400.jpg");
const PROD6 = new Producto("Bicicleta Road Kross" ,5400, "Bicicleta de ruta", "macina-fun-a510.jpg");
const PROD7 = new Producto("Bicicleta Road Moser" ,5760, "Bicicleta de ruta", "crossway-l-10-v.jpg");
const PROD8 = new Producto("Bicicleta urbana Monty" ,2100, "Bicicleta urbana", "evado-4-0.jpg");
const PROD9 = new Producto("Bicicleta urbana Merida" ,2600, "Bicicleta urbana", "corsa.jpg");

const arrayProductos = [PROD1,PROD2,PROD3,PROD4,PROD5,PROD6,PROD7,PROD8,PROD9];

const contenedorProductos =document.getElementById("contenedorProductos");

arrayProductos.forEach(producto =>{
    const div = document.createElement("div");

    div.className ="card";
    div.innerHTML =`
                <img class="card-img" src="${producto.img}">
                <div>
                    <h3>${producto.nombre}</h3>
                    <h4>${producto.caracteristicas}</h4>
                    <p>${producto.precio}</p>
                    <button>comprar</button>
                </div>
                `;
        contenedorProductos.appendChild(div);
})