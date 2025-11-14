// let num1 = 8
// let num2 = 9
// let num3 = 1

// console.log(num1 + num2 + num3);

// //Condicionales

// let edad = prompt("Ingrese su edad");

// if (edad == 18) {
//     console.log("Sos mayor de edad");
// }

// const password = 1234

// let passwordIngresado = prompt ('Ingrese su contraseÑa')

// while (password != passwordIngresado) {
// console.log("Contraseña incorrecta. Intentelo de nuevo");

// passwordIngresado = prompt ('Ingrese su contraseÑa');
    
// }

// console.log("ContraseÑa correcta");

// EJERCICIO BUCLE: IMPRIMIR 5 VECES SALIDO

// const saludo = "Hola Mundo"

// for (let i=0; i<5; i++){
// console.log("Hola Mundo");
// ;
// }

// console.log(resultado);

// EJERCICIO BUCLE: INGRESO DE USUARIO

// const usuarios = [
// {nombre: "Ana", edad: 10, aceptoTerminos: true},
// {nombre: "Facundo", edad: 30, aceptoTerminos: false},
// {nombre: "David", edad: 18, aceptoTerminos: true},
// {nombre: "Tomas", edad: 40, aceptoTerminos: false},
// ]

// for (let i = 0; i < usuarios.length; i++) {
//     if (usuarios[i].edad >= 18 && usuarios[i].aceptoTerminos) {
//         console.log(usuarios[i].nombre);
        
//     }
// //     const element = array[index];
    
// }

// let edad = prompt("Ingrese edad");
// let nombre = "Carlos";

// if (edad !== null && edad !== undefined) {
//   console.log(`Tienes ${edad} años`);
// } else {
//   if (nombre) {
//     console.log(`Bienvenido, ${nombre}`);
//   } else {
//     console.log("Información incompleta");
//   }
// }

// let valor2 = 0;
// let resultadoNullish = valor2  || "Valor predeterminado";

// console.log(resultadoNullish); 

//EJERCICIO BUCLES: SUMAR MENU

// const Menu = [
// {1: "Pizza", valor: 5000},
// {2: "Matambre", valor: 15000},
// {3: "Pollo", valor: 8000},
// {4: "Ensalada", valor: 4000},
// {5: "Salir"},
// ]

// let pedido = prompt('Solicite su Menu:\n 1. Pizza - $5000\n2. Matambre - $15000\n3: Pollo - $8000\n4: Ensalada - $4000\n5: Salir');
// pedido = parseInt(pedido);
// let total = 0;

// while (pedido != 5) {
// switch (pedido) {
//   case 1:
//   console.log( "Eligió Pizza - $5000");
//   total += 5000;
//     break;
//   case 2:
//   console.log("Eligió Matambre - $15000");
//   total += 15000;
//     break;
// case 3:
//   console.log("Eligió Pollo - $8000");
//   total += 8000;
//     break;
//   case 4:
//   console.log("Eligió Ensalada - $4000");
//   total += 4000;
//   break;
//   default:
//     console.log("Opción inválida");
    
// }
//   pedido = parseInt(prompt('Solicite su Menu:\n 1. Pizza - $5000\n2. Matambre - $15000\n3: Pollo - $8000\n4: Ensalada - $4000\n5: Salir'));
// }

// console.log("Gracias por su pedido. Total a pagar: $" + total);


// EJERCICIO FUNCION: CALCULAR PROMEDIO

// function calcularPromedio(nota1, nota2, nota3, nota4, nota5) {
// let suma = nota1 + nota2 + nota3 + nota4 + nota5;
// promedio = suma / 5
// return promedio
// };

// let nota1 = parseInt(prompt("Ingrese nota 1"));
// let nota2 = parseInt(prompt("Ingrese nota 2"));
// let nota3 = parseInt(prompt("Ingrese nota 3"));
// let nota4 = parseInt(prompt("Ingrese nota 4"));
// let nota5 = parseInt(prompt("Ingrese nota 5"));

