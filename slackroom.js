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

// Carga carrito guardado o arranca vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Captura todos los botones
const botones = document.querySelectorAll(".agregarAlCarrito");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = parseInt(boton.parentElement.id);
    agregarAlCarrito(id);
  });
});

// Agrega productos al carrito
function agregarAlCarrito(id) {
  const producto = prendas.find((prenda) => prenda.id === id);
  if (producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}

// Muestra carrito y total
function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalTexto = document.getElementById("total");

  lista.innerHTML = ""; // Limpia la lista anterior

  carrito.forEach((prenda) => {
    const item = document.createElement("li");
    item.textContent = `${prenda.nombre} - $${prenda.precio}`;
    lista.appendChild(item);
  });

  const total = carrito.reduce((acc, prenda) => acc + prenda.precio, 0);
  totalTexto.textContent = `Total: $${total}`;
}

// Finalizar compra
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
    total: carrito.reduce((acc, p) => acc + p.precio, 0),
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

// Mostrar historial de compras
function mostrarHistorial() {
  const lista = document.getElementById("lista-historial");
  const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
  lista.innerHTML = "";

  historial.forEach((compra) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Compra #${compra.id}</strong> (${compra.fecha}) - Total: $${compra.total}`;
    lista.appendChild(item);
  });
}

// Eventos
document.getElementById("finalizarCompra").addEventListener("click", finalizarCompra);

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
