class Prenda {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const prendas = [
  new Prenda(1, "Remera Slack Negra", 18000),
  new Prenda(2, "Buzo Hoodie Slack", 80000),
  new Prenda(3, "Jogger Slack Gris", 80000),
  new Prenda(4, "Calza Slack", 50000),
];


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



function agregarAlCarrito(id) {
  const productoEnCarrito = carrito.find((prenda) => prenda.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  }
  else{
    const producto = prendas.find ((prenda) => prenda.id === id);
    carrito.push({...producto, cantidad: 1});
  }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function eliminarDelCarrito(id) {
    const productoEnCarrito = carrito.find((prenda) => prenda.id === id);
  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad > 1){
    productoEnCarrito.cantidad--;
  }
    else{
    const index= carrito.findIndex((prenda) => prenda.id === id);
    carrito.splice(index, 1);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  }
}

function calcularTotal() {
  const total = carrito.reduce((acc, prenda) => acc + prenda.precio * prenda.cantidad, 0);
  totalTexto.textContent = `Total: $${total}`;
}

function eliminarHistorial(id){
  const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];

if (historial){
  const index = historial.findIndex()

}

}


document.getElementById("finalizarCompra").addEventListener("click", finalizarCompra);

  const lista = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");

// Muestra carrito y total
function mostrarCarrito() {
  lista.innerHTML = ""; // Limpia la lista anterior

  carrito.forEach((prenda) => {
    const item = document.createElement("li");
    item.textContent = `${prenda.nombre} - $${prenda.precio*prenda.cantidad} - ${prenda.cantidad}`;
    item.classList.add("item-carrito"); 

    const botonEliminar = document.createElement ("button");
    botonEliminar.textContent = "❌";
    botonEliminar.classList.add("boton-eliminar");


    botonEliminar.addEventListener("click", () => { eliminarDelCarrito(prenda.id);});

  item.appendChild(botonEliminar);
  lista.appendChild(item);
  
  });
  calcularTotal();
}

const botones = document.querySelectorAll(".agregarAlCarrito");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = parseInt(boton.parentElement.id);
    agregarAlCarrito(id);
  });
});


function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const numeroCompra = Date.now();
  const compra = {
    id: numeroCompra,
    fecha: new Date().toLocaleString(),
    productos: carrito,
    total: carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0),
  };

  const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
  historial.push(compra);
  localStorage.setItem("historialCompras", JSON.stringify(historial));

  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  mostrarHistorial();

  alert(`¡Compra finalizada! Número de compra: ${numeroCompra}`);
}

function mostrarHistorial() {
  const lista = document.getElementById("lista-historial");
  const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
  lista.innerHTML = "";

  historial.forEach((compra) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Compra #${compra.id}</strong> (${compra.fecha}) - Total: $${compra.total}`;
    lista.appendChild(item);

    const botonEliminar = document.createElement ("button");
    botonEliminar.textContent = "❌";
    botonEliminar.classList.add("boton-eliminar");


    botonEliminar.addEventListener("click", () => { eliminarDelHistorial(historial.id);});

  item.appendChild(botonEliminar);
  lista.appendChild(item);
  });
}

function guardarEnLocalStorage(clave, valor) {sessionStorage.setItem("key", "value");
}
function leerDeLocalStorage(clave) { let data = sessionStorage.getItem("key");
}

// Mostrar carrito guardado al cargar la página
mostrarCarrito();
mostrarHistorial();










// nombreUsuario = prompt("Ingrese su nombre:");

// function saludo(nombreUsuario) {
//     let mensaje = "¡Hola " + nombreUsuario + "! Bienvenido/a al simulador de prendas."
//     alert(mensaje)
// }


// function cargarPedido(prendas) {

// let pedido = prompt('Elige tu prenda ideal:\n 1. Remera Slack - $18.000\n2. Buzo Slack - $80.000\n3: Pantalon Slack - $80.000\n4: Calza Slack - $50.000\n5: Salir');
// pedido = parseInt(pedido);

// let total = 0;
// const prendasAcumuladas = [];

// while (true) {

// pedido = parseInt(prompt('Elige tu prenda ideal:\n 1. Remera Slack - $18.000\n2. Buzo Slack - $80.000\n3: Pantalon Slack - $80.000\n4: Calza Slack - $50.000\n5: Salir'));

// if (pedido === 5) {
// let confirmarSalida = confirm("¿Está seguro que quiere salir?");
// if (confirmarSalida) break;
// else continue; 
// }

// switch (pedido) {
// case 1:
// console.log("Remera Slack - $" + prendas.remera);
// total += prendas.remera;
// prendasAcumuladas.push('Remera Slack');
//     break;
// case 2:
// console.log("Buzo Slack - $" + prendas.buzo);
// total += prendas.buzo;
// prendasAcumuladas.push('Buzo Slack');
//     break;
// case 3:
// console.log("Pantalon Slack - $" + prendas.pantalon);
// total += prendas.pantalon;
// prendasAcumuladas.push('Pantalon Slack');
//     break;
// case 4:
// console.log("Calza Slack - $" + prendas.calza);
// total += prendas.calza;
// prendasAcumuladas.push('Calza Slack');
// break;
// default:
// let seguirComprando = confirm("¿Desea volver al catalogo?");
// if (!seguirComprando) {
//     break;
// }
// }
// }

// alert(
// "Gracias por su pedido, " + nombreUsuario + ".\n" +
// "Sus prendas son: " + prendasAcumuladas.join(", ") + "\n" +
// "Total a pagar: $" + total
// );
// }




// saludo(nombreUsuario)
// cargarPedido(prendas)



// CHEQUEO SI EL BOTON FUNCIONA
// botones.forEach((boton) => {
//   boton.addEventListener("click", () => {

//     // 1️⃣ Muestra qué botón fue clickeado
//     console.log("Se hizo clic en el botón:", boton);

//     // 2️⃣ Obtiene el id del div padre del botón
//     const id = parseInt(boton.parentElement.id);
//     console.log("El ID del producto clickeado es:", id);

//     // 3️⃣ Llama a la función para agregar ese producto
//     agregarAlCarrito(id);

//     // 4️⃣ Muestra el estado actual del carrito
//     console.log("Carrito actual:", carrito);
//   });
// });
versionanterior_slackroom.js