// let resultado = calcularPromedio(nota1, nota2, nota3, nota4, nota5);
// alert("El promedio es: " + resultado);


// EJERCICO FUNCION FLECHA

// let suma = (nota1, nota2, nota3, nota4, nota5) => nota1 + nota2 + nota3 + nota4 + nota5;

// console.log(suma(5, 4, 3, 7, 4));

//EJERCICIO CREACION DE ARRAY DE OBJ

// const productos = [
// { id: 123,
//     nombre: "Remera Slack",
//     precio: 30000,
//     cantidad: 30,
//     subtotal: 4000,
// },
// {id: 124,
//     nombre: "Pantalon Slack",
//     precio: 80000,
//     cantidad: 30,
//     subtotal: 4000,
// },
// {id: 125,
//     nombre: "Cinta Slack",
//     precio: 120000,
//     cantidad: 30,
//     subtotal: 4000,
// },

// ];

// let carrito = 0

// for (let productos = 0; productos < array.length; productos++) {
//     const element = array productos];
    
// }


// class productos {
//     constructor(id, nombre, precio, stock, subtotal)

// {   this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     }

// describir() {
//         return `id: ${this.id}, nombre: ${this.nombre}, precio: ${this.precio}, stock: ${this.stock}`;
// }
// }

// const producto1 = new productos(123,"Remera", 25000, 20);
// const producto2 = new productos(124,"Buzo", 50000, 25);
// const producto3 = new productos(125,"Calza", 35000, 10);
// const producto4 = new productos(126,"Pantalon", 80000, 20);

// const productosArray = [producto1, producto2, producto3, producto4];


// function mostrarProductosDisponibles() {
//     let mensaje = "Productos disponibles:\n";
//     productosArray.forEach(producto => {
//         if (producto.stock > 0) {
//             mensaje += producto.describir() + "\n";
//         }
//     });
//     alert(mensaje);
// }


// let total = 0;
// const prendasAcumuladas = [];

// while (true) {
//     mostrarProductosDisponibles();
//     let pedido = parseInt(prompt('Elige tu prenda ideal:\n123. Remera Slack - $25.000\n124. Buzo Slack - $50.000\n125. Calza Slack - $35.000\n126. Pantalon Slack - $80.000\n5. Salir'));
    
//     if (pedido === 5) {
//         let confirmarSalida = confirm("¿Está seguro que quiere salir?");
//         if (confirmarSalida) break;
//         else continue;
//     }
//     // Buscar producto por ID
//     let productoSeleccionado = productosArray.find(p => p.id === pedido);
//     if (!productoSeleccionado) {
//         alert("Producto no encontrado. Intente nuevamente.");
//         continue;
//     }
//     if (productoSeleccionado.stock === 0) {
//         alert("Lo siento, este producto está agotado.");
//         continue;
//     }
//     let cantidad = parseInt(prompt(`¿Cuántas unidades de ${productoSeleccionado.nombre} desea comprar? (Stock disponible: ${productoSeleccionado.stock})`));
    
//     if (isNaN(cantidad) || cantidad <= 0) {
//         alert("Cantidad inválida. Intente nuevamente.");
//         continue;
//     }
//     if (cantidad > productoSeleccionado.stock) {
//         alert("Stock insuficiente para esa cantidad. Intente con una cantidad menor.");
//         continue;
//     }
//      let subtotal = productoSeleccionado.precio * cantidad;
//     productoSeleccionado.stock -= cantidad;
//     total += subtotal;
//     prendasAcumuladas.push(`${productoSeleccionado.nombre} x${cantidad} - $${subtotal}`);
//     alert(`Agregaste ${cantidad} x ${productoSeleccionado.nombre} al carrito. Subtotal: $${subtotal}`);
// }

// if (prendasAcumuladas.length > 0) {
//     alert(
//         "Gracias por su pedido.\n" +
//         "Sus prendas son:\n" + prendasAcumuladas.join("\n") + "\n" +
//         "Total a pagar: $" + total
//     );
// } else {
//     alert("No realizó ninguna compra.");
// }


// CALL STACK

