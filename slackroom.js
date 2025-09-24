const prendas = {
remera: 18000,
buzo: 80000,
pantalon: 80000,
calza: 50000,
}

nombreUsuario = prompt("Ingrese su nombre:");

function saludo(nombreUsuario) {
    let mensaje = "¡Hola " + nombreUsuario + "! Bienvenido/a al simulador de prendas."
    alert(mensaje)
}


function cargarPedido(prendas) {

let pedido = prompt('Elige tu prenda ideal:\n 1. Remera Slack - $18.000\n2. Buzo Slack - $80.000\n3: Pantalon Slack - $80.000\n4: Calza Slack - $50.000\n5: Salir');
pedido = parseInt(pedido);

let total = 0;
const prendasAcumuladas = [];

while (true) {

pedido = parseInt(prompt('Elige tu prenda ideal:\n 1. Remera Slack - $18.000\n2. Buzo Slack - $80.000\n3: Pantalon Slack - $80.000\n4: Calza Slack - $50.000\n5: Salir'));

if (pedido === 5) {
let confirmarSalida = confirm("¿Está seguro que quiere salir?");
if (confirmarSalida) break;
else continue; 
}

switch (pedido) {
case 1:
console.log("Remera Slack - $" + prendas.remera);
total += prendas.remera;
prendasAcumuladas.push('Remera Slack');
    break;
case 2:
console.log("Buzo Slack - $" + prendas.buzo);
total += prendas.buzo;
prendasAcumuladas.push('Buzo Slack');
    break;
case 3:
console.log("Pantalon Slack - $" + prendas.pantalon);
total += prendas.pantalon;
prendasAcumuladas.push('Pantalon Slack');
    break;
case 4:
console.log("Calza Slack - $" + prendas.calza);
total += prendas.calza;
prendasAcumuladas.push('Calza Slack');
break;
default:
let seguirComprando = confirm("¿Desea volver al catalogo?");
if (!seguirComprando) {
    break;
}
}
}

alert(
"Gracias por su pedido, " + nombreUsuario + ".\n" +
"Sus prendas son: " + prendasAcumuladas.join(", ") + "\n" +
"Total a pagar: $" + total
);
}




saludo(nombreUsuario)
cargarPedido(prendas)
