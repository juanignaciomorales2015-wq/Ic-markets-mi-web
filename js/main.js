const BROKER_NOMBRE = "IC Markets Demo";
const APALANCAMIENTO_MAX = 500;

let saldo = 1000;
let operacionesRealizadas = 0;

console.log("Broker cargado:", BROKER_NOMBRE);
console.log("Saldo inicial:", saldo);


let operaciones = [
  "Compra EUR/USD",
  "Venta GBP/USD",
  "Compra XAU/USD"
];

console.log("Operaciones disponibles:", operaciones);

function iniciarSimulacion() {
  let nombreUsuario = prompt("Ingrese su nombre:");
  let confirmar = confirm("¿Desea iniciar la simulación de trading?");

  if (confirmar) {
    alert("Bienvenido " + nombreUsuario);
  } else {
    alert("Simulación cancelada");
  }
}
iniciarSimulacion();

function ejecutarOperacion() {
  alert("Ejecutando operación: ");
  operacionesRealizadas++;
  saldo -= 50;

  console.log("Operación ejecutada:");
  console.log("Operaciones realizadas:", operacionesRealizadas);
  console.log("Saldo actual:", saldo);
}
ejecutarOperacion();

function verificarSaldo() {
  if (saldo > 0) {
    alert("Saldo disponible: $" + saldo);
  } else {
    alert("Saldo insuficiente. Cuenta quemada 😅");
  }
}
verificarSaldo();

console.log("Listado de operaciones:");

for (let i = 0; i < operaciones.length; i++) {
  console.log((i + 1) + " - " + operaciones[i]);
}



