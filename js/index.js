let carrito = [];
const CARD_CONTAINER = document.getElementById("card-container");
const CONTAINER_CAJA = document.getElementById("seccion-contenedor");

const CONTADOR_CARRITO = document.querySelector("#contador-carrito");
CONTADOR_CARRITO.innerHTML = `${carrito.length}`
const BOTON_CARRITO = document.querySelector("#boton-carrito");
BOTON_CARRITO.addEventListener("click", mostrarCarrito);

async function cargarProductos() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/FGcardesigner/bikemarket-store/main/productos.json");
        // const response = await fetch("../productos.json");
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON. Código de error: ${response.status}`);
        }
        PRODUCTOS = await response.json();

        cargarCarritoDesdeLocalStorage();
        crearProductos();
        const BOTON_COMPRAR = document.querySelectorAll(".btn-comprar");
        BOTON_COMPRAR.forEach((boton, indice) => {
            boton.addEventListener("click", () => {
                agregarProductoAlCarrito(indice, PRODUCTOS);
            });
        });

    }
    catch (error) {
        console.error('Error al iniciar la aplicación:', error);
    }
}

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');

    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
        // Puedes realizar otras acciones relacionadas con la carga del carrito si es necesario
    }
}





function crearProductos() {
    PRODUCTOS.forEach(producto => {
        // Crea el elemento div dentro del bucle
        const div = document.createElement("div");
        // Establece la clase del div
        div.className = "col-lg-4 col-md-6 col-sm-12";

        // Establece el contenido HTML del div
        div.innerHTML = `
        <div class="card mt-5">
            <div class="card-img-container">
                <img class="card-img-top" src="./assets/img/${producto.img}">
            </div>
            <div class="card-body">
                <h3 class="cardTitle">${producto.nombre}</h3>
                <h4 class="cardText text-dark">${producto.caracteristicas}</h4>
                <p class="cardText text-dark">$${producto.precio}</p>
                <button class="btn btn-danger btn-comprar" type="button">Añadir al carrito</button>
            </div>
        </div>    
    `;

        // Agrega el div al contenedor una vez fuera del bucle
        CARD_CONTAINER.appendChild(div);
    });
}


function mostrarCarrito() {
    // Verifica si hay elementos en el carrito
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito de compras vacío',
            text: 'Agrega productos a tu carrito antes de revisarlo.',
            icon: 'info'
        });
        return;
    } else {
        // Construye el contenido HTML para SweetAlert2 con la información del carrito
        let contenidoHtml = "<div class='carrito-contenedor mx-auto'>";
        let total = 0;
        carrito.forEach((producto, index) => {
            contenidoHtml += `
                <div class='carrito-item'>
                    <div class="contenedor-carrito-imagen-min d-flex">
                        <img src='./assets/img/${producto.img}' class="carrito-imagen-min">
                    </div>
                    <div>
                    <p>${producto.nombre}</p>
                    </div>
                    <div class="d-flex gap-2 mx-4">
                        <div class="boton-restar"><i class=" bi bi-dash-circle"></i></div>
                        <span class="fw-bold">${producto.stock}</span>
                        <div class="boton-sumar"><i class="bi bi-plus-circle"></i></div>
                    </div>
                    <div><p>$${producto.precio}</p></div>
                    <div class="contenedor-botones-carrito">
                        <button class='carrito-eliminar'><i class="bi bi-trash3"></i></button>
                    </div>
                    
                </div>`;
            let sumaPrecio = producto.precio * producto.stock;
            total += sumaPrecio;
        });

        contenidoHtml += `</div>
            <div class="d-flex flex-column">
                <div class="d-flex justify-content-between border-bottom mt-2">
                    <p>Transporte</p>
                    <p>Gratis</p>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <p>Total</p>
                    <p>$${total}</p>
                </div>
            </div>`;

        Swal.fire({
            title: 'Carrito de compras',
            html: contenidoHtml,
            width: 600,
            showCloseButton: true,
            confirmButtonText: 'Continuar Compra',
            didRender: () => {
                // Agrega los event listeners después de que se renderiza la ventana modal
                const modal = Swal.getPopup();
                if (modal) {
                    modal.querySelectorAll('.boton-sumar').forEach((boton, indice) => {
                        boton.addEventListener("click", () => {
                            modificarStock(indice, 1);
                        });
                    });

                    modal.querySelectorAll('.boton-restar').forEach((boton, indice) => {
                        boton.addEventListener("click", () => {
                            modificarStock(indice, -1);
                        });
                    });

                    modal.querySelectorAll('.carrito-eliminar').forEach((boton, indice) => {
                        boton.addEventListener("click", () => {
                            eliminarProducto(indice);
                        });
                    });
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Lógica para continuar la compra
                // ...
            }
        });
    }
}


// Función para modificar el stock de un producto en el carrito
function modificarStock(indice, cantidad) {
    const producto = carrito[indice];

    // Verifica si la cantidad es positiva (sumar) o negativa (restar)
    if (cantidad > 0) {
        // Incrementa la cantidad y verifica si no supera el stock máximo

        if (producto.stock < PRODUCTOS.find(p => p.nombre === producto.nombre).stock) {
            carrito[indice].stock += cantidad;
            actualizarContadorCarrito();
        } else {

        }
    } else if (cantidad < 0) {
        // Decrementa la cantidad y verifica si no es menor que cero
        carrito[indice].stock += cantidad;
        actualizarContadorCarrito();
        if (carrito[indice].stock < 1) {
            eliminarProducto(indice);
        }
    }

    // Actualiza la visualización del carrito
    actualizarContadorCarrito();
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}

// Función para eliminar un producto del carrito
function eliminarProducto(indice) {
    carrito.splice(indice, 1);

    actualizarContadorCarrito();
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}

function agregarProductoAlCarrito(indice, arrayProductos) {
    const productoSeleccionado = arrayProductos[indice];
    const productoEnCarrito = carrito.find(p => p.nombre === productoSeleccionado.nombre);

    if (productoEnCarrito) {
        if (productoEnCarrito.stock < productoSeleccionado.stock) {
            // Si el producto ya está en el carrito, incrementa su cantidad en 1
            productoEnCarrito.stock += 1;
            actualizarContadorCarrito();
        } else {
            mostrarMensajeError("No hay más stock disponible para este producto.");
        }

    } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        const productoNuevo = {
            ...productoSeleccionado,
            stock: 1
        };
        carrito.push(productoNuevo);
        actualizarContadorCarrito();
    }
    guardarCarritoEnLocalStorage();

}

function mostrarMensajeError(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000, // Duración del mensaje en milisegundos
        gravity: "bottom", // Posición del mensaje (puedes usar "top", "bottom", "center")
        backgroundColor: "red", // Color de fondo del mensaje
        stopOnFocus: true, // Detener el temporizador al enfocarse en la página
    }).showToast();
}

function actualizarContadorCarrito() {
    let sumaProductosCarrito = 0;
    for (let i = 0; i < carrito.length; i++) {
        sumaProductosCarrito += carrito[i].stock;
    }
    CONTADOR_CARRITO.innerHTML = `${sumaProductosCarrito}`
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function handleScroll() {
    const HEADER = document.querySelector("#navBar");
    if (window.scrollY >= 100) {
        HEADER.classList.add("scrolled");
    } else {
        HEADER.classList.remove("scrolled");
    }
}


// Vincula la función handleScroll al evento de scroll en la ventana
window.addEventListener("scroll", handleScroll);
cargarProductos();