function first() {
    console.log("Primera función");
    second();
    console.log("Primera función - Parte 2");
}

function second() {
    console.log("Segunda función");
}

first();










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

// class Prenda {
//   constructor(id, nombre, precio) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// const prendas = [
//   new Prenda(1, "Remera Slack Negra", 18000),
//   new Prenda(2, "Buzo Hoodie Slack", 80000),
//   new Prenda(3, "Jogger Slack Gris", 80000),
//   new Prenda(4, "Calza Slack", 50000),
// ];


// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// function agregarAlCarrito(id) {
//   const productoEnCarrito = carrito.find((prenda) => prenda.id === id);
//   if (productoEnCarrito) {
//     productoEnCarrito.cantidad++;
//   }
//   else{
//     const producto = prendas.find ((prenda) => prenda.id === id);
//     carrito.push({...producto, cantidad: 1});
//   }
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     mostrarCarrito();
// }

// function eliminarDelCarrito(id) {
//     const index = carrito.findIndex((prenda) => prenda.id === id);
//   if (index !== -1) {
//     carrito.splice(index, 1);
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     mostrarCarrito();
  
// }
// }

// function calcularTotal() {
//   const total = carrito.reduce((acc, prenda) => acc + prenda.precio * prenda.cantidad, 0);
//   totalTexto.textContent = `Total: $${total}`;
// }


// document.getElementById("finalizarCompra").addEventListener("click", finalizarCompra);

//   const lista = document.getElementById("lista-carrito");
//   const totalTexto = document.getElementById("total");

// // Muestra carrito y total
// function mostrarCarrito() {
//   lista.innerHTML = ""; // Limpia la lista anterior

//   carrito.forEach((prenda) => {
//     const item = document.createElement("li");
//     item.textContent = `${prenda.nombre} - $${prenda.precio*prenda.cantidad} - ${prenda.cantidad}`;
//     item.classList.add("item-carrito"); 

//     const botonEliminar = document.createElement ("button");
//     botonEliminar.textContent = "❌";
//     botonEliminar.classList.add("boton-eliminar");


//     botonEliminar.addEventListener("click", () => { eliminarDelCarrito(prenda.id);});

//   lista.appendChild(botonEliminar);
//   lista.appendChild(item);
  
//   });

//     totalCarrito.textContent = `Total: $${calcularTotal()}`;

// }

// const botones = document.querySelectorAll(".agregarAlCarrito");

// botones.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     const id = parseInt(boton.parentElement.id);
//     agregarAlCarrito(id);
//   });
// });

// // Agrega productos al carrito

// //Eliminar productos.


// // Finalizar compra
// function finalizarCompra() {
//   if (carrito.length === 0) {
//     alert("Tu carrito está vacío.");
//     return;
//   }

//   const numeroCompra = Date.now();
//   const compra = {
//     id: numeroCompra,
//     fecha: new Date().toLocaleString(),
//     productos: carrito,
//     total: carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0),
//   };

//   const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
//   historial.push(compra);
//   localStorage.setItem("historialCompras", JSON.stringify(historial));

//   carrito = [];
//   localStorage.setItem("carrito", JSON.stringify(carrito));
//   mostrarCarrito();
//   mostrarHistorial();

//   alert(`¡Compra finalizada! Número de compra: ${numeroCompra}`);
// }

// // Mostrar historial de compras
// function mostrarHistorial() {
//   const lista = document.getElementById("lista-historial");
//   const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
//   lista.innerHTML = "";

//   historial.forEach((compra) => {
//     const item = document.createElement("li");
//     item.innerHTML = `<strong>Compra #${compra.id}</strong> (${compra.fecha}) - Total: $${compra.total}`;
//     lista.appendChild(item);
//   });
// }

// function guardarEnLocalStorage(clave, valor) {sessionStorage.setItem("key", "value");
// }
// function leerDeLocalStorage(clave) { let data = sessionStorage.getItem("key");
// }

// // Mostrar carrito guardado al cargar la página
// mostrarCarrito();
// mostrarHistorial();

