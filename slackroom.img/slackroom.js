
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
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = ""; 

  prendas.forEach((prenda) => {
    const nombreImagen = prenda.nombre.toLowerCase().replaceAll(" ", "-");

    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `
      <div class="producto">
        <img src="./img/${nombreImagen}.png" alt="${prenda.nombre}">
        <h3>${prenda.nombre}</h3>
        <p>$${prenda.precio}</p>
        <button class="btn-carrito agregarAlCarrito" data-id="${prenda.id}">
          Agregar al carrito
        </button>
      </div>
    `;

    contenedor.appendChild(slide);
  });
}

function activarBotones() {
  const botones = document.querySelectorAll(".agregarAlCarrito");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.dataset.id);
      agregarAlCarrito(id);
    });
  });
}

mostrarProductos(); 
activarBotones();

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-main");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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

mostrarCarrito();
mostrarHistorial();

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});