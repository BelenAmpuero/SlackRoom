
class Prenda {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}


const prendas = [
  new Prenda(1, "Remera Slack Mujer", 18000),
  new Prenda(2, "Buzo Alpes Slack", 80000),
  new Prenda(3, "Remera Slack Hombre", 18000),
  new Prenda(4, "Calza Slack", 50000),
  new Prenda(5, "Pantalon Desmontable", 80000),

];


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos() {
  const listaProductos = document.getElementById("lista-productos");
  listaProductos.innerHTML = "";

  prendas.forEach((prenda) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.id = prenda.id;


    const nombreImagen = prenda.nombre.toLowerCase().replaceAll(" ", "-");

    div.innerHTML = `
      <img src="./img/${nombreImagen}.png" alt="${prenda.nombre}" 
        onerror="this.src='img/sin-foto.jpg'">
      <h3>${prenda.nombre}</h3>
      <p>$${prenda.precio}</p>
      <button class="agregarAlCarrito">Agregar al carrito</button>
    `;

    listaProductos.appendChild(div);
  });

  activarBotones();
}


function activarBotones() {
  const botones = document.querySelectorAll(".agregarAlCarrito");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.parentElement.id);
      agregarAlCarrito(id);
    });
  });
}


function agregarAlCarrito(id) {
  const productoEnCarrito = carrito.find((prenda) => prenda.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    const producto = prendas.find((prenda) => prenda.id === id);
    carrito.push({ ...producto, cantidad: 1 });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarDelCarrito(id) {
  const productoEnCarrito = carrito.find((prenda) => prenda.id === id);
  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
    } else {
      const index = carrito.findIndex((prenda) => prenda.id === id);
      carrito.splice(index, 1);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}

function calcularTotal() {
  const total = carrito.reduce(
    (acc, prenda) => acc + prenda.precio * prenda.cantidad,
    0
  );
  totalTexto.textContent = `Total: $${total}`;
}


function finalizarCompra() {
  if (carrito.length === 0) {
    Swal.fire({
      title: "Tu carrito está vacío.",
      icon: "warning",
      draggable: true});
;
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

Swal.fire({
  title: `¡Compra finalizada!`,
  text: `Número de compra: ${numeroCompra}`,
  icon: "success",
  draggable: true
});
}


function mostrarHistorial() {
  const lista = document.getElementById("lista-historial");
  const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
  lista.innerHTML = "";

  historial.forEach((compra) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Compra #${compra.id}</strong> (${compra.fecha}) - Total: $${compra.total}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.addEventListener("click", () => {
      eliminarDelHistorial(compra.id);
    });

    item.appendChild(botonEliminar);
    lista.appendChild(item);
  });
}

function eliminarDelHistorial(id) {
  const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
  const index = historial.findIndex((compra) => compra.id === id);

  if (index !== -1) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: `¿Estás seguro que querés eliminar la compra #${id}?`,
      text: "Esta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        historial.splice(index, 1);
        localStorage.setItem("historialCompras", JSON.stringify(historial));
        mostrarHistorial();

        swalWithBootstrapButtons.fire({
          title: "Eliminado!",
          text: "Su compra se borró del historial.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Su compra está segura :)",
          icon: "error"
        });
      }
    });
  } 
} 

const lista = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");
document.getElementById("finalizarCompra").addEventListener("click", finalizarCompra);

function mostrarCarrito() {
  lista.innerHTML = "";

  carrito.forEach((prenda) => {
    const item = document.createElement("li");
    item.textContent = `${prenda.nombre} - $${prenda.precio * prenda.cantidad} - ${prenda.cantidad}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.addEventListener("click", () => eliminarDelCarrito(prenda.id));

    item.appendChild(botonEliminar);
    lista.appendChild(item);
  });

  calcularTotal();
}

mostrarProductos(); 
mostrarCarrito();
mostrarHistorial